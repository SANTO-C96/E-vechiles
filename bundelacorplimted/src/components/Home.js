import React from 'react'
import Imgage1 from '../images/img22.jpg'
import Imgage2 from '../images/img2.webp'
import Imgage3 from '../images/img3.jpg'
import Image4 from '../images/e-vechiles1.png'
import Image5 from '../images/e-vechiles2.jpg'


const Home = () => {
  return (
    <>
    <div className="container-flex">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Imgage1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Smartest, Fastest Electric Vehicle Loans</h5>
        <p>INDIA'S No.1 EV FINANCING COMPANY</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Imgage2} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Smartest, Fastest Electric Vehicle Loans</h5>
        <p>INDIA'S No.1 EV FINANCING COMPANY</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Imgage3} className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Smartest, Fastest Electric Vehicle Loans</h5>
        <p>INDIA'S No.1 EV FINANCING COMPANY</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <h1 className='m-4 text-center'>WHAT WE DO</h1>
       <div className="row mx-4">
         <div className="col-md-8">
             <h2 className='mx-3 my-3'>Financing independent commercial EV drivers</h2>
             <p className='m-3'>Bundela Fintech is a technology company. It's subsidiary company (Aristo Securities Private Limited, an NBFC) provides loans to independent drivers who buy and operate passenger or cargo electric vehicles for last mile connectivity Partnerships with EV manufacturers and dealerships Pan- India to provide point of sale financing.</p>
         </div>
         <div className="col-md-4 ">
         <div className="card" style={{width: '18rem'}}>
         <img src={Image5}className="card-img-top sm-mx-3" alt="..." />
         </div>
         </div>
       </div>

       {/* second part */}
       <div className="row mx-4 my-2">
         <div className="col-md-8">
             <h2 className='mx-3 my-3'>Driver cum Owner (DCO) fleet vehicle operators</h2>
             <p className='m-3'>Bundela Fintech is a technology company. It's subsidiary company (Aristo Securities Private Limited, an NBFC) provides loan or Lease to drivers who buy and operate passenger or cargo electric vehicles for last mile connectivity through E-commerce, Fleet operators & logistics company.</p>
         </div>
         <div className="col-md-4">
         <div className="card" style={{width: '18rem'}}>
         <img src={Image5}className="card-img-top " alt="..." />
         </div>
         </div>
       </div>
       
    </div>
    </>
  )
}

export default Home