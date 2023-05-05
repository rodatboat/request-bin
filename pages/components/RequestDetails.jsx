import React, { useState } from "react";
import copy from 'copy-to-clipboard';
import dayjs from "dayjs";
import linkSvg from "/link.svg";
import deleteSvg from "/delete.svg";

const TableObject = ({ k = null, val = null }) => {
  const copyToClipboard = () => {
    let isCopy = copy(val)
  }
  return (
    <>
      <div className="flex flex-row h-8 items-center text-sm border-t table-object">
        <p className="basis-1/3 px-2 h-full flex items-center">{k}</p>
        <p onClick={copyToClipboard} className="basis-full px-2 border-l h-full inline-flex items-center text-secondary overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer">
          {String(val)}
          <img className="ml-1 w-3 hover:stroke-white" src={linkSvg} />
        </p>
      </div>
    </>
  );
};

export default function RequestDetails(pageProps) {
  const [expandHeaders, setExpandHeaders] = useState(false);
  const [expandParams, setExpandParams] = useState(true);
  const [expandQuery, setExpandQuery] = useState(true);
  const [expandBody, setExpandBody] = useState(true);

  const [optionsDialog, setOptionsDialog] = useState(true);

  const toggleHeaders = () => setExpandHeaders(!expandHeaders);
  const toggleQuery = () => setExpandQuery(!expandQuery);
  const toggleBody = () => setExpandBody(!expandBody);
  const toggleParams = () => setExpandParams(!expandParams);

  const copyToClipboard = (v) => {
    let isCopy = copy(v)
  }

  const deleteRequest = async () => {
    return fetch(import.meta.env.VITE_DB_URI + "/reqs?" + new URLSearchParams({
      bid: bid,
      rid: requestData.rid
    }), { method: "DELETE" }).then((res) => res.json())
      .then((data) => {
        if (data.success) {
          window.location.href = "/" + bid
        }
      });
  }

  const { bid = null, requestData } = pageProps;
  return (
    <div className="flex-1 flex flex-col w-full p-2 bg-gray/25 overflow-auto scrollbar-hide">
      <div className="border rounded flex-initial border-gray bg-black">
        <div className=" flex flex-row justify-between py-1 px-2 border-b border-gray text-secondary text-xs">
          <p className="">HTTP REQUEST</p>
          <div className="inline-flex gap-2">
            <p>{requestData.rid}</p>
            <p>{requestData.createdAt}</p>
          </div>
        </div>

        <div className="px-4 py-4 overflow-hidden">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-8">
              <div>
                <h2 className="text-secondary uppercase text-xs">METHOD</h2>
                <div className="font-medium text-sm">{requestData.method}</div>
              </div>

              <div>
                <h2 className="text-secondary uppercase text-xs">PATH</h2>
                <div className="font-medium text-md">{requestData.path.replace(`/${bid}`, "") + "?" + new URLSearchParams(
                  JSON.parse(requestData.query)
                ).toString()}</div>
              </div>
            </div>
            <div className="">
              <button onClick={deleteRequest} className='inline-flex items-center gap-1 font-medium text-sm border rounded px-3 py-1 text-secondary hover:text-white hover:border-white transition-all duration-150 ease-in-out'>
                <img className="w-[14px]" src={deleteSvg} />
                Delete
              </button>
            </div>
          </div>

          {requestData.headers ?
            <div className="mt-4">
              <h2 className="inline-flex gap-2 text-secondary uppercase text-xs mb-2">
                HEADERS
                <button onClick={toggleHeaders} className="text-xs self-center bg-gray text-secondary font-medium px-2 rounded-xl">
                  {expandHeaders ? "COLLAPSE" : "EXPAND"}
                </button>
                <p onClick={() => copyToClipboard(requestData.headers)} className="text-[10px] font-bold inline-flex items-center text-gray hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer">
                  COPY
                </p>
              </h2>
              <div className={`flex flex-col rounded ${expandHeaders ? "border" : ""} border-gray ${expandHeaders ? "" : "hidden"}`}>
                <div className="flex flex-row h-8 items-center text-sm table-object">
                  <p className="basis-1/3 px-2 h-full flex items-center text-secondary">
                    KEY
                  </p>
                  <p className="basis-full px-2 border-l h-full flex items-center text-secondary">
                    VALUE
                  </p>
                </div>
                {Object.entries(JSON.parse(requestData.headers)).map((q, i) => <TableObject key={i + q[1]} k={q[0]} val={q[1]} />)}

              </div>
            </div> : null}

          {requestData.query !== "{}" ?
            <div className="mt-4">
              <h2 className="inline-flex gap-2 text-secondary uppercase text-xs mb-2">
                QUERY
                <button onClick={toggleQuery} className="text-xs self-center bg-gray text-secondary font-medium px-2 rounded-xl">
                  {expandQuery ? "COLLAPSE" : "EXPAND"}
                </button>
                <p onClick={() => copyToClipboard(requestData.query)} className="text-[10px] font-bold inline-flex items-center text-gray hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer">
                  COPY
                </p>
              </h2>
              <div className={`flex flex-col rounded ${expandQuery ? "border" : ""} border-gray ${expandQuery ? "" : "hidden"}`}>
                <div className="flex flex-row h-8 items-center text-sm table-object">
                  <p className="basis-1/3 px-2 h-full flex items-center text-secondary">
                    KEY
                  </p>
                  <p className="basis-full px-2 border-l h-full flex items-center text-secondary">
                    VALUE
                  </p>
                </div>

                {Object.entries(JSON.parse(requestData.query)).map((q, i) => <TableObject key={i + q[1]} k={q[0]} val={q[1]} />)}

              </div>
            </div> : null}

          {requestData.body !== "{}" ?
            <div className="mt-4">
              <h2 className="inline-flex gap-2 text-secondary uppercase text-xs mb-2">
                BODY
                <button onClick={toggleBody} className="text-xs self-center bg-gray text-secondary font-medium px-2 rounded-xl">
                  {expandBody ? "COLLAPSE" : "EXPAND"}
                </button>
                <p onClick={() => copyToClipboard(requestData.body)} className="text-[10px] font-bold inline-flex items-center text-gray hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer">
                  COPY
                </p>
              </h2>
              <div className={`flex flex-col rounded ${expandBody ? "border" : ""} border-gray ${expandBody ? "" : "hidden"}`}>
                <div className="flex flex-row h-8 items-center text-sm table-object">
                  <p className="basis-1/3 px-2 h-full flex items-center text-secondary">
                    KEY
                  </p>
                  <p className="basis-full px-2 border-l h-full flex items-center text-secondary">
                    VALUE
                  </p>
                </div>

                {Object.entries(JSON.parse(requestData.body)).map((q, i) => <TableObject key={i + q[1]} k={q[0]} val={q[1]} />)}

              </div>
            </div> : null}

        </div>
      </div>
    </div>
  );
}
