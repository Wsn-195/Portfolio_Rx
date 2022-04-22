import { Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { Component }  from 'react';
import '../../src/App.css';
 
 const MainContent=(props)=>{

    const Item = styled(Paper)(({ theme }) => ({
       
      }));

 const ImageUrl="images/"+props.data?.image;

return(<>
<div class="container1">
   <Grid container spacing={2}>
  <Grid sm={6}  xs={12}>
  <Item><div class="ProfileImageConainer"><img src={ImageUrl} alt="Image" class="img-responsive" className='ProfilePageImage'/></div>
  </Item>
  </Grid>
  <Grid sm={6} xs={12}>
  
<div class="">
    <div class="">
        <div class="col-xs-12">
            <h1 class="title-lgx">
                 I'M 
                <span class="text-brand">
                    WILLSON VERMA </span>
                    </h1>
                    <h3 class="title-light">
                        Tech Consultant   
                        <span class="text-brand">&amp;</span> 
                        Full Stack Developer</h3><br/>
                        <div class="text-left" >
                            <p>
                  I'm a Software Developer with Computer Science background 
                  and specialization in modern web technologies majorly using Javascript ecosystems.
                </p><p>These days I'm enthusiastic about the world around React &amp; GraphQl.</p><p>I have <strong>2.8+ yr</strong>
                 experience  in Web technologies.</p><p><strong>
                     I love exploring new palces and people &  always
                     up for discussing innovative ideas and craft something amazing.</strong></p><p></p></div></div></div>
                      <div class="row"><div class="col-xs-12"><nav class="menu">
                          <div class="col-xs-12 col-sm-12 col-lg-12"><a href="/profile" class="col-xs-3">
                              <div class="foto"><img  alt="Chirag Goel Profile"/>
                              </div><span class="name"><strong>Profile</strong></span></a>
                              <a href="/resume" class="col-xs-3"><div class="foto">
                                  <img  alt="Chirag Goel Resume" /></div><span class="name">
                                      <strong>Resume</strong></span></a>
                                      <a href="/portfolio" class="col-xs-3"><div class="foto">
                                          <img  alt="Chirag Goel work" /></div>
                                          <span class="name"><strong>Work</strong></span></a>
                                          <a href="/contact" class="col-xs-3"><div class="foto">
                                              <img  alt="Contact Chirag Goel" /></div>
                                              <span class="name"><strong>Contact</strong>
                                              </span></a></div></nav></div></div><div class="row">
                                                  <div class="col-xs-12 text-center" >
                                                      <br/>
                                                      <ul class="socials text-center">
                                                          <li><a  target="_blank"><i class="fa fa-linkedin"></i>
                                                          </a></li><li><a href="https://twitter.com/engineerchirag" target="_blank">
                                                              <i class="fa fa-twitter"></i></a></li><li><a href="https://medium.com/@engineerchirag" target="_blank">
                                                                  <i class="fa fa-medium"></i></a></li><li><a href="https://www.facebook.com/engineerchirag" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a href="http://blog.chirag-goel.in" target="_blank"><i class="fa fa-user-secret"></i></a></li><li><a href="https://github.com/engineerchirag" target="_blank">
                                                                      <i class="fa fa-github"></i></a></li></ul><a href="https://drive.google.com/open?id=1E8nEuG7R4oFlwXj8hdD46jcpQe035Kp4" target="_blank" class="btn btn-primary" >Download Resume</a><p ><strong>Find me on Google: <a href="https://www.google.com/search?q=engineerchirag&amp;nfpr=1&amp;sa=X&amp;ved=2ahUKEwjZpa3JvNnmAhUexjgGHSNFC8wQvgUoAXoECA0QJw&amp;biw=1920&amp;bih=985" target="_blank">engineerchirag</a></strong></p></div></div>
                                                                </div>


  </Grid>
  </Grid>
</div>


<section class="content no-padding view">
    
    <div class="container">
       
      
           
<div class="">
    <div class="">
        <div class="col-xs-12">
            <h1 class="title-lgx">
                 I'M 
                <span class="text-brand">
                    WILLSON VERMA </span>
                    </h1>
                    <h3 class="title-light">
                        Tech Consultant   
                        <span class="text-brand">&amp;</span> 
                        Full Stack Developer</h3><br/>
                        <div class="text-left" >
                            <p>
                  I'm a Software Developer with Computer Science background 
                  and specialization in modern web technologies majorly using Javascript ecosystems.
                </p><p>These days I'm enthusiastic about the world around React &amp; GraphQl.</p><p>I have <strong>2.8+ yr</strong>
                 experience  in Web technologies.</p><p><strong>
                     I love exploring new palces and people &  always
                     up for discussing innovative ideas and craft something amazing.</strong></p><p></p></div></div></div>
                      <div class="row"><div class="col-xs-12"><nav class="menu">
                          <div class="col-xs-12 col-sm-12 col-lg-12"><a href="/profile" class="col-xs-3">
                              <div class="foto"><img  alt="Chirag Goel Profile"/>
                              </div><span class="name"><strong>Profile</strong></span></a>
                              <a href="/resume" class="col-xs-3"><div class="foto">
                                  <img  alt="Chirag Goel Resume" /></div><span class="name">
                                      <strong>Resume</strong></span></a>
                                      <a href="/portfolio" class="col-xs-3"><div class="foto">
                                          <img  alt="Chirag Goel work" /></div>
                                          <span class="name"><strong>Work</strong></span></a>
                                          <a href="/contact" class="col-xs-3"><div class="foto">
                                              <img  alt="Contact Chirag Goel" /></div>
                                              <span class="name"><strong>Contact</strong>
                                              </span></a></div></nav></div></div><div class="row">
                                                  <div class="col-xs-12 text-center" >
                                                      <br/>
                                                      <ul class="socials text-center">
                                                          <li><a  target="_blank"><i class="fa fa-linkedin"></i>
                                                          </a></li><li><a href="https://twitter.com/engineerchirag" target="_blank">
                                                              <i class="fa fa-twitter"></i></a></li><li><a href="https://medium.com/@engineerchirag" target="_blank">
                                                                  <i class="fa fa-medium"></i></a></li><li><a href="https://www.facebook.com/engineerchirag" target="_blank"><i class="fa fa-facebook"></i></a></li><li><a href="http://blog.chirag-goel.in" target="_blank"><i class="fa fa-user-secret"></i></a></li><li><a href="https://github.com/engineerchirag" target="_blank">
                                                                      <i class="fa fa-github"></i></a></li></ul><a href="https://drive.google.com/open?id=1E8nEuG7R4oFlwXj8hdD46jcpQe035Kp4" target="_blank" class="btn btn-primary" >Download Resume</a><p ><strong>Find me on Google: <a href="https://www.google.com/search?q=engineerchirag&amp;nfpr=1&amp;sa=X&amp;ved=2ahUKEwjZpa3JvNnmAhUexjgGHSNFC8wQvgUoAXoECA0QJw&amp;biw=1920&amp;bih=985" target="_blank">engineerchirag</a></strong></p></div></div>
                                                                </div>
                                                   
                                                </div>
</section>

</>



);





    
}
export default MainContent;