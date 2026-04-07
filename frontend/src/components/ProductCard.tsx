import { motion } from "framer-motion";

type Props = {
    product: Product;
};

export type Product = {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
};

const ProductCard = ({ product }: Props) => {
    const discount =
        product.oldPrice &&
        Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

    return (
        <motion.article
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3"
        >
            <figure className="relative">

                {/* Discount Badge */}
                {discount && (
                    <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                        {discount}% OFF
                    </span>
                )}

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-lg"
                />
            </figure>

            <div className="mt-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                    {product.name}
                </h3>

                <div className="mt-2 flex items-center gap-2">
                    <span className="text-green-600 font-semibold">
                        ₹{product.price}
                    </span>

                    {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">
                            ₹{product.oldPrice}
                        </span>
                    )}
                </div>

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm"
                >
                    Add to Cart
                </motion.button>
            </div>
        </motion.article>
    );
};

export default ProductCard;