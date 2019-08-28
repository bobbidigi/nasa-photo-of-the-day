import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.css";
import PhotoCard from './components/PhotoCard'

function App() {

  const [cardState, cardSetter] = useState([])

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then( res =>{
        // handle success
        console.log(res);
        cardSetter(res.data);
      }
      )
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },[])


  return (
    <div className="App">
     <PhotoCard 
      title={cardState.title}
      url={cardState.url}
      explanation={cardState.explanation}
     />
    </div>
  );
}

export default App;
