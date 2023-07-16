import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addPost } from "../APIManagers/PostManager"
import {
    Form,
    FormGroup,
    Card,
    CardBody,
    Label,
    Input,
    Button,
  } from "reactstrap";

export const PostForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [post, update] = useState({
        title: "",
        imageUrl: "",
        caption: "",
        userProfileId: 1,
        dateCreated: Date.now()

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
const navigate = useNavigate();


   

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        console.log("You clicked the  button.")

        // TODO: Create the object to be saved to the API
const postToSendToAPI = {
    Title: post.title,
    Caption: post.caption,
    ImageUrl: post.imageUrl,
    DateCreated: new Date().toISOString(),
    UserProfileId: 1,
};

        // TODO: Perform the fetch() to POST the object to the API
 return addPost(postToSendToAPI)
  .then(navigate("/"));
  
  
    };

    return (
        <form className="PostForm">
            <h2 className="postForm__title">New Post</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Title">Title:</label>
                    <input
                        required autoFocus
                        type="text"
                        id="title"
                        value={post.title}
                        onChange={
                            (evt) => {
                                const copy = {...post}
                                copy.title = evt.target.value
                            update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="ImageUrl">Image:</label>
                    <input 
                        required autoFocus
                        type="text"
                        id="title"
                       
                        value={post.imageUrl}
                        onChange={
                            (evt) => {
                                const copy = {...post}
                                copy.imageUrl = evt.target.value
                            update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="Caption">Caption:</label>
                    <input
                        required autoFocus
                        type="text"
                        id="caption"
                        
                        value={post.caption}
                        onChange={
                            (evt) => {
                                const copy = {...post}
                                copy.caption = evt.target.value
                            update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
            onClick={ (clickEvent) => handleSaveButtonClick(clickEvent)}
            
            
            className="btn btn-primary">
                Submit Ticket
            </button>
        </form>
    )
}