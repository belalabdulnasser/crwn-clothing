/* jshint esversion:9 */

import React from 'react';

import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection_preview/collection_preview';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,

    };
  }

  render() {
    const collections = this.state.collections;
    return (
      <div className='shop_page'>
        {
          collections.map(({ id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;