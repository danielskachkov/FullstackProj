import React from "react"
import s from "./Author.module.css"

const Author = () => {
    return (
        <div className={s.Author}>
            <div className={s.image}>
                <img src={require("../../images/author.jpg")}/>
            </div>
            <div className={s.text}>
                Name: Daniel <br/>
                Surname: Skachkov <br/>
                Year of birth: 1999 <br/>
                University: MIPT <br/>
                Contacts: danielskachkov@yandex.ru
            </div>
            <div className={s.description}>
                The author on ICPC.
            </div>
        </div>
    )
}

export default Author;