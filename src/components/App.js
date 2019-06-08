import React, {useState, useEffect} from 'react';
import {getMovies} from '../api';
import HomeScreen from "../screens/HomeScreen";
import styled from "styled-components";


const App = () => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMoviesList = async () => {
      try {
        let m = await getMovies();
        setMovies(m);
      }catch (err) {
        console.log('err', err)
      }
      
    };
    getMoviesList();

  }, []);
  return (
    <div className="App">
      {movies !== undefined && movies.length > 0 ? <HomeScreen movies={movies}></HomeScreen> : <Center>Loading...</Center> }
    </div>
  )
}

const Center = styled.div`
  text-align:center;
  height:100vh;
  line-height:100vh;
`


export default App;