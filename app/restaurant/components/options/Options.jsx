import style from "./css/options.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx";


export const  Options =() =>{
    return(
        <>
        <div className={style.container}>
            <ul className="list-unstyled">
            <div className={style.itemsContainer}>
                <div className={style.iconContainerActive}>
                    <FontAwesomeIcon className={style.icon} icon={faCircle} />
                </div>
                <li>دارای کوپن</li>
            </div>
            <div className={style.itemsContainer}>
                <div className={style.iconContainer}>
                    <FontAwesomeIcon className={style.icon} icon={faCircle} />
                </div>
                <li>دارای  تخفیف</li>
            </div>
            <div className={style.itemsContainer}>
                <div className={style.iconContainer}>
                    <FontAwesomeIcon className={style.icon} icon={faCircle} />
                </div>
                <li>ارسال اکسپرس </li>
            </div>
            <div className={style.itemsContainer}>
                <div className={style.iconContainer}>
                    <FontAwesomeIcon className={style.icon} icon={faCircle} />
                </div>
                <li>فودپرو</li>
            </div>
            <div className={style.itemsContainer}>
                <div className={style.iconContainer}>
                    <FontAwesomeIcon className={style.icon} icon={faCircle} />
                </div>
                <li>رستوران‌های به‌صرفه</li>
            </div>
            <div className={style.itemsContainer}>
                <div className={clsx(style.iconContainer , "border-bottom-0")}>
                    <FontAwesomeIcon className={style.icon} icon={faCircle} />
                </div>
                <li>خوش‌قیمت</li>
            </div>
            </ul>
        </div>
        </>
    )
}