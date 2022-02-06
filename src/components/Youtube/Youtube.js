import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import YoutubeCard from "./YoutubeCard";

function Youtube() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  //we can change this url after
  const YOUTUBE_PLAYLIST_ITEMS_API =
    "https://www.googleapis.com/youtube/v3/playlistItems";

  const getPosts = async () => {
    try {
      const result = axios
        .get(
          `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLFsfg2xP7cbLygIgGT0vaJBBQ550rmzfR&maxResults=15&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        )
        .then((res) => {
          console.log(res.data.items);
          return res.data.items;
        });
      return result;
    } catch (error) {
      console.log("WE HAVE FETCH POST ERROR", error);
    }
  };

  useEffect(() => {
    getPosts().then((res) => {
      setVideos(res);
      setLoading(false);
    });
  }, []);

  const youtubeArray = videos.map((item) => {
    const { id, snippet = {} } = item;
    const { title, thumbnails = {} } = snippet;
    return (
      <Col md={3} className="video-card" key={id}>
        <YoutubeCard
          imgPath={thumbnails.medium.url}
          height={thumbnails.medium.height}
          width={thumbnails.medium.width}
          link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
          title={title}
        />
      </Col>
    );
  });

  if (!loading) {
    return (
      <Container fluid className="youtube-section">
        <Container>
          <h1 className="youtube-heading">My Recent Youtube Posts</h1>
          <p>Do give a read to some of my blogs</p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {youtubeArray}
          </Row>
        </Container>
      </Container>
    );
  } else {
    return <div>Getting coffee ⌛...</div>;
  }
}

export default Youtube;
