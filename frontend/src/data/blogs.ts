export type Blog = {
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
};

import blog1 from "../assets/images/blog/blog1.jpg";
import blog2 from "../assets/images/blog/blog2.jpg";
import blog3 from "../assets/images/blog/blog3.jpg";

export const blogs: Blog[] = [
    {
        id: 1,
        title: "Best Practices for Healthy Crop Growth",
        description: "Learn how to improve your crop yield with simple and effective farming techniques.",
        image: blog1,
        date: "April 5, 2026",
    },
    {
        id: 2,
        title: "How to Protect Crops from Pests",
        description: "Discover the best methods to prevent pest damage and keep your crops safe.",
        image: blog2,
        date: "April 3, 2026",
    },
    {
        id: 3,
        title: "Smart Farming Techniques in 2026",
        description: "Explore modern farming technologies that can boost productivity and efficiency.",
        image: blog3,
        date: "April 1, 2026",
    },
];