import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const api = "https://jsonplaceholder.typicode.com/posts/1";
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    const { data } = await axios.get(api);
    setPost((prev) => data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) {
    return <h1 data-testid="loading">Loading</h1>;
  }

  return (
    <div>
      <h1 data-testid="userId">{post.userId}</h1>
      <h1 data-testid="id">{post.id}</h1>
      <h1 data-testid="title">{post.title}</h1>
      <h1 data-testid="body">{post.body}</h1>
    </div>
  );
}
export default FetchData;
