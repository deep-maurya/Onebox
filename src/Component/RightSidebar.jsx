import { Calendar, Mail, MailOpen, Send } from "lucide-react";
import React from "react";

export const RightSidebar = () => {
  return (
    <div className="lg:col-span-1 border dark:border-[#33383F]">
      <div className="">
        <h2 className="dark:bg-[#23272C] p-3 rounded-lg">Lead Details</h2>
        <div className="p-3">
            <p className="flex justify-between mb-2"> <span>Name</span> <span className="dark:text-[#B9B9B9]">Deepak</span> </p>
            <p className="flex justify-between mb-2"> <span>Contact No</span> <span className="dark:text-[#B9B9B9]">+54-9062827869</span> </p>
            <p className="flex justify-between mb-2"> <span>Email ID</span> <span className="dark:text-[#B9B9B9]">orlando@gmail.com</span> </p>
            <p className="flex justify-between mb-2"> <span>Linkedin</span> <span className="dark:text-[#B9B9B9]">linkedin.com/ <br /> in/timvadde/</span> </p>
            <p className="flex justify-between mb-2"> <span>Company Name</span> <span className="dark:text-[#B9B9B9]">Reachinbox</span> </p>
            
        </div>
      </div>

      <div className="mt-5">
        <h2 className="dark:bg-[#23272C] p-3 rounded-lg">Activities</h2>
        <div className="pl-10 pt-5">
            
            <h1>Campaign Name</h1>
            <ol class="relative mt-3 border-s border-gray-200 dark:border-gray-700">                  
                <li class="mb-10 ms-6">    
                    <div className="flex gap-5 ">
                        <Mail size={40} style={{marginLeft:"-45px",padding:"10px",borderRadius:"50%"}} className="dark:bg-[#41464B]"/>
                        <div className="">
                            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Step 1: Email</h3>
                            <span className="flex gap-2 items-center"> <Send size={12}/> Sent, 3rd Feb </span>
                        </div>
                    </div>        
                </li>
                <li class="mb-10 ms-6">    
                    <div className="flex gap-5 ">
                        <Mail size={40} style={{marginLeft:"-45px",padding:"10px",borderRadius:"50%"}} className="dark:bg-[#41464B]"/>
                        <div className="">
                            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Step 1: Email</h3>
                            <span className="flex gap-2 items-center"> <MailOpen size={12}/> Opened, 5th Feb </span>
                        </div>
                    </div>        
                </li>
                <li class="mb-10 ms-6">    
                    <div className="flex gap-5 ">
                        <Mail size={40} style={{marginLeft:"-45px",padding:"10px",borderRadius:"50%"}} className="dark:bg-[#41464B]"/>
                        <div className="">
                            <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Step 1: Email</h3>
                            <span className="flex gap-2 items-center"> <MailOpen size={12}/> Opened, 5th Feb </span>
                        </div>
                    </div>        
                </li>
            </ol>


        </div>
      </div>
    </div>
  );
};
