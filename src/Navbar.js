import React from "react"

function Picture() {
    return (
        <div>
            <img className = "header-image" src= {process.env.PUBLIC_URL + "/Abubakar.jpg"} alt="Abubakar" />
        </div>
    )
}

function ButtonFlex() {
    return (
        <div className = "button-flex">
            <a href="mailto:eagleofpak47@gmail.com"><button className = "email-button" >✉ Email</button></a>
            <a href="https://www.linkedin.com/in/muhammad-abubakar-saif-a4540822a/"><button className = "lkd-button">LinkedIn</button></a>
        </div>
    )
}

export default function Navbar() {
    return (
        <div>
            <Picture />
            <h1>Muhammad Abubakar Saif</h1>
            <h2 className= "caption">Junior Front End Developer</h2>
            <p className= "email">eagleofpak47@gmail.com</p>
            <ButtonFlex />
        </div>
    )   
    }