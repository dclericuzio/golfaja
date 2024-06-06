// app/index.js
import Navigationbar from '@/components/layout/navigationbar';
import Footer from '@/components/layout/footer';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header>
                <Navigationbar/>
            </header>
            <main>
                HOME
            </main>
            <Footer/>
        </div>
    );
};

export default HomePage;