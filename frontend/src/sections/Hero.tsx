import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.jpg";

const Hero = () => {
    return (
        <section
            aria-label="Hero Section"
            className="relative bg-linear-to-br from-green-50 to-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                        Empowering Farmers with{" "}
                        <span className="text-green-600">
                            Smart Agriculture
                        </span>
                    </h1>


                    <p className="mt-4 text-gray-600 text-lg">
                        Discover high-quality seeds, fertilizers, and modern farming tools
                        designed to boost your productivity and yield.
                    </p>

                    <nav className="mt-6 flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition"
                        >
                            Shop Now
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-100 transition"
                        >
                            Explore Categories
                        </motion.button>
                    </nav>
                </motion.article>

                {/* RIGHT IMAGE */}
                <motion.figure
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <img
                        src={heroImg}
                        alt="Farmer using modern agriculture tools"
                        className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover"
                    />
                </motion.figure>
            </div>

            {/* Decorative Gradient Blob */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        </section>
    );
};

export default Hero;