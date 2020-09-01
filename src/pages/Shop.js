import React from 'react';
import Shop1 from '../Components/Shop1';
import {connect} from 'react-redux';
import Product from '../Components/product';
import '../App.css';

class Shop extends React.Component {
    constructor(){
        super()
        this.state = {
          check1: '',
          check2: '',
          check3: '',
          check4: '',
        }
      }
    render(){
    return(
        <div>
            
<div className="container6 text-white">
    <br/><br/><br/><br/>
 <a>Nike shoe</a><br/>
 <a>New arrivel for you</a>
</div>
<div className="container-fluid shop">
    <div className="row" style={{marginTop:55}}>
        <div className="col-lg-3 col-md-12 text-left">
            <Shop1 />
        </div>
        <div className="col-lg-9 col-md-12">
        <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                       <Product cost="$3,000" img={this.props.img1} title={this.props.title1} type={this.props.type}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product cost="$6,000" img={this.props.img2} title={this.props.title2} type={this.props.type}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product cost="$50,000" img={this.props.img3} title={this.props.title3} type={this.props.type} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                       <Product cost="$3,000" img={this.props.img4} title={this.props.title4} type={this.props.type}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product cost="$6,000" img={this.props.img5} title={this.props.title5} type={this.props.type}/>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-12 mb-3 d-flex justify-content-center">
                    <Product cost="$50,000" img={this.props.img6} title={this.props.title6} type={this.props.type}/>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    )
    }
}


const mapStateToProps = (state) =>{
    return {
      img1:state.img1 ,
      title1 :state.title1,
      img2:state.img2 ,
      title2 :state.title2 ,
      img3:state.img3 ,
      title3 :state.title3,
      img4:state.img4 ,
      title4 :state.title4,
      img5:state.img5 ,
      title5 :state.title5,
      img6:state.img6 ,
      title6 :state.title6,
      name: state.name,
      type: state.type
    }
  }
  const mapDispachToProps = (dispach) =>{
    return {
        onAgeUp : () => dispach({type:'AGE_UP'}),
        onAgeDown : () => dispach({type:'AGE_DOWN'})
    }
  }
  
export default connect (mapStateToProps , mapDispachToProps)(Shop);