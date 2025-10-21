import React from 'react';
import { NavLink } from 'react-router-dom';

const Head = () => {
    return (
        <div>
            Menu:<br/>
            <NavLink to='/' style={({isActive})=>{
                return {
                fontSize: isActive ? '20px': '32px',
                color: isActive ? 'green': 'red',
                margin:'15px'
                }

            }
                
            }> Start</NavLink>
            <NavLink to='/products'style={({isActive})=>{
                return {
                fontSize: isActive ? '20px': '32px',
                color: isActive ? 'green': 'red',
                margin:'15px'
                }

            }
                
            }> Produkty</NavLink>
            <NavLink to='/concat' style={({isActive})=>{
                return {
                fontSize: isActive ? '20px': '32px',
                color: isActive ? 'green': 'red',
                margin:'15px'
                }

            }
                
            }> Kontakt</NavLink>
        </div>
    );
}

export default Head;
