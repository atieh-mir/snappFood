'use client'

import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/cartSlice"
import style from "../css/content.module.css"


export  const  Order = ({ name,price, id}) => {

    const dispatch = useDispatch();


    return(
        <div>
          <button className={style.foodBtn}  onClick={() => dispatch(addToCart({price,name,id}))}> افزودن  </button>

        </div>
    )

}