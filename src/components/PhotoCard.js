import React from 'react'

function PhotoCard(props){
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.url} alt="nasa"/>
      <p>{props.explanation}</p>
    </div>
  )

}

export default PhotoCard;