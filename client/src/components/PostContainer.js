import { useState } from "react"

import PostList from "./PostList"
import { PostSearch } from "./PostSearch"

export const PostContainer = () => {
        const [searchTerms, setSearchTerms] = useState("")
    return(
    <>
    <PostSearch setterFunction={setSearchTerms} example1={100} example2={"foobar"}/>
    <PostList searchTermState={searchTerms} /> 
    </>
    )
    }