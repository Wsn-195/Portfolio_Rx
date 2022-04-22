import React, { Component } from 'react';
import '../../src/App.css';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resumes</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
           {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
          
         <section class="content no-padding view">
      <div class="container">
        <div class="">
          <div class="">
            <div class="col-xs-12">
              <h1 class="title-lgx"> I'M <span class="text-brand"> WILLSON VERMA </span>
              </h1>
              <h3 class="title-light"> Tech Consultant <span class="text-brand"> &amp; </span> Full Stack Developer </h3>
              <br />
              <div class="text-left">
                 <ul class="desc-items">
                  <li>I'm a Software Developer with Computer Science background and specialization in modern web technologies majorly using <span className="whiteText">Javascript ecosystems</span>.</li>
                  <li>These days I'm enthusiastic about the world around <span className="whiteText"> React , Typescript &amp; GraphQl </span>.</li>
                  <li>I have <strong>~3 yr</strong> experience in Web technologies.</li>
                  <li>
                  <strong> I love exploring new palces and people & always up for discussing innovative ideas and craft something amazing.</strong>
                </li>
                 </ul>
               
              </div>
            </div>
          </div>
          
       
        </div>
      </div>
    </section> 


            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>








      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
