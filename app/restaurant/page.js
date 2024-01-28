

import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./page.module.css"
import clsx from "clsx"
import "../globals.css"
import { BreadCrums, Options, PriceClass, Restaurants, Sidebar, Sort } from './components';
import Link from 'next/link';


export const metadata = {
    title: ' سفارش آنلاین غذا از تمامی رستوران ها  و فست فود ها',
    description: 'snapp food',
  }
export default function Restaurant(){
    const breadcrum = [
        {id:0, name: "اسنپ فود"},
      {id:1, name: "رستوران ها"}
    ]

    return(
        <>
        <main className={style.main}>
            <BreadCrums>
            {
                breadcrum.map(bread=>
                    <li className={style.breadItem} key={bread.id}>
                    <Link href= './'  className="text-decoration-none text-dark" ><p className={clsx("m-0 " , style.breadFontsize)}>{bread.name}</p></Link>
                    </li>
                )
            }
            </BreadCrums>
            <Sort/>

            <div className={clsx("container-fluid p-0 mt-5" , style.container)}>
                <div className="row flex-row-reverse">
                    
                    <div className="col-lg-3  col-md-5 col-12 p-0">
                        <Sidebar/>
                        <PriceClass/>
                        <Options/>
                    </div>
                    <div className="col-lg-9 col-md-7 col-12 p-0">
                        <Restaurants/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}