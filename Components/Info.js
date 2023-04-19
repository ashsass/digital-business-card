import React from 'react'

export default function Info() {
    return (
        <header>
            <img src="./images/ash.png" alt="Photo of Ashlyn for her digital business card"/>
            <h1>Ashlyn Sassaman</h1>
            <h3>Frontend Developer</h3>
            <a href="https://ashsass.com/" target="_blank">ashlynsassaman.website</a>
            <div className="header-buttons">
                <a href="mailto:ashlynsassaman@gmail.com">
                    <button className="button-email">
                        <i className="fa-solid fa-envelope"></i>
                        Email</button>
                </a>
                <a href="https://www.linkedin.com/in/ashlyn-sassaman/" target="_blank">
                    <button className="button-linkedin">
                        <i className="fa-brands fa-linkedin"></i>
                        LinkedIn</button>
                </a>
            </div>
        </header>
    )
}