import React, { Component } from 'react'
import CollectionOverview from '../../components/collections-overview'
import CollectionPage from '../collection'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import {selectIsFetchingCollections, selectIsCollectionsLoaded} from '../../../redux/shop/selectors'
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
                    render={(props) => <CollectionOverview isLoading={this.props.isFethingCollections} {...props} />} />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPage isLoading={!this.props.isCollectionsLoaded} {...props} />} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFethingCollections: selectIsFetchingCollections(state),
    isCollectionsLoaded: selectIsCollectionsLoaded(state)
})

const mapDispatchToProps = {
        fetchCollections: fetchCollections
    }



export default connect(mapStateToProps, mapDispatchToProps)(ShopPage) 
