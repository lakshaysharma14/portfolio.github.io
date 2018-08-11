import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Resume from './components/resume/resume';
import ContactUs from './components/contactus/contact';
import Portfolio from './components/portfolio/portfolio';
import Testimonials from  './components/testimonials/testimonial';

import resumeData from './resumeData';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Footer resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        
      </div>
    );
  }
}
export default App;