import React from 'react';

import {Routes,Route, Navigate} from 'react-router-dom'

import Start from '../pages/Start'
import Products from '../pages/Products';
import Product from '../pages/Product';
import PageNotFound from '../pages/PageNotFound';
import Admin from '../pages/Admin';
import Concat from '../pages/Concat';
import ConcatPl from '../pages/ConcatPl';
import ConcatEn from '../pages/ConcatEn';

const Cont = () => {
    const user=false
    return (
        <div>
            <hr/>
        <Routes>
            <Route path='/' element={<Start/>}/>
            <Route path='products' element={<Products/>}/>  
            <Route path='products/:id' element={<Product/>}/>
            <Route path='concat' element={<Concat/>}>  
                <Route path='pl' element={<ConcatPl/>}/>  
                <Route path='en' element={<ConcatEn/>}/>  
            </Route>
            
        
            <Route path='admin' element={user ? <Admin/> :<Navigate to='/products'/>}/>  
            <Route path='ii' element={<Navigate to='/products'/>}/>  
            <Route path='*' element={<PageNotFound/>}/>  
         </Routes>
         
         
         
        </div>
    );
}

export default Cont;