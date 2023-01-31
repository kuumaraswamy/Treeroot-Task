import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <nav>
            <ul  >
                <Link to="/">Form</Link>
                <Link to="/table">Table</Link>
            </ul>
        </nav>
      
    </div>
  )
}

export default Sidebar


