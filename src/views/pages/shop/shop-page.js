import React from 'react'
import CollectionOverview from '../../components/collections-overview'
import CollectionPage from '../collection'
import { Route } from 'react-router-dom'

function ShopPage({match}) {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}



export default ShopPage
