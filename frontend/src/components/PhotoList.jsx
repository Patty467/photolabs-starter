import React from "react";
import PhotoListItem from './PhotoListItem';
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    favorites,
    toggleFavorite,
    openModal,
    photoData
  } = props;

  return (
    <ul className="photo-list">
      {photoData.map(photo => (
        <PhotoListItem 
        photo={photo} 
        toggleFavorite={toggleFavorite}
        imageSource={photo.urls.regular}  
        profile={photo.user.profile}
        username={photo.user.username}
        city={photo.location.city}
        country={photo.location.country}
        key={photo.id}
        id={photo.id}
        favorites={favorites}
        openModal={openModal}
        />
      ))}
    </ul>
  );
};

export default PhotoList;