import './App.css';

import Grid from '@mui/material/Unstable_Grid2';
import {Box} from '@mui/material';
import _ from "lodash";

import SearchBar from './components/SearchBar';
import Description from './components/Description';
import VideoList from './components/VideoList';
import axios from 'axios';
import { useEffect, useState } from 'react';


  //  const API_KEY='  AIzaSyDzR-YMoH0CcxtKOVsbMKLPklLxMO2emzE';
const URL='https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDzR-YMoH0CcxtKOVsbMKLPklLxMO2emzE&type=video&q=';

function App() {
  const[videoDesc,setVideoDesc]=useState();
  const[videoList,setVideoList]=useState([]);
  const[videos,setVideos]=useState();
  const onChange=(term)=>
    {
    axios.get(`${URL}${term}`).then(res =>
       {
      setVideos(res.data);
      setVideoDesc(res.data.items[0]);
      setVideoList(res.data.items);
      })
                                   
  }
const onVideoSelection=(id)=>{
  setVideoDesc(videos.items[id]);
}

  useEffect(()=>{
    axios.get(`${URL}kidvskat`).then(res => {
     setVideos(res.data);
      setVideoDesc(res.data.items[0]);
      setVideoList(res.data.items);
    })
  },[])
  const VideoSearch=_.debounce(term => onChange(term),300);
  return (

    <Box sx={{ flexGrow: 1, p: "0 20px" }}>
      <SearchBar onChange={VideoSearch}/>
     
      <Grid container sx={{ pt: "20px" }}>
        <Description videoDesc={videoDesc}/>
        <VideoList videoList={videoList} onVideoSelection={onVideoSelection}/>
      </Grid>
    </Box>
  );

}

export default App;
