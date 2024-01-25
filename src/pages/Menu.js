import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-4 offset-4">
            <Link className='btn btn-outline-warning mx-2' to="posts">Homework 1</Link>
            <Link className='btn btn-outline-warning mx-2' to="tasks">Homework 2</Link>
        </div>
      </div>
    </div>
  )
}
export default Menu
