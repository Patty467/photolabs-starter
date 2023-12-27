import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onClick, isFavorited }) {
  const handleClick = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <div className={`photo-list__fav-icon`}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} onClick={handleClick} />
      </div>
    </div>
  );  
}

export default PhotoFavButton;