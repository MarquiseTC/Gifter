import { Routes, Route, Navigate} from "react-router-dom";

import PostDetails from "./PostDetails";
import { UserPosts } from "./UserPosts";
import PostList from "./PostList";
import { PostForm } from "./PostForm";
import { PostContainer } from "./PostContainer";

const ApplicationViews = () => {

return (
     <Routes>
     <Route path="/" element={ <PostContainer /> } />
     
        <Route path="/" element= {<PostList />} />
        
        <Route path="/posts/add" element={<PostForm />} />
        
        <Route path="/posts/:id" element={<PostDetails />} />
                
        <Route path="/users/:id" element={<UserPosts/>} />
        
     </Routes>
    
    )
  

};

export default ApplicationViews;
