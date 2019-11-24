import React from "react"
import s from "./Author.module.css"

const Author = () => {
    return (
        <div className={s.Author}>
            <div className={s.image}>
                <img src={require("../../images/author.jpg")}/>
            </div>
            <div className={s.text}>Here is information about author.</div>
            <div className={s.description}>
                The author on ICPC.
            </div>
        </div>
    )
}

export default Author;