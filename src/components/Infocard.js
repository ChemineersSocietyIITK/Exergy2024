import React from 'react'
import { Link } from 'react-router-dom'
export default function Infocard(props) {
    return (
            <div class="card info-card" >
                <div class="card-body">
                    <h2 class="card-title gradient-text">{props.title}</h2>
                    <p class="card-text">{props.text}</p>
                    <Link to={props.link} class="btn btn-dark" target={props.target}>Explore</Link>
                </div>
            </div>
    )
}
