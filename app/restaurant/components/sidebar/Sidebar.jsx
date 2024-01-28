import style from "./css/sidebar.module.css"
import Link from "next/link"
import clsx from "clsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons"

export const  Sidebar = () =>{
    return(
        <>
        <div className={clsx(style.category)}>
            <div className={style.categoryTitle}>
                <p className="m-0">همه دسته‌بندی‌ها</p>
            </div>
            <ul className="list-unstyled">
                <Link href="/restaurant" className="text-decoration-none ">
                    <div className={clsx(style.categoryItem , "d-flex align-items-center justify-content-between")}>
                        <FontAwesomeIcon color="#EDEFF0" icon={faAngleLeft} />
                        <div className="d-flex align-items-center flex-row-reverse">
                        <img src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/fastfood.png" className={style.categoryImg} />
                        <li>فست‌فود</li>
                        </div>
                    </div>
                </Link>
                <Link href="*" className="text-decoration-none ">
                    <div className={clsx(style.categoryItem , "d-flex align-items-center justify-content-between")}>
                        <FontAwesomeIcon color="#EDEFF0" icon={faAngleLeft} />
                        <div className="d-flex align-items-center flex-row-reverse">
                        <img src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/irani.png" className={style.categoryImg} />
                        <li>ایرانی</li>
                        </div>
                    </div>
                </Link>
                <Link href="*" className="text-decoration-none ">
                    <div className={clsx(style.categoryItem , "d-flex align-items-center justify-content-between")}>
                        <FontAwesomeIcon color="#EDEFF0" icon={faAngleLeft} />
                        <div className="d-flex align-items-center flex-row-reverse">
                        <img src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/kebab.png" className={style.categoryImg} />
                        <li>کباب</li>
                        </div>
                    </div>
                </Link>
                <Link href="*" className="text-decoration-none ">
                    <div className={clsx(style.categoryItem , "d-flex align-items-center justify-content-between")}>
                        <FontAwesomeIcon color="#EDEFF0" icon={faAngleLeft} />
                        <div className="d-flex align-items-center flex-row-reverse">
                        <img src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/salad.png" className={style.categoryImg} />
                        <li>سالاد</li>
                        </div>
                    </div>
                </Link>
                <Link href="*" className="text-decoration-none ">
                    <div className={clsx(style.categoryItem , "d-flex align-items-center justify-content-between")}>
                        <FontAwesomeIcon color="#EDEFF0" icon={faAngleLeft} />
                        <div className="d-flex align-items-center flex-row-reverse">
                        <img src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/sea.png" className={style.categoryImg} />
                        <li>دریایی</li>
                        </div>
                    </div>
                </Link>
                <Link href="*" className="text-decoration-none ">
                    <div className={clsx(style.categoryItem , "d-flex align-items-center justify-content-between")}>
                        <FontAwesomeIcon color="#EDEFF0" icon={faAngleLeft} />
                        <div className="d-flex align-items-center flex-row-reverse">
                        <img src="https://cdn.snappfood.ir/uploads/images/tags/new_icons/international.png" className={style.categoryImg} />
                        <li>بین الملل</li>
                        </div>
                    </div>
                </Link>
            </ul>
        </div>
        </>
    )
}