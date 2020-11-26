import React from 'react'

const Home = () => {
  return (
    <>
      <h1>THE SEARCH COMP WORKS</h1>
      <div className="search-box-div">
        <form className="search-box" action="./">
          <input className='search' type="text" placeholder="Search.." name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
    </>
  )
}

export default Home
