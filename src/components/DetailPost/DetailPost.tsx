import React,{FC, useState} from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { posts as postsData } from "../../PostsData"

type TPost={
    slug:string;
    mainHeading:string;
    content:string;
    thumbnailUrl:string;
    publishDate:string;
    categorey:string;

}


const DetailPost:FC = ()=>{
    const {slug}=useParams<{slug:string}>()
    const [post,setPost]=useState<TPost>({slug:"",mainHeading:"",content:"",thumbnailUrl:"",publishDate:"",categorey:""})

    useEffect(()=>{filterPost(slug);window.scrollTo(0, 0)},[slug])


    const filterPost = (slug:string="")=>{
        const filteredPostData:TPost[]=postsData.filter((post)=>(post.slug===slug))
        setPost(filteredPostData[0])
        
       
    }

    return <div className="col-md-8 mt-5">
        
        <h1 className="cap">{post.categorey} : </h1>

            <div className="card-body ">
                <div className="card ">

                    <div className="card-body ">
                        
                        <img  src={post.thumbnailUrl} alt={post.mainHeading} height="400" width="100%"/>
                        <h3 className=" mt-3 card-title">{post.mainHeading}</h3>
                        <strong className="pt-2 pb-2">Dated : {post.publishDate}</strong>
                        <p className="pt-3">{post.content}</p>
                        <strong>Categories : {post.categorey}</strong>
              
                    </div>
            </div>
                
       
           
        </div>
    </div>
}

export default DetailPost