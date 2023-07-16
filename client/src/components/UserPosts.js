import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getUserPosts } from "../APIManagers/PostManager";
export const UserPosts = () => {
    const [userPost, setUserPost] = useState([]);
    const { id } = useParams();
    

    useEffect(() => {
        getUserPosts(id)
            .then((data) => {
                setUserPost(data)
            })
    }, [id])

        


    return ( <div>
    <h2>User Posts</h2>
    {userPost.post?.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.caption}</p>
      </div>
    ))}
  </div>
)
}