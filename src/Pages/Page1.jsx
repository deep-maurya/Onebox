import React from 'react'
import { Layout } from '../Component/Layout'
import mainimage from "../assets/No_Message_illustration.png"
export const Page1 = () => {
  return (
    <>
    <Layout>
        <div className="items-center text-center p-5">
            <center><img className='w-auto mt-10' src={mainimage} alt="" /></center>
            <h1 className='text-2xl mt-5'>It’s the beginning of a legendary sales pipeline </h1>
            <p className='text-[#9E9E9E] mt-4'>When you have inbound E-mails <br/>you’ll see them here</p>
        </div>
    </Layout>
    </>
  )
}
