'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from "next/dynamic"
import Order from "./Order"
import style from "./page.module.css"

const OrderPage= ()=>{
 return(
  <main className={style.main}>
    <Order/>
  </main>
 )
}
export default dynamic(()=> Promise.resolve(OrderPage),{ssr : false})