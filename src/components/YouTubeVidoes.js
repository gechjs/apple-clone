import React, { useEffect, useState } from "react";

function YouTubeVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyAbAxEPdoW3eX7FLt1-5m8O3q7fB_8zJnQ"
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <div className="youTubeContainer">
      <div className="youTubeFixedContainer row">
        {videos.map((obj) => {
          const img = obj.snippet.thumbnails.high.url;
          const videoId = obj.id.videoId;

          return (
            <div className="eachItems col-sm-12 col-md-6" key={videoId}>
              <a
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
              >
                <div className="thumbnail">
                  <img src={img} alt={obj.snippet.title} className="w-100" />
                </div>
                <div className="youtubeTitle">{obj.snippet.title}</div>
              </a>
              <div className="youtubeDesc">{obj.snippet.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default YouTubeVideos;
