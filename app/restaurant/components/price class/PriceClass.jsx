import clsx from "clsx"
import style from "./css/priceclass.module.css"

export const  PriceClass = () =>{
    return(
        <>
        <div className={style.main}>
            <div className="w-100">
                <p className={style.priceTitle}> کلاس قیمتی </p>

                <ul className={clsx("list-unstyled d-flex justify-content-around p-2 ", style.listContainer)}>
                    <li className={style.listItem}>گران</li>
                    <li className={style.listItem}>متوسط</li>
                    <li className={style.listItem}>اقتصادی</li>
                    <li className={style.listItemActive}>همه</li>
                </ul>
            </div>
        </div>
        </>
    )
}