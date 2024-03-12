import React from 'react'

export const Contact = () => {
  return (
    <div className="wrapper-container bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
      <div className="lg:text-center">
      <p className='text-4xl font-bold text-blue-500 mt-[80px]'>Contact US</p>
        <p className="text-xl text-gray-600">Have questions or suggestions? We'd love to hear from you. Fill out the form below to get in touch.</p>
      </div>
      <div className="mt-8">
        <form action="#" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
