// pages/wishlist.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useTheme } from "./_app";

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([]);
    const [currentImageIndices, setCurrentImageIndices] = useState({});
    const [hoveredCards, setHoveredCards] = useState({});
    const router = useRouter();
    const { darkMode } = useTheme();

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
        setWishlist(stored);
        const initialIndices = {};
        stored.forEach(car => {
            initialIndices[car.id] = 0;
        });
        setCurrentImageIndices(initialIndices);
    }, []);

    useEffect(() => {
        const intervals = {};
        Object.keys(hoveredCards).forEach(carId => {
            if (hoveredCards[carId]) {
                intervals[carId] = setInterval(() => {
                    setCurrentImageIndices(prev => {
                        const car = wishlist.find(c => c.id.toString() === carId);
                        const currentIndex = prev[carId];
                        return {
                            ...prev,
                            [carId]: currentIndex === car.images.length - 1 ? 0 : currentIndex + 1
                        };
                    });
                }, 2000);
            }
        });

        return () => {
            Object.values(intervals).forEach(interval => clearInterval(interval));
        };
    }, [hoveredCards, wishlist]);

    const removeFromWishlist = (id) => {
        const updated = wishlist.filter((car) => car.id !== id);
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    const goToDetail = (id) => {
        router.push(`/cars/${id}`);
    };

    const handleMouseEnter = (carId) => {
        setHoveredCards(prev => ({
            ...prev,
            [carId]: true
        }));
    };

    const handleMouseLeave = (carId) => {
        setHoveredCards(prev => ({
            ...prev,
            [carId]: false
        }));
        setCurrentImageIndices(prev => ({
            ...prev,
            [carId]: 0
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navigation Bar */}
            <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <FaArrowLeft />
                        <span>Back to Home</span>
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center text-pink-600 dark:text-pink-400">❤️ Your Wishlist</h1>
                {wishlist.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Your wishlist is empty.</p>
                        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                            Browse Cars
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {wishlist.map((car) => (
                            <div key={car.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(car.id)}
                                    onMouseLeave={() => handleMouseLeave(car.id)}
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        {car.images.map((image, index) => (
                                            <img
                                                key={index}
                                                src={image}
                                                alt={`${car.name} - View ${index + 1}`}
                                                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${currentImageIndices[car.id] === index ? 'opacity-100' : 'opacity-0'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="absolute bottom-2 right-2 flex space-x-1">
                                        {car.images.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-2 h-2 rounded-full transition-colors duration-300 ${currentImageIndices[car.id] === index
                                                        ? 'bg-blue-600 dark:bg-blue-400'
                                                        : 'bg-gray-300 dark:bg-gray-600'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => removeFromWishlist(car.id)}
                                        className="absolute top-3 right-3 bg-white dark:bg-gray-700 p-2 rounded-full shadow hover:scale-110 transition-transform"
                                    >
                                        <span className="text-red-500">✕</span>
                                    </button>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer" onClick={() => goToDetail(car.id)}>
                                        {car.name}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 mt-1">{car.brand}</p>
                                    <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-2">${car.price.toLocaleString('en-US')}</p>
                                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2 text-sm">
                                        <span>{car.fuel}</span>
                                        <span className="mx-2">•</span>
                                        <span>{car.seats} Seats</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
