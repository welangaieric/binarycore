import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full items-center justify-center flex py-6 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium">About Devlabs</h3>
            <ul className="space-y-1">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Our Story</Link></li>
              <li><Link href="/about#teams" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Team</Link></li>
              {/* <li><Link href="/about" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Careers</Link></li> */}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-1">
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Web Development</Link></li>
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Mobile App Development</Link></li>
              <li><Link href="/services" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Networking Services</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Products</h3>
            <ul className="space-y-1">
              <li><Link href="/products" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">E-commerce System</Link></li>
              <li><Link href="/products" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Billing System</Link></li>
              <li><Link href="/products" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">Ticket Selling System</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-1">
              <li><a href="mailto:devlabskenya@gmail.com" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">binarycoresystems@gmail.com</a></li>
              <li><a href="tel:+254110517055" className="text-sm text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">+254110517055</a></li>
              <li><span className="text-sm text-gray-500 dark:text-gray-400">Eldoret, Kenya</span></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2023 Binary Core Systems. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

