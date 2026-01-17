import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about-section" ref={ref} className="section-padding bg-gradient-to-b from-charcoal to-darkBrown">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6">
                            The Experience
                        </h2>
                        <div className="space-y-4 text-beige/80 text-lg leading-relaxed">
                            <p>
                                Step into a world where every detail is crafted for your comfort.
                                Warm lighting, curated music, and the aroma of freshly brewed coffee.
                            </p>
                            <p>
                                A sanctuary for thinkers, creators, and dreamers. Where conversations
                                flow as smoothly as our signature blends.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                {['Cozy', 'Quiet', 'Trendy', 'Premium'].map((word, index) => (
                                    <motion.div
                                        key={word}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="glass-card p-4 text-center text-warmBrown font-medium"
                                    >
                                        {word}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -15 }}
                        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                        transition={{ duration: 1 }}
                        className="perspective-1000"
                    >
                        <motion.div
                            className="glass-card p-8 md:p-12 preserve-3d relative"
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            whileHover={{
                                rotateY: 5,
                                rotateX: 5,
                                scale: 1.02
                            }}
                        >
                            <div className="aspect-square rounded-xl overflow-hidden">
                                <img
                                    src="/coffee_cup_aesthetic_1768642896407.png"
                                    alt="Artisan Coffee"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating accent */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-24 h-24 bg-warmBrown/20 rounded-full blur-xl"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3],
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
