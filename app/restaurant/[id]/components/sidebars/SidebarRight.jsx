import style from "./css/sidebarRight.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar,faCircleInfo} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx";
import {useEffect, useState } from 'react';
import axios from "axios"
export default function SidebarRight({id}){
    
    const [data , setData] = useState(null)
   useEffect(()=>{
    const getData = async ()=>{
        let data = await axios.get("https://snappfood-api.onrender.com/restaurants/" + id);
        console.log(data.data)
        setData(data.data)
    }
    getData()
  },[])
    return(
        <>
          <div className={style.container}>
            {/* kole section bala */}
            <div className="d-flex"> 
                {/* neveshteha */}
                <div className="d-flex flex-column">
                <div className="d-flex flex-row-reverse align-items-center justify-content-between">
                    <div className={clsx("d-flex" , style.restInfo)}>
                        <p className="m-0 fw-bold">
                        <span className="text-secondary me-2">(۴۰۴ امتیاز)</span>
                        {data?.rate}
                        <FontAwesomeIcon className="text-warning ms-1" icon={faStar} />
                        </p>
                    </div>
                    <div>
                    <p className={clsx("badge m-0 me-5" , style.badge)}>%۴۰</p>
                    </div>
                </div>
                <div>
                    <h5 className={style.restName}>{data?.title}</h5>
                </div>
                </div>
                {/* akse rest */}
                <div>
                    <img className={clsx(style.restImgLogo, "ms-2")} src={data?.icon} />
                </div>
                
            </div>
            <button className={style.restCommentBtn}>
                 اطلاعات و نظرات
                 <FontAwesomeIcon icon={faCircleInfo} className="ms-2" />
            </button>
            <div id="list-example" className={clsx("list-group m-4" , style.foodList)} >
                <a className={clsx("list-group-item list-group-item-action bg-transparent border-0 py-0 px-3" , style.listItem)} href="#pizza"> پیتزا</a>
                <a className={clsx("list-group-item list-group-item-action bg-transparent border-0 py-0 px-3" , style.listItem)} href="#burger">برگر</a>
                <a className={clsx("list-group-item list-group-item-action bg-transparent border-0 py-0 px-3" , style.listItem)} href="#hotdog">هات داگ</a>
                <a className={clsx("list-group-item list-group-item-action bg-transparent border-0 py-0 px-3" , style.listItem)} href="#steak">استیک</a>
                <a className={clsx("list-group-item list-group-item-action bg-transparent border-0 py-0 px-3" , style.listItem)} href="#salads">سالاد و پیش غذا</a>
                <a className={clsx("list-group-item list-group-item-action bg-transparent border-0 py-0 px-3" , style.listItem)} href="#drinks"> نوشیدنی</a>
            </div>
        </div>
        </>
    )
}