import clsx from "clsx"
import style from "./css/sellers.module.css"

export const Sellers = () => {


    return (
       <>
       <div className="container-fluid mt-3 d-flex flex-row-reverse p-4">
        <div className={clsx(style.main, "d-flex flex-row-reverse justify-content-between p-5")}>
        <div className="w-lg-50 d-flex flex-column justify-content-center align-items-end text-end ">
        <h1 className={style.mainTitle}>
        صاحب کسب و کار هستید؟
        </h1>
        <h4 className={clsx("my-5" , style.mainInfo)}>
        با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید
        </h4>
        <button className={style.mainBtn}> ثبت نام فروشندگان </button>
       </div>
       <div>
        <img className={style.mainImg} src="https://snappfood.ir/static/images/vendor_pic.png" />
       </div>
        </div>
       </div>
       </>
    )
}