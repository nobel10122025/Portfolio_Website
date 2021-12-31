import React , {useState} from 'react'
import { Link } from "react-router-dom";
import data from './NavBar.data';
import SocialLinks from '../About/AboutPage.data';
function NavBar() {
    const [open , setOpen] = useState(false)

    return (
    <>
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header">
        <span>Jaya Durga</span>
          <button className="nav-btn" id="nav-btn">
            <i className="fas fa-bars" onClick={()=>setOpen(true)}></i>
          </button>
        </div>
        <ul className="nav-links">
         {
             data.map(link => {
                return (
                  <Link key={link.id} to={link.url}>
                    {link.text}
                  </Link>
                )})
         }
        </ul>
      </div>
    </nav>   
    <aside className= {`${open ?'show-sidebar': ''} sidebar`} id="sidebar">
      <div>
        <button id="close-btn" className="close-btn">
          <i className="fas fa-times" onClick={()=>setOpen(false)}></i>
        </button>
        <ul className="sidebar-links">
        {
             data.map(link => {
                return (
                  <Link key={link.id} to={link.url} onClick={()=>setOpen(false)}>
                    {link.text}
                  </Link>
                )})
         }
        </ul>
        <ul className="social-icons">
        {
          SocialLinks.map((link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>)}))
        }
        </ul>
      </div>
    </aside>
        </>
    )
}

export default NavBar

