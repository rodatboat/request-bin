export { onBeforeRender };

import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";
import fetch from "node-fetch";

async function onBeforeRender(pageContext) {
  const { bid, rid } = pageContext.routeParams;
  const { reqData, reqIp } = pageContext;

  let binData = null;
  let requestData = null;

  let requestExists = false;
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
        data.data.requests.map((r, i) => {
          if (r.rid === rid) {
            requestExists = true;
            requestData = r;
          }
        });
      } else {
        throw RenderErrorPage({
          pageContext: {
            pageProps: {
              errorInfo: `Error fetching bin. ID:  ${bid}`,
              requestData: [],
              binData,
            },
            redirectTo: `/`,
          },
        });
      }
    });

  const body = JSON.stringify({
    ip: reqIp,
    path: reqData.path,
    method: reqData.method,
    headers: reqData.headers,
    query: reqData.query,
    params: reqData.params,
    raw_body: reqData.body,
  })

  if (!requestExists) {
    await fetch(
      import.meta.env.VITE_DB_URI +
      "/reqs/new?" +
      new URLSearchParams(
        {
          bid: bid,
        }
      ),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept":"*/*",
          "Accept-Encoding":"gzip, deflate, br",
          "Connection":"keep-alive"
        },
        body: body,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        throw RenderErrorPage({
          pageContext: {
            pageProps: {
              errorInfo: `Thanks for your request to ${data.data.request.bid}. ID:'${data.data.request.rid}'.`,
              requestData,
              binData,
            },
            redirectTo: `/${bid}`,
          },
        });
      });
  }

  // need to fix error when fetch from browser, it doesnt store headers etc.

  const pageProps = {
    bid,
    rid,
    requestData,
    binData,
  };
  return {
    pageContext: {
      pageProps,
    },
  };
}
