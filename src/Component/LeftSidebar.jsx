import { ChevronDown, RefreshCcw, Send } from 'lucide-react'
import React from 'react'

export const LeftSidebar = () => {
  return (
    <div className="lg:col-span-1 border p-3 dark:border-[#33383F]">
              <div className=" border-b dark:border-b-white/30 pb-4">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl">All Inbox(s)</h1>
                  <RefreshCcw />
                </div>
                <p>
                  25/25 <span className="text-[#7F7F7F]">Inbox Selected</span>
                </p>
                <input
                  className="flex mt-3 h-8 w-full rounded-md border border-black/30 dark:border-white/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600"
                  placeholder="Search"
                />
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center gap-1">
                    <span className="text-violet-800 px-2 rounded-full py-1.5 dark:bg-[#222426] bg-[#ECECEC]">
                      26
                    </span>
                    New Replies
                  </div>
                  <div className="flex gap-1">
                    Newest <ChevronDown />
                  </div>
                </div>
              </div>

              <div className="border-b dark:border-b-white/30 pb-4">
                <div className="flex justify-between items-start mt-4">
                  <h3>
                    Beata@gmail.com <br />
                    <span style={{ fontSize: "12px" }}>
                      I've tried a lot and .
                    </span>
                  </h3>
                  <p className="text-[#919EAB]">
                    <small>Mar 7</small>
                  </p>
                </div>
                <div className="mt-2 flex gap-3">
                  <button className="rounded-full flex gap-1 items-center px-3 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span><small className="text-green-500"> Interested</small>
                  </button>
                  <button className="flex gap-2 items-center rounded-full px-2 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <Send size={15} /> <small>Campaign Name</small>
                  </button>
                </div>
              </div>

              <div className="border-b dark:border-b-white/30 pb-4">
                <div className="flex justify-between items-start mt-4">
                  <h3>
                    Beata@gmail.com <br />
                    <span style={{ fontSize: "12px" }}>
                      I've tried a lot and .
                    </span>
                  </h3>
                  <p className="text-[#919EAB]">
                    <small>Mar 7</small>
                  </p>
                </div>
                <div className="mt-2 flex gap-3">
                  <button className="rounded-full flex gap-1 items-center px-3 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span><small className="text-blue-500"> Closed</small>
                  </button>
                  <button className="flex gap-2 items-center rounded-full px-2 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <Send size={15} /> <small>Campaign Name</small>
                  </button>
                </div>
              </div>

              <div className="border-b dark:border-b-white/30 pb-4">
                <div className="flex justify-between items-start mt-4">
                  <h3>
                    Beata@gmail.com <br />
                    <span style={{ fontSize: "12px" }}>
                      I've tried a lot and .
                    </span>
                  </h3>
                  <p className="text-[#919EAB]">
                    <small>Mar 7</small>
                  </p>
                </div>
                <div className="mt-2 flex gap-3">
                  <button className="rounded-full flex gap-1 items-center px-3 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span><small className="text-green-500"> Interested</small>
                  </button>
                  <button className="flex gap-2 items-center rounded-full px-2 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <Send size={15} /> <small>Campaign Name</small>
                  </button>
                </div>
              </div>

              <div className="border-b dark:border-b-white/30 pb-4">
                <div className="flex justify-between items-start mt-4">
                  <h3>
                    Beata@gmail.com <br />
                    <span style={{ fontSize: "12px" }}>
                      I've tried a lot and .
                    </span>
                  </h3>
                  <p className="text-[#919EAB]">
                    <small>Mar 7</small>
                  </p>
                </div>
                <div className="mt-2 flex gap-3">
                  <button className="rounded-full flex gap-1 items-center px-3 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <span className="w-2 h-2 bg-violet-500 rounded-full"></span><small className="text-violet-500"> Interested</small>
                  </button>
                  <button className="flex gap-2 items-center rounded-full px-2 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <Send size={15} /> <small>Campaign Name</small>
                  </button>
                </div>
              </div>

              <div className="border-b dark:border-b-white/30 pb-4">
                <div className="flex justify-between items-start mt-4">
                  <h3>
                    Beata@gmail.com <br />
                    <span style={{ fontSize: "12px" }}>
                      I've tried a lot and .
                    </span>
                  </h3>
                  <p className="text-[#919EAB]">
                    <small>Mar 7</small>
                  </p>
                </div>
                <div className="mt-2 flex gap-3">
                <button className="rounded-full flex gap-1 items-center px-3 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span><small className="text-yellow-500"> Interested</small>
                  </button>
                  <button className="flex gap-2 items-center rounded-full px-2 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <Send size={15} /> <small>Campaign Name</small>
                  </button>
                </div>
              </div>

              <div className="border-b dark:border-b-white/30 pb-4">
                <div className="flex justify-between items-start mt-4">
                  <h3>
                    Beata@gmail.com <br />
                    <span style={{ fontSize: "12px" }}>
                      I've tried a lot and .
                    </span>
                  </h3>
                  <p className="text-[#919EAB]">
                    <small>Mar 7</small>
                  </p>
                </div>
                <div className="mt-2 flex gap-3">
                  <button className="rounded-full flex gap-2 items-center px-3 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <small className="text-green-500">Interested</small>
                  </button>
                  <button className="flex gap-2 items-center rounded-full px-2 bg-[#F0F0F0] dark:bg-[#2D3833]">
                    <Send size={15} /> <small>Campaign Name</small>
                  </button>
                </div>
              </div>


            </div>
  )
}
