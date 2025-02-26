'use client'
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { MobileNav } from "@/components/mobileNav";
import { motion } from "framer-motion";

const products = [
    {
        name: "E-commerce System",
        tagline: "Your trusted online shop platform",
        description: "Our e-commerce system is a robust and user-friendly platform...",
        price: "1900 KES/month",
        requirements: ["Till Number", "ID Number", "Phone Number"]
    },
    {
        name: "Hotspot and PPPoE Billing System",
        tagline: "Monetize your services effortlessly",
        description: "Our Hotspot and PPPoE Billing System is designed to help...",
        price: "1500 KES/month",
        requirements: ["Till Number", "ID Number", "Phone Number"]
    },
    {
        name: "Ticket Selling System",
        tagline: "Sell tickets fast and easily",
        description: "Our Ticket Selling System simplifies event management...",
        price: "4% commission",
        requirements: ["Till Number", "ID Number", "Phone Number"]
    },
    {
        name: "Employee Management System",
        tagline: "Manage your business conveniently",
        description: "Our Employee Management System is designed to streamline HR operations...",
        price: "2500 KES/month",
        requirements: ["Till Number", "Business Name", "Phone Number", "Business Logo"]
    }
];

const ProductDetails = () => {
    const searchParams = useSearchParams();
    const searchKey = searchParams.get('key');
    const data = products[searchKey];

    if (!data) {
        return <p className="text-center text-red-500">Invalid product selection.</p>;
    }

    return (
        <section className="w-screen min-h-screen flex flex-col md:flex-row justify-center items-center pt-3 border-teal-700">
            <div className="container px-4 md:px-6">
                <div className="w-full py-6 flex flex-col items-center gap-3">
                    <div className="h-96 w-full flex flex-col items-center">
                        <img src="/bg.png" alt="" className="h-3/4 w-full" />
                        <div className="h-1/4 w-full bg-slate-100 p-4 dark:bg-slate-600">
                            <h2 className="font-bold text-xl">{data.name}</h2>
                            <p>{data.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:h-full flex flex-col justify-center">
                <div className="container px-4 md:px-6">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="font-bold text-2xl">
                        App Details
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                        {data.description}
                    </motion.p>
                    <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-xl font-bold">
                        Requirements
                    </motion.h3>
                    <ul>
                        {data.requirements.map((item, index) => (
                            <motion.li key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                    <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                        <strong>Demo Credentials:</strong>
                        <br />
                        <strong>Username:</strong> test
                        <br />
                        <strong>Password:</strong> demo123
                    </motion.p>
                    <div className="w-full flex gap-10">
                        <Button>Demo</Button>
                        <Button variant="outline">Enroll</Button>
                    </div>
                </div>
            </div>
            <MobileNav />
        </section>
    );
};

export default ProductDetails;
