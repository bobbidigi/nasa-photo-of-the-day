import React, {useState, useEffect} from "react";
import axios from 'axios'
import "./App.scss";
import PhotoCard from './components/PhotoCard'

function App() {

  const [cardState, cardSetter] = useState({})
  const [date, dateSetter] = useState('')

  useEffect(() => {
    // Make a request for a user with a given ID
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
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
  },[date])


  return (
    <div className="App">

      <form>
       <input onChange={(event) => dateSetter(event.target.value)} type={"date"}></input>
      </form>

      <div className="photo-cards">
        {cardState
        ? <PhotoCard 
            title={cardState.title}
            url={cardState.url}
            explanation={cardState.explanation}
            date={cardState.date}
            type={cardState.media_type}
          /> : <div>loading</div>
          }
      </div>    
     
    </div>
  );
}

export default App;
