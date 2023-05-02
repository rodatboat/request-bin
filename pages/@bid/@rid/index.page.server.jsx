export { onBeforeRender };

import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";

async function onBeforeRender(pageContext) {
  const { bid, rid } = pageContext.routeParams;

  if (rid === null) {
    throw RenderErrorPage({
      pageContext: {
        pageProps: {
          errorInfo: `Error loading request. ID:'${rid}'.`,
        },
        // redirectTo: '/'
      },
    });
  }

  const requestData = {
    id:rid,
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
    body:"sdASD5sdjjJuj45x==",
    ip:"111.22.333.4",
    method:"GET",
    path:"/sample/fetch",

    createdAt: 1544827965
  };

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
    rid,
    requestData,
    binData
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
