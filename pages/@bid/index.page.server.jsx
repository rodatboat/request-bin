export { onBeforeRender };


import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';
import fetch from 'node-fetch';

async function onBeforeRender(pageContext) {
  const { bid } = pageContext.routeParams;

  if (bid === null) {
    throw RenderErrorPage({
      pageContext: {
        pageProps:{
          errorInfo: `Error loading bin. ID:'${bid}'.`,
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
          bin:data.data.bin,
          requests:data.data.requests
        }
      }
    });

  
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
