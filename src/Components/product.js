import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
class Product extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        display: 'none',
        
      }
    }
    render(){

        return(
          <div>
            <div class="container2 text-center">
            <img style={{width:300}} src={this.props.img} alt="Avatar" className="image2" onClick={()=> this.props.history.push("/shop/slides")} />
            <div className="overlay2"><a className="button-style2">Add to cart</a></div>
            <br/>
        <a className="text-style1">{this.props.title}</a><br/>
        <a className="text-style1 text-danger">{this.props.cost}</a>
          </div>
          </div>
        )
    }
}
export default withRouter(Product);
      