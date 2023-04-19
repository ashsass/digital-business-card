import React from 'react'
import About from './Components/About.js'
import Info from './Components/Info.js'
import Interests from './Components/Interests.js'
import Footer from './Components/Footer.js'
//Can I import the components folder instead of importing each file separately

export default function App() {
    return (
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}