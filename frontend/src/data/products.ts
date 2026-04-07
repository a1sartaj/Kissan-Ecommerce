import seeds from "../assets/images/categories/seeds.jpg";
import fertilizer from "../assets/images/categories/fertilizer.jpg"
import sprayer from "../assets/images/categories/sprayer.jpg"
import growth from "../assets/images/categories/growth.jpg"
import tools from "../assets/images/categories/tools.jpg"

export const products = [
    {
        id: 1,
        name: "Hybrid Tomato Seeds",
        price: 299,
        oldPrice: 399,
        image: seeds,
    },
    {
        id: 2,
        name: "Organic Fertilizer",
        price: 499,
        oldPrice: 699,
        image: fertilizer,
    },
    {
        id: 3,
        name: "Crop Protection Spray",
        price: 259,
        oldPrice: 349,
        image: sprayer,
    },
    {
        id: 4,
        name: "Plant Growth Booster",
        price: 199,
        oldPrice: 299,
        image: growth,
    },
     {
        id: 5,
        name: "Tools for plants",
        price: 199,
        oldPrice: 399,
        image: tools,
    },
];