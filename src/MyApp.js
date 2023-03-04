import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import List from './list/List';
import HomePage from './components/HomePage';
import DummyPage from './components/DummyPage';


function MyApp() {

    const [menuValue, setMenuValue] = useState('home')

    const handleMenu = (value) => {
        setMenuValue(value)

    }

    const getPage = () => {

        switch(menuValue){
            case 'home':
                return <HomePage/>
            case 'setting':
                return <DummyPage name={menuValue}  /> 
            case 'usage':
                return <DummyPage name={menuValue} />
            case 'logout':
                return <DummyPage name={menuValue}  />           
        }

    }
    return (
        <div className="app">
            <Header handleMenu={handleMenu} />

            <div className="app-body">
                {getPage()}
            </div>

            <Footer />


        </div>
    )
}

export default MyApp