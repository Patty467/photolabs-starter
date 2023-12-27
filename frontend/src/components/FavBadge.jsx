import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {
  const {
    isFavePhotoExist
  } = props

  return (
    <div className='fav-badge'>
      <FavIcon selected={true} displayAlert={!!isFavePhotoExist}/>
    </div>
  ) 
};

export default FavBadge;