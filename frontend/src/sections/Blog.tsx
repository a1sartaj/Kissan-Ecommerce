import { motion } from "framer-motion";
import { blogs } from "../data/blogs";

const Blog = () => {
    return (
        <section aria-labelledby="blog-heading" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2
                            id="blog-heading"
                            className="text-2xl md:text-3xl font-bold text-gray-800"
                        >
                            Articles & Blogs
                        </h2>
                        <p className="text-gray-500 mt-1">
                            Learn modern farming techniques and tips
                        </p>
                    </div>

                    <button type="button" className="text-green-600 font-medium hover:underline">
                        View All
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
                        >
                            <figure>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
                                />
                            </figure>

                            <div className="p-4">
                                <p className="text-xs text-gray-400">{blog.date}</p>

                                <h3 className="mt-2 text-lg font-semibold text-gray-800 group-hover:text-green-600 transition">
                                    {blog.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                    {blog.description}
                                </p>

                                <button type="button" className="mt-4 text-green-600 text-sm font-medium hover:underline">
                                    Read More →
                                </button>
                            </div>
                        </motion.article>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Blog;