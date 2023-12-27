import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const {
    topicData,
    changeTopic
  } = props

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map(topic => (
        <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        title={topic.title} 
        onClick={() => changeTopic(topic.id)}
        />
      ))}
    </div>
  );
};

export default TopicList;