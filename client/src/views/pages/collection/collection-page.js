import './collection-page.scss'
import CollectionItem from '../../components/collection-item'
import React from 'react'
import { connect } from 'react-redux'
import {selectCollection, selectIsCollectionsLoaded} from '../../../redux/shop/selectors'
import WithSpinner from '../../components/spinner'
import { compose } from 'redux'
function CollectionPage({collection:{items, title} }) {
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className="items">
                
                {
                    items.map(item=> <CollectionItem key = {item.id} item={item}/>)
                }
                
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
    isLoading: !selectIsCollectionsLoaded(state)
    
})

export default compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)
