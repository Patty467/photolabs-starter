import PhotoFavButton from '../components/PhotoFavButton';
import React from 'react';
import PhotoList from '../components/PhotoList';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const {
    closeModal,
    photo,
    favorites,
    toggleFavorite,
    photoData
  } = props

  const isFavorited = favorites.includes(photo.id);
  const similar_photos = photo.similar_photos;

  return (
    <div className="photo-details-modal">
      <button onClick={closeModal} className="photo-details-modal__close-button">
      <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-modal__list">
        <PhotoFavButton 
          isFavorited={isFavorited} 
          onClick={() => toggleFavorite(photo.id)}
        />
          <img className="photo-details-modal__image" src={photo.urls.full} />
          <div className="photo-list-modal__user-details">
            <img className="photo-list__user-profile" src={photo.user.profile}/>
            <div className="photo-list__user-details-text">
              <p className="photo-list__user-info"> {photo.user.username}</p>
              <p className="photo-list__user-location"> {photo.location.city}, {photo.location.country}</p>
          </div>
      </div>
      </div>
      <div className='photo-modal__list'>
        <h2>Similar Photos</h2>
        <PhotoList 
        favorites={favorites} 
        toggleFavorite={toggleFavorite} 
        photoData={similar_photos}
        openModal={() => {}}
      />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;