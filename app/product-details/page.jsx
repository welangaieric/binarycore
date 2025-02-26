'use client'
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { MobileNav } from "@/components/mobileNav";
import { motion } from "framer-motion";
import { Suspense } from "react";

const products = [
    {
        name: "E-commerce System",
        tagline: "Your trusted online shop platform",
        description: "Our e-commerce system is a robust and user-friendly platform...",
        price: "1900 KES/month",
        requirements: [
            { name: 'Till Number' },
            { name: 'ID Number' },
            { name: 'Phone Number' }
        ]
    },
    {
        name: "Hotspot and PPPoE Billing System",
        tagline: "Monetize your services effortlessly",
        description: "Our Hotspot and PPPoE Billing System is designed to help...",
        price: "1500 KES/month",
        requirements: [
            { name: 'Till Number' },
            { name: 'ID Number' },
            { name: 'Phone Number' }
        ]
    }
];

function ProductDetailsContent() {
    const searchParams = useSearchParams();
    const search = searchParams.get('key');
    
    if (!search || !products[search]) {
        return <p className="text-center text-red-500">Invalid product selection.</p>;
    }

    const data = products[search];
    const requirements = data.requirements;

    return (
        <section className="prod_details w-screen min-h-screen md:h-fit flex justify-center pt-3 border-teal-700 items-center flex-col md:flex-row">
            <div className="container px-4 md:px-6">
                <div className="app_image w-full h-1/2 md:h-full py-6 flex justify-center gap-3 flex-col items-center">
                    <div className="app_image h-96">
                        <div className="w-full h-3/4">
                            <img src="/bg.png" alt="" className="h-full w-full" />
                        </div>
                        <div className="h-1/4 w-full bg-slate-100 p-4 dark:bg-slate-600">
                            <h2 className="font-bold text-xl">{data.name}</h2>
                            <p>{data.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app_description w-full h-1/2 md:h-full flex flex-col justify-center">
                <div className="container px-4 md:px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="font-bold text-2xl"
                    >
                        App Details
                    </motion.h1>
                    <div className="dec-details flex flex-col gap-3">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            {data.description}
                        </motion.p>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl font-bold"
                        >
                            Requirements
                        </motion.h3>
                        <ul>
                            {requirements.map((item, index) => (
                                <motion.li
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    key={index}
                                >
                                    {item.name}
                                </motion.li>
                            ))}
                        </ul>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            Demo Credentials
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
            </div>
            <MobileNav />
        </section>
    );
}

export default function ProductDetails() {
    return (
        <Suspense fallback={<p className="text-center">Loading...</p>}>
            <ProductDetailsContent />
        </Suspense>
    );
}
