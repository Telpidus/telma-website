import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCard";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  //we can change this url after
  const DEV_TO_URL = "https://dev.to/api/articles?username=monicafidalgo";

  const getPosts = async () => {
    try {
      const result = axios.get(DEV_TO_URL).then((res) => {
        console.log(res);
        return res.data;
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
    <Col md={3} className="project-card" key={post.id}>
      <BlogCard imgPath={post.cover_image} link={post.url} title={post.title} />
    </Col>
  ));

  if (!loading) {
    return (
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Blog </strong> Posts
          </h1>
          <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {blogCardsArray}
          </Row>
        </Container>
      </Container>
    );
  } else {
    return <div>Getting coffee ⌛...</div>;
  }
}

export default Blog;
