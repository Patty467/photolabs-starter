import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const {
    imageSource,
    profile,
    username,
    city,
    country,
    photo,
    toggleFavorite,
    favorites,
    openModal
  } = props;

  const isFavorited = favorites.includes(photo.id);
  
  return (
    <div className="photo-list__item" onClick={(e) => openModal(e, photo)}>
    <PhotoFavButton 
      isFavorited={isFavorited} 
      onClick={() => toggleFavorite(photo.id)}
    />
      <img className="photo-list__image" src={imageSource}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile}/>
        <div className="photo-list__user-details-text">
          <p className="photo-list__user-info"> {username}</p>
          <p className="photo-list__user-location"> {city}, {country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;