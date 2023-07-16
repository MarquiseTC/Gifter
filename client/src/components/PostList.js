import React, {  useEffect, useState } from "react";
import { getAllPosts } from "../APIManagers/PostManager";
import { Post } from "./Post";


const PostList = ({ searchTermState}) => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFiltered] =useState([])

  const getPosts = () => {
    getAllPosts().then(allPosts => setPosts(allPosts)); 
  };
  useEffect (
    () => {
        const searchedPosts = posts.filter(post => {
            return post.title.toLowerCase().startsWith(searchTermState.toLowerCase())
        })
        setFiltered(searchedPosts)
    },
[searchTermState]
        
)



  useEffect(() => {
    getPosts();
  }, []); 
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="cards-column">
          {filteredPosts.map((post) => (
            <Post key={post.id} post={post}
            getAllPosts = {getAllPosts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostList;