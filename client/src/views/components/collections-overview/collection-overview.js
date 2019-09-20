import './collection-overview.scss'
import { connect } from 'react-redux'
import CollectionPreview from '../collection-preview'
import { selectCollectionsForOverview, selectIsFetchingCollections } from '../../../redux/shop/selectors'
import WithSpinner from '../spinner'
import { compose } from 'redux'
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
    collections: selectCollectionsForOverview(state),
    isLoading: selectIsFetchingCollections(state),
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

