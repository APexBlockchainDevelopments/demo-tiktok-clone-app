import React from 'react'
import videoMetaData from './metadata/videos.json'
import './App.css';
import Video from './components/Video'

function App() {
  const videos = videoMetaData
  return (
    <div className="App">
      <div className='container'>
          {videos.map((video, index)=>{
            return(
              <Video key={index} channel={video.channel} description={video.description} song={video.song} likes={video.likes}
              shares={video.shares} messages={video.messages} url={video.url}></Video>
            )
          })}
      </div>
    </div>
  );
}

export default App;
