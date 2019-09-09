import './collection-overview.scss'
import { connect } from 'react-redux'
import CollectionPreview from '../collection-preview'
import { selectShopCollections } from '../../../redux/shop/selectors'

import React from 'react'

function CollectionOverview({ collections }) {
    return (
        <div className = 'collection-overview'>
            {
                collections.map(({id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    )
}

const mapStateToProps = state => ({
    collections: selectShopCollections(state)
})

export default connect(mapStateToProps)(CollectionOverview) 

