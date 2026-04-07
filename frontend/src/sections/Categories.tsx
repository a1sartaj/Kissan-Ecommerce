import { motion } from "framer-motion";
import seedsImg from "../assets/images/categories/seeds.jpg";
import fertilizerImg from "../assets/images/categories/fertilizer.jpg";
import sprayerImg from "../assets/images/categories/sprayer.jpg";
import toolsImg from "../assets/images/categories/tools.jpg";
import smartImg from "../assets/images/categories/smart.jpg";
import growthImg from "../assets/images/categories/growth.jpg";

type Category = {
    id: number;
    name: string;
    image: string;
};

const categories: Category[] = [
    { id: 1, name: "Seeds", image: seedsImg },
    { id: 2, name: "Fertilizers", image: fertilizerImg },
    { id: 3, name: "Sprayers", image: sprayerImg },
    { id: 4, name: "Tools", image: toolsImg },
    { id: 5, name: "Smart Farming", image: smartImg },
    { id: 6, name: "Growth Promoters", image: growthImg },
];

const Categories = () => {
    return (
        <section
            aria-labelledby="categories-heading"
            className="py-12 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="mb-8">
                    <h2
                        id="categories-heading"
                        className="text-2xl md:text-3xl font-bold text-gray-800"
                    >
                        Shop by Categories
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Explore products based on your farming needs
                    </p>
                </div>

                {/* Grid section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">

                    {categories.map((cat, index) => (
                        <motion.article
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <figure className="bg-gray-50 rounded-xl p-4 flex flex-col items-center shadow-sm hover:shadow-md transition">

                                <div className="w-20 h-20 mb-3 overflow-hidden rounded-full">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                                    />
                                </div>

                                <p className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition text-center">
                                    {cat.name}
                                </p>
                            </figure>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Categories;