import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const BestSelling = () => {
    return (
        <section
            aria-labelledby="best-selling-heading"
            className="py-12 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2
                            id="best-selling-heading"
                            className="text-2xl md:text-3xl font-bold text-gray-800"
                        >
                            Best Selling Products
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Most trusted products by farmers
                        </p>
                    </div>

                    <button type="button" className="text-green-600 font-medium hover:underline">
                        View All
                    </button>
                </div>

                {/* Grid Section */}
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

export default BestSelling;