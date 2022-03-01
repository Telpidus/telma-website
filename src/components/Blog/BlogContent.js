import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import ToText from "../../utils/ToText";
import axios from "axios";
import { Row, Col } from "react-bootstrap";

function BlogContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  //we can change this url after
  const DEV_TO_URL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@telma.laurentino";

  const getPosts = async () => {
    try {
      const result = axios.get(DEV_TO_URL).then((res) => {
        console.log(res);
        return res.data.items;
      });
      return result;
    } catch (error) {
      console.log("WE HAVE FETCH POST ERROR", error);
    }
  };

  useEffect(() => {
    getPosts().then((res) => {
      setPosts(res);
      setLoading(false);
    });
  }, []);

  const blogCardsArray = posts.map((post) => (
    <Col md={4} className="project-card" key={post.guid}>
      <BlogCard
        imgPath={post.thumbnail}
        link={post.link}
        title={post.title}
        description={`${ToText(post.description.substring(0, 1000))}`}
      />
    </Col>
  ));

  if (!loading) {
    return (
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {blogCardsArray}
      </Row>
    );
  } else {
    return <div>Getting coffee ⌛...</div>;
  }
}

export default BlogContent;
