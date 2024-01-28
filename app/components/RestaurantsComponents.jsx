'use client'
import clsx from "clsx"
import style from "./restaurantsCard.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import {useEffect, useState } from 'react';
import axios from "axios"


export const  RestaurantsComponents =() => {
  const [data , setData] = useState(null)
  
  useEffect(()=>{
    const getData = async ()=>{
        let data = await axios.get("https://snappfood-api.onrender.com/restaurants");
        
        setData(data.data)
    }
    getData()
  },[])


    return(

      <div className={clsx("d-flex overflow-x-scroll p-2 mt-3", style.restsMain)}>
          {
            data?.map(({id,img,icon,title,rate})=>{
                return(
                    <div key={id} className={clsx(style.restCard , "m-2 ")}>
                      <Link className="text-decoration-none text-dark"  href={`restaurant/${id}`} >
                      <div className={clsx(style.restBackgroundContainer)}>
                        <img className={style.restBackground} src={img} />
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <img className={clsx(style.restLogoImg)} src={icon} />
                        <h5 className={style.restName}>{title}</h5>

                        <div>
                        <span className="my-3 fw-bold">
                          {rate}
                          <FontAwesomeIcon className="text-warning me-1" icon={faStar} />
                          </span>
                        </div>
                      <p className={clsx(style.category)}>فست فود</p>
                      <div className={clsx("d-flex",style.deliveryContainer)}>
                      ۱۰.۰۰۰
                        <p className="m-0 mx-2 "> ارسال اکسپرس</p>
                        <img className={clsx(style.helmet)} src="https://i.ibb.co/98yt2n5/f1-helmet-svgrepo-com.png" />
                      </div>
                      </div>
                      </Link>
                    </div>
                )
            })
          }
          </div>
    )
}