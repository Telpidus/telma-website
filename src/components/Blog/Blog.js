import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const token =
    "IGQVJVUXRHcUNKVVpFbnNKN09hUWZAnc1VXZAzBNVFBFTUNSVnFmSUhTNFBQSDIwWk5tN2RGcm1DNWE4R0szbVhoVVJBcnpoZAmZAucFZAabUhxV3ZAnMjZAKY1lxX1VmMlpFMVlLUWR0SjJwRGVxWG82dFlfZAgZDZD";
  //we can change this url after
  const url =
    "https://graph.instagram.com/user_id=17841401299137344?access_token=" +
    token +
    "&fields=id,caption,media_type,media_url,permalink,timestamp";
  //const DEV_TO_URL = "https://dev.to/api/articles?username=monicafidalgo";

  const getPosts = async () => {
    try {
      const result = axios.get(url).then((res) => {
        console.log(res);
        return res.data.data;
      });
      return result;
    } catch (error) {
      console.log("WE HAVE FETCH POST ERROR", error);
    }
  };

  useEffect(() => {
    getPosts().then((res) => {
      console.log("res", res);
      console.log(posts);
      setPosts(res);
      setLoading(false);
    });
  }, []);

  const blogCardsArray = posts.map((post, index) => (
    <img src={post.media_url} alt={post.caption} id={post.id} />
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

//code
// AQDML1KU3V_CkV8kNoIIPV_SDcO9_bUIDCgFwnKY8-2ioKd5JGYoglrUXZq8dkhR6DJ94JTkUaY8cJ4ox87RC9at3WxnHl8KaY8J9J-Ct142O-sDqpG98YMtxyaOsX2a-L0aASWr-1oUug51_8Og8qpX232cpxg6brhCSW4IkmtIrC8AkVHY8t1X7fEtulEM4apLFQiW1bTuCszZyGV77KXmxTNQMiIWIynr0pz3EFdGqA

//{"access_token": "IGQVJVWjZAkRW53SmJEWWVBWlItR1FjMl9OeUM3VTRwdDdxbGR5ZAlliVkdQWHViWV9ILVFZAUVE2U0YteHA1aHkxNlF3TFNBbnl6YVBBVzFhdE1FSDBsQmxNRThpT3BWVWkzRnpRbXJIa0IxRmFuVFVya2hvUVJyS25Ta05r",
//"user_id": 17841401299137344}%
