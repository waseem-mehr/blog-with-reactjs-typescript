import React,{FC} from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router"
import { posts as postsData } from "../../PostsData"
import Post from "../Post/Post"

type TPost={
    slug:string;
    mainHeading:string;
    content:string;
    thumbnailUrl:string;
    publishDate:string;
    categorey:string;

}

const CategoreyPosts:FC = ()=>{

    const {categorey}=useParams<{categorey?: string}>()
    const [posts,setPosts]=useState<TPost[]>([])
    
    useEffect(()=>{filterPosts(categorey);window.scrollTo(0, 0);},[categorey])
    
    //filter the required posts from all the posts

    const filterPosts=(categorey:string="")=>{
        
        const filteredPostsData:TPost[] = postsData.filter((post)=>(post.categorey===categorey))
        setPosts(filteredPostsData)
        
    }

    return <div className="col-md-8">
        <h1 className="mt-5 cap">{categorey} :</h1>
        {posts.map((post)=>(<Post key={post.slug} post={post}/>))}
       
    </div>
}
export default CategoreyPosts