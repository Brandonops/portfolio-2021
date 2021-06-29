import React, { Component } from 'react';
import { Fade, Slide } from "react-reveal";
class Contact extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      // var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
      <Fade bottom duration={1000}>
        <div className="row section-head">

          <div className="ten columns">
            <p className="lead">You can reach out to me for any further questions or information regarding my projects or work. Thank you!</p>
          </div>
        </div>
      </Fade>

      <div className="row">
        <Slide left duration={1000}>
        <section id="contact" className="contact">
    <div className="container">
      <div className="row containerInfo" data-aos="fade-in">

        <div className="col-lg-12 d-flex align-items-stretch">
          <div className="info">

            <div className="email">
            <div>
              <i className="fa fa-envelope" style={{ marginRight: "5px", fontSize: "20px", color: "#4b57fff8"}}></i>
              <h4 style={{fontSize: "20px"}}>Email:</h4>
              </div>
              <p style={{color: "#bfd5fdda"}}>jandres.jago54@gmail.com</p>
            </div>

            <div className="website">
            <div>
              <i className="fa fa-linkedin" style={{marginRight: "5px", fontSize: "20px", color: "#4b57fff8"}}></i>
              <h4 style={{fontSize: "20px"}}>LinkedIn:</h4>
              </div>
              <p><a href="https://www.linkedin.com/in/jorge-gonzalez-8088b2161/" style={{color: "#bfd5fdda"}} className="contactlink">linkedin.com/in/jorge-gonzalez-8088b2161/</a></p>
            </div>
            <div className="website">
              <div >
              <i className="fa fa-github" style={{ marginRight: "5px", fontSize: "20px", color: "#4b57fff8"}}></i>
              <h4 style={{fontSize: "20px"}}>GitHub:</h4>
              </div>
              <p><a href="http://github.com/jandres54" style={{color: "#bfd5fdda"}}  className="contactlink">github.com/jandres54</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        </Slide>

          <Slide right duration={1000}>
            {/* <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>

              <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div>
            </aside> */}
          </Slide>
      </div>
    </section >
    );
  }
}

export default Contact;
