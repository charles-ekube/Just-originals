import React from 'react';
import { FaCogs } from 'react-icons/fa';
import { HomePageToggle } from '../toggle/homepagetoggle';
import { LogoutToggle } from '../toggle/logouttoggle';
import { SidebarToggle } from '../toggle/sidebartoggle';

const AdminNav = () => {

    return (

        <>
       <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div class="navbar-brand">
      <SidebarToggle/>
    </div>
         <div class="dropdown">
          <button class="dropdown-toggle"  id="dropdownMenuButton1" type='button' data-bs-toggle="dropdown" aria-expanded="false">
            <FaCogs/>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li class="dropdown-item">
              <HomePageToggle/>
            </li>
            <li class="dropdown-item">
              <LogoutToggle/>
            </li>
          </ul>
        </div>
     {/* <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div> */}
    {/* <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form> */}
  </div>
</nav>
            
                           
                         
            
        </>
    )

}
export {AdminNav}