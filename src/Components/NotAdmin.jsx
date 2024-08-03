import React from 'react'

const NotAdmin = () => {
  return (
    <>
       <div className="not-admin flex flex-col items-center justify-center mt-20">
            <h1 className='text-3xl'>You are not an admin</h1>
            <p className='text-2xl'>You do not have the necessary permissions to access this page.</p>
        </div>
    </>
      )
}

export default NotAdmin
