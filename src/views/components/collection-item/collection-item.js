import './collection-item.scss'
import Button from '../button'
import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../../redux/cart/actions'

function CollectionItem({item, addItem}) {
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{backgroundImage: `url(${item.imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name">{item.name}</span>
                <span className="price">{item.price}</span>
            </div>
            <Button
                onClick = {()=>addItem(item)}
                inverted={true}>
               Add to cart 
            </Button>
        </div>
            
        
    )
}

const mapDispatchToProps = {
    addItem: addItem
}

export default connect(null, mapDispatchToProps)(CollectionItem)
