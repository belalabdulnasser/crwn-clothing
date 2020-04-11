/* jshint esversion:9 */

import React from 'react';

import './collection_item.scss';

const CollectionItem = ({id, name, imageUrl, price}) => (
  <div className='collection_item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection_footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
);

export default CollectionItem;