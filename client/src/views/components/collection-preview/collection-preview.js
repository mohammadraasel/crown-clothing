import React from 'react'
import './collection-preview.scss'
import CollectionItem from '../collection-item'
import { withRouter } from 'react-router-dom'


function CollectionPreview({title, items, history, match}) {
    return (
        <div className="collection-preview">
            <h1
                onClick={()=>history.push(`${match.url}/${title.toLowerCase()}`)}
                className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index)=> index < 4)
                        .map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}   

export default withRouter(CollectionPreview)
