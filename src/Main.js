import React from "react"

function About() {
    return (
        <div>
            <h2>About</h2>
            <p className="content">My name is Muhammad Abubakar Saif. I am a junior front end developer. I am currently learning React.js and I am looking for a job.</p>
        </div>
    )
}

function Interests() {
    return (
        <div>
            <h2>Interests</h2>
            <p className="content">I am interested in learning new things and I am also interested in playing video games. I am also interested in learning about new technologies. </p>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <div className="footer-flex"> 
                <img className="icon" src = {process.env.PUBLIC_URL + "/Facebook Icon.svg"} alt="Fb Icon" />
                <img className="icon" src = {process.env.PUBLIC_URL + "/Instagram Icon.png"} alt="Insta Icon" />
                <a href="https://github.com/bsce21017" target="_blank" rel="noopener noreferrer"><img className="icon" src = {process.env.PUBLIC_URL + "/GitHub Icon.svg"} alt="GitHub Icon" /></a>
                <img className="icon" src = {process.env.PUBLIC_URL + "/Twitter Icon.svg"} alt="Twitter Icon" />
            </div>
        </footer>
    )
}
export default function Main() {
    return (
        <div>
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

