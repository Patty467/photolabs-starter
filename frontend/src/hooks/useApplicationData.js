import { useReducer, useEffect, useState } from 'react';

const initialState = {
  favorites: [],
  isModalOpen: false,
  selectedPhoto: null,
  photoData: [],
  topicData: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return { ...state, favorites: action.payload };
    case 'TOGGLE_MODAL':
      return { ...state, isModalOpen: action.payload };
    case 'SET_SELECTED_PHOTO':
      return { ...state, selectedPhoto: action.payload };
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };
      case 'SET_TOPIC_DATA':
        return { ...state, topicData: action.payload };
    default:
      return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [currentTopicId, setCurrentTopicId] = useState('default');

  //setup default page topic, if user selects a topic from the nav bar, update page layout
  useEffect(() => {
    let url = currentTopicId === 'default' ? 'api/photos' : `api/topics/photos/${currentTopicId}`;

    fetch(url)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
  }, [currentTopicId]);

  //get topic data
  useEffect(() => {
    fetch('api/topics')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
  }, []);

  //establish new topic id if user selects new topic
  const changeTopic = (id) => {
    setCurrentTopicId(id);
  };

  //trigger a modal screen on user click, avoid triggering when clicking the fav button
  const openModal = (e, photo) => {
    if (e.target.className !== 'favorite-button') {
      dispatch({ type: 'SET_SELECTED_PHOTO', payload: photo });
      dispatch({ type: 'TOGGLE_MODAL', payload: true });
    }
  };

  //close the modal screen
  const closeModal = () => {
    dispatch({ type: 'TOGGLE_MODAL', payload: false });
  };

  //manage the fav button
  const toggleFavorite = (photo) => {
    if (state.favorites.includes(photo)) {
      dispatch({ type: 'SET_FAVORITES', payload: state.favorites.filter(fav => fav !== photo) });
    } else {
      dispatch({ type: 'SET_FAVORITES', payload: [...state.favorites, photo] });
    }
  };

  return { state, openModal, closeModal, toggleFavorite, changeTopic };
};

export default useApplicationData;