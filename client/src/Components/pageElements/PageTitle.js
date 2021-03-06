import React from 'react'
import './PageTitle.css'

export default function PageTitle({ name, title }) {
    return (
        <div className="title-container">
            <div className="text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </h1>
            </div>
        </div>

    )
}