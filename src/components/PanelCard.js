import React from 'react'
import Nikita from '../images/nikita.jpg'
import Neelesh from '../images/neelesh.jpg'
import Mounica from '../images/mounica.jpg'
export default function PanelCard() {
    return (
        <div className="card" style={{ border: "2px solid #ff4500", }}>
            <div className="card-body d-flex justify-content-center flex-column align-items-center" style={{ width: "50vw", backgroundColor: "#18191f", color: "white", }}>
                <div className="card-group"  >
                    <div className="card m-2" style={{ width: "15vw", backgroundColor: "#18191f", color: "white", }}>
                        <img src={Nikita} className="card-img-top" alt="..." />
                        <div className="card-body d-flex justify-content-center flex-column align-items-center">
                            <h3 className="card-title gradient-text">Nikita Agrawal</h3>
                            <h5 className="card-title"><i>Senior Operations Research Scientist</i></h5>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: "15vw", backgroundColor: "#18191f", color: "white", }}>
                        <img src={Neelesh} className="card-img-top" alt="..." />
                        <div className="card-body d-flex justify-content-center flex-column align-items-center">
                            <h3 className="card-title gradient-text">Neelesh Singhal</h3>
                            <h5 className="card-title"><i>CEO at Chemcepts Co.</i></h5>
                        </div>
                    </div>
                    <div className="card m-2" style={{ width: "15vw", backgroundColor: "#18191f", color: "white", }}>
                        <img src={Mounica} className="card-img-top" alt="..." />
                        <div className="card-body d-flex justify-content-center flex-column align-items-center">
                            <h3 className="card-title gradient-text">Mounica Bodapudi </h3>
                            <h5 className="card-title"><i>Optimization Engineer at Dow</i></h5>
                        </div>
                    </div>
                </div>
                <h5 className="card-title">Topic : AI shaping the future</h5>
                <h5 className="card-title">Mode : Online</h5>
                <h5 className="card-title">Time : 2nd March at 2:30 P.M.</h5>
            </div>
        </div>
    )
}
