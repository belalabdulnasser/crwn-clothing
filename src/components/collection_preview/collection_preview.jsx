/* jshint esversion:9 */

import React from 'react';

import CollectionItem from '../collection_item/collection_item';
import './collection_preview.scss';

const CollectionPreview = ({title, items}) => (
  <div className='collection_preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        items.filter((item, indx) => indx < 4).map(({id, ...otherItemProps}) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;