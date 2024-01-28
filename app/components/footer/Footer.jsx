import clsx from "clsx"
import style from "./css/footer.module.css"

export default function Footer(){
    return(
        <div className={clsx("container-fluid border-top  p-4", style.footerContainer)}>
            
            <div className={clsx("d-flex justify-content-between align-items-lg-start mx-3  p-3" , style.main)}>
                <div className="d-flex">
                        <img className={style.footerImg} src="https://snappfood.ir/static/images/senf.png" />
                        <img className={style.footerImg} src="https://snappfood.ir/static/images/placeholder.png" />
                </div>
                <div className={clsx("d-flex flex-cloumn text-dark align-items-end text-end" , style.mobileMargin)}>
                <ul className="list-unstyled">
                    <li className="mb-2"><a className={clsx(style.footerLink)}>تماس با اسنپ فود</a></li>
                    <li className="mb-2"><a className={clsx(style.footerLink)}>پرسش‌های متداول</a></li>
                    <li className="mb-2"><a className={clsx(style.footerLink)}>ثبت شکایات</a></li>
                    <li><a className={clsx(style.footerLink)}>اپلیکیشن موبایل</a></li>
                </ul>
                </div>
                <div className={clsx("d-flex flex-cloumn text-dark align-items-end text-end" , style.mobileMargin)}>
                <ul className="list-unstyled">
                    <li className="mb-2"><a className={clsx(style.footerLink)}>درباره اسنپ فود</a></li>
                    <li className="mb-2"><a className={clsx(style.footerLink)}>فرصت‌های شغلی</a></li>
                    <li className="mb-2"><a className={clsx(style.footerLink)}>وبلاگ</a></li>
                    <li className="mb-2"><a className={clsx(style.footerLink)}>قوانین سایت</a></li>
                    <li className="mb-2"><a className={clsx(style.footerLink)}>حریم خصوصی</a></li>
                    <li><a className={clsx(style.footerLink)}>ثبت نام فروشندگان</a></li>
                </ul>
                </div>
                <div className="d-flex flex-column align-items-end text-dark">
                    <div className="d-flex flex-row-reverse text-end align-items-center">
                    <img className={clsx(style.logoImg , "ms-3")} src="https://i.ibb.co/FhQJQDd/snappfood-logo.png"/>
                    <div>
                        <p className={clsx("mb-0" , style.footerTitle)}>اسنپ فود</p>
                        <p className={clsx("mb-0" , style.footerLink)}>تجربه سفارش غذا، از زودفود تا اسنپ‌‌ فود</p>
                    </div>
                    
                    </div>
                    <div className={clsx("mt-3" , style.iconsContainer)}>
                           <a className={style.icons}><img className={style.socialIcon} src="https://i.ibb.co/G3gNjKY/aparat-svgrepo-com.png" alt="aparat-svgrepo-com" border="0"/></a>
                           <a className={style.icons}><img className={style.socialIcon} src="https://i.ibb.co/5G4vxfC/instagram-svgrepo-com.png" alt="instagram-svgrepo-com" border="0"/></a>
                           <a className={style.icons}><img className={style.socialIcon} src="https://i.ibb.co/vhWdJNb/linkedin-161-svgrepo-com.png" alt="linkedin-161-svgrepo-com" border="0"/></a> 
                           <a className={style.icons}><img className={style.socialIcon} src="https://i.ibb.co/7z4sMzZ/telegram-plane-svgrepo-com.png" alt="telegram-plane-svgrepo-com" border="0"/></a>
                           <a className={style.icons}><img className={style.socialIcon} src="https://i.ibb.co/4sws1XP/twitter-154-svgrepo-com.png" alt="twitter-154-svgrepo-com" border="0"/></a>
                        </div>
                </div>
            </div>
            
        </div>
    )
}