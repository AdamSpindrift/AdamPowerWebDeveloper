import React, { useEffect, useState } from "react";
import { navigate } from "hookrouter";
import SocialShare from "./generic/SocialShares";
import axios from "axios";
import { motion, useAnimation} from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
// Custom Modules
import scrollHandler from "./generic/scrollHandler";
import Loading from "./generic/Loading";
// SVGs
import dataChart from "../svg/undraw_Data_points_re_vkpq.svg";
import mobile from "../svg/2205195_mobile_phone_screen_smart_icon.svg";
import desktop from "../svg/290121_computer_desktop_monitor_computer screen_icon.svg";
import meeting from "../svg/networking-svgrepo-com.svg";
import paint from "../svg/728914_brush_paint_art_color_design_icon.svg";
import coding from "../svg/coding-web-development-svgrepo-com (1).svg";
import test from "../svg/test-svgrepo-com.svg";
import world from "../svg/world-wide-web-svgrepo-com.svg";
import ae from "../svg/technology/after-effects-cc-logo-svgrepo-com.svg";
import ai from "../svg/technology/adobe-illustrator-cc-logo-svgrepo-com.svg";
import ps from "../svg/technology/photoshop-cc-logo-svgrepo-com.svg";
import xd from "../svg/technology/adobe-xd-logo-svgrepo-com (1).svg";



