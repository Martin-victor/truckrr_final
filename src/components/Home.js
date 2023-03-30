import Videoslider from '../components/Videoslider';
import './home.css';
function Home() {
  return (
    <div className='body-content'>

      <div className='Top-content'>
        <div className='left-content'>
          <p className='logistcs'>THE FUTURE OF LOGISTICS
            <span className='hand'>  IS IN OUR HANDS</span> </p>
          <p className='text-lorem'>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
          <button className='btn'>Get Started</button>
        </div>
        <div className='image-tag'>
          <img src={require('../image/LANDING PAGE 01.png')} alt="logo" />

        </div>

      </div>


      {/* second container page */}

      <div className='second-conatainer'>
        <div className='heading-text'>
          <p className='services'>  Our Services</p>
          <p className='offer'> We Offer a Wide Variety Of
            IT Services<span className='dat'>.</span></p>

        </div>
        <div className='fooder-content'>

          <div className='logo-image'>
            <img src={require('../image/ux-interface.png')} alt="logo" />

            <h2 className='saas'>SAAS</h2>
            <h5 className='mobile'>Mobile App, Website</h5>
            <p  >Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
          </div>

          <div className='logo-image'>
            <img src={require('../image/Vector.png')} alt="logo" />

            <h2 className='saas1'>solutions</h2>
            <h5 className='mobile'>Mobile App, Website</h5>
            <p >Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
          </div>

          <div className='logo-image'>
            <img src={require('../image/Group.png')} alt="logo" />

            <h2 className='saas'>CRM</h2>
            <h5 className='mobile'>Mobile App, Website</h5>
            <p >Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
          </div>

          <div className='logo-image'>
            <img src={require('../image/computer.png')} alt="logo" />

            <h2 className='saas1'>Trucking</h2>
            <h5 className='mobile'>Mobile App, Website</h5>
            <p  >Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
          </div>

          <div className='logo-image'>
            <img src={require('../image/mobile.png')} alt="logo" />

            <h2 className='saas2'>Drivers</h2>
            <h5 className='mobile'>Mobile App, Website</h5>
            <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
          </div>

          <div className='logo-image'>
            <img src={require('../image/Vector1.png')} alt="logo" />

            <h2 className='saas3'>Marketplace</h2>
            <h5 className='mobile'>Mobile App, Website</h5>
            <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
          </div>

        </div>

      </div>

      <div className='third-container'>
        <div className='leftside-content'>
          <h1><span className='using'>Using Sensors , AI & ML</span> for
            optimized and efficient
            operation
          </h1>
          <p> Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue. Cras ut.Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
        </div>
        <div className='rightside-image'>
          <img src={require('../image/Frame-ai.png')} alt="logo" />

        </div>
      </div>

      <div className='fouth-container'>
        <div className='text-heading'>
          <p>Features</p>
          <h1>What We Do</h1>

        </div>
        <div className='grid-content'>
          <div className='fouth-content'>
            <div className='image-cotent'>
              <div className='police-leftside-image'>
                <img className='police' src={require('../image/policeman.gif')} alt="logo" />


              </div>
              <div className='police-rigthside-image' >
                <img className='Shape' src={require('../image/Shape.png')} alt="logo" />
              </div>
            </div>
            <div className='fouth-fooder-content'>
              <h2> Driver-Verification</h2>
              <h6>Mobile App, Website</h6>
              <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
            </div>
          </div>
          <div className='fouth-content'>
            <div className='image-cotent'>
              <div className='police-leftside-image'>
                <img className='police' src={require('../image/search.gif')} alt="logo" />


              </div>
              <div className='police-rigthside-image' >
                <img className='Shape' src={require('../image/Shape.png')} alt="logo" />
              </div>
            </div>
            <div className='fouth-fooder-content'>
              <h2>Vehicle-Verification</h2>
              <h6>Mobile App, Website</h6>
              <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
            </div>
          </div>
          <div className='fouth-content'>
            <div className='image-cotent'>
              <div className='police-leftside-image'>
                <img className='police' src={require('../image/payment.gif')} alt="logo" />


              </div>
              <div className='police-rigthside-image' >
                <img className='Shape' src={require('../image/Shape.png')} alt="logo" />
              </div>
            </div>
            <div className='fouth-fooder-content'>
              <h2>Fastag</h2>
              <h6>Mobile App, Website</h6>
              <p>Lorem ipsum dolor sit amet, consec tet ur adipiscing elit. Accumsan sed faucibu s faucibus augue.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='poweredby-container'>
        <p>Powered by</p>
        <div className='powered-content'>

          <div className='powered-image'>
            <img src={require("../image/Startuptn.png")} />
            <img src={require("../image/Startuptn1.png")} />
            <img src={require("../image/hp.png")} />
          </div>
          <div className='powered-footer-img'>
            <img src={require("../image/hdfc-bank-logo.png")} />
            <img src={require("../image/Fastag-logo.png")} />
          </div>
        </div>

      </div>
      <div className='signal-update-container'>
        <div className='our-blog'>
          <p>Our Blog</p>
          <h1>Every Singel Update From Here</h1>

          {/* <video src={require("../image/Winter Driving Tips For Truck Drivers  tamildriversafety1080p.mp4")} controls>

          </video> */}
             



        </div>
          <Videoslider/>
      </div>
      <div className="our-clients-container">
        <div className="our-client">
          <div className="our-client-topcontent">
            <p className="client">Client reviews</p>
            <h2>Some Great Words From Our Clients</h2>
          </div>
          <div className="our-client-footer">
            <div className='our-client-firstsection'>
              <img src={require("../image/pro7.jpg")} alt="logo" />
              <h3>Mohan Raj</h3>
              <p className="india"> India,Bombay</p>
              <p>Ajay is a great developer; very
                experienced and able to get the job done quickly! I am hiring him again for my next project. </p>
            </div>
            <div className='our-client-firstsection'>
              <img src={require("../image/pro4.jpeg")} alt="logo" />
              <h3>saira banu</h3>
              <p className="india">India,Goa</p>
              <p>He was always available for
                communication when needed and did a really good job. I will work with him in the future.  </p>
            </div>
            <div className='our-client-firstsection'>
              <img src={require("../image/pro8.jpg")} alt="logo" />
              <h3>Sunder raj</h3>
              <p className="india">India,Nagpur</p>
              <p>Ketan is good skill person with good verbal and written English.He’s review our app in short time and we defined our tasks </p>
            </div>
          </div>


        </div>

      </div>
      <div className='sixth-container'>
        <div className='background-image'>

          <img src={require('../image/back.png')} alt='logo' />
          <h1 className='take'>Take advantage of all the features by
            downloading the app</h1>
          <p className='download'>Download Truckrr app</p>

        </div>
        <button className="apple"><img src={require("../image/Apple logo.png")} /> <span className="store">Apple store</span></button>
        <button className="google"><img src={require("../image/google.png")} /> <span className="play">Google Play</span></button>
      </div>






      <div className='fivth-container'>
        <div className='footer-section'>
          <div className='first-section'>
            <img className='footer-logo' src={require("../image/truckrr.png")} alt="logo" />
            <h3>Truckrr Information Services Private Limited</h3>
            <p>27, New MGR Road ,
              No.4 , Veeramamunivar 1st Street,
              Kandhanchavadi, Perungudi,
              Chennai-600096.
            </p>
            <div className='display-icon'>
              <div className='icon1'>
                <a href=''> <img className='icon' src={require('../image/icon.png')} alt='logo' /></a>
              </div >
              <div className='icon2'>
                <a href=''> <img className='icon' src={require('../image/icon2 (2).png')} alt='logo' /></a>
              </div>
              <div className='icon3'>
                <a href=''> <img className='icon' src={require('../image/icon 3(3).png')} alt='logo' /></a>
              </div>
              <div className='icon4'>
                <a href="https://www.linkedin.com/company/truckrr/"><img className='icon' src={require('../image/linked.png')} alt='logo' /></a>
              </div>
            </div>
          </div>
          <div className='second-section'>
            <h2>Company</h2>
            <p>About Us</p>
            <p>Our Work</p>
            <p>Client</p>
            <p>Our Blog</p>
            <p>Contact US</p>
          </div>
          <div className='third-section'>
            <h2>Services</h2>
            <p>SAAS</p>
            <p>Solutions</p>
            <p>CRM</p>
            <p>Tracking</p>
            <p>Drivers</p>
          </div>
          <div className='fouth-section'>
            <h2>Newsletter</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem eget varius viverra in.</p>
            <input className='truckrr' placeholder='rk@truckrr.com' type="truckr" />
            <button className='img'><img src={require("../image/arro.png")} alt='logo' /></button>
          </div>
        </div>
      </div>
      <div className='seventh-container'>
        <div className='footer-copyrigths'>
          <img src={require("../image/rights.png")} alt='logo' />
          <h1>Copyright@2023 Truckkrr Information Services Private Limited </h1>
        </div>
      </div>

    </div>
  );
}
export default Home