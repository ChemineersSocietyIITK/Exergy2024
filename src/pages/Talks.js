import React, { useEffect } from 'react'
import Background from '../components/Background'
import Navibar from '../components/Navbar'
import Footer from '../components/Footer'
import TalksCard from '../components/TalksCard'
import PanelCard from '../components/PanelCard'
import Carousel from '../components/Carousel'
import SahilSingala from '../images/sahilsingla.jpg'
import Ananya from '../images/ananyasrivastava.jpg'
import Avantika from '../images/avantika.jpg'
import vijay from '../images/vijay.jpg'
import joy from '../images/joy_pic_large.jpg'
export default function Talks() {
  return (
    <div className='myTalks'>
      <Navibar />
      <Background />
      <Carousel pagename="TALKS" />
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center m-3">
          <h1 className='gradient-text' style={{fontSize:"8vw"}}>TALKS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center m-3">
          <TalksCard name="Vijay Parikh" link="https://www.linkedin.com/in/vijay-parikh-a28395113/?originalSubdomain=in" title="Managing Director at TRANSCONT (INDIA) FINVEST PRIVATE LIMITED" mode="Mode : Offline" time="Time : 2nd March at 10:00 A.M." img={vijay} />
        </div>
      </div>
      <div className="row ">
        <div className="col d-flex justify-content-center align-items-center m-3">
          <TalksCard name="Ananya Srivastava" title="R&D Strategy Analyst at Amogy" info="Topic : Journey and tips on Higher Education" mode="Mode : Online" time="Time : 3rd March at 9:30 A.M." img={Ananya} link="https://www.linkedin.com/in/nanyasrivastav/"/>
        </div>
        <div className="col d-flex justify-content-center align-items-center m-3">
          <TalksCard name="Joy Bhattacharjee"  title="Founder Kanopy Solutions Pvt. Ltd" mode="Mode : Offline" time="Time : 2nd March at 11 A.M." img={joy} info="Topic : Entrepreneurship in chemical engineering" />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center m-3">
          <TalksCard name="Sahil Singla" img={SahilSingala} info="Topic : Discovering How Oil Refineries Work: Making a Sustainable Future Simple" title="Oil Economics and Optimisation Specialist at Total Energies" mode="Mode : Online" time="Time : 2nd March at 9:30 P.M." link="https://www.linkedin.com/in/sahil-singla-a8779418/"/>
        </div>
        <div className="col d-flex justify-content-center align-items-center m-3">
          <TalksCard name="Avantika Singh" title="Senior Decarbonization Engineer at Carbon Direct" info="Topic : Engineering a Sustainable Future: Decarbonization Strategies and Innovations" mode="Mode : Online" time="Time : 3rd March at 11:00 A.M." img={Avantika} link="https://www.linkedin.com/in/avantikasingh/" />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center m-3">
          <h1 className='gradient-text' style={{fontSize:"8vw"}}>PANEL DISCUSSION</h1>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center m-3">
          <PanelCard/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
