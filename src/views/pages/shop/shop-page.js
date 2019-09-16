import React, { Component } from 'react'
import CollectionOverview from '../../components/collections-overview'
import CollectionPage from '../collection'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshopToMap } from '../../../firebase/firebase'
import { connect } from 'react-redux'
import { updateCollections } from '../../../redux/shop/actions'
class ShopPage extends Component {
    state = {
        isLoading: true
    }
    unsubscribeFromSnapshot = null

    componentDidMount() {
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshopToMap(snapshot)
            this.props.updateCollections(collectionsMap)
            this.setState({isLoading: false})
        })
    }

    render() {
        const {match} = this.props
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => <CollectionOverview isLoading={this.state.isLoading} {...props} />} />
                <Route
                    exact
                    path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPage isLoading={this.state.isLoading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = {
        updateCollections: updateCollections
    }



export default connect(null, mapDispatchToProps)(ShopPage) 
