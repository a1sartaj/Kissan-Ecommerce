import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products.ts";

const Trending = () => {
    return (
        <section
            aria-labelledby="trending-heading"
            className="py-12 bg-gray-50"
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2
                        id="trending-heading"
                        className="text-2xl md:text-3xl font-bold text-gray-800"
                    >
                        Trending Products
                    </h2>

                    <button type="button" className="text-green-600 font-medium hover:underline">
                        View All
                    </button>
                </div>

                {/* Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Trending;