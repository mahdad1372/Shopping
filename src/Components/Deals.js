import React from 'react';
import Timer from './Timer';
import '../App.css';

const Deals = () => {
    return(
        <div className="container-fluid Deals">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                    <img src={require('../img/fashion.jpg')} className="img-size3" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                <div class="d-flex justify-content-center mt-3">
    <div class="p-2"><a className="text-style3">Deals of the week</a></div>
  </div>
  <div class="d-flex justify-content-center mt-3">
    <div class="p-2">
        <Timer />
        </div>
  </div>
  <div class="d-flex justify-content-center mt-3">
    <div><a className="button-style3 text-white">Add to cart</a></div>
  </div>
                </div>
            </div>
        </div>
    )
}

export default Deals;