import React, { useState } from "react";

const TableObject = ({ k=null, val=null }) => {
  return (
    <>
      <div className="flex flex-row h-8 items-center text-sm border-t table-object">
        <p className="basis-1/3 px-2 h-full flex items-center">{k}</p>
        <p className="basis-full px-2 border-l h-full flex items-center text-secondary">
          {val}
        </p>
      </div>
    </>
  );
};

export default function RequestDetails(pageProps) {
  const [expandHeaders, setExpandHeaders] = useState(false);
  const [expandQuery, setExpandQuery] = useState(true);

  const toggleHeaders = () => setExpandHeaders(!expandHeaders);
  const toggleQuery = () => setExpandQuery(!expandQuery);

  const { bid = null, requestData } = pageProps;
  return (
    <div className="flex-1 flex flex-col w-full p-2 bg-gray/25">
      <div className="border rounded flex-initial border-gray bg-black">
        <div className=" flex flex-row justify-between py-1 px-2 border-b border-gray text-secondary text-xs">
          <p className="">HTTP REQUEST</p>
          <div className="inline-flex gap-2">
            <p>{requestData.id}</p>
            <p>{requestData.createdAt}</p>
          </div>
        </div>

        <div className="px-4 py-4 overflow-hidden">
          <div className="flex flex-row gap-8">
            <div>
              <h2 className="text-secondary uppercase text-xs">METHOD</h2>
              <div className="font-medium text-sm">{requestData.method}</div>
            </div>

            <div>
              <h2 className="text-secondary uppercase text-xs">PATH</h2>
              <div className="font-medium text-md">{requestData.path}</div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="inline-flex gap-2 text-secondary uppercase text-xs mb-2">
              HEADERS
              <button onClick={toggleHeaders} className="text-xs self-center bg-gray text-secondary font-medium px-2 rounded-xl">
                {expandHeaders ? "COLLAPSE":"EXPAND"}
              </button>
              </h2>
            <div className={`flex flex-col rounded ${expandHeaders ? "border" : ""} border-gray [&>.table-object]:${expandHeaders ? "" : "hidden"}`}>
              <div className="flex flex-row h-8 items-center text-sm table-object">
                <p className="basis-1/3 px-2 h-full flex items-center text-secondary">
                  KEY
                </p>
                <p className="basis-full px-2 border-l h-full flex items-center text-secondary">
                  VALUE
                </p>
              </div>

              {Object.entries(requestData.headers).map((q, i)=><TableObject k={q[0]} val={q[1]} />)}

            </div>
          </div>

          <div className="mt-4">
            <h2 className="inline-flex gap-2 text-secondary uppercase text-xs mb-2">
              QUERY
              <button onClick={toggleQuery} className="text-xs self-center bg-gray text-secondary font-medium px-2 rounded-xl">
                {expandQuery ? "COLLAPSE":"EXPAND"}
              </button>
              </h2>
            <div className={`flex flex-col rounded ${expandQuery ? "border" : ""} border-gray [&>.table-object]:${expandQuery ? "" : "hidden"}`}>
              <div className="flex flex-row h-8 items-center text-sm table-object">
                <p className="basis-1/3 px-2 h-full flex items-center text-secondary">
                  KEY
                </p>
                <p className="basis-full px-2 border-l h-full flex items-center text-secondary">
                  VALUE
                </p>
              </div>

              {Object.entries(requestData.query).map((q, i)=><TableObject k={q[0]} val={q[1]} />)}

            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-secondary uppercase text-xs mb-1">BODY</h2>
            <h1 className="font-medium text-sm">
              {requestData.body}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
