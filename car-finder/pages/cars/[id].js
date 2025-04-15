import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaHeart, FaRegHeart, FaCar, FaGasPump, FaUsers, FaArrowLeft } from 'react-icons/fa';
import { useTheme } from '../_app';
import cars from '../../data/cars';

export default function CarDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [car, setCar] = useState(null);
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { darkMode } = useTheme();

    useEffect(() => {
        if (id) {
            // First try to find the car in the direct cars data
            const foundCar = cars.find(c => c.id.toString() === id.toString());
            if (foundCar) {
                setCar(foundCar);
                // Check wishlist status
                const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
                setIsWishlisted(wishlist.some(item => item.id === foundCar.id));
            }
        }
    }, [id]);

    const toggleWishlist = () => {
        if (!car) return;

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

    if (!car) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    const carDescription = `The ${car.name} is a ${car.fuel.toLowerCase()}-powered vehicle from ${car.brand}, offering comfortable seating for ${car.seats} passengers. This model combines style, performance, and reliability, making it an excellent choice for both daily commuting and long-distance travel.`;

    const features = [
        { icon: <FaCar className="text-xl" />, label: 'Brand', value: car.brand },
        { icon: <FaGasPump className="text-xl" />, label: 'Fuel Type', value: car.fuel },
        { icon: <FaUsers className="text-xl" />, label: 'Seating Capacity', value: `${car.seats} Seats` }
    ];

    // Ensure we have an images array, even if it's just a single image
    const carImages = Array.isArray(car.images) ? car.images : [car.image];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Navigation Bar */}
            <nav className="bg-white dark:bg-gray-800 shadow-md p-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                        <FaArrowLeft />
                        <span>Back to Cars</span>
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Image Section */}
                        <div className="md:w-1/2 relative">
                            <div className="relative h-[400px] overflow-hidden">
                                {carImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`${car.name} - View ${index + 1}`}
                                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                                            }`}
                                    />
                                ))}
                            </div>
                            {carImages.length > 1 && (
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    {carImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentImageIndex === index
                                                    ? 'bg-blue-600 dark:bg-blue-400'
                                                    : 'bg-gray-300 dark:bg-gray-600'
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                            <button
                                onClick={toggleWishlist}
                                className="absolute top-4 right-4 bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
                            >
                                {isWishlisted ? (
                                    <FaHeart className="text-red-500 text-xl" />
                                ) : (
                                    <FaRegHeart className="text-gray-400 text-xl" />
                                )}
                            </button>
                        </div>

                        {/* Details Section */}
                        <div className="md:w-1/2 p-8">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">{car.name}</h1>
                            <div className="flex items-center space-x-2 mb-6">
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">${car.price.toLocaleString('en-US')}</span>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                                            <div className="text-blue-600 dark:text-blue-400">{feature.icon}</div>
                                            <div>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{feature.label}</p>
                                                <p className="font-medium text-gray-900 dark:text-gray-100">{feature.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Description</h2>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{carDescription}</p>
                            </div>

                            <div className="flex space-x-4">
                                <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                                    Contact Dealer
                                </button>
                                <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors dark:text-blue-400 dark:border-blue-400">
                                    Schedule Test Drive
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
