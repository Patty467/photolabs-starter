import React from 'react';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    state: {
      favorites,
      isModalOpen,
      selectedPhoto,
      photoData,
      topicData,
    },
    openModal,
    closeModal,
    toggleFavorite,
    changeTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        favorites={favorites}
        isModalOpen={isModalOpen}
        selectedPhoto={selectedPhoto}
        photoData={photoData}
        openModal={openModal}
        closeModal={closeModal}
        toggleFavorite={toggleFavorite}
        topicData={topicData}
        changeTopic={changeTopic}
      />
    </div>
  );
};

export default App;