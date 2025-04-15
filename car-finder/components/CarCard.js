// components/CarCard.js
import { useState, useEffect, useRef } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';
import { useTheme } from '../pages/_app';

export default function CarCard({ car }) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const { darkMode } = useTheme();
    const intervalRef = useRef(null);

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setIsWishlisted(wishlist.some(item => item.id === car.id));
    }, [car.id]);

    useEffect(() => {
        if (isHovered) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex(prev =>
                    prev === car.images.length - 1 ? 0 : prev + 1
                );
            }, 2000); // Change image every 2 seconds
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                setCurrentImageIndex(0);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isHovered, car.images.length]);

    const toggleWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        if (isWishlisted) {
            const updated = wishlist.filter(item => item.id !== car.id);
            localStorage.setItem('wishlist', JSON.stringify(updated));
            setIsWishlisted(false);
        } else {
            wishlist.push(car);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            setIsWishlisted(true);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="relative h-48 overflow-hidden">
                    {car.images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`${car.name} - View ${index + 1}`}
                            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                                }`}
                        />
                    ))}
                </div>
                <div className="absolute bottom-2 right-2 flex space-x-1">
                    {car.images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentImageIndex === index
                                    ? 'bg-blue-600 dark:bg-blue-400'
                                    : 'bg-gray-300 dark:bg-gray-600'
                                }`}
                        />
                    ))}
                </div>
                <button
                    onClick={toggleWishlist}
                    className="absolute top-3 right-3 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:scale-110 transition-transform"
                >
                    {isWishlisted ? (
                        <FaHeart className="text-red-500 text-lg" />
                    ) : (
                        <FaRegHeart className="text-gray-400 text-lg" />
                    )}
                </button>
            </div>
            <div className="p-4">
                <Link href={`/cars/${car.id}`}>
                    <h2 className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                        {car.name}
                    </h2>
                </Link>
                <p className="text-sm text-gray-500 dark:text-gray-400">{car.brand}</p>
                <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">${car.price.toLocaleString('en-US')}</p>
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{car.fuel}</span>
                    <span className="mx-2">•</span>
                    <span>{car.seats} Seats</span>
                </div>
            </div>
        </div>
    );
}
