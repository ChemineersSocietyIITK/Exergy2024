import React from 'react'

export default function TalksCard(props) {
    return (
        <div>
            <div className="card mb-3 p-2" style={{width: "40vw", backgroundColor:"#18191f", color:"white", border:"2px solid #ff4500"}}>
                <div className="row g-0">
                    <div className="col-md-4" >
                        <img src={props.img} className="img-fluid start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body" >
                            <h3 className="card-title gradient-text"><a href={props.link} target='_blank' style={{textDecoration:"none", color:"white"}}>{props.name}</a></h3>
                            <h5 className="card-text"><i>{props.title}</i></h5>
                            <h5 className="card-text">{props.info}</h5>
                            <h5 className="card-text">{props.mode}</h5>
                            <h5 className="card-text">{props.time}</h5>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
