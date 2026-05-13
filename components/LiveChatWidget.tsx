import React from 'react';
import { SALES_INFO } from '../constants';

const LiveChatWidget: React.FC = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SALES_INFO.phone}&text=${encodeURIComponent(`Halo ${SALES_INFO.name}, saya ingin bertanya tentang mobil Suzuki.`)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center transform hover:scale-110"
            aria-label="Chat on WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M19.05 4.94C17.22 3.12 14.9 2 12.12 2S7.02 3.12 5.19 4.94C3.37 6.77 2.25 9.1 2.25 11.88c0 1.77.45 3.49 1.32 5.05L2.1 22.5l5.62-1.47c1.49.77 3.14 1.18 4.88 1.18h.01c5.48 0 9.94-4.45 9.94-9.94 0-2.78-1.12-5.11-2.95-6.93zm-7.03 15.22h-.01c-1.47 0-2.88-.38-4.13-1.09l-.3-.18-3.07.8.82-3.01-.2-.31c-.8-1.29-1.22-2.77-1.22-4.32 0-4.54 3.69-8.23 8.24-8.23 2.23 0 4.27.87 5.82 2.42s2.42 3.59 2.42 5.82c0 4.54-3.69 8.23-8.23 8.23zm4.47-6.17c-.26-.13-1.56-.77-1.8-0.86-.24-.09-.42-.13-.59.13-.17.26-.68.86-.83 1.03-.15.17-.3.19-.55.06-.25-.13-1.07-.39-2.04-1.26-.75-.66-1.26-1.47-1.41-1.72-.15-.25-.02-.38.12-.51.12-.12.26-.31.39-.46.13-.15.17-.25.26-.42.09-.17.04-.31-.02-.44s-.59-1.42-.81-1.95c-.21-.52-.43-.45-.59-.46-.15-.01-.33-.01-.5-.01s-.42.06-.64.31c-.22.25-.86.84-.86 2.05s.88 2.38 1 2.55c.12.17 1.74 2.65 4.22 3.72.59.25 1.04.4 1.4.53.52.19.98.16 1.34.1.4-.06 1.25-.51 1.42-1-.18-.48-.18-.9-.26-1z"/>
            </svg>
        </a>
    );
};

export default LiveChatWidget;