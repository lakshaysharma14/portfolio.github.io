import React, { Component } from 'react';
export default class Header extends Component {
  render() 
  {
      let resumeData = this.props.resumeData;
      
      return (
      <React.Fragment>

        <header id="home">

      <nav id="nav-wrap">

         <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

         <ul id="nav" class="nav">
            <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
            <li><a class="smoothscroll" href="#about">About</a></li>
           <li><a class="smoothscroll" href="#resume">Resume</a></li>
            <li><a class="smoothscroll" href="#portfolio">Works</a></li>
            <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a class="smoothscroll" href="#contact">Contact</a></li>
         </ul> 

      </nav> 

      <div class="row banner">
         <div class="banner-text">

            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <hr />
            <h2>College:{resumeData.college}</h2>            
            
            <h3>I am a {resumeData.role}.{resumeData.roleDescription} </h3>
            
            <hr />
            
            <ul class="social">
               <li><a href="#"><i class="fa fa-facebook"></i></a></li>
               <li><a href="#"><i class="fa fa-twitter"></i></a></li>
               <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
               <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
               <li><a href="#"><i class="fa fa-instagram"></i></a></li>
               <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
               <li><a href="#"><i class="fa fa-skype"></i></a></li>
            </ul>
         </div>
      </div>

      <p class="scrolldown">
         
         <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
     
      </p>

   </header> 
   </React.Fragment>
    );
  }
}