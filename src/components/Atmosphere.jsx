import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const vibes = [
    {
        title: 'Artisan Coffee',
        description: 'Carefully sourced beans, expertly roasted',
        gradient: 'from-warmBrown/40 to-darkBrown/40',
        image: '/coffee_cup_aesthetic_1768642896407.png',
    },
    {
        title: 'Handcrafted Desserts',
        description: 'Sweet moments, beautifully presented',
        gradient: 'from-beige/40 to-warmBrown/40',
        image: '/cafe_desserts_display_1768642913442.png',
    },
    {
        title: 'Cozy Ambience',
        description: 'Your perfect escape from the everyday',
        gradient: 'from-darkBrown/40 to-charcoal/40',
        image: '/cafe_ambience_seating_1768642932873.png',
    },
];

const Atmosphere = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} className="section-padding bg-gradient-to-b from-charcoal to-darkBrown overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6">
                        The Atmosphere
                    </h2>
                    <p className="text-xl text-beige/70 max-w-2xl mx-auto">
                        Every detail designed to create moments worth savoring
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {vibes.map((vibe, index) => (
                        <motion.div
                            key={vibe.title}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                            animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            style={{ y: index === 1 ? y : 0 }}
                            className="perspective-1000"
                        >
                            <motion.div
                                whileHover={{
                                    rotateY: 8,
                                    rotateX: 8,
                                    scale: 1.05,
                                }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="preserve-3d cursor-pointer"
                            >
                                <div className="glass-card p-8 h-80 flex flex-col justify-end relative overflow-hidden">
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={vibe.image}
                                            alt={vibe.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${vibe.gradient}`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <motion.h3
                                            className="text-3xl md:text-4xl font-display font-bold text-cream mb-3"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {vibe.title}
                                        </motion.h3>
                                        <p className="text-beige/80 text-lg">
                                            {vibe.description}
                                        </p>
                                    </div>

                                    {/* Hover glow */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-t from-warmBrown/20 to-transparent opacity-0"
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Atmosphere;
