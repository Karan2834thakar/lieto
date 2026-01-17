import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
    {
        title: 'Elegant Website Presence',
        description: 'A stunning digital identity that reflects your café\'s premium aesthetic',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'QR-Based Table Ordering',
        description: 'Seamless ordering experience from the comfort of your table',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
        ),
    },
    {
        title: 'Faster Service, Less Waiting',
        description: 'Orders reach your kitchen instantly, reducing wait times significantly',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: 'Premium Customer Experience',
        description: 'Elevate every touchpoint with modern, intuitive technology',
        icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
    },
];

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-gradient-to-b from-darkBrown to-charcoal">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream mb-6">
                        What You Get
                    </h2>
                    <p className="text-xl text-beige/70 max-w-2xl mx-auto">
                        A complete digital transformation that elevates your café experience
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                rotateY: 5,
                                rotateX: 5,
                            }}
                            className="perspective-1000"
                        >
                            <div className="glass-card p-8 h-full preserve-3d group cursor-pointer glow-on-hover">
                                <motion.div
                                    className="text-warmBrown mb-6"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {feature.icon}
                                </motion.div>

                                <h3 className="text-2xl font-display font-semibold text-cream mb-4">
                                    {feature.title}
                                </h3>

                                <p className="text-beige/70 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Hover glow effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-warmBrown/0 to-warmBrown/0 rounded-2xl -z-10"
                                    whileHover={{
                                        background: "linear-gradient(to bottom right, rgba(139,111,71,0.1), rgba(139,111,71,0.05))",
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
