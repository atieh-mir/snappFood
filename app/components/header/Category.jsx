
import style from "./css/category.module.css"
import clsx from "clsx";
import Api from "../../../api/categories/categories.json"
import Link from "next/link";

export default  function Category(){
    return(
        <>
         <div className={clsx("container-fluid py-1 px-2 d-flex flex-row-reverse justify-content-between flex-nowrap" , style.categoryContainer)}>
            <Link className="text-decoration-none" href={'/restaurant'} >
                <div  className={clsx(style.categoryItems)}>
                <img className={clsx(style.categoryItemsImg , "mb-2")} src="https://cdn.snappfood.ir/uploads/images/review-app/icons/count/desktop_1_603508bf202d8_img_st_food.png" alt="foods" />
                <p className={clsx("m-0 text-dark ",style.categoryItemTitle)}>رستوران</p>
                </div>
            </Link>
           {
            Api.map( ({id,title,icon}) =>{
            return(
                <Link className="text-decoration-none" href={'*'}  key={id} >
                <div  className={clsx(style.categoryItems)}>
               <img className={clsx(style.categoryItemsImg , "mb-2")} src={icon} alt="foods" />
                <p className={clsx("m-0 text-dark ",style.categoryItemTitle)}>{title}   </p>
            </div>
            </Link>
            )
            })
           }
         </div>
        </>
    )
}