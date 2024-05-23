import './App.css';

import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  
  const pageSize=6;
  // api = process.env.API_KEY
  const api="246eff4f9851441e872e132a340a3ea5";
  const [progress, setProgress] = useState(0);
  

    return (
      <BrowserRouter>
      <div>
        <NavBar/>
        <LoadingBar
        height= {3}
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={api} key='1' pageSize={pageSize} country='in' category='general'/>}/>
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={api} key='2' pageSize={pageSize} country='in' category='business'/>}/>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={api} key='3' pageSize={pageSize} country='in' category='entertainment'/>}/>
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={api} key='4' pageSize={pageSize} country='in' category='health'/>}/>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={api} key='5' pageSize={pageSize} country='in' category='science'/>}/>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={api} key='6' pageSize={pageSize} country='in' category='sports'/>}/>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={api} key='7' pageSize={pageSize} country='in' category='technology'/>}/>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }

  export default App;