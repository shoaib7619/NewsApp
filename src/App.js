import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  // Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=> {

  // REACT_APP_API_KEY="13da83ca0a7645faacb4764e83106651"

  //  let apiKey= process.env.REACT_APP_API_KEY
    let apiKey='c6930ad608d143ada9be3b9d09461fd6'
  const [progress,setProgress]=useState(0)
 let country='in'
 return (
  <BrowserRouter basename='/NewsApp'>
      <div> 
        <Router>
        <LoadingBar
        height={3}
        color='blue'
        // progress={10}
        
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />


        <NavBar/>
        
        <Switch>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country={country} category="general"/></Route>
        <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country={country} category="general"/></Route>
        <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={6} country={country} category="business"/></Route>
        <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={6} country={country} category="entertainment"/></Route>
        <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={6} country={country} category="general"/></Route>
        <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={6} country={country} category="health"/></Route>
        <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={6} country={country} category="science"/></Route>
        <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={6} country={country} category="sports"/></Route>
        <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={6} country={country} category="technology"/></Route>
        </Switch> 
        </Router>
      </div>
        </BrowserRouter>
    )
  
}


export default App
