export { onBeforeRender };


import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';

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
  
  const pageProps = {
    bid,
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
