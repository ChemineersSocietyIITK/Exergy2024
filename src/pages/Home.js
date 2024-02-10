import React, { useEffect } from 'react';
import Infocard from '../components/Infocard';
import $ from 'jquery';
import Background from '../components/Background'
import Footer from '../components/Footer';
import Landing from '../components/Landing';
import Carousel from '../components/Carousel';
import Navibar from '../components/Navbar';
export default function Home() {
    // useEffect(() => {
    //     $(".myHome").hide();
    //     setTimeout(() => {
    //         $(".myHome").show(400);
    //     }, 8600);
    // }
    //     , [])
    return (
        <div className='container home m-0 p-0'>


            <div className='myHome'>
                <Navibar />
                <Background />
                <div className="container-fluid home">
                    <Carousel pagename="EXERGY'24" text="ECHOES OF EXOTHERMIA" />
                    <div className="row">
                        <div className="col">
                            <Infocard title="Competitions" text="Prepare to unleash your creativity and expertise in the exhilarating competitions organised by EXERGY. Engage in thrilling challenges that will put your skills to the test, offering a platform to showcase your talent and innovation. 
" link="#/competitions" target = "_self"/>
                        </div>
                        <div className="col">
                            <Infocard title="Workshops" text="Unlock the power of innovation and mastery with EXERGY's exclusive workshop series designed to elevate your skills and expertise in cutting-edge tools and technologies. Join us for hands-on, immersive sessions that delve into MATLAB, machine learning in chemical engineering, Python, COMSOL, Mathematica, and Aspen, opening new frontiers in your professional journey" link="#/workshops" target = "_self"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Infocard title="Talks" text="EXERGY invites you to explore a dynamic array of thought-provoking talks that delve into the realms of sustainability, Industry 4.0, geopolitics, and the fascinating world of machine learning (ML) and artificial intelligence (AI). Our curated series of discussions bring together experts and visionaries to shed light on the latest developments and pressing issues in these critical areas.
" link="#/talks" target = "_self"/>
                        </div>
                        <div className="col">
                            <Infocard title="Campus Ambassador" text="Embark on an extraordinary journey at EXERGY - Echoes of Exothermia by Chemineers Society at IIT Kanpur. As an Ambassador, delve into the captivating theme of thermodynamics, showcasing your prowess. Win prestigious goodies valued at ₹10,000. Click to unravel exclusive details and position yourself as a trailblazer in the realm of chemical engineering innovation. 
" link="https://unstop.com/internships/campus-ambassador-internship-exergy-2024-iit-kanpur-863863" target = "_blank"/>
                        </div>
                    </div>
                    <Footer />
                </div>

            </div>
        </div>

    )
}
