import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {
    id,
    slug,
    title,
    onClick
  } = props

  return (
    <div className="topic-list__item" onClick={onClick}>
      <p>{title}</p>
    </div>
  );
};

export default TopicListItem;
