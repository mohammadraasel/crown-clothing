import React, { Component } from 'react'
import CollectionOverview from '../../components/collections-overview'
import CollectionPage from '../collection'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollections } from '../../../redux/shop/actions'
class ShopPage extends Component {
    
    componentDidMount() {
        this.props.fetchCollections()
    }

    render() {
        const {match} = this.props
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverview} />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    component={ CollectionPage } />
            </div>
        )
    }
}



const mapDispatchToProps = {
        fetchCollections: fetchCollections
    }



export default connect(null, mapDispatchToProps)(ShopPage) 
