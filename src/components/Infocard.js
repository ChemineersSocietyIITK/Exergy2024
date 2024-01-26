import React from 'react'

export default function Infocard(props) {
    return (
            <div class="card info-card" >
                <div class="card-body">
                    <h2 class="card-title gradient-text">{props.title}</h2>
                    <p class="card-text">{props.text}</p>
                    <a href={props.link} class="btn btn-dark" target={props.target}>Explore</a>
                </div>
            </div>
    )
}
