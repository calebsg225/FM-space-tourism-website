import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/shared/logo.svg';

const Navbar = () => {
  const [page, setPage] = useState(0);
  return (
    <div>
      <img src={logo} alt="space logo" />
      <Link to="/"> Home </Link>
      <Link to="/Destination"> Destination </Link>
      <Link to="/Crew"> Crew </Link>
      <Link to="/Technology"> Technology </Link>
    </div>
  )
}

export default Navbar
