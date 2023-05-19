import React from "react"
const ModalCreateProducts = ({closeModal}) => {
  return (
    <>
    <form >
     <div className='bg-transparent fixed inset-0 z-50 '>
      <div className='flex h-screen justify-center items-center'>
        <div className='flex flex-col justify-center bg-white shadow-3xl  py-6 px-24 border-4 border-orange-200 rounded-xl w-[31rem] h-[31rem]'>
          <div className='flex justify-end'><button type='button' className=' border-none text-xl cursor-pointer' onClick={()=> {closeModal(false)}}>X</button></div>
          <div className='inline-block text-center mb-5 text-3xl'>
            <h1>Add your product</h1>
            </div>
          <div className='flex flex-col justify-center text-lg '>
            <div className='w-3/4 mb-6'>
              <input   type="text" placeholder='NAME :' id='name' className=" py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"/>
            </div>
            <div className='w-3/4 mb-6'>
              <input  type="number" placeholder='PRICE :' id='price' className=" py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"/>
            </div>
            <div className='w-3/4'>
              <input type="text" placeholder='CATEGORY:' id='category' required className=" py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"/>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <button className='m-10 border-none text-2xl cursor-pointer rounded px-4 py-2 text-black font-semibold  bg-green-400'>Agregar</button>
          </div>
        </div>
      </div>
     </div>
     </form>
    </>
  )
}

export default ModalCreateProducts
