export { onBeforeRender };


import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';

async function onBeforeRender(pageContext) {
  const { bid, rid } = pageContext.routeParams;

  if (rid === null) {
    throw RenderErrorPage({
      pageContext: {
        pageProps:{
          errorInfo: `Error loading request. ID:'${rid}'.`,
        },
        // redirectTo: '/'
      }
    })
  }
  
  const pageProps = {
    bid,
    rid
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
