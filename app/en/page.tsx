"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { useState } from "react"
import LanguageSwitch from "@/components/LanguageSwitch"
import { Instagram } from "lucide-react"
import localFont from 'next/font/local';

const woolWich = localFont({
    src: '../../public/fonts/Woolwich.otf',
    display: 'swap',
});

export default function HomeEng() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav id="homestart" className="flex items-center justify-between px-6 py-4 bg-white relative md:w-350 mx-auto">
                <div className="flex items-center">
                    <span className="text-2xl font-bold">
                        <Link href="/">
                            <Image src="/Logo.png" alt="Krumbs Logo" width={120} height={40} />
                        </Link>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-gray-600">
                        Home
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-gray-600">
                        About
                    </Link>
                    <Link href="#" className="text-sm font-medium hover:text-gray-600">
                        Products
                    </Link>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="#">
                        <Image src={'/Facebook.png'} alt="Facebook" width={24} height={24} className="w-6 h-6" />
                    </Link>
                    <Link href="#">
                        <Image src={'/TikTok.png'} alt="TikTok" width={24} height={24} className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.instagram.com/crumbs.kw?igsh=a3M1cW45cmU3cXYx">
                        <Image src={'/Instagram.png'} alt="Instagram" width={24} height={24} className="w-6 h-6" />
                    </Link>
                    <Link href="https://wa.me/message/PPKFUFEXJHIWJ1">
                        <Image src={'/WhatsApp.png'} alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
                    </Link>
                    <div className="flex items-center gap-2 ml-4">
                        <span className={woolWich.className + " text-lg"}>Ar</span>
                        <LanguageSwitch />
                        <span className={woolWich.className + " text-lg"}>EN</span>
                    </div>
                    <Link href="https://wa.me/message/PPKFUFEXJHIWJ1" target="_blank">
                        <Button className="bg-[#2d7a4f] hover:bg-[#256340] text-white rounded-full px-6 py-5.5 shadow-[3px_4px_0px_#000000]">
                            Order Now <Image src="/Whatsappwhite.png" alt="WhatsApp" width={20} height={20} />
                        </Button>
                    </Link>
                </div>

                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
                    {mobileMenuOpen ? <X className="w-6 h-6 text-[#411D13]" /> : <Menu className="w-6 h-6 text-[#411D13]" />}
                </button>

                {mobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden z-50">
                        <div className="flex flex-col p-6 gap-6 items-center justify-center">
                            <Link href="#homestart" className="text-sm font-medium hover:text-gray-600">
                                Home
                            </Link>
                            <Link href="#aboutus" className="text-sm font-medium hover:text-gray-600">
                                About
                            </Link>
                            <Link href="#products" className="text-sm font-medium hover:text-gray-600">
                                Products
                            </Link>

                            <div className="flex items-center gap-4 pt-4 border-t">
                                <Link href="#">
                                    <Image src={'/Facebook.png'} alt="Facebook" width={24} height={24} className="w-6 h-6" />
                                </Link>
                                <Link href="#">
                                    <Image src={'/TikTok.png'} alt="TikTok" width={24} height={24} className="w-6 h-6" />
                                </Link>
                                <Link href="https://www.instagram.com/crumbs.kw?igsh=a3M1cW45cmU3cXYx">
                                    <Image src={'/Instagram.png'} alt="Instagram" width={24} height={24} className="w-6 h-6" />
                                </Link>
                                <Link href="https://wa.me/message/PPKFUFEXJHIWJ1">
                                    <Image src={'/WhatsApp.png'} alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
                                </Link>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className={woolWich.className + " text-lg"}>Ar</span>
                                <LanguageSwitch />
                                <span className={woolWich.className + " text-lg"}>EN</span>
                            </div>

                            <Link href="https://wa.me/message/PPKFUFEXJHIWJ1" target="_blank" >
                                <Button className="bg-[#2d7a4f] hover:bg-[#256340] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]">
                                    Order Now <Image src="/Whatsappwhite.png" alt="WhatsApp" width={20} height={20} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="md:bg-[url('/herobg.png')] bg-[url('/heromobile.png')] md:bg-size-[1400px_800px] bg-cover bg-bottom bg-no-repeat rounded-[64px] md:h-auto h-125 md:py-30 py-15 md:px-20 px-8 mt-2 md:w-350 md:mx-auto mx-6">
                <div>
                    <h1 className={woolWich.className + " md:text-[128px] text-[40px] text-[#411D13] font-black mb-6 leading-tight relative hidden md:block"}>
                        FRESHLY <span className="md:w-21 w-17 h-7.5 bg-[#F97D46] md:text-[20px] text-sm rounded-2xl text-white md:font-normal font-bold md:rotate-20 absolute md:left-87.5 md:top-22.5 right-[10%] bottom-[20%] -rotate-20 text-center pt-0.5">GOOEY</span> BAKED
                        <br />
                        JUST FOR YOU
                    </h1>
                    <p className={woolWich.className + " md:text-[40px] text-[#411D13] mb-8 max-w-150 relative hidden md:block"}>PREMIUM COOKIES AND SPECIAL CAKES DELIVERED WARM TO YOUR DOOR.<span className="md:w-21 w-17 h-7.5 bg-[#80003C] md:text-[20px] text-sm rounded-2xl text-white md:font-normal font-bold md:-rotate-20 rotate-20 absolute md:-right-1 md:top-17.5 -bottom-2 right-[33%] text-center pt-0.5">FRESH</span></p>
                    {/* Mobile */}
                    <h1 className={woolWich.className + " text-[40px] text-[#411D13] font-black mb-6 leading-tight block md:hidden"}>
                        FRESHLY BAKED
                        <br />
                        JUST FOR YOU <span className="w-17 h-7.5 bg-[#F97D46] text-sm rounded-2xl text-white font-bold rotate-20 text-center pt-0.5 inline-block max-[405px]:hidden">GOOEY</span>
                    </h1>
                    <p className={woolWich.className + " text-[16px] text-[#411D13] mb-8 max-w-150 block md:hidden"}>PREMIUM COOKIES AND SPECIAL CAKES DELIVERED WARM TO YOUR DOOR.<span className="w-17 h-7.5 bg-[#80003C] rounded-2xl text-white font-bold -rotate-15 text-center pt-0.5 inline-block max-[405px]:hidden">FRESH</span></p>
                    {/* end mobild */}
                    <Link href="https://wa.me/message/PPKFUFEXJHIWJ1" target="_blank">
                        <Button className="bg-[#2d7a4f] hover:bg-[#256340] text-white rounded-full px-6 py-5.5 shadow-[3px_4px_0px_#000000]">
                            Order Now <Image src="/Whatsappwhite.png" alt="WhatsApp" width={20} height={20} />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Our Passion Section */}
            <section id="aboutus" className="mt-16 mb-10 mx-6 bg-white md:w-350 md:mx-auto ">
                <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between ">
                    <div className="md:w-[45%] h-105.5">
                        <video loop muted playsInline autoPlay className="rounded-3xl h-105.5 object-cover w-full mt-5 md:mt-0">
                            <source src="/about.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="md:w-[49%] flex flex-col md:justify-center">
                        <h2 className={woolWich.className + " md:text-[64px] text-[40px] text-[#411D13] font-black mb-6 relative hidden md:block"}>OUR<span className="w-26 h-8.5 bg-[#F5DF23] text-[20px] rounded-2xl text-[#411D13] font-normal md:rotate-11 -rotate-20 absolute md:left-11.5 md:top-0 bottom-7 left-[35%] text-center pt-0.5">ABOUT US</span> PASSION FOR BAKING</h2>
                        {/* mobile */}
                        <h2 className={woolWich.className + " text-[40px] text-[#411D13] font-black mb-6 relative block md:hidden"}><span className="w-26 h-8.5 bg-[#F5DF23] text-[20px] rounded-2xl text-[#411D13] font-normal rotate-20 absolute -top-6 left-0 text-center pt-0.5">ABOUT US</span> OUR PASSION FOR BAKING</h2>
                        {/* end mobile */}
                        <p className="text-[#5E5E5E] md:leading-10 leading-relaxed">
                            Our story began in a small kitchen where we chased a simple passion, creating cookies that tasted like pure joy. What started as homemade experiments soon became our signature recipes, each crafted with heart. After seeing how one cookie could spark a smile, we knew we wanted to share that happiness with everyone. Today, we bake with that same purpose: spreading joy, one cookie at a time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Signatures Section */}
            <section id="products" className="pb-16 pt-10 bg-white">
                <div className="md:w-350 md:mx-auto mx-6 flex flex-col md:flex-row md:items-center md:mb-10">
                    <h2 className={woolWich.className + " text-[64px] text-[#411D13] font-black relative hidden md:block"}>SIGNATURES<span className="w-40 h-8.5 bg-[#F97D46] text-[20px] rounded-2xl text-white font-normal -rotate-11 absolute top-0 left-65 text-center pt-0.5">OUR PRODUCTS</span> WE BAKE</h2>
                    {/* mobile */}
                    <h2 className={woolWich.className + " text-[40px] w-87.5 text-[#411D13] font-black mb-6 relative block md:hidden"}><span className="w-40 h-8.5 bg-[#F97D46] text-[20px] rounded-2xl text-white font-normal rotate-15 absolute -top-6 right-0 text-center pt-0.5">OUR PRODUCTS</span> SIGNATURES WE BAKE</h2>
                    {/* end mobile */}

                    <div className="flex justify-center md:gap-10 gap-4 mb-12 md:mb-0 md:ml-auto">
                        <div
                            className={woolWich.className + " cursor-pointer md:text-[25px] text-[16px] rounded-full text-[#371659] hover:bg-[#e3d0fb] bg-[#E0C8FD] md:px-6.25 px-3.5"}
                        >
                            COOKIES
                        </div>
                        <div
                            className={woolWich.className + " cursor-pointer md:text-[25px] text-[16px] rounded-full text-[#9A3C0E] hover:bg-[#fccfbb] bg-[#FFCAB3] md:px-6.25 px-3.5"}
                        >
                            BROWNIES&apos;
                        </div>
                        <div
                            className={woolWich.className + " cursor-pointer md:text-[25px] text-[16px] rounded-full text-[#1C727E] hover:bg-[#a8dce2] bg-[#A3CDD3] md:px-6.25 px-3.5"}
                        >
                            MINI CAKES
                        </div>
                    </div>
                </div>

                <div className="relative min-[1400px]:w-full md:max-[1400px]:w-350 w-full overflow-hidden">
                    <div
                        className="flex gap-6 animate-infinite-scroll hover:[animation-play-state:paused]"
                        style={{ width: "max-content" }}
                    >
                        {/* We map the array twice for the seamless loop */}
                        {[{ image: "/mangocake.png", title: "MANGO CAKE" },
                        { image: "/specialcake.png", title: "SPECIAL CAKE" },
                        { image: "/cookiebox.png", title: "COOKIES BOX" },
                        { image: "/sancake.png", title: "SAN SEBASTIAN CAKE" },
                        { image: "/5thcake.png", title: "COOKIES" },
                        { image: "/mangocake.png", title: "MANGO CAKE" },
                        { image: "/specialcake.png", title: "SPECIAL CAKE" },
                        { image: "/cookiebox.png", title: "COOKIES BOX" },
                        { image: "/sancake.png", title: "SAN SEBASTIAN CAKE" },
                        { image: "/5thcake.png", title: "COOKIES" },
                        { image: "/mangocake.png", title: "MANGO CAKE" },
                        { image: "/specialcake.png", title: "SPECIAL CAKE" },].map((item, index) => (
                            <Link
                                href={`https://wa.me/96566754902?text=I%20want%20to%20order%20${item.title}`}
                                target="_blank"
                                key={index}
                                className="shrink-0 w-75 group cursor-pointer flex flex-col justify-center"
                            >
                                <div className="relative h-75 rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        fill
                                        sizes="300px"
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Blur overlay with text on hover */}
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <h3 className="font-bold text-xl text-white text-center px-4 flex flex-col items-center justify-center">
                                            <Image
                                                src='/Whatsapporder.png'
                                                alt={'whatsapp icon'}
                                                width={30}
                                                height={30}
                                                className="w-auto h-auto"
                                            />
                                            Order Now
                                        </h3>
                                    </div>
                                </div>
                                <h4 className={woolWich.className + " text-center md:text-[23px] text-[#371659] md:font-normal mt-5"}>{item.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Cookies Section */}
            <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
                <div className="flex flex-col-reverse items-center bg-[#E0C8FD] w-full rounded-[72px] md:flex-row md:h-full">
                    <div className="relative h-100 w-full md:w-1/2 md:h-full">
                        <Image
                            src="/meetpic.png"
                            alt="Meet Cookies"
                            width={300}
                            height={100}
                            className="object-bottom w-full h-full md:hidden block rounded-b-[72px]"
                        />
                        <Image
                            src="/meetpicdesk.png"
                            alt="Meet Cookies"
                            width={300}
                            height={100}
                            className="object-bottom w-full h-full md:block hidden rounded-t-[72px]"
                        />
                    </div>
                    <div className="bg-white rounded-[72px] p-12 m-3 md:p-16 md:my-3 md:mr-3 md:ml-0 md:w-1/2 md:h-[95%] md:flex md:flex-col md:items-start md:justify-center">
                        <h2 className={woolWich.className + " md:text-[64px] text-[40px] leading-none font-normal mb-6 text-[#361659]"}>MEET COOKIES YOU&apos;VE NEVER TASTED BEFORE!</h2>
                        <p className="text-[#411D13] mb-8 leading-relaxed">
                            At Krumbs, every cookie comes from our secret, proudly homemade recipes. mixed, tested, and perfected by us! Crunchy, gooey, chunky, melty... every bite is an adventure created in our kitchen. 🍪
                        </p>
                        <Button className="bg-[#361659] hover:bg-[#5a3486] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">Try Fresh Cookies</Link></Button>
                    </div>
                </div>
            </section>

            {/* Dream Section */}
            <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
                <div className="flex flex-col items-center bg-[#FDE8BF] w-full rounded-[72px] md:flex-row md:h-full md:justify-between">
                    <div className="bg-[#FEF8F1] rounded-[72px] p-12 m-3 md:p-16 md:my-3 md:ml-3 md:mr-0 md:w-[45%] md:h-[95%] md:flex md:flex-col md:justify-center md:items-start">
                        <h2 className={woolWich.className + " md:text-[64px] text-[40px] leading-none font-normal mb-6 text-[#468B4D]"}>IF YOU CAN DREAM IT, WE CAN BAKE IT!</h2>
                        <p className="text-[#411D13] mb-8 leading-relaxed">
                            At Krumbs, your wildest cake ideas come to life. colors, characters, names, themes… go crazy, we love it! Your celebration deserves a cake as fun as YOU.
                        </p>
                        <Button className="bg-[#468B4D] hover:bg-[#54945a] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">Design My Cake</Link></Button>
                    </div>
                    <div className="relative h-100 w-full md:w-[45%] md:h-full md:mr-[5%]">
                        <Image
                            src="/Dreempic.png"
                            alt="Meet Cookies"
                            width={300}
                            height={100}
                            className="w-full md:w-auto mx-auto h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Sweetest Way Section */}
            <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
                <div className="flex flex-col-reverse items-center bg-[#FCC7E0] w-full rounded-[72px] md:flex-row md:h-full">
                    <div className="relative h-100 w-full md:w-1/2 md:h-full">
                        <Image
                            src="/Sweetpic.png"
                            alt="Meet Cookies"
                            width={300}
                            height={100}
                            className="object-bottom w-full h-full md:hidden block rounded-b-[72px]"
                        />
                        <Image
                            src="/Sweetpic.png"
                            alt="Meet Cookies"
                            width={300}
                            height={100}
                            className="object-bottom w-full h-full md:block hidden rounded-t-[72px]"
                        />
                    </div>
                    <div className="bg-white rounded-[72px] p-12 m-3 md:p-16 md:my-3 md:mr-3 md:ml-0 md:w-1/2 md:h-[95%] md:flex md:flex-col md:items-start md:justify-center">
                        <h2 className={woolWich.className + " md:text-[64px] text-[40px] leading-none font-normal mb-6 text-[#80003C]"}>THE SWEETEST WAY TO SAY YOU CARE!</h2>
                        <p className="text-[#411D13] mb-8 leading-relaxed">
                            Our Krumbs Gift Boxes are stuffed with joy—cookies, cakes, treats, and smiles! Perfect for surprising the people who make your life sweeter.
                        </p>
                        <Button className="bg-[#80003C] hover:bg-[#a80350] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">Send a Happy Box</Link></Button>
                    </div>
                </div>
            </section>

            {/* Celebrate Section */}
            <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
                <div className="flex flex-col items-center bg-[#FFCAB3] w-full rounded-[72px] md:flex-row md:h-full md:justify-between">
                    <div className="bg-[#FEF8F1] rounded-[72px] p-12 m-3 md:my-3 md:ml-3 md:mr-0 md:w-[45%] md:flex md:flex-col md:justify-center md:items-start md:p-15 md:h-auto">
                        <h2 className={woolWich.className + " md:text-[64px] text-[40px] leading-none font-normal mb-6 text-[#B45425]"}>CELEBRATE WITHOUT THE STRESS!</h2>
                        <p className="text-[#411D13] mb-8 leading-relaxed">
                            From themed cakes to dessert tables to cute setups. Krumbs handles all the fun stuff, so you can actually enjoy your party. We make your event look good, and taste even better.
                        </p>
                        <Button className="bg-[#B45425] hover:bg-[#c76534] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">Design My Cake</Link></Button>
                    </div>
                    <div className="relative h-100 w-full md:w-[45%] md:h-full md:mr-[5%]">
                        <Image
                            src="/celeberate.png"
                            alt="Meet Cookies"
                            width={300}
                            height={100}
                            className="w-full mx-auto h-full object-cover md:object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Instagram Section */}
            <section className="mt-15 py-16 bg-[#ffc9d9]">
                <div className="flex flex-col">
                    <h2 className={woolWich.className + " md:text-[64px] text-[32px] font-normal mb-12 text-center text-[#411D13]"}>FOLLOW US ON INSTAGRAM</h2>
                    <div className="relative min-[1400px]:w-full md:max-[1400px]:w-350 w-full overflow-hidden">
                        <div
                            className="flex gap-6 animate-infinite-scroll hover:[animation-play-state:paused]"
                            style={{ width: "max-content" }}
                        >
                            {/* We map the array twice for the seamless loop */}
                            {[{ image: "/1stinsta.png" },
                            { image: "/2ndinsta.png" },
                            { image: "/3rdinsta.png" },
                            { image: "/4thinsta.png" },
                            { image: "/5thinsta.png" },
                            { image: "/1stinsta.png" },
                            { image: "/2ndinsta.png" },
                            { image: "/3rdinsta.png" },
                            { image: "/4thinsta.png" },
                            { image: "/5thinsta.png" },
                            { image: "/1stinsta.png" },
                            { image: "/2ndinsta.png" },
                            { image: "/3rdinsta.png" }].map((item, index) => (
                                <Link
                                    href={`https://www.instagram.com/crumbs.kw?igsh=a3M1cW45cmU3cXYx`}
                                    target="_blank"
                                    key={index}
                                    className="shrink-0 w-75 group cursor-pointer flex flex-col justify-center"
                                >
                                    <div className="relative h-75 rounded-2xl overflow-hidden shadow-md">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={`Instagram Photos`}
                                            fill
                                            sizes="300px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        {/* Blur overlay with text on hover */}
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Instagram className="w-15 h-15 text-white" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="pt-16 pb-10 bg-white overflow-hidden">
                <div className="mx-auto md:w-350">
                    <div className="flex items-center md:justify-between justify-center mb-12 md:w-350">
                        <h2 className={woolWich.className + " md:text-[64px] text-[32px] font-normal text-[#80003C]"}>THE STORIES BEHIND EVERY BITE.</h2>
                        <div className="gap-2 hidden md:flex">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-transparent"
                                onClick={() => {
                                    const container = document.getElementById("testimonials-container")
                                    if (container) {
                                        container.scrollBy({ left: -400, behavior: "smooth" })
                                    }
                                }}
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-transparent"
                                onClick={() => {
                                    const container = document.getElementById("testimonials-container")
                                    if (container) {
                                        container.scrollBy({ left: 400, behavior: "smooth" })
                                    }
                                }}
                            >
                                <ChevronRight className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div
                        id="testimonials-container"
                        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth [&::-webkit-scrollbar]:hidden"
                        style={{ paddingLeft: "max(1.5rem, calc((100vw - 89rem) / 2))" }}
                    >
                        <div className="border-2 border-black rounded-2xl p-6 w-100 shrink-0 bg-white">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[#F58424] text-xl">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-base font-black text-black mb-6 leading-relaxed h-22.5">
                                &apos;&apos; I ordered a custom birthday cake and WOW, Krumbs made it look exactly like the Pinterest picture but
                                even better. &apos;&apos;
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-black">
                                <p className="font-normal">Hadeer Mohamed</p>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold">G</span>
                                    <span className="text-sm">Google Reviews</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-black rounded-2xl p-6 w-100 shrink-0 bg-white">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[#F58424] text-xl">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-base font-black text-black mb-6 leading-relaxed h-22.5 text-right" dir="rtl">
                                &apos;&apos;أهديت بوكس من Krumbs لصديقتي، ومش تأثرت. البوكس مرتب وطعمه شي يبرد القلب.&apos;&apos;
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-black">
                                <p className="font-normal">Ghadeer Sultan</p>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold">G</span>
                                    <span className="text-sm">Google Reviews</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-black rounded-2xl p-6 w-100 shrink-0 bg-white">
                            <div className="flex gap-1 mb-4">
                                {[...Array(4)].map((_, i) => (
                                    <span key={i} className="text-[#F58424] text-xl">
                                        ★
                                    </span>
                                ))}
                                <span className="text-gray-300 text-xl">★</span>
                            </div>
                            <p className="text-base font-black text-black mb-6 leading-relaxed h-22.5">
                                &apos;&apos; The smell when you open the box is instant happiness. Science should study this. &apos;&apos;
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-black">
                                <p className="font-normal">Momen Salem</p>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold">G</span>
                                    <span className="text-sm">Google Reviews</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-black rounded-2xl p-6 w-100 shrink-0 bg-white">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[#F58424] text-xl">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-base font-black text-black mb-6 leading-relaxed h-22.5">
                                &apos;&apos;I&apos;m never worried when trying to find cake or treat to bring to my family gatherings, Krumbs has THE
                                BEST cookies!&apos;&apos;
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-black">
                                <p className="font-normal">Samreen Sultana</p>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold">G</span>
                                    <span className="text-sm">Google Reviews</span>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 border-black rounded-2xl p-6 w-100 shrink-0 bg-white">
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-[#F58424] text-xl">
                                        ★
                                    </span>
                                ))}
                            </div>
                            <p className="text-base font-black text-black mb-6 leading-relaxed h-22.5">
                                &apos;&apos;Ordered for a corporate event and everyone was impressed. Professional packaging and delicious treats!&apos;&apos;
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-black">
                                <p className="font-normal">Ahmed Hassan</p>
                                <div className="flex items-center gap-1">
                                    <span className="font-bold">G</span>
                                    <span className="text-sm">Google Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team Section */}
            <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
                <div className="flex flex-col items-center bg-[#FCC7E0] w-full rounded-[72px] md:flex-row md:h-full md:justify-between">
                    <div className="bg-white rounded-[72px] p-12 m-3 md:my-3 md:ml-3 md:mr-0 md:w-[45%] md:p-12.5 md:h-auto">
                        <h2 className={woolWich.className + " md:text-[64px] text-[40px] leading-none font-normal mb-6 text-[#80003C]"}>MEET OUR TEAM</h2>
                        <p className="text-[#411D13] mb-8 leading-relaxed">
                            I&apos;m Salman, a Kuwaiti engineer. Cooking became my quiet space during a challenging time, and after stepping away from social media, I returned to the kitchen—where this cookie project began. Within one year, I sold over 10,000 cookies anonymously. Today, I&apos;m stepping forward to grow the brand openly and expand into cakes, with the same spirit that started it all.
                        </p>
                        <p className={woolWich.className + " text-[#80003C] text-[24px]"}>SALMAN AL OTAIBI</p>
                    </div>
                    <div className="relative h-100 w-full md:w-[45%] md:h-full md:mr-[5%]">
                        <Image
                            src="/salman.png"
                            alt="Salman"
                            width={300}
                            height={100}
                            className="w-full md:w-auto mx-auto h-full md:hidden block rounded-b-[72px]"
                        />
                        <Image
                            src="/salman.png"
                            alt="Salman"
                            width={300}
                            height={100}
                            className="w-full md:w-auto mx-auto h-full md:block hidden"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 mt-20 px-6 bg-[#ffc9d9]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center mb-8">
                            <span className="text-2xl font-bold">
                                <Link href="/">
                                    <Image src="/Logo.png" alt="Krumbs Logo" width={120} height={40} />
                                </Link>
                            </span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 mb-6">
                            <Link href="#" className="text-sm text-[#411D13] hover:underline">
                                Cookies Boxes
                            </Link>
                            <Link href="#" className="text-sm text-[#411D13] hover:underline">
                                Brownies
                            </Link>
                            <Link href="#" className="text-sm text-[#411D13] hover:underline">
                                Mini Cakes
                            </Link>
                            <Link href="#" className="text-sm text-[#411D13] hover:underline">
                                Special Cakes
                            </Link>
                            <Link href="#" className="text-sm text-[#411D13] hover:underline">
                                About
                            </Link>
                            <Link href="#" className="text-sm text-[#411D13] hover:underline">
                                Contact
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 justify-center">
                        <Link href="#">
                            <Image src={'/Facebook.png'} alt="Facebook" width={24} height={24} className="w-6 h-6" />
                        </Link>
                        <Link href="#">
                            <Image src={'/TikTok.png'} alt="TikTok" width={24} height={24} className="w-6 h-6" />
                        </Link>
                        <Link href="https://www.instagram.com/crumbs.kw?igsh=a3M1cW45cmU3cXYx">
                            <Image src={'/Instagram.png'} alt="Instagram" width={24} height={24} className="w-6 h-6" />
                        </Link>
                        <Link href="https://wa.me/message/PPKFUFEXJHIWJ1">
                            <Image src={'/WhatsApp.png'} alt="WhatsApp" width={24} height={24} className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
