import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CTA = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-gradient-to-b from-darkBrown to-charcoal relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-warmBrown rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-beige rounded-full blur-3xl"
                    animate={{
                        scale: [1.3, 1, 1.3],
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        className="inline-block mb-8"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    >
                        <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-warmBrown to-darkBrown flex items-center justify-center">
                            <svg className="w-10 h-10 text-cream" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-cream mb-6 leading-tight">
                        This is what a modern<br />café experience looks like
                    </h2>

                    <p className="text-xl md:text-2xl text-beige/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Elevate your brand. Delight your customers. Stand out in Rajkot's café scene.
                    </p>

                    <motion.button
                        className="btn-primary text-lg px-12 py-5 relative overflow-hidden group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Launch This Experience
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-darkBrown via-warmBrown to-darkBrown"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.button>

                    {/* Trust indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6 }}
                        className="mt-16 flex flex-wrap justify-center gap-8 text-beige/60"
                    >
                        {['Modern Design', 'Easy Setup', 'Premium Support'].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                className="flex items-center gap-2"
                            >
                                <svg className="w-5 h-5 text-warmBrown" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
