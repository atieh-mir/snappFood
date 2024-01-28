import Link from "next/link";
import style from "./notfound.module.css"

export default function NotFound(){

    return(
        <div className={style.notFoundContainer}>
            <img className={style.notFoundImg} src="https://snappfood.ir/bundles/bodofoodfrontend/images/errors/new-error-logo.png?v1850" />
            
            <h1 className={style.notFoundText} >متاسفانه، صفحه‌ موردنظر شما یافت نشد</h1>
            <Link  href='/' ><button className={style.notFoundBtn}>
            بازگشت به صفحه اصلی
                </button></Link>
        </div>
    )
}