import React from 'react'

const Contact = () => {
  return (
    <>
        <h2 className="font-bold text-6xl leading-[60px] text-white" id="projects">Conect with Me...</h2>
        <div className='flex space-x-5'>
          <a href='https://www.linkedin.com/in/valamilan/'>
            <img height="48" width="48" src="https://cdn.simpleicons.org/linkedin/#0A66C2" title="LinkedIN" />
          </a>
          <a href='https://github.com/Milanvvala'>
            <img height="48" width="48" src="https://cdn.simpleicons.org/Github/white" title="Github" />
          </a>
          {/* <a href=''>
            <img height="48" width="48" src="https://cdn.simpleicons.org/Instagram/#E4405F" title="Instagram" />
          </a> */}
          {/* <a href=''>
            <img height="48" width="48" src="https://cdn.simpleicons.org/twitter/#1DA1F2" title="Twitter" />
          </a> */}
        </div>
    </>
  )
}

export default Contact