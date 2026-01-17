import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderingProcess = () => {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(0);

    const steps = [
        {
            number: '01',
            title: 'Scan QR Code',
            description: 'Each table has a unique QR code. Simply scan it with your phone camera.',
            icon: (
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Browse Menu',
            description: 'Explore our full menu with beautiful photos, detailed descriptions, and prices.',
            icon: (
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Customize Order',
            description: 'Add items to cart, customize preferences, and add special instructions.',
            icon: (
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Confirm & Send',
            description: 'Review your order and send it directly to our kitchen with one tap.',
            icon: (
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
        {
            number: '05',
            title: 'Sit Back & Relax',
            description: 'Your order is being prepared. Track the status in real-time on your phone.',
            icon: (
                <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-charcoal via-darkBrown to-charcoal overflow-x-hidden">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/80 backdrop-blur-lg border-b border-warmBrown/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
                    <h1 className="text-xl sm:text-2xl font-display font-bold text-cream truncate">Lieto Café</h1>

                    <motion.button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-cream hover:text-warmBrown transition-colors flex-shrink-0"
                        whileHover={{ x: 5 }}
                    >
                        <span className="font-medium hidden sm:inline">Back to Home</span>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.button>
                </div>
            </header>

            {/* Main Content */}
            <div className="pt-24 pb-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6">
                            How It Works
                        </h2>
                        <p className="text-xl md:text-2xl text-beige/80 max-w-3xl mx-auto">
                            Experience seamless ordering in 5 simple steps
                        </p>
                    </motion.div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center mb-16">
                        <div className="flex items-center gap-2">
                            {steps.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-500 ${index === currentStep ? 'w-12 bg-warmBrown' : 'w-2 bg-warmBrown/30'
                                        }`}
                                    animate={{
                                        scale: index === currentStep ? 1.2 : 1,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Animated Steps Display */}
                    <div className="relative h-[600px] md:h-[500px] overflow-hidden rounded-2xl">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, scale: 0.8, x: 100 }}
                                animate={{
                                    opacity: index === currentStep ? 1 : 0,
                                    scale: index === currentStep ? 1 : 0.8,
                                    x: index === currentStep ? 0 : index < currentStep ? -100 : 100,
                                }}
                                transition={{ duration: 0.6, ease: 'easeInOut' }}
                                className="absolute inset-0"
                            >
                                <div className="glass-card p-8 md:p-12 h-full flex flex-col items-center justify-center text-center">
                                    {/* Step Number */}
                                    <motion.div
                                        animate={{
                                            rotate: index === currentStep ? [0, 360] : 0,
                                        }}
                                        transition={{ duration: 1, ease: 'easeOut' }}
                                        className="mb-8"
                                    >
                                        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-warmBrown to-darkBrown flex items-center justify-center relative">
                                            <span className="text-4xl font-display font-bold text-cream">
                                                {step.number}
                                            </span>
                                            <motion.div
                                                className="absolute inset-0 rounded-full bg-warmBrown/30 blur-xl"
                                                animate={{
                                                    scale: [1, 1.3, 1],
                                                    opacity: [0.3, 0.6, 0.3],
                                                }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Icon */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: index === currentStep ? 1 : 0 }}
                                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                        className="text-warmBrown mb-8"
                                    >
                                        {step.icon}
                                    </motion.div>

                                    {/* Title */}
                                    <motion.h3
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: index === currentStep ? 0 : 20,
                                            opacity: index === currentStep ? 1 : 0,
                                        }}
                                        transition={{ delay: 0.3 }}
                                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-cream mb-4"
                                    >
                                        {step.title}
                                    </motion.h3>

                                    {/* Description */}
                                    <motion.p
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            y: index === currentStep ? 0 : 20,
                                            opacity: index === currentStep ? 1 : 0,
                                        }}
                                        transition={{ delay: 0.4 }}
                                        className="text-lg md:text-xl text-beige/80 max-w-2xl"
                                    >
                                        {step.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Manual Navigation */}
                    <div className="flex justify-center gap-4 mt-12">
                        <motion.button
                            onClick={() => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)}
                            className="w-12 h-12 rounded-full bg-warmBrown/20 border-2 border-warmBrown text-warmBrown flex items-center justify-center hover:bg-warmBrown hover:text-cream transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.button>

                        <motion.button
                            onClick={() => setCurrentStep((prev) => (prev + 1) % steps.length)}
                            className="w-12 h-12 rounded-full bg-warmBrown/20 border-2 border-warmBrown text-warmBrown flex items-center justify-center hover:bg-warmBrown hover:text-cream transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="text-center mt-16"
                    >
                        <p className="text-beige/70 mb-6 text-lg">
                            Ready to experience the future of café dining?
                        </p>
                        <motion.button
                            onClick={() => navigate('/')}
                            className="btn-primary text-lg px-12 py-5"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OrderingProcess;
