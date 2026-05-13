import React from 'react';

const InPageNav: React.FC = () => {
    const navItems = [
        { href: '#promo', label: 'Promo Spesial' },
        { href: '#testimoni', label: 'Testimoni' },
        { href: '#artikel', label: 'Artikel' },
        { href: '#video', label: 'Video Review' },
    ];

    return (
        <div className="sticky top-[68px] bg-white shadow-md z-40">
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center space-x-4 md:space-x-8 overflow-x-auto py-3 scrollbar-hide">
                    {navItems.map(item => (
                        <a 
                            key={item.href}
                            href={item.href}
                            className="text-gray-600 hover:text-suzukiBlue font-semibold whitespace-nowrap px-3 py-2 text-sm transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InPageNav;