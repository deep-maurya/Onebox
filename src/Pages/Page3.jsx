import React from 'react';
import { Layout } from '../Component/Layout';
import { LeftSidebar } from '../Component/LeftSidebar';
import { RightSidebar } from '../Component/RightSidebar';
import { Middle2 } from '../Component/Middle2';

export const Page3 = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <LeftSidebar/>
            <Middle2/>
            <RightSidebar/>
          </div>
        </div>
      </Layout>
    </>
  );
};
