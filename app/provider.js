'use client'

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export default function Provid({children}){

    return(
        <Provider store={store}>
            <h1>sala</h1>
            {children}  
        </Provider>
    )
}