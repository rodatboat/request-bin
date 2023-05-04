export { onBeforeRender };


import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';
import fetch from 'node-fetch';

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

  
  const pageProps = {
      recentBins
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
