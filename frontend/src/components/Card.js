import React from 'react'

export default function Card({title,subject}) {
    return (
        <>
            <div class="card mt-3">
                <div class="card-header">
                {title}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{subject}</h5>
                    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
                    <button class="btn btn-primary">Take it</button>
                </div>
            </div>
        </>
    )
}
