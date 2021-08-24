import React, { FC } from 'react'
//components
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Footer from '../../components/Footer/Footer'

const Layout : FC = (props)=>{
    return <div className="container">
            <div className="row">
                <Navbar/>
                {props.children}
                <Sidebar/>
                <Footer/>
            </div>
    </div>
}
export default Layout