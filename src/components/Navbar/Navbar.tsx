import React, { FC } from 'react'
import {Link} from "react-router-dom"

const Navbar:FC = ()=>{

    return <div className="mt-3 col-md-12 col-xs-12 col-sm-12 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Blog</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">All Posts <span className="sr-only">(current)</span></Link>
                    </li>
                
                </ul>
                
            </div>
        </nav>

    </div>
}

export default Navbar