import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
    {
        number: '01',
        title: 'Scan QR from Table',
        description: 'Each table has a unique QR code for instant access',
    },
    {
        number: '02',
        title: 'Browse Menu & Select',
        description: 'Beautiful menu with photos, descriptions, and customization',
    },
    {
        number: '03',
        title: 'Order Reaches Staff',
        description: 'Your order is sent directly to the kitchen in real-time',
    },
];

const HowItWorks = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-gradient-to-b from-charcoal via-darkBrown/50 to-charcoal">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6">
                        How It Works
                    </h2>
                    <p className="text-xl text-beige/70 max-w-2xl mx-auto">
                        Three simple steps to a seamless ordering experience
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-warmBrown/30 to-transparent transform -translate-y-1/2" />

                    <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -10 }}
                                    className="text-center"
                                >
                                    {/* Step number circle */}
                                    <motion.div
                                        className="relative inline-block mb-8"
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-warmBrown to-darkBrown flex items-center justify-center relative z-10">
                                            <span className="text-3xl font-display font-bold text-cream">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Glow effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-warmBrown/30 blur-xl"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                opacity: [0.3, 0.6, 0.3],
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                    </motion.div>

                                    <h3 className="text-2xl md:text-3xl font-display font-semibold text-cream mb-4">
                                        {step.title}
                                    </h3>

                                    <p className="text-beige/70 leading-relaxed max-w-xs mx-auto">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Arrow connector (desktop only) */}
                                {index < steps.length - 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.8 + index * 0.2 }}
                                        className="hidden lg:block absolute top-12 -right-6 text-warmBrown/40"
                                    >
                                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
