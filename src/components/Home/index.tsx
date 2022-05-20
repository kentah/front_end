import React from 'react'
import './home.css'

const Home: React.FC = () =>  {
  return (
    <div className='content'>
      <div className='img'>
        <div>
          <h1 className='txt title'>Home</h1>
          <h2 className='txt sub-title'>This is the home/landing page</h2>
          <article className='txt body-txt'>Some sort of information will be going here</article>
        </div>
      </div>
    </div>
  )
}

export default Home
