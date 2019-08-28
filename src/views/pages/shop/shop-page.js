import React, { Component } from 'react'
import ShopData from './data'
import CollectionPreview from '../../components/collection-preview'

export class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: ShopData
        }
    }
    render() {
        return (
            <div className="shop-page">
                {
                    this.state.collections.map(({id, ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage
