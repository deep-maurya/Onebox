import { ChevronDown, Ellipsis } from 'lucide-react'
import React from 'react'

export const Middle = () => {
  return (
    <div className="lg:col-span-3 w-full dark:border-[#33383F] lg:min-h-min">
        <div className="p-3 border-b dark:border-b-[#F8FAFC33]">
            <div className="flex justify-between items-center">
                <div className="">
                    <h3 className='font-bold'>Orlando  <br /> <span className='dark:text-[#F8FAFC33]'> <small>orladom@gmail.com</small> </span> </h3>
                </div>
                <div className="flex gap-3 items-center">
                <button className='px-3 py-2 dark:bg-[#1F1F1F] text-sm items-center flex gap-1'>Meeting Completed <ChevronDown size={12}/> </button>
                    <button className='px-3 py-2 dark:bg-[#1F1F1F] text-sm items-center flex gap-1'>Move <ChevronDown size={12}/> </button>
                    <button className='px-3 py-2 dark:bg-[#1F1F1F] text-sm'> <Ellipsis/> </button>
                </div>
            </div>
        </div>
        <div className="p-3">
            <div className="border-b dark:border-b-[#F8FAFC33] text-center">
                <span>Today</span>
            </div>
            <div className="msg_box mt-3 border-b dark:border-[#F8FAFC33] rounded-md p-5 border">
                <div className="flex justify-between items-start">
                    <h1>New Product Launch</h1>
                    <span className='text-zinc-500'> <small>20 june 2022 9:16 PM</small> </span>
                </div>
                <span className='text-zinc-500'> <small>from : jeanne@icloud.com cc : lennon.j@mail.com</small> </span>
                <br />
                <span className='text-zinc-500'> <small>to : lennon.j@mail.com</small> </span>
                <div className="messege mt-8">
                    <p>Hi FIRST_NAME, <br /> <br />
                    I would like to introduce you to SaaSgrow, a productized design service specifically tailored for saas startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
