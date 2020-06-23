import React from 'react'

import CollectionPreviewContainer from '../collection-preview/collection-preview.container'

import { CollectionsOverviewContainer } from './collections-overview.styles'

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreviewContainer key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)

export default CollectionsOverview