function IndexMain() {

      const shareURL = "https://www.adampower.io";

      // Contact Form
      const [loading, setLoading] = useState(false);

      const [details, setDetails] = useState({
          fName: "",
          lName: "",
          email: "",
          message: "",
      })

      const featureVariants = {
            visible: { opacity: 1, y: 0, transition: { duration: 1}},
            hidden: { opacity: 0, y: -200}
      };

      const featureVariants2 = {
            visible: { opacity: 1, y: 0, transition: { duration: 1}},
            hidden: { opacity: 0, y: 200}
      };

      const processVariants = {
            visible: { opacity: 1, y: 0, transition: { duration: 1}},
            hidden: { opacity: 0, y: -100}
      };

      const processVariantsLeft = {
            visible: { opacity: 1, y: 0, transition: { duration: 1}},
            hidden: { opacity: 0, x: -200}
      };

      const processVariantsRight = {
            visible: { opacity: 1, y: 0, transition: { duration: 1}},
            hidden: { opacity: 0, x: 200}
      };

      const processVariantsBottom = {
            visible: { opacity: 1, y: 0, transition: { duration: 1}},
            hidden: { opacity: 0, y: 200}
      };

      const controls = useAnimation();

      const [ref, inView] = useInView();

      useEffect(() => {
            if (inView) {
                  controls.start("visible");      
            }
      }, [controls, inView]);


      function handleChange(event) {
          const{name, value} = event.target;
      
          setDetails((prevValue) => {
            
            return {
              ...prevValue,
              [name]:value
            };
          })
      };


      function handleSubmit(e) {
          e.preventDefault();
          setLoading(true);

          axios.post(process.env.REACT_APP_SERVER_ROUTE + "api/webenquiry", {details})
              .then(res => {
                  console.log(res.data.message);
                  e.returnValue = false;
                  navigate('/thanks');
                  window.location.reload();
                  setTimeout(() => {
                        setLoading(false);      
                  }, 50);
                  
          });

      };
      
  
    return (
      <main id="index">

            <div className="border-1">&nbsp;</div>
            

            <section id="title" className="title">
                  {/* <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 1}}
                        initial={{opacity: 0, y:-100, x:275}}> */}
                  <img src="../images/AP Web Dev Logo_2_Grey.png" alt="Adam Power Web Development Logo" className="title__logo" />
                  {/* </motion.div> */}
                  <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: .5, delay:0.9}}
                        initial={{opacity: 0}}>
                  <h1 className="adampower margin-top-small">Adam Power</h1>
                  </motion.div>
                  <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: .5, delay:1.15}}
                        initial={{opacity: 0}}>
                  <h2 className="title__webdev">Web Development</h2>
                  </motion.div>
                  {/* <motion.div
                        animate={{opacity: 1,}}
                        transition={{duration: .5, delay:1.4}}
                        initial={{opacity: 0, x:275}}
                        className="title__headshot2"> */}
                  <img src="../images/Adam_Power_Headshot_2020_3.png" alt="Adam Power" className="title__headshot"/>
                  {/* </motion.div> */}
            </section>

            <div className="welcome__background">&nbsp;</div>

            <section id="welcome" className="welcome">
                  <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: 1, delay:1}}
                        initial={{opacity: 0, y:-100}}>
                  <h2 className="welcome__title">Welcome</h2>
                  </motion.div>
                  <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: .5, delay:1.5}}
                        initial={{opacity: 0}}>
                  <h3 className="welcome__text">Technologist, Problem Solver and Analytical Thinker, with a flair for creativity.</h3>
                  </motion.div>
                  <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: .5, delay:1.7}}
                        initial={{opacity: 0}}>
                  <h3 className="welcome__text">Are you looking for someone to help your create a game changing application?</h3>
                  </motion.div>
                  <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: .5, delay:1.9}}
                        initial={{opacity: 0}}>
                  <h3 className="welcome__text">Perhaps you are looking to supercharge your digital marketing with an epic new website?</h3>
                  </motion.div>
                  <motion.div
                        animate={{opacity: 1, y:0}}
                        transition={{duration: .5, delay:2}}
                        initial={{opacity: 0}}>
                  <h3 className="welcome__text">When your ready give me a shout and we can get cracking building something great.</h3>
                  </motion.div>
                  <motion.div
                        animate={{opacity: 1}}
                        transition={{duration: .5, delay:2.2}}
                        initial={{opacity: 0}}>
                  <a href="/#contact">
                  <button className="btn btn__primary welcome__btn">Get In Touch</button>
                  </a>
                  </motion.div>
            </section>

            <div className="border-2">&nbsp;</div>

            <div className="border-3">&nbsp;</div>

            <section id="features" className="features">

                  <div className="features__card">
                        <motion.div
                              ref={ref}
                              animate={controls}
                              initial="hidden"
                              variants={featureVariants}>
                        <div className="features__img">
                              <img src={mobile} alt="Mobile" className="features__img features__img-2way features__img-2way--small" />
                              <img src={desktop} alt="Desktop" className="features__img features__img-2way" />
                        </div>
                        </motion.div>
                        <motion.div
                              ref={ref}
                              animate={controls}
                              initial="hidden"
                              variants={featureVariants2}>
                        <h2 className="features__title">Responsive</h2>
                        <h2 className="features__title">Design</h2>
                        <p className="features__description">Your site needs to look great on all platforms, whether taking a mobile first approach or desktop first approach.</p>
                        </motion.div>
                  </div>

                  <div className="features__card">
                        <motion.div
                              ref={ref}
                              animate={controls}
                              initial="hidden"
                              variants={featureVariants}>
                        <div className="features__img">
                              <img src="../images/Spindrift S.png" alt="Adam Power Web Development Logo" className="features__img features__img-3way" />
                              <img src="../images/Backroom_Logo.png" alt="Backroom International Hire Solutions Logo" className="features__img features__img-3way" />
                              
                        </div>
                        </motion.div>
                        <motion.div
                              ref={ref}
                              animate={controls}
                              initial="hidden"
                              variants={featureVariants2}>
                        <h2 className="features__title">Digital</h2>
                        <h2 className="features__title">Marketing</h2>
                        <p className="features__description">Looking to sell your ideas to the world? Having a slick, modern website telling your customers about what you offer is essential.</p>
                        </motion.div>
                  </div>

                  <div className="features__card">
                        <motion.div
                              ref={ref}
                              animate={controls}
                              initial="hidden"
                              variants={featureVariants}>
                        <img src={dataChart} alt="Data Charts" className="features__img features__img-webapps" />
                        </motion.div>
                        <motion.div
                              ref={ref}
                              animate={controls}
                              initial="hidden"
                              variants={featureVariants2}>
                        <h2 className="features__title">Web</h2>
                        <h2 className="features__title">Apps</h2>
                        <p className="features__description">Do you need an application to help your business grow? I love building web applications and can't wait to dive straight in.</p>
                        </motion.div>
                  </div>

            </section>

            <div className="border-4">&nbsp;</div>

            <div className="border-5">&nbsp;</div>

            <section id="process" className="process">
                  <motion.div
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={processVariants}>
                  <h2 className="process__heading">Our Process</h2>
                  </motion.div>



                  <div className="process__grid">
                        
                        <div className="process__card process__card--1">

                        
                        
                              <img src={meeting} alt="Meeting" className="process__icon" />
                              <h4 className="process__number">01</h4>
                              <h3 className="process__title">Meeting</h3>
                              <p className="process__text">We have a chat to discuss your vision and what you want to achieve with your Website or App.</p>

                              
                        </div>
                        
                        
                        <div className="process__card process__card--2">
                        
                              <h4 className="process__number">02</h4>
                              <h3 className="process__title">Design</h3>
                              <p className="process__text">Then we design your site, providing both desktop and mobile mock-ups.</p>
                              
                        </div>
                        
                        
                        <div className="process__card process__card--3">
                        
                              <img src={coding} alt="Coding" className="process__icon" />
                              <h4 className="process__number">03</h4>
                              <h3 className="process__title">Coding</h3>
                              <p className="process__text">Next comes the nuts and bolts, getting into the nitty gritty of building your site up to look great on every platform.</p>
                              
                        </div>
                        
                        
                        <div className="process__card process__card--4">
                        
                              <img src={test} alt="Meeting" className="process__icon" />
                              <h4 className="process__number">04</h4>
                              <h3 className="process__title">Testing</h3>
                              <p className="process__text">Extensive testing to ensure your site meets all the requirements on every platform.</p>
                              
                        </div>
                        
                        
                        <div className="process__card process__card--5">
                        
                              <img src={world} alt="Meeting" className="process__icon" />
                              <h4 className="process__number">05</h4>
                              <h3 className="process__title">Live</h3>
                              <p className="process__text">We push your site live to the world. Engaging your customers with a fresh, new look and feel.</p>
                              
                        </div>
                        
                  </div>
            </section>

            <div className="border-6">&nbsp;</div>

            <div className="border-7">&nbsp;</div>

            <section id="work" className="work">

                  <h2 className="work__heading">Our Work</h2>

                  <div className="work__grid">

                        <img src="../images/projects/Backroom_International_Hire_Solutions.png" alt="Backroom Internation Hire Solutions" className="work__img" />

                        <div className="work__text">
                              <h3 className="work__title">Backroom International Hire Solutions</h3>
                              <p className="work__description">Jack from Backroom approached us to come up with a modern new look for the backroom website. Here is what we came up with...</p>
                              <br></br>
                              <a href="https://www.backroom.co.uk/" rel="noopener noreferrer" target="_blank">
                              <p className="work__link">Check me out &#8594;</p>
                              </a>
                        </div>

                        <img src="../images/projects/Metrics.png" alt="Metrics" className="work__img" />

                        <div className="work__text">
                              <h3 className="work__title">Metrics</h3>
                              <p className="work__description">Metrics is an application we built for djca Chartered Accoutants. It retrieves jobs from their CRM system and allows employees to log time spent on each job. We can then use the data to give accurate visibility on how long each job takes and the profit/loss on each job.</p>
                        </div>

                        <img src="../images/projects/Spindrift_Projects.png" alt="Spindrift Projects" className="work__img" />

                        <div className="work__text">
                              <h3 className="work__title">Spindrift Projects</h3>
                              <p className="work__description">We used a lot of imagery from projects on this site to really show off the shows Spindrift Projects design.</p>
                              <br></br>
                              <a href="https://www.spindriftprojects.com/" rel="noopener noreferrer" target="_blank">
                              <p className="work__link">Check me out &#8594;</p>
                              </a>
                        </div>
                  </div>


            </section>

            <div className="border-8">&nbsp;</div>

            <div className="border-9">&nbsp;</div>

            <section id="tech" className="tech">

                  <h2 className="tech__heading">Technology</h2>

                  <div className="tech__tech-grid">

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src="../images/technology/React_JS_Logo.png" alt="React JS" className="tech__img" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                                    </div>
                        </motion.div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:0.3}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src="../images/technology/Redux_Logo.png" alt="Redux" className="tech__img" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                                    </div>
                        </motion.div>

                        
                        <div className="tech__card tech__card--node">
                              <motion.div
                                    animate={{opacity: 1}}
                                    transition={{duration: 1, delay:0.6}}
                                    initial={{opacity: 0}}>
                                          <img src="../images/technology/Node_JS_Logo.png" alt="Node JS" className="tech__img tech__img--large" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                              </motion.div>
                        </div>
                        
                        

                        

                        <div className="tech__card tech__card--mongodb">
                              <motion.div
                                    animate={{opacity: 1}}
                                    transition={{duration: 1, delay:0.9}}
                                    initial={{opacity: 0}}>
                                          <img src="../images/technology/MongoDB_Logo.png" alt="Mongo DB" className="tech__img tech__img--large" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                              </motion.div>
                        </div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:1.2}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src="../images/technology/JavaScript_Logo.png" alt="Java Script" className="tech__img" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                                    </div>
                        </motion.div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:1.5}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src="../images/technology/BCrypt_Logo.png" alt="BCrypt" className="tech__img" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                                    </div>
                        </motion.div>

                        

                        

                        <div className="tech__card tech__card--sass">

                              <motion.div
                                    animate={{opacity: 1}}
                                    transition={{duration: 1, delay:1.8}}
                                    initial={{opacity: 0}}>
                                          <img src="../images/technology/Sass_Logo.png" alt="Sass" className="tech__img tech__img--large" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                              </motion.div>
                        </div>

                        <div className="tech__card tech__card--aws">
                              <motion.div
                                    animate={{opacity: 1}}
                                    transition={{duration: 1, delay:2.1}}
                                    initial={{opacity: 0}}>
                                          <img src="../images/technology/AWS_Logo.png" alt="Amazon Web Services" className="tech__img tech__img--large" />
                                          {/* <h4 className="tech__heading-secondary"></h4> */}
                              </motion.div>
                        </div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:2.4}}
                              initial={{opacity: 0}}>

                                    <div className="tech__card">
                                          <img src="../images/technology/D3_Data_Driven_Documents_Logo.png" alt="D3 Data Driven Documents" className="tech__img" />
                                          <h4 className="tech__heading-secondary">D3 Charts</h4>
                                    </div>
                        </motion.div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:2.7}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src="../images/technology/Heroku_Logo.png" alt="Heroku" className="tech__img" />
                                          {/* <h4 className="tech__heading-secondary">D3 Charts</h4> */}
                                    </div>
                        </motion.div>


                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:3.0}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src={ai} alt="Adobe Illustrator" className="tech__img" />
                                          <h4 className="tech__heading-secondary">Illustrator</h4>
                                    </div>
                        </motion.div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:3.3}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src={xd} alt="Adobe XD" className="tech__img" />
                                          <h4 className="tech__heading-secondary">XD</h4>
                                    </div>
                        </motion.div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:3.6}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src={ae} alt="Adobe After Effects" className="tech__img" />
                                          <h4 className="tech__heading-secondary">AE</h4>
                                    </div>
                        </motion.div>

                        <motion.div
                              animate={{opacity: 1}}
                              transition={{duration: 1, delay:3.9}}
                              initial={{opacity: 0}}>
                                    <div className="tech__card">
                                          <img src={ps} alt="Adobe Photoshop" className="tech__img" />
                                          <h4 className="tech__heading-secondary">Photoshop</h4>
                                    </div>
                        </motion.div>
                  </div>

            </section>

            <div className="border-10">&nbsp;</div>

            <div className="border-11">&nbsp;</div>

            <section id="contact" className="contact">

                  <h2 className="contact__heading">Get In Touch</h2>

                
                  <form onSubmit={handleSubmit} className="contact__container">
                        <div>
                              <h4 className="form__input-label contact__label">First Name</h4>
                              <input onChange={handleChange} className="form__input form__input--small" type="text" value={details.fName} name="fName" required/>
                        </div>
                        <div>
                              <h4 className="form__input-label contact__label">Last Name</h4>
                              <input onChange={handleChange} className="form__input form__input--small" type="text" value={details.lName} name="lName" required/>
                        </div>
                        <div>
                              <h4 className="form__input-label contact__label">email</h4>
                              <input onChange={handleChange} className="form__input form__input--small" type="email" value={details.email} name="email" required/>
                        </div>
                        <div>
                              <h4 className="form__input-label contact__label">Message</h4>
                              <textarea onChange={handleChange} className="form__text-area" type="textarea" rows={12} value={details.message} name="message" required/>
                        </div>
                        
                        <button className="btn btn__secondary contact__btn" type="submit">Send Message</button>
                  </form>

                  

                  

            </section>

            <div className="border-12">&nbsp;</div>

            {loading ? <Loading /> : <div className="loading__nbsp">&nbsp;</div>}
      </main>
    ); 
  };
  
  export default IndexMain;