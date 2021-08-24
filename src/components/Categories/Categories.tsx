import React,{FC} from 'react'
import { Link } from 'react-router-dom'

const CATEGORIES:string[]=['technology','health','sports','weather']

const Categories:FC = ()=>{
    return <div className="col-md-4 col-sm-12 col-xs-12 pt-5">
    <div className="list-group mt-5 pt-5">
        <p  className="list-group-item list-group-item-action active">
           Categories
        </p>
        {
            CATEGORIES.map((categorey)=>(<Link to={`/posts/categorey/${categorey}/`} key={categorey} className="list-group-item list-group-item-action">{categorey}</Link>
            ))
        }
        
    </div>
</div>
}

export default Categories