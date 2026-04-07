import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4">

                {/* Top Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <article>
                        <h2 className="text-xl font-bold text-white mb-4">
                            KisanStore
                        </h2>
                        <p className="text-sm text-gray-400">
                            Your trusted partner for high-quality agricultural products,
                            seeds, fertilizers, and smart farming solutions.
                        </p>

                        {/* Social */}
                        <div className="flex gap-4 mt-4">
                            <a title="facebook" href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                                <FaFacebookF className="text-white" />
                            </a>

                            <a title="facebook" href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                                <FaInstagram className="text-white" />
                            </a>

                            <a title="facebook" href="#" className="bg-gray-800 p-2 rounded-full hover:bg-green-600 transition">
                                <FaLinkedinIn className="text-white" />
                            </a>
                        </div>
                    </article>

                    {/* Categories (SEO Important) */}
                    <article>
                        <h3 className="text-white font-semibold mb-4">
                            Categories
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Seeds</li>
                            <li className="hover:text-white cursor-pointer">Fertilizers</li>
                            <li className="hover:text-white cursor-pointer">Sprayers</li>
                            <li className="hover:text-white cursor-pointer">Smart Farming</li>
                            <li className="hover:text-white cursor-pointer">Tools</li>
                        </ul>
                    </article>

                    {/* Useful Links */}
                    <article>
                        <h3 className="text-white font-semibold mb-4">
                            Useful Links
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                        </ul>
                    </article>

                    {/* Contact */}
                    <article>
                        <h3 className="text-white font-semibold mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                <Phone size={16} /> +91 9871990306
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} /> sartaj9806@gmail.com
                            </li>
                            <li>
                                New Delhi, India
                            </li>
                        </ul>
                    </article>

                </section>

                {/* Divider */}
                <div className="border-t border-gray-700 my-8"></div>

                {/* Bottom */}
                <section className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} KisanStore. All rights reserved.
                </section>
            </div>
        </footer>
    );
};

export default Footer;