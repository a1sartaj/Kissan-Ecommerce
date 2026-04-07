import { motion } from "framer-motion";

import wheatImg from "../assets/images/crops/wheat.jpg";
import riceImg from "../assets/images/crops/rice.jpg";
import maizeImg from "../assets/images/crops/maize.jpg";
import cottonImg from "../assets/images/crops/cotton.jpg";
import potatoImg from "../assets/images/crops/potato.jpg";
import tomatoImg from "../assets/images/crops/tomato.jpg";

type Crop = {
    id: number;
    name: string;
    image: string;
};

const crops: Crop[] = [
    { id: 1, name: "Wheat", image: wheatImg },
    { id: 2, name: "Rice", image: riceImg },
    { id: 3, name: "Maize", image: maizeImg },
    { id: 4, name: "Cotton", image: cottonImg },
    { id: 5, name: "Potato", image: potatoImg },
    { id: 6, name: "Tomato", image: tomatoImg },
];

const CropSection = () => {
    return (
        <section
            aria-labelledby="crop-heading"
            className="py-12 bg-green-50"
        >
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="mb-8">
                    <h2
                        id="crop-heading"
                        className="text-2xl md:text-3xl font-bold text-gray-800"
                    >
                        Shop by Crop
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Choose products tailored to your crop
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                    {crops.map((crop, index) => (
                        <motion.article
                            key={crop.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <figure className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">

                                {/* Image */}
                                <img
                                    src={crop.image}
                                    alt={crop.name}
                                    className="w-full h-32 object-cover group-hover:scale-110 transition duration-300"
                                />

                                {/* Bottom Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/60 to-transparent"></div>

                                {/* Text */}
                                <p className="absolute bottom-2 left-3 text-white font-semibold">
                                    {crop.name}
                                </p>
                            </figure>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default CropSection;