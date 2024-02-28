import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'

const Contacts = () => {
    return (
        <section id="contact">
            <div className="contact__container">
                <a href="www.linkedin.com/in/pruthviraj-patil-0967b8257" target="_blank"><AiFillLinkedin /></a>
                <a href="https://github.com/pruthvirajpatil2024" target="_blank"><AiOutlineGithub /></a>
                <a href="mailto:pruthvirajpatil2024@gmail.com"><CgMail /></a>
            </div>
        </section>
    )
}

export default Contacts