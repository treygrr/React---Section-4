import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos}) => {
const renderedList = videos.map((video) => {
    console.log(video);
    return <VideoItem key={video.id.videoId} video={video}/>;
});

    // props.videos
    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}

export default VideoList;