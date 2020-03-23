import React, { Component } from "react";
import img from './img.jpg'
 
class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Przykładowa konkurencja</h2>
        <img src={img} alt='example event'/>
      </div>
    );
  }
}
 
export default Contact;