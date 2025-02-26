'use client'
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { MobileNav } from "@/components/mobileNav";
import { motion } from "framer-motion";
const products = [
    {
        name: "E-commerce System",
        tagline: "Your trusted online shop platform",
        description: "Our e-commerce system is a robust and user-friendly platform designed to help you manage your online shop effortlessly. It comes with features like inventory tracking, allowing you to keep your stock updated and organized in real time. Payment integration makes it easy to accept payments from your customers using popular methods like M-Pesa, credit cards, and more. Additionally, the system supports order management, enabling seamless communication with your clients, automated invoice generation, and shipment tracking. With a customizable interface, you can tailor the platform to suit your brand’s identity and deliver an exceptional shopping experience. This solution is perfect for startups, SMEs, and businesses looking to scale online while maintaining professionalism and reliability.",
        price: "1900 KES/month",
        requiremets: [
            { name: 'Till Number' },
            { name: 'ID Number' },
            { name: 'Phone Number' }
        ]
    },
    {
        name: "Hotspot and PPPoE Billing System",
        tagline: "Monetize your services effortlessly",
        description: "Our Hotspot and PPPoE Billing System is designed to help internet service providers manage and monetize their networks efficiently. With features like usage tracking, bandwidth control, and user authentication, you can ensure smooth operations and prevent unauthorized access. The system generates detailed reports, enabling you to analyze usage patterns and improve service quality. Flexible payment options such as prepaid or postpaid plans are integrated, making it easier to manage customer subscriptions. It also supports FreeRADIUS for advanced configurations and seamless device compatibility. Whether you're running a small hotspot or a large PPPoE network, this system ensures you maximize your earnings while delivering a reliable internet experience to your clients.",
        price: "1500 KES/month",
        requiremets: [
            { name: 'Till Number' },
            { name: 'ID Number' },
            { name: 'Phone Number' }
        ]
    },
    {
        name: "Ticket Selling System",
        tagline: "Sell tickets fast and easily",
        description: "Our Ticket Selling System simplifies event management by enabling you to sell tickets quickly and efficiently. With an intuitive interface, you can list events, set ticket prices, and track sales in real time. The system offers multiple payment options, ensuring convenience for your customers. It also provides tools for managing attendee lists, generating QR-coded tickets for easy verification, and sending automated notifications to buyers. Analytics dashboards help you monitor event performance and make data-driven decisions for future planning. Best of all, you only pay a 4% commission on sales, making this a cost-effective solution for event organizers looking to streamline ticketing and boost revenue.",
        price: "4% commission",
        requiremets: [
            { name: 'Till Number' },
            { name: 'ID Number' },
            { name: 'Phone Number' }
        ]
    },
    {
        name: "Employee Management System",
        tagline: "Manage your business conveniently",
        description: "Our Employee Management System is designed to streamline HR operations and enhance collaboration between your team members. It allows you to maintain employee records, track attendance, and manage payroll effortlessly. The system features task assignment tools to help managers delegate responsibilities efficiently while enabling employees to update progress in real time. Integrated performance tracking and feedback modules foster accountability and encourage productivity. A user-friendly dashboard provides insights into workforce performance, enabling data-driven decision-making. Additionally, the system supports custom branding with your business logo and name to maintain a professional image. Whether you’re managing a small team or a large workforce, this solution ensures your business runs smoothly.",
        price: "2500 KES/month",
        requiremets: [
            { name: 'Till Number' },
            { name: 'Business Name' },
            { name: 'Phone Number' },
            { name: 'Business Logo' }
        ]
    }
];

const productDetails = () => {
    const key = useSearchParams()
    const search = key.get('key')
    const data = products[search]
    // console.log(data)
    const requiremets = data.requiremets
    // console.log(requiremets)

    return ( 
        
        <section className="prod_details w-screen  min-h-screen md:h-fit  flex justify-center pt-3 border-teal-700 items-center flex-col md:flex-row">
            <div className="container px-4 md:px-6">
                <div className="app_image w-full h-1/2 md:h-full py-6  flex justify-center gap-3 flex-col items-center">
                    <div className="app_image  h-96 ">
                    
                        <div className="w-full h-3/4"> <img src="/bg.png" alt="" className="h-full w-full"/></div>
                        <div className="h-1/4 w-full bg-slate-100 p-4 dark:bg-slate-600">
                            <h2 className="font-bold text-xl">{data.name}</h2>
                            <p>{data.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="app_description w-full h-1/2 md:h-full flex flex-col justify-center ">
            <div className="container px-4 md:px-6 ">
            <motion.h1
                    initial={{ opacity: 0 ,y:20}}
                    whileInView={{ opacity: 1,y:0}}
                    className="font-bold text-2xl"
                >
                        App Details
                </motion.h1>
        
                <div className="dec-details flex flex-col gap-3">
                <motion.p
                    initial={{ opacity: 0 ,y:20}}
                    whileInView={{ opacity: 1,y:0}}
                >
                        {data.description}
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0 ,y:20}}
                    whileInView={{ opacity: 1,y:0}}
                    className="text-xl font-bold"
                >
                        Requirements
                </motion.h3>
                    <ul>
                       {requiremets.map((item,index)=>(
                        <motion.li
                        initial={{ opacity: 0 ,y:20}}
                        whileInView={{ opacity: 1,y:0}}
                        key={index}
                    >
                            {item.name}
                    </motion.li>
                        // <li key={index}>{item.name}</li>
                       ))}
                       
                    </ul>
                    <motion.p
                    initial={{ opacity: 0 ,y:20}}
                    whileInView={{ opacity: 1,y:0}}
                >
                         Demo Credentials
                        <br />
                        <strong>Username:</strong>  test
                        <br />
                        <strong>Password:</strong>  demo123 
                </motion.p>
                   
                    
                    <div className="w-full flex gap-10">
                        <Button>Demo</Button>
                        <Button variant="outline">Enroll</Button>
                    </div>
                </div>
            </div>
                
            </div>
            <MobileNav/>
            
        </section>
     );
}
 
export default productDetails;