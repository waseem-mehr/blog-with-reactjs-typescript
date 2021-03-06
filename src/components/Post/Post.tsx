import React, { FC } from 'react'
import {Link} from 'react-router-dom'

type TPost={
    slug:string;
    mainHeading:string;
    content:string;
    thumbnailUrl:string;
    publishDate:string;
    categorey:string;

}

type PostProps={
    post:TPost;
}

const Post : FC<PostProps> = (props)=>{
    return <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="card mt-5">
            <div className="card-body ">
                <img  src={props.post.thumbnailUrl} alt={props.post.mainHeading} height="200" width="270"/>
                <h5 className=" mt-3 card-title">{props.post.mainHeading}</h5>
                <Link to={`/post/${props.post.slug}/`} className="btn btn-primary">Read More...</Link>
            </div>
            </div>

    </div>
}

export default Post
