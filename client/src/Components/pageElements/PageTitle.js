import React from 'react'
import './PageElement.css'

export default function PageTitle({ name, title }) {
    return (
        <div className="row">
            <div className="text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-blue">{title}</strong>
                </h1>
            </div>
        </div>

    )
}