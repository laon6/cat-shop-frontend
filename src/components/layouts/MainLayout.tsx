// src/components/layouts/MainLayout.tsx
import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col px-8">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
