import React from 'react';
import ShareIcon from '@mui/icons-material/Share'
import MessageIcon from '@mui/icons-material/Message'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import './VideoSidebar.css';


function VideoSidebar({ messages, shares, likes }) {
    const [liked, setLiked] = useState(false);

    {
        liked ? (
            <FavoriteIcon fontSize='large' onClick={(e) => setLiked(false)} />
        ) : (
            <FavoriteBorderIcon fontSize='large' onClick={(e) => setLiked(true)} />
        )
    }

    return (
        <div className='videoSideBar'>
            <div className='videoSideBarButon'>
                {liked ? (
                    <FavoriteIcon fontSize='large' onClick={(e) => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize='large' onClick={(e) => setLiked(true)} />
                )}
                <p>{liked ? `${likes + 1}` : `${likes}`}</p>
            </div>
            <div className='videoSideBarButon'>
                <MessageIcon fontSize='large' />
                <p>{messages}</p>
            </div>
            <div className='videoSideBarButon'>
                <ShareIcon fontSize='large' />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar;