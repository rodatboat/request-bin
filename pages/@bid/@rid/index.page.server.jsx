export { onBeforeRender };

import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";
import fetch from "node-fetch";

async function onBeforeRender(pageContext) {
  const { bid, rid } = pageContext.routeParams;
  const { reqData, reqIp } = pageContext;

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
          bin:data.data.bin,
          requests:data.data.requests
        }
        data.data.requests.map((r, i) => {
          if (r.rid === rid) {
            requestExists = true;
            requestData = r;
          }
        });
      }
    });

    const body = reqData.method === "GET" ? null : JSON.stringify({
      ip:reqIp,
      path: reqData.path,
      method: reqData.method,
      headers: reqData.headers,
      query: reqData.query,
      params: reqData.params,
      body: JSON.stringify(reqData.body),
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
          headers: reqData.headers,
          body: body,
        }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
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
