import React, { useEffect } from "react";

export { Page };

function Page(pageContext) {
  const { is404, errorInfo } = pageContext;

  useEffect(() => {
    console.log(pageContext);
  }, []);
  if (is404) {
    return (
      <>
        <div className="py-16 mt-14 text-center">
          <h1>404 Page Not Found</h1>
          <p>{errorInfo?errorInfo:"This page could not be found."}</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="py-16 mt-14 text-center">
          <h1>500 Internal Server Error</h1>
          <p>Something went wrong.</p>
        </div>
      </>
    );
  }
}
