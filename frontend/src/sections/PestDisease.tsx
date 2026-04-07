import { motion } from "framer-motion";

import insectsImg from "../assets/images/pest/insects.jpg";
import fungusImg from "../assets/images/pest/fungus.jpg";
import virusImg from "../assets/images/pest/virus.jpg";
import weedsImg from "../assets/images/pest/weeds.jpg";
import nematodesImg from "../assets/images/pest/nematodes.jpg";

type Pest = {
    id: number;
    name: string;
    image: string;
};

const pests: Pest[] = [
    { id: 1, name: "Insects", image: insectsImg },
    { id: 2, name: "Fungus", image: fungusImg },
    { id: 3, name: "Virus", image: virusImg },
    { id: 4, name: "Weeds", image: weedsImg },
    { id: 5, name: "Nematodes", image: nematodesImg },
];

const PestDisease = () => {
    return (
        <section
            aria-labelledby="pest-heading"
            className="py-12 bg-white"
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="mb-8">
                    <h2
                        id="pest-heading"
                        className="text-2xl md:text-3xl font-bold text-gray-800"
                    >
                        Shop by Pest & Disease
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Find solutions based on crop problems
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

                    {pests.map((pest, index) => (
                        <motion.article
                            key={pest.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <figure className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

                                {/* Image */}
                                <img
                                    src={pest.image}
                                    alt={pest.name}
                                    className="w-full h-32 object-cover group-hover:scale-110 transition duration-300"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                                {/* Text */}
                                <p className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg">
                                    {pest.name}
                                </p>
                            </figure>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PestDisease;