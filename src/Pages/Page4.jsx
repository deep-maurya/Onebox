import React from 'react';
import { Layout } from '../Component/Layout';
import { LeftSidebar } from '../Component/LeftSidebar';
import { RightSidebar } from '../Component/RightSidebar';
import { Middle2 } from '../Component/Middle2';

export const Page4 = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto max-w-8xl" style={{position:"relative"}}>
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <LeftSidebar/>
            <Middle2/>
            <RightSidebar/>
          </div>
        </div>
        
        <div  className="bg-green-800 p-5" 
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "100" 
        }}>
          <div className="bg-[#141517] text-center rounded-3xl p-4" style={{width:"400px",height:"300px"}}>
            <div className="text-center text-3xl mb-5 mt-10">
              Are you Sure
            </div>
            <p>Your selected Email will be Deleted</p>
            <div className="flex justify-center gap-5 p-10">
              <button className='px-5 py-3 bg-[#25262B]'>
                Cancel
              </button>
              <button className='px-5 py-3 bg-[#FA5252]'>
                Delete
              </button>
            </div>
          </div>
        </div>
        
      </Layout>
    </>
  );
};
