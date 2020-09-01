import React from 'react';
import '../App.css';

const Title = () => {
    return(
        <div className="mt-3 mb-3">
              <div class="d-flex justify-content-center mb-3 title">
    <div class="p-2"><h2>Our products</h2></div>
  </div>
            <div className="container title">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                       <div className="container3">
                       <a className="button-style1">Shoes</a>
                        <img src={require('../img/shoe93.jpg')} className="img-size1"/>
                       </div>
                   
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <div className="container3">
                    <a className="button-style1">Watches</a>
                        <img src={require('../img/watch2.jpg')} className="img-size1"/>
                       </div>
                    {/* <a className="button-style1">Watches</a>
                        <img src={require('../img/watch2.jpg')} className="img-size2"/> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <div className="container3">
                    <a className="button-style1">Swishirts</a>
                    <img src={require('../img/jacket3.jpg')} className="img-size1"/>
                       </div>
                    {/* <a className="button-style1">Swishirts</a>
                        <img src={require('../img/jacket3.jpg')} className="img-size1"/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Title;