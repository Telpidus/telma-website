import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import ToText from "../../utils/ToText";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import DotLoader from "react-spinners/DotLoader";

function BlogContent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  //we can change this url after
  const MEDIUM_URL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@telma.laurentino";

  const getPosts = async () => {
    try {
      const result = axios.get(MEDIUM_URL).then((res) => {
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
    <Col lg={4} md={6} sm={12} className="project-card mb-5" key={post.guid}>
      <BlogCard
        imgPath={post.thumbnail}
        link={post.link}
        title={post.title}
        description={`${ToText(post.description.substring(0, 1000))}`}
      />
    </Col>
  ));

  return (
    <Row style={{ justifyContent: "center", minHeight: "200px" }}>
      {loading ? (
        <DotLoader color={"#007e87"} loading={loading} size={100} />
      ) : (
        blogCardsArray
      )}
    </Row>
  );
}

export default BlogContent;
