import './menu-item.scss'
import React from 'react'
import { withRouter } from 'react-router-dom'

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
    return (
        <div
            onClick={()=>history.push(`${match.url}${linkUrl}`)}
            className={`menu-item ${size}`}
        >
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className="background-image"
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
