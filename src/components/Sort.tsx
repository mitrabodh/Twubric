import React, { useState } from 'react'
import style from "./sort.module.css"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
export default function Sort({ setSort }: { setSort: any }) {
    const [show, setShow] = useState<boolean>(false);
    const arr = [{ key: 2, cat: "Total" }, { key: 3, cat: "Friends" }, { key: 4, cat: "Influence" }, { key: 5, cat: "Chirpiness" }];

    return (
        <div className={style.container}>
            <button className={style.dropdown} type='button' onClick={() => setShow(prev => !prev)} >Sort by &nbsp; {show ? <IoIosArrowDropupCircle size={20} /> : <IoIosArrowDropdownCircle size={20} />}</button>
            {show ? <div className={style.menu}>
                <div onClick={() => setSort("total")} >Total</div>
                <div onClick={() => setSort("friends")} >Friends</div>
                <div onClick={() => setSort("influence")} >Influence</div>
                <div onClick={() => setSort("chirpiness")} >Chirpiness</div>
            </div> : ""}
        </div >
    )
}
