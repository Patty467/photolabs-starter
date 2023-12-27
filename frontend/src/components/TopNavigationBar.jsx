import React from 'react';
import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
 const {
  isFavePhotoExist,
  topicData,
  changeTopic
 } = props

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
      topicData={topicData}
      changeTopic={changeTopic}
      />
      <FavBadge isFavePhotoExist={isFavePhotoExist}/>
    </div>
  )
}

export default TopNavigation;