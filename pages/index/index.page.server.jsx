export { onBeforeRender };


import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';
import fetch from 'node-fetch';
import dayjs from 'dayjs';

async function onBeforeRender(pageContext) {
  let recentBins = null;

  await fetch(
    import.meta.env.VITE_DB_URI +
      "/bins/recent"
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        recentBins = data.data.recent;
      } else {
        recentBins = []
      }
    });

    recentBins = recentBins.map((r) => {
      return ({
        ...r,
        last_req: dayjs(r.last_req).format(
          "MM/DD/YY HH:mm:ss"
        )
      })
    });

  
  const pageProps = {
      recentBins
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
