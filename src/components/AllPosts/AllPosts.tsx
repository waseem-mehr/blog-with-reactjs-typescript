import React,{FC} from "react"
import Post from "../Post/Post"
import { posts } from "../../PostsData"


const AllPosts:FC = ()=>{
    
    return <div >
        <h1 className="mt-5">All Posts :</h1>
        {posts.map((post)=>(<Post key={post.slug} post={post}/>))}
    </div>
}

export default AllPosts