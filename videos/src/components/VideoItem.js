import React from 'react'

const VideoItem = ({video}) => {
    return(
        <div key={video.id.videoId}>
            <img src={video.snippet.thumbnails.medium.url} alt="thumbnail"></img>
            {video.snippet.title}

        </div>
    );
}

export default VideoItem;