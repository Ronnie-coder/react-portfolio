import "./topbar.scss";
import { Person3, Email } from '@mui/icons-material';


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">CodeRon.</a>
          <div className="itemContainer">
            <Person3 className="icon" />
            <span>+27 67818 4898</span>
          </div>
          <div className="itemContainer">
            <Email className="icon" />
            <span>ronnienyamhute81@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}