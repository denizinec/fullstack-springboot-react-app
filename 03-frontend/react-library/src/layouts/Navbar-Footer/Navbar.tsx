import { NavLink } from "react-router-dom";
import { LoginButton } from "../../Auth/components/LoginButton";
import { LogoutButton } from "../../Auth/components/LogoutButton";
import { useAuth0, User } from "@auth0/auth0-react";

export const Navbar = () => {
    const { user , isAuthenticated, isLoading } = useAuth0();

    console.log("Is Loading?: ",isLoading);
    console.log("User: ", user);
    console.log("Is Authenticated?: ",isAuthenticated);


    return(

    <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>

      <div className='container-fluid'>
      <span className='navbar-brand '>Kitapçım</span>
      <button className='navbar-toggler' type='button' 
       data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown'
       aria-expanded='false' aria-label='Toggle Navigation'>
       <span className='navbar-toggler-icon'></span>
       </button>
       <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to="/home">Anasayfa</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="/search">Kitap Ara</NavLink>
            </li>
            
          </ul>
          <ul className="navbar-nav ms-auto">
            {isAuthenticated && user ? (
              <>
                <li className="nav-item">
                  <span className="navbar-text me-3">
                    <img className="pf-pic" src={user.picture} alt={user.name} />
                    {user.name || user.email}
                  </span>
                </li>
                <li className="nav-item m-1">
                  <LogoutButton />
                </li>
              </>
            ) : (
              <li className="nav-item m-1">
                <LoginButton />
              </li>
            )}
          </ul>
       </div>
      </div>
    </nav>
      


    );


}