import React from 'react'
import './photoCard.scss'
import {Card} from 'semantic-ui-react';

function PhotoCard(props){
  return (
    <Card className="photo-card">
      <h2>{props.title}</h2>
      <img src={props.url} alt="nasa"/>
      <p>{props.explanation}</p>
      <p>{props.date}</p>
    </Card>
  )

}

export default PhotoCard;