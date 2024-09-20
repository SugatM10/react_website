import React from "react";

function Home () {
    return (
        <>
            <div className="responsive-header visible-xs visible-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="top-section">
                            <div className="profile-image">
                                <img src="/assets/img/profile.jpg" alt="Volton" />
                            </div>
                            <div className="profile-content">
                                <h3 className="profile-title">Volton</h3>
                                <p className="profile-description">Digital Photographer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="toggle-menu"><i className="fa fa-bars"></i></a>
                <div className="main-navigation responsive-menu">
                    <ul className="navigation">
                        <li><a href="#top"><i className="fa fa-home"></i>Home</a></li>
                        <li><a href="#about"><i className="fa fa-user"></i>About Me</a></li>
                        <li><a href="#projects"><i className="fa fa-newspaper-o"></i>My Gallery</a></li>
                        <li><a href="#contact"><i className="fa fa-envelope"></i>Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>

        {/* <!-- SIDEBAR --> */}
        <div className="sidebar-menu hidden-xs hidden-sm">
            <div className="top-section">
                <div className="profile-image">
                    <img src="/assets/img/profile.jpg" alt="Volton" />
                </div>
                <h3 className="profile-title">Volton</h3>
                <p className="profile-description">Digital Photography</p>
            </div> 
            {/* <!-- top-section --> */}
            <div className="main-navigation">
                <ul className="navigation">
                    <li><a href="#top"><i className="fa fa-globe"></i>Welcome</a></li>
                    <li><a href="#about"><i className="fa fa-pencil"></i>About Me</a></li>
                    <li><a href="#projects"><i className="fa fa-paperclip"></i>My Gallery</a></li>
                    <li><a href="#contact"><i className="fa fa-link"></i>Contact Me</a></li>
                </ul>
            </div>
            {/* <!-- .main-navigation --> */}
            <div className="social-icons">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                </ul>
            </div> 
            {/* <!-- .social-icons --> */}
        </div> 
        {/* <!-- .sidebar-menu --> */}
        

        <div className="banner-bg" id="top">
            <div className="banner-overlay"></div>
            <div className="welcome-text">
                <h2>Simple Design | Personal Portfolio</h2>
                <h5>This is a mobile friendly layout with Bootstrap v3.3.1 framework. Maecenas eu ante at nunc posuere fringilla sit amet non dolor. Proin condimentum fermentum nunc.</h5>
            </div>
        </div>

        {/* <!-- MAIN CONTENT --> */}
        <div className="main-content">
            <div className="fluid-container">

                <div className="content-wrapper">
                
                    {/* <!-- ABOUT --> */}
                    <div className="page-section" id="about">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="widget-title">Learn About Me</h4>
                            <div className="about-image">
                                <img src="/assets/img/8.jpg" alt="about me" />
                            </div>
                            <p>Volton is free website design from <span className="blue">template</span><span className="green">mo</span>. You can use this template for any purpose. Please tell your friends about it. Thank you. Credit goes to <a rel="nofollow" href="http://unsplash.com" target="_parent">Unsplash</a> for images used in this design. You can <strong>change menu icons</strong> by checking <a rel="nofollow" href="http://fontawesome.info/font-awesome-icon-world-map/" target="_parent">Font Awesome</a> (version 4). Example: <strong>&lt;i class=&quot;fa fa-camera&quot;&gt;&lt;/i&gt;</strong></p>
                            <hr />
                        </div>
                    </div> 
                    {/* <!-- #about --> */}
                    </div>
                    
                    {/* <!-- PROJECTS --> */}
                    <div className="page-section" id="projects">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="widget-title">PHOTOS OF WHAT I DO</h4>
                            <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Maecenas et lorem molestie, maximus justo dignissim, cursus nisl. Nullam at ante quis ex pharetra pulvinar quis id dolor. Integer lorem odio, euismod ut sem sit amet, imperdiet condimentum diam.</p>
                        </div>
                    </div>
                    <div className="row projects-holder">
                        <div className="col-md-4 col-sm-6">
                            <div className="project-item">
                                <img src="/assets/img/1.jpg" alt="" />
                                <div className="project-hover">
                                    <div className="inside">
                                        <h5><a href="#">Pellentesque porta ligula</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-item">
                                <img src="/assets/img/2.jpg" alt="" />
                                <div className="project-hover">
                                    <div className="inside">
                                        <h5><a href="#">Pellentesque porta ligula</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-item">
                                <img src="/assets/img/3.jpg" alt="" />
                                <div className="project-hover">
                                    <div className="inside">
                                        <h5><a href="#">Pellentesque porta ligula</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-item">
                                <img src="/assets/img/4.jpg" alt="" />
                                <div className="project-hover">
                                    <div className="inside">
                                        <h5><a href="#">Pellentesque porta ligula</a></h5>
                                        <p>Quisque mattis sit amet dolor eu scelerisque. Vivamus bibendum massa et nisl tempus commodo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-item">
                                <img src="/assets/img/5.jpg" alt="" />
                                <div className="project-hover">
                                    <div className="inside">
                                        <h5><a href="#">Pellentesque porta ligula</a></h5>
                                        <p>Quisque mattis sit amet dolor eu scelerisque. Vivamus bibendum massa et nisl tempus commodo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="project-item">
                                <img src="/assets/img/6.jpg" alt="" />
                                <div className="project-hover">
                                    <div className="inside">
                                        <h5><a href="#">Pellentesque porta ligula</a></h5>
                                        <p>Quisque mattis sit amet dolor eu scelerisque. Vivamus bibendum massa et nisl tempus commodo.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- .projects-holder --> */}
                    </div>
                    <hr />

                    {/* <!-- CONTACT --> */}
                    <div className="page-section" id="contact">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="widget-title">PLACE TO TALK WITH ME</h4>
                            <p>Vestibulum ac iaculis erat, in semper dolor. Maecenas et lorem molestie, maximus justo dignissim, cursus nisl. Nullam at ante quis ex pharetra pulvinar quis id dolor. Integer lorem odio, euismod ut sem sit amet, imperdiet condimentum diam.</p>
                        </div>
                    </div>
                    <div className="row">
                        <form action="#" method="post" className="contact-form">
                            <fieldset className="col-md-4 col-sm-6">
                                <input type="text" id="your-name" placeholder="Your Name..." />
                            </fieldset>
                            <fieldset className="col-md-4 col-sm-6">
                                <input type="email" id="email" placeholder="Your Email..." />
                            </fieldset>
                            <fieldset className="col-md-4 col-sm-12">
                                <input type="text" id="your-subject" placeholder="Subject..." />
                            </fieldset>
                            <fieldset className="col-md-12 col-sm-12">
                                <textarea name="message" id="message" cols="30" rows="6" placeholder="Leave your message..."></textarea>
                            </fieldset>
                            <fieldset className="col-md-12 col-sm-12">
                                <input type="submit" className="button big default" value="Send Message" />
                            </fieldset>
                        </form>
                    </div> 
                    {/* <!-- .contact-form --> */}
                    </div>
                    <hr />

                    <div className="row" id="footer">
                        <div className="col-md-12 text-center">
                            <p className="copyright-text">Copyright &copy; 2024 Company Name</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Home;