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

  const response = await fetch(import.meta.env.VITE_DB_URI+"/bins?" + new URLSearchParams({
    bid: bid,
}))
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    });

  //   console.log(await response)

  const binData = {
    last_req: 1544827965,
    requests:[
      {
        id:"2PDrUuiuxSOkTRIlIpARPoPKhph",
        bid: bid,
    
        headers: {
          "host": "ensqpz7mtbc9.x.pipedream.net",
          "x-amzn-trace-id": "Root=1-64509490-1af2343a2d6a95ed52ee7bfa",
          "accept": "application/json, text/plain, */*",
        },
        query:{
          "id":"ddc5f0ed-60ff-4435-abc5-590fafe4a771",
          "timestamp":"1544827965",
          "event":"delivered"
        },
        ip:"111.22.333.4",
        method:"GET",
        path:"/sample/fetch",
    
        createdAt: 1544827965
      }
    ]
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
