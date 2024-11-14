import { useState } from "react";
import Layout from "./components/Layout"

function App() {
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      body: "This is the first post",
      author: "John Doe",
      lock: true,
    },
    {
      id: 2,
      title: "Second Post",
      body: "This is the second post",
      author: "Jane Doe",
      lock: false,
    }
  ]);

  return (
    <Layout>
      {posts.map((post) => {
        return !post.lock && <h1>{post.title}</h1>
      })}
    </Layout>
  )
}

export default App