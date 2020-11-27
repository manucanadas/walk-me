import React from 'react'

const Home = () => {
  return (
    <>
      <div className= 'walk-image-and-title2'>
<img src='https://i.pinimg.com/originals/da/5a/19/da5a19b584d9acc95f9984dc5061239c.jpg' alt="description"/>

<div className= 'walk-title-div'>
      <div className="search-box-div">
        <form className="search-box" action="./walks">
          <input className='search' type="text" placeholder="Search.." name="search" />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
  <span className= 'walk-title' >Lets go walking!!</span>
</div>
</div>
<div className='walk-info'>
<div className='walk-detail'><h4>Doggy friendly</h4></div>
<div className='walk-detail'><h4>⭐ ⭐ ⭐</h4></div>
<button className='text-btn'><h4>Button</h4></button>
</div>


    </>
  )
}

export default Home
