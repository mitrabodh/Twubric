import React, { useEffect, useState } from 'react'
import style from "./sort.module.css"
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


export default React.memo(function Sort({ criteria, setCriteria }: { criteria: any, setCriteria: any }) {
    const [show, setShow] = useState<boolean>(false);

    const arr = [{ key: 2, cat: "Total" }, { key: 3, cat: "Friends" }, { key: 4, cat: "Influence" }, { key: 5, cat: "Chirpiness" }];

    return (
        <div className={style.container}>
            <button className={style.dropdown} type='button' onClick={() => setShow(prev => !prev)} >Sort by &nbsp; {show ? <IoIosArrowDropupCircle size={20} /> : <IoIosArrowDropdownCircle size={20} />}</button>
            {show ? <div className={style.menu}>

                <div className={(criteria[0].total === true || criteria[0].total === false) ? `${style.select}` : ""} onClick={() => {
                    setCriteria(() => [{ total: !criteria[0].total, friends: null, chirpiness: null, influence: null }])
                }} >Total</div>

                <div className={(criteria[0].friends === true || criteria[0].friends === false) ? `${style.select}` : ""} onClick={() => setCriteria(() => [{ totalF: null, friends: !criteria[0].friends, chirpiness: null, influence: null }])} >Friends</div>

                <div className={(criteria[0].influence === true || criteria[0].influence === false) ? `${style.select}` : ""} onClick={() => setCriteria(() => [{ totalI: null, friends: null, chirpiness: null, influence: !criteria[0].influence }])} >Influence</div>

                <div className={(criteria[0].chirpiness === true || criteria[0].chirpiness === false) ? `${style.select}` : ""} onClick={() => setCriteria(() => [{ totalC: null, friends: null, chirpiness: !criteria[0].chirpiness, influence: null }])} >Chirpiness</div>

            </div> : ""
            }
        </div >
    )
});
