import { Menu, X, Search, ShoppingCart } from "lucide-react";
import { useState } from "react";

const categories = [
    "Seeds",
    "Growth Promoters",
    "Smart Farming",
    "Sprayers",
    "Fertilizers",
    "Tools",
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">

                {/* Logo */}
                <div className="text-2xl font-bold text-green-600 cursor-pointer">
                    KisanStore
                </div>

                {/* Search */}
                <div className="hidden md:flex flex-1 relative">
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search seeds, fertilizers..."
                        className="w-full border rounded-full pl-10 pr-4 py-2 focus:ring-2 focus:ring-green-500 outline-none"
                    />
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6">

                    {/* Categories with Fixed Mega Menu */}
                    <li className="relative group">
                        <button type="button" className="font-medium hover:text-green-600 transition">
                            Categories
                        </button>

                        {/* Invisible hover bridge */}
                        <div className="absolute top-full left-0 h-4 w-full"></div>

                        {/* Mega Menu */}
                        <div className="absolute right-0 top-[calc(100%+8px)] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-all duration-200 bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-4 w-130 border">
                            {categories.map((cat, i) => (
                                <div
                                    key={i}
                                    className="p-2 rounded-lg hover:bg-green-50 hover:text-green-600 cursor-pointer transition"
                                >
                                    {cat}
                                </div>
                            ))}
                        </div>
                    </li>

                    <li className="hover:text-green-600 cursor-pointer transition">
                        Offers
                    </li>

                    <li className="hover:text-green-600 cursor-pointer transition">
                        Blog
                    </li>

                    <li>
                        <ShoppingCart className="cursor-pointer hover:text-green-600 transition" />
                    </li>

                    <li>
                        <button type="button" className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                            Login
                        </button>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div className="md:hidden">
                    {menuOpen ? (
                        <X onClick={() => setMenuOpen(false)} />
                    ) : (
                        <Menu onClick={() => setMenuOpen(true)} />
                    )}
                </div>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden px-4 py-4 space-y-4 border-t bg-white ">

                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border rounded-full pl-10 pr-4 py-2"
                        />
                    </div>

                    <div>
                        <p className="font-semibold flex gap-2 items-center ">Categories </p>
                        {categories.map((cat, i) => (
                            <div key={i} className="py-1 text-gray-600">
                                {cat}
                            </div>
                        ))}
                    </div>

                    <div>Offers</div>
                    <div>Blog</div>

                    <button type="button" className="w-full bg-green-600 text-white py-2 rounded-full">
                        Login
                    </button>
                </div>
            )}
        </header>
    );
};

export default Navbar;