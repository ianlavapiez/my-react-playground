import React, { lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'

import Spinner from '../../components/spinner/spinner.component'

const CollectionsOverview = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
)
const CollectionPage = lazy(() => import('../collection/collection.container'))

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props

    fetchCollectionsStart()
  }

  render() {
    const { match } = this.props

    return (
      <div className='shop-page'>
        <Suspense fallback={<Spinner />}>
          <Route exact path={`${match.path}`} component={CollectionsOverview} />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
        </Suspense>
      </div>
    )
  }
}

export default ShopPage
