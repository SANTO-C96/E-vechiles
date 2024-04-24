import React from 'react'
const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Bundela Fintech</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              PRODUCTS
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/threewheelers">Electric Three Wheelers Loan</a></li>
              <li><a className="dropdown-item" href="/twowheelers">Electric Two Wheelers Loan</a></li>
              <li><a className="dropdown-item" href="/revloan">Rev Loan</a></li>
              <li><a className="dropdown-item" href="/evloan">EV Ancillary Loan</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/patners">Patners</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/newsblogs">News & Blogs</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/career">Career</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/contact">Contact Us</a>
          </li>
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>
  )
}

export default Navbar