import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/shared/logo.svg';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <section className='navbar-container'>
      <img src={logo} alt="space logo" />
      <div className='navbutton-container'>
        {[ "home", "destination", "crew", "technology" ].map((page, i) => 
            <div className={currentPage === i ? 'navbutton-active' : 'navbutton'}>
              <Link to={'/' + (page === 'home'? '' : page)} onClick={() => setCurrentPage(i)}>
                <p><span>0{i}</span>&#160;{page}</p>
              </Link>
            </div>
          )}
      </div>
      
    </section>
  )
}

export default Navbar
