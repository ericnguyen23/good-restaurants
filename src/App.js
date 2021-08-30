import React, { useState, useRef } from 'react';
import './App.css';
const axios = require('axios').default

function App() {
  const corsAnywhere = "https://cors-anywhere.herokuapp.com/"
  const [cityVal, setCityVal] = useState('')
  const [highRatings, setHightRatings] = useState([])
  const cityInputRef = useRef('')
  

  const handleInput = (e) => {
    setCityVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // get data from Yelp
   axios.get(`https://api.yelp.com/v3/businesses/search?location=${cityVal}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    },
    params: {
      limit: 50,
    }
  }).then(response => {
    let busnessesArr = response.data.businesses
    console.log(busnessesArr)

    for (const business of busnessesArr) {
      if (business.rating >= 4.5) {
         setHightRatings(state => [...state, business])
      }
    }
   

  }).then(setHightRatings([]))
  .catch(err => console.log('error'))
  }


  
  return (
    <div className="App">
      <h1>Great Restaurants Search!</h1>
      <p>Enter the city and we'll return 50 of the best restaurants in your area, rated 4.5 or higher.</p>
        <h3>Search By City:</h3>
        <form>
          <label>City</label>
          <input type="text" ref={cityInputRef} onBlur={handleInput}></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
        {
          highRatings.map(item => {
            return(
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>{item.rating} Stars</p>
            </div>
            )
          })
        }
    </div>
  );
}

export default App;
