import React from 'react'
import './photoCard.scss'
import {Card, Image} from 'semantic-ui-react';

function PhotoCard(props){
  console.log(props)
  return (
    <Card className="photo-card">
      {props.type === 'video' ?
        (<iframe src={props.url}></iframe>)
        :
         (<Image src={props.url} alt="nasa"/>)}   
      <Card.Content>
        <Card.Description className="content">
          <h2>{props.title}</h2>
          <p>{props.date}</p>
          <p>{props.explanation}</p>
          <p>{props.type}</p>
        </Card.Description>
      </Card.Content>
    </Card>
  )

}

export default PhotoCard;