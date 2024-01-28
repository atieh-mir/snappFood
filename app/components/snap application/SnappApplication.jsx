'use client'
import clsx from "clsx";
import { useState } from "react"
import style from "./css/snappApp.module.css"


export  const SnapApplication = () => {
    const[number, setNumber] = useState('');

    const handleValue = (e) => {
        setNumber(e.target.value)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(!number){
            alert("please enter your phone")
        }setNumber(e.target.value)
    }
    return(
       
        <div className={style.container}>
          <div className={style.main}>
          <div className="d-flex flex-column  align-items-end" >
            <div className="text-end">
              <h1 className="mb-5">
                اپلیکیشن اسنپ‌فود
                </h1>
                <p className={clsx(style.mainText , "mb-5")}>
                با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو <br/> کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید
                </p>
            </div>
           <div className="d-flex flex-column align-items-end text-end">
            <form onSubmit={handleSubmitForm} className="d-flex flex-column align-items-end">
            <label className={clsx(style.mainFormLabel , "mb-3")}> برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید </label>
             <div className={clsx(style.formInputGroup , "mb-3")}>
             <input onChange={handleValue} placeholder="۰۹*********"/>
             <button type="submit">دریافت لینک</button>
             </div>
            </form>
            <div className="d-flex flex-wrap justify-content-end align-items-center">
             <a href="https://cafebazaar.ir/app/com.zoodfood.android/" target="_blank" ><img className={style.downloadImg} src="https://cdn.developers.cafebazaar.ir/2021/05/bazaar-badge2.png" /></a>
             <a href="https://myket.ir/app/com.zoodfood.android" target="_blank" ><img className={style.downloadImg} src="https://myket.ir/core/images/logo/get1-fa.png" /></a>
             <a href="https://sibapp.com/applications/zoodfood-1" target="_blank" ><img className={style.downloadImg} src="https://sakhtemoonco.ir/wp-content/uploads/2020/03/%D8%B3%DB%8C%D8%A8-%D8%A7%D9%BE.png" /></a>
             <a href="https://iapps.ir/app/%D8%A7%D8%B3%D9%86%D9%BE-%D9%81%D9%88%D8%AF-snappfood/312476215" target="_blank" ><img className={style.downloadImg} src="https://snappfood.ir/static/images/iapps.svg" /></a>
            </div>
            </div>
            </div>
            <img className={style.mainImg} src="https://snappfood.ir/static/images/img_app_mockup@2x.png"/>
          </div>
        </div>
    )
}