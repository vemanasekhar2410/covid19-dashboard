import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="head1">
    <h1 className="head">
      <Link to="/">
        COVID19<span className="span1">INDIA</span>
      </Link>
    </h1>

    <ul className="ul1">
      <li className="li1">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)

export default Header
