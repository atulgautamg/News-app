import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <>  
    <nav className=  { ` navbar navbar-expand-lg bg-${props.mode}  `} >
  <div id="nav1" className="container-fluid">
    <Link className={`navbar-brand text-${props.textmode}`} to="/home" >{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="`#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.textmode} `} aria-current="page " to="/textform">{props.fg} </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.textmode} `} to="/about">About </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
  <div className="form-check form-switch text-light">
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch"  id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
</div>
</nav>

<div  className='alert3'>
  {props.alert1.msg.length!=0 && <div className="alert2">
  {
<div className={`alert alert-${props.alert1.type}`}  role="alert">
{props.alert1.msg}
</div>}
</div>}
</div>
</>
    )
}

Navbar.propTypes={
 title:PropTypes.string.isRequired,
 fg:PropTypes.string.isRequired

}
