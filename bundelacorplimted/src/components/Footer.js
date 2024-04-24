import React from 'react'

const Footer = () => {
     const inlineStyle = {
        "text-decoration":"none"
      };

      const inlineStyle2 = {
        "font-size":"23px"
      };

  return (
    <div>
        <footer className='bg-dark text-white pt-5 pb-4'>
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Company Name</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum sint nisi ad dolorum totam accusamus soluta, et doloribus corrupti, voluptatem debitis reprehenderit recusandae deleniti perferendis! Velit sequi totam blanditiis.</p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Products</h5>
                        <p><a href="#" className='text-white' style={inlineStyle}>The Provider</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>

                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Useful Links</h5>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                        <p><a href="#" className='text-white' style={inlineStyle}>we will Provide</a></p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className='text-uppercase mb-4 font-weight-bold text-warning'>Contact us</h5>
                        <p>
                            <i class='fas fa-home mr-3'></i>
                            Noida Uttar Pradesh 234-35 block c
                        </p>
                        <p>
                            <i class='fas fa-envelope mr-3'></i>
                            Bundela@gmail.com
                        </p>
                        <p>
                            <i class='fas fa-phone mr-3'></i>
                            +91 8318304658
                        </p>
                        <p>
                            <i class='fas fa-print mr-3'></i>
                            +01 335 633 77
                        </p>
                    </div>
                    <hr className='mb-4'/>
                    <div className="row align-items-center">
                        <div className="col-md-7 col-lg-8">
                            <p>Copyright 02020 All rights reserved by:
                                <a href="" style={inlineStyle}><strong className='text-warning'>The Providers</strong></a>
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-4">
                            <div className="text-center text-md-right">
                                <ul className='list-unstyled list-inline'>
                                   <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={inlineStyle2}><i class="fab fa-facebook"></i></a>
                                   </li>
                                   <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={inlineStyle2}><i class="fab fa-twitter"></i></a>
                                   </li>
                                   <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={inlineStyle2}><i class="fab fa-google-plus"></i></a>
                                   </li>
                                   <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={inlineStyle2}><i class="fab fa-linkedin"></i></a>
                                   </li>
                                   <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={inlineStyle2}><i class="fab fa-youtube"></i></a>
                                   </li>
                                   <li className='list-inline-item'>
                                    <a href="#" className='btn-floating btn-sm text-white' style={inlineStyle2}><i class="fab fa-instagram"></i></a>
                                   </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer