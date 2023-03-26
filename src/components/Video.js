import React, {useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'

function Video({channel, description, song, likes, shares, messages, url}) {
    const [playing, setPlaying] = useState(true);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if(playing){
            videoRef.current.pause()
            videoRef.current.muted = true
            setPlaying(false)
        } else {
            videoRef.current.play()
            videoRef.current.muted = false;
            setPlaying(true)
        }
    }
    return (
        <div className='video'>
            <video className="video_player" loop autoPlay preload="auto" muted onClick={onVideoPress} ref={videoRef} src={url}></video>
            <VideoFooter channel={channel} description={description} song={song}/>
            <VideoSidebar messages={messages} shares={shares} likes={likes}/>
        </div>
    )
}

export default Video;
