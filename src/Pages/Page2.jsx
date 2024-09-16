import React from 'react';
import { Layout } from '../Component/Layout';
import { ChevronDown, Plus, RefreshCcw, RefreshCwOff, Send } from 'lucide-react';
import mainimage from "../assets/No_Message_illustration.png";
import { LeftSidebar } from '../Component/LeftSidebar';
import { Middle } from '../Component/Middle';
import { RightSidebar } from '../Component/RightSidebar';

export const Page2 = () => {
  return (
    <>
      <Layout>
        <div className="mx-auto max-w-8xl">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <LeftSidebar/>
            <Middle/>
            <RightSidebar/>
          </div>
        </div>
      </Layout>
    </>
  );
};
