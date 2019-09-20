import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectIsFetchingCollections = createSelector(
    [selectShop],
    shop=> shop.isFetchingCollections
)
export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop=> !!shop.collections
)
export const selectShopCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForOverview = createSelector(
    [selectShopCollections],
    collections=> collections ? Object.keys(collections).map(key=> collections[key]) : []
)


export const selectCollection = collectionUrlParam => {
    return createSelector(
        [selectShopCollections],
        collections => collections? collections[collectionUrlParam] : null
    )
} 