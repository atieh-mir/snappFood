import clsx from "clsx"
import style from "./css/sort.module.css"

export const  Sort = () =>{
    return(
        <div>
           <select className={clsx("form-select" , style.formSelect)} placeholder="به ترتیب پیش فرض">
           <option>به ترتیب پیش فرض</option>
            <option>بالاترین امتیاز </option>
            <option> نزدیک ترین </option>
            <option>جدید ترین </option>
            <option> ارزان ترین</option>
            <option> عملکرد کلی</option>
            <option> گرانترین </option>
            </select> 
        </div>
    )
}