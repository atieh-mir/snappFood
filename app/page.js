

import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./page.module.css"
import dynamic from "next/dynamic"
import clsx from 'clsx';
import { Bests, FoodCategory, FoodParty,Gifts,NewsInSnapp,Options ,SpecialTastes,UsersSuggestion,SnapApplication, Sellers } from './components'




export const metadata = {
  title: 'اسنپ فود | سفارش آنلاین غذا از تمامی رستوران ها  و فست فود ها',
  description: 'snapp food',
}

const Home = ()=> {
  
  return (
     <main className={style.main}>
     <FoodCategory/>
     <FoodParty/>
     <UsersSuggestion/>
     <NewsInSnapp/>
     <Bests/>
     <Gifts/>
     <SpecialTastes/>
     <Options/>
     <SnapApplication />
     <Sellers />
     <div className={clsx(style.footerHead , "mb-5")}>
        <h6 className='fw-bold me-5'>اسنپ‌‌‌‌‌‌‌‍ فود در شهرهای ایران</h6>
     </div>
     </main>
  )
}

export default dynamic(()=> Promise.resolve(Home),{ssr : false})
 