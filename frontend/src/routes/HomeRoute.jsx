import React from "react";
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const {
    favorites,
    isModalOpen,
    selectedPhoto,
    openModal,
    closeModal,
    toggleFavorite,
    photoData,
    topicData,
    changeTopic
  } = props

  //check if there is a fave photo
  const isFavePhotoExist = favorites.length > 0;

  return (
    <div className="home-route">
      <TopNavigationBar 
      isFavePhotoExist={isFavePhotoExist}
      topicData={topicData}
      changeTopic={changeTopic}
      />
      <PhotoList 
      favorites={favorites} 
      toggleFavorite={toggleFavorite} 
      openModal={openModal} 
      photoData={photoData}
      />
      {isModalOpen && 
      <PhotoDetailsModal 
        closeModal={closeModal} 
        photo={selectedPhoto} 
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        photoData={photoData}
      />}
    </div>
  );
};

export default HomeRoute;