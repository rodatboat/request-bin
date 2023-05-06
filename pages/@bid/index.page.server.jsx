export { onBeforeRender };


import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';
import fetch from 'node-fetch';
import dayjs from 'dayjs';

async function onBeforeRender(pageContext) {
  const { bid } = pageContext.routeParams;

  if (bid === null) {
    throw RenderErrorPage({
      pageContext: {
        pageProps: {
          errorInfo: `Error loading bin. ID:  ${bid}`,
        },
        // redirectTo: '/'
      }
    })
  }

  let binData = null;

  await fetch(
    import.meta.env.VITE_DB_URI +
    "/bins?" +
    new URLSearchParams({
      bid: bid,
    })
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        binData = {
          bin: data.data.bin,
          requests: data.data.requests
        }
      } else {
        throw RenderErrorPage({
          pageContext: {
            pageProps: {
              errorInfo: `Error loading bin. ID:  ${bid}`,
            },
            redirectTo: '/'
          }
        })
      }
    });

  binData.requests = binData.requests.map((r) => {
    return ({
      ...r,
      createdAt: dayjs(r.createdAt).format(
        "MM/DD/YY HH:mm:ss"
      )
    })
  });

  binData.bin = {
    ...binData.bin,
    last_req:dayjs(binData.bin.last_req).format("MM/DD/YY HH:mm:ss")
  }


  const pageProps = {
    bid,
    binData
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
