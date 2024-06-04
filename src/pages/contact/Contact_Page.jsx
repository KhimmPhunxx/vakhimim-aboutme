import React from 'react'

export const Contact_Page = () => {
  return (
    <main className=' w-full'>
      <section className=' max-w-4xl mx-auto py-10 px-8 lg:px-0'>
        <h1 className='text-3xl font-bold text-gray-800'>Get in Touch</h1>
        <p className=' text-sm text-gray-500'>Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.</p>
        <form className='mt-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
              <label htmlFor='name' className='text-sm text-gray-800'>Name</label>
              <input type='text' id='name' className='w-full border rounded p-2 mt-1' />
            </div>
            <div>
              <label htmlFor='email' className='text-sm text-gray-800'>Email</label>
              <input type='email' id='email' className='w-full border rounded p-2 mt-1' />
            </div>
          </div>
          <div className='mt-5'>
            <label htmlFor='message' className='text-sm text-gray-800'>Message</label>
            <textarea name='message' id='message' cols='30' rows='5' className='w-full border rounded p-2 mt-1'></textarea>
          </div>
          <button className='bg-gray-800 text-white font-medium py-3 px-4 rounded mt-5 hover:bg-gray-700 duration-200'>Send Message</button>
        </form>

      </section>
    </main>
  )
}
