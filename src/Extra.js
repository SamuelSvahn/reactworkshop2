<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto ">
          <li class="nav-item">
            <Link className='nav-link  text-white' to="/" >React</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' to="/home" >Home</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' to="/person" >Person</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' to="/about" >AboutUs</Link>
          </li>
          <li class="nav-item">
          <Link className='nav-link' to="/crud" >Crud</Link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Home</a></li>
              <li><a class="dropdown-item" href="#">Person</a></li>
              <li><a class="dropdown-item" href="#">About us</a></li>
              <li><a class="dropdown-item" href="#">Crud</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </nav>