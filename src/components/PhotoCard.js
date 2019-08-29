import React from 'react'
import './photoCard.scss'

function PhotoCard(props){
  return (
    <div className="photo-card">
      <h2>{props.title}</h2>
      <img src={props.url} alt="nasa"/>
      <p>{props.explanation}</p>
      <p>{props.date}</p>
    </div>
  )

}

export default PhotoCard;