import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CARS, SALES_INFO } from '../constants';
import { Car, CarColor } from '../types';
import TestDriveModal from '../components/TestDriveModal';

const CarDetailPage: React.FC = () => {
    const { carId } = useParams<{ carId: string }>();
    const [car, setCar] = useState<Car | null>(null);
    const [selectedColor, setSelectedColor] = useState<CarColor | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Store default meta values
    const [defaultMetas, setDefaultMetas] = useState({
        title: '',
        description: '',
        ogTitle: '',
        ogDescription: '',
        ogImage: '',
        ogUrl: '',
    });

    useEffect(() => {
        // Store the initial meta values on component mount
        setDefaultMetas({
            title: document.title,
            description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
            ogTitle: document.querySelector('#og-title')?.getAttribute('content') || '',
            ogDescription: document.querySelector('#og-description')?.getAttribute('content') || '',
            ogImage: document.querySelector('#og-image')?.getAttribute('content') || '',
            ogUrl: document.querySelector('#og-url')?.getAttribute('content') || '',
        });
    }, []);

    const updateMetaTags = (tags: Partial<typeof defaultMetas> & {type?: string}) => {
        document.title = tags.title || defaultMetas.title;
        document.querySelector('meta[name="description"]')?.setAttribute('content', tags.description || defaultMetas.description);
        document.querySelector('#og-title')?.setAttribute('content', tags.ogTitle || defaultMetas.ogTitle);
        document.querySelector('#twitter-title')?.setAttribute('content', tags.ogTitle || defaultMetas.ogTitle);
        document.querySelector('#og-description')?.setAttribute('content', tags.ogDescription || defaultMetas.ogDescription);
        document.querySelector('#twitter-description')?.setAttribute('content', tags.ogDescription || defaultMetas.ogDescription);
        document.querySelector('#og-image')?.setAttribute('content', tags.ogImage || defaultMetas.ogImage);
        document.querySelector('#twitter-image')?.setAttribute('content', tags.ogImage || defaultMetas.ogImage);
        document.querySelector('#og-url')?.setAttribute('content', tags.ogUrl || defaultMetas.ogUrl);
        document.querySelector('#twitter-url')?.setAttribute('content', tags.ogUrl || defaultMetas.ogUrl);
        document.querySelector('#og-type')?.setAttribute('content', tags.type || 'website');
    };

    useEffect(() => {
        const foundCar = CARS.find(c => c.id === carId);
        if (foundCar) {
            setCar(foundCar);
            setSelectedColor(foundCar.colors.length > 0 ? foundCar.colors[0] : null);
            
            const newTitle = `Promo Suzuki ${foundCar.name} Bandung 2025 | Harga & Kredit Terbaru`;
            const newDescription = `Dapatkan promo harga mobil Suzuki ${foundCar.name} terbaru 2025, kredit cicilan ringan, & DP rendah. Hubungi sales Alfin untuk test drive ${foundCar.name} di Bandung.`;
            
            updateMetaTags({
                title: newTitle,
                description: newDescription,
                ogTitle: newTitle,
                ogDescription: newDescription,
                ogImage: foundCar.image,
                ogUrl: window.location.href,
                type: 'product'
            });

        } else {
            setCar(null);
            setSelectedColor(null);
        }
        
        // Cleanup function to reset meta tags on unmount
        return () => {
            updateMetaTags(defaultMetas);
        };
    }, [carId, defaultMetas]);

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const getBackgroundColorStyle = (hex: string | string[]) => {
        if (Array.isArray(hex)) {
            return { background: `linear-gradient(45deg, ${hex[0]} 50%, ${hex[1]} 50%)` };
        }
        return { backgroundColor: hex };
    };

    if (!car) {
        return <div className="text-center py-20">Mobil tidak ditemukan.</div>;
    }

    const message = `Halo ${SALES_INFO.name}, saya tertarik untuk memesan mobil ${car.name}. Mohon informasinya lebih lanjut.`;
    const whatsappOrderUrl = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(message)}`;

    const currentImageUrl = selectedColor ? selectedColor.imageUrl : car.image;

    return (
        <>
            <div className="py-8 md:py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="mb-6 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow w-fit" aria-label="Breadcrumb">
                        <ol className="list-none p-0 inline-flex">
                            <li className="flex items-center">
                                <Link to="/" className="hover:text-suzukiBlue">Home</Link>
                                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                            </li>
                             <li className="flex items-center">
                                <Link to="/produk" className="hover:text-suzukiBlue">Produk</Link>
                                <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
                            </li>
                            <li className="text-gray-700" aria-current="page">
                                {car.name}
                            </li>
                        </ol>
                    </nav>
                    
                    <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-lg">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                            {/* Image Section */}
                            <div>
                                <div className="relative">
                                    {car.promo && (
                                        <div className="absolute top-0 right-0 bg-sky-200 text-gray-800 text-sm font-bold px-4 py-1 rounded-bl-lg z-10">
                                            PROMO
                                        </div>
                                    )}
                                    <img src={currentImageUrl} alt={`Tampilan warna ${selectedColor ? selectedColor.name : ''} untuk mobil ${car.name} Suzuki Bandung`} className="w-full rounded-lg shadow-lg object-cover" />
                                </div>
                                {car.colors.length > 0 && selectedColor && (
                                    <div className="mt-4">
                                        <h3 className="text-sm font-medium text-gray-900">Pilih Warna: {selectedColor.name}</h3>
                                        <div className="flex items-center space-x-3 mt-2">
                                            {car.colors.map(color => {
                                                const isSelected = JSON.stringify(selectedColor.hex) === JSON.stringify(color.hex);
                                                return (
                                                    <button
                                                        key={color.name}
                                                        type="button"
                                                        onClick={() => setSelectedColor(color)}
                                                        className={`w-8 h-8 rounded-full border-2 ${isSelected ? 'ring-2 ring-offset-2 ring-suzukiBlue' : 'border-gray-300'}`}
                                                        style={getBackgroundColorStyle(color.hex)}
                                                        aria-label={`Select color ${color.name}`}
                                                    >
                                                        <span className="sr-only">{color.name}</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Details Section */}
                            <div className="mt-8 lg:mt-0">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-suzukiBlue leading-tight">{car.name}</h1>
                                <p className="text-lg text-gray-600 mt-2">{car.tagline}</p>
                                
                                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full bg-lime-300 text-gray-800 font-bold py-3 px-6 rounded-md hover:bg-lime-400 transition-colors duration-300 text-lg"
                                    >
                                        Jadwalkan Test Drive
                                    </button>
                                    <a
                                        href={whatsappOrderUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full block"
                                    >
                                        <button
                                            className="w-full bg-suzukiBlue text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition-colors duration-300 text-lg"
                                        >
                                            Pesan Sekarang
                                        </button>
                                    </a>
                                </div>

                                {car.promo && (
                                    <div className="mt-8 bg-sky-200 border-l-4 border-suzukiRed p-4 rounded-r-lg shadow">
                                        <div className="flex">
                                            <div className="py-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-suzukiRed mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg text-suzukiBlue">{car.promo.title}</h3>
                                                <p className="text-gray-700 mt-1">{car.promo.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="mt-8 border-t pt-6">
                                    <h2 className="text-xl font-bold text-gray-900">Deskripsi</h2>
                                    <p className="mt-4 text-gray-700 leading-relaxed">{car.description}</p>
                                </div>

                                <div className="mt-8 border-t pt-6">
                                    <h2 className="text-xl font-bold text-gray-900">Fitur Utama</h2>
                                    <ul className="mt-4 grid grid-cols-2 gap-4">
                                        {car.features.map(feature => (
                                            <li key={feature.text} className="flex items-center">
                                                <img src={feature.iconUrl} alt="" className="w-6 h-6 mr-3" />
                                                <span className="text-gray-700">{feature.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Variants Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-center text-suzukiBlue mb-8">Varian & Harga {car.name} Bandung</h2>
                        
                        {/* Mobile View - Cards */}
                        <div className="max-w-4xl mx-auto md:hidden space-y-4">
                            {car.variants.map(variant => {
                                const variantMessage = `Halo ${SALES_INFO.name}, saya tertarik untuk memesan mobil ${car.name} varian ${variant.name}. Mohon informasinya.`;
                                const variantWhatsappUrl = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(variantMessage)}`;
                                return (
                                    <div key={variant.name} className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{variant.name}</p>
                                            <p className="text-gray-700 font-semibold mt-1">{formatPrice(variant.price)}</p>
                                        </div>
                                        <a 
                                            href={variantWhatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300 text-sm whitespace-nowrap"
                                        >
                                            Pesan
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Desktop View - Table */}
                        <div className="max-w-4xl mx-auto overflow-x-auto hidden md:block">
                            <table className="min-w-full bg-white rounded-lg shadow-md">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Varian</th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Harga (OTR Bandung)</th>
                                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Info</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {car.variants.map(variant => {
                                        const variantMessage = `Halo ${SALES_INFO.name}, saya tertarik untuk memesan mobil ${car.name} varian ${variant.name}. Mohon informasinya.`;
                                        const variantWhatsappUrl = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(variantMessage)}`;
                                        return (
                                            <tr key={variant.name}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{variant.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-right font-semibold">{formatPrice(variant.price)}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                                                    <a 
                                                        href={variantWhatsappUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
                                                    >
                                                        Pesan
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <TestDriveModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} initialCarId={car.id} />
        </>
    );
};

export default CarDetailPage;