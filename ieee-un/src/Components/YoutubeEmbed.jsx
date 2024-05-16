import React from 'react'

import "../Styles/youtubeEmbed.sass";

const YoutubeEmbed = (props) => {

  return (
    <div>
        <h3>{props.title}</h3>

        <h4>{props.message}</h4>
        <div className="video-responsive">
            <iframe
            src={`https://www.youtube.com/embed/${props.embedId}`}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            />
        </div> 
    </div>
  )
}

export default YoutubeEmbed