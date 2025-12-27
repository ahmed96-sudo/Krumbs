"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { useState } from "react"
import LanguageSwitch from "@/components/LanguageSwitch"
import { Instagram } from "lucide-react"
import { Playpen_Sans_Arabic } from "next/font/google";

const playpenSansArabic = Playpen_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
})

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav id="homestart" className="flex items-center justify-between px-6 py-4 bg-white relative md:w-350 mx-auto">
        <div className="flex items-center">
          <span className="text-2xl font-bold">
            <Link href="/">
              <Image src="/logo.png" alt="Krumbs Logo" width={120} height={40} />
            </Link>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-lg font-medium hover:text-gray-600">
            الرئيسية
          </Link>
          <Link href="#" className="text-lg font-medium hover:text-gray-600">
            حول
          </Link>
          <Link href="#" className="text-lg font-medium hover:text-gray-600">
            منتجات
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
            <span className={playpenSansArabic.className + " text-lg font-extrabold"}>EN</span>
            <LanguageSwitch />
            <span className={playpenSansArabic.className + " text-lg font-extrabold"}>العربية</span>
          </div>
          <Link href="https://wa.me/message/PPKFUFEXJHIWJ1" target="_blank">
            <Button className="bg-[#2d7a4f] hover:bg-[#256340] text-white rounded-full px-6 py-5.5 shadow-[3px_4px_0px_#000000]">
              اطلب الآن <Image src="/Whatsappwhite.png" alt="WhatsApp" width={20} height={20} />
            </Button>
          </Link>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#411D13]" /> : <Menu className="w-6 h-6 text-[#411D13]" />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg md:hidden z-50">
            <div className="flex flex-col p-6 gap-6 items-center justify-center">
              <Link href="#homestart" className="text-lg font-medium hover:text-gray-600">
                الرئيسية
              </Link>
              <Link href="#aboutus" className="text-lg font-medium hover:text-gray-600">
                حول
              </Link>
              <Link href="#products" className="text-lg font-medium hover:text-gray-600">
                منتجات
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
                <span className={playpenSansArabic.className + " text-lg font-extrabold"}>EN</span>
                <LanguageSwitch />
                <span className={playpenSansArabic.className + " text-lg font-extrabold"}>العربية</span>
              </div>

              <Link href="https://wa.me/message/PPKFUFEXJHIWJ1" target="_blank" >
                <Button className="bg-[#2d7a4f] hover:bg-[#256340] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]">
                  اطلب الآن <Image src="/Whatsappwhite.png" alt="WhatsApp" width={20} height={20} />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="md:bg-[url('/heroarabic.png')] bg-[url('/heromobile.png')] md:bg-size-[1400px_800px] bg-cover bg-bottom bg-no-repeat rounded-[64px] md:h-auto h-125 md:py-30 py-15 md:px-20 px-8 mt-2 md:w-350 md:mx-auto mx-6">
        <div>
          <h1 className={playpenSansArabic.className + " text-[96px] text-[#411D13] font-bold mb-6 leading-tight relative hidden md:block"}>
            توّه طالع <span className="w-21 h-7.5 bg-[#F97D46] text-[20px] rounded-2xl text-white font-bold absolute right-[25%] top-[30%] -rotate-20 text-center pt-0.5">ناعم</span> من الفرن
            <br />
            خصيصًا لك
          </h1>
          <p className={playpenSansArabic.className + " text-[40px] font-bold text-[#411D13] mb-8 max-w-150 relative hidden md:block"}>كوكيز فاخرة وكيكات مميّزة نوصلها لك وهي دافية لين باب بيتك.<span className="w-21 h-7.5 bg-[#80003C] text-[20px] rounded-2xl text-white font-bold rotate-20 absolute right-[77%] bottom-[15%] text-center pt-0.5">طازج</span></p>
          {/* Mobile */}
          <h1 className={playpenSansArabic.className + " text-[40px] text-[#411D13] font-black mb-6 leading-tight block relative md:hidden"}>
            توّه طالع من الفرن
            <br />
            خصيصًا لك <span className="w-17 h-6 bg-[#F97D46] text-sm rounded-2xl text-white font-bold -rotate-20 text-center pt-0.5 inline-block max-[405px]:hidden absolute left-[20%] bottom-[20%]">ناعم</span>
          </h1>
          <p className={playpenSansArabic.className + " text-[20px] font-bold text-[#411D13] mb-8 max-w-150 block md:hidden"}>كوكيز فاخرة وكيكات مميّزة نوصلها لك وهي دافية لين باب بيتك.<span className="w-17 h-6 bg-[#80003C] rounded-2xl text-white text-[12px] rotate-15 text-center pt-0.5 inline-block max-[405px]:hidden">طازج</span></p>
          {/* end mobild */}
          <Link href="https://wa.me/message/PPKFUFEXJHIWJ1" target="_blank">
            <Button className="bg-[#2d7a4f] hover:bg-[#256340] text-white font-bold rounded-full px-6 py-5.5 shadow-[3px_4px_0px_#000000]">
              اطلب الحين <Image src="/Whatsappwhite.png" alt="WhatsApp" width={20} height={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Our Passion Section */}
      <section id="aboutus" className="mt-16 mb-10 mx-6 bg-white md:w-350 md:mx-auto ">
        <div className="flex flex-col-reverse md:flex md:flex-row md:justify-between ">
          <div className="md:w-[45%] h-110.5">
            <video autoPlay loop muted className="rounded-3xl h-110.5 object-cover w-full mt-5 md:mt-0">
              <source src="/about.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="md:w-[49%] flex flex-col">
            <h2 className={playpenSansArabic.className + " text-[64px] text-[#411D13] font-black mb-6 relative hidden md:block"}>قصتنا <span className="w-26 h-8.5 bg-[#F5DF23] text-[20px] rounded-2xl text-[#411D13] font-normal rotate-11 absolute right-[17.5%] -top-[10%] text-center pt-0.5">منو إحنا</span> بإختصار</h2>
            {/* mobile */}
            <h2 className={playpenSansArabic.className + " text-[40px] text-[#411D13] font-black mb-6 relative block md:hidden"}><span className="w-20 h-6 bg-[#F5DF23] text-[12px] rounded-2xl text-[#411D13] font-normal rotate-15 absolute -top-4 left-[35%] text-center pt-0.5">منو إحنا</span>قصتنا بإختصار</h2>
            {/* end mobile */}
            <p className="text-gray-700 md:leading-10 leading-relaxed">
              بدت حكايتنا بمطبخ صغير، بإمكانات بسيطة لكن بشغف كبير وحب صادق للخبز. كنا نجرب وصفات كوكيز بيتية، نعدّل ونطوّر لين وصلنا لطعم يخلّي أول قضمة تفرّح القلب وتطلب الثانية بدون تفكير.
              <br/><br/>
              مع الوقت، صارت هالتجارب وصفاتنا الخاصة، وكل كوكيز صارت تنخبز بعناية وكأنها معمولة لشخص نعرفه. ومن أول مرة شفنا فيها ابتسامة بسبب كوكيز، عرفنا إن الموضوع أكبر من حلى. هو إحساس، وذكرى، ولحظة حلوة.
              <br/><br/>
              واليوم، مهما كبرنا وتطوّرنا، لسّه نخبز بنفس الحب ونفس الشغف. نختار مكوناتنا بعناية، ونخبز طازج يوميًا، علشان نوصل لك تجربة دافية، صادقة، وطعم ما ينسى.
            </p>
          </div>
        </div>
      </section>

      {/* Signatures Section */}
      <section id="products" className="pb-16 pt-10 bg-white">
        <div className="md:w-350 md:mx-auto mx-6 flex flex-col md:flex-row md:items-center md:mb-10">
          <h2 className={playpenSansArabic.className + " text-[64px] w-87.5 text-[#411D13] font-black mb-6 relative hidden md:block"}><span className="w-30 h-8.5 bg-[#F97D46] text-[20px] rounded-2xl text-white font-normal -rotate-15 absolute -top-4 left-[15%] text-center pt-0.5">منتجاتنا</span> شنو نخبز؟</h2>
          {/* mobile */}
          <h2 className={playpenSansArabic.className + " text-[64px] w-87.5 text-[#411D13] font-black mb-6 relative block md:hidden"}><span className="w-30 h-8.5 bg-[#F97D46] text-[20px] rounded-2xl text-white font-normal -rotate-15 absolute -top-4 left-[13%] text-center pt-0.5">منتجاتنا</span> شنو نخبز؟</h2>
          {/* end mobile */}

          <div className="flex justify-center md:gap-10 gap-4 mb-12 md:mb-0 md:mr-auto">
            <div
              className={playpenSansArabic.className + " cursor-pointer md:text-[32px] font-semibold text-[20px] rounded-full text-[#371659] hover:bg-[#e3d0fb] bg-[#E0C8FD] md:px-6.25 py-1.5 px-4"}
            >
              كوكيز
            </div>
            <div
              className={playpenSansArabic.className + " cursor-pointer md:text-[32px] font-semibold text-[20px] rounded-full text-[#9A3C0E] hover:bg-[#fccfbb] bg-[#FFCAB3] md:px-6.25 py-1.5 px-4"}
            >
              براونيز
            </div>
            <div
              className={playpenSansArabic.className + " cursor-pointer md:text-[32px] font-semibold text-[20px] rounded-full text-[#1C727E] hover:bg-[#a8dce2] bg-[#A3CDD3] md:px-6.25 py-1.5 px-4"}
            >
              ميني كيك
            </div>
          </div>
        </div>

        <div className="relative min-[1400px]:w-full md:max-[1400px]:w-350 w-full overflow-hidden">
          <div
            className="flex gap-6 animate-infinite-scroll-ar hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            {/* We map the array twice for the seamless loop */}
            {[{ image: "/pink-strawberry-cake-slice.jpg", title: "كيك سان سباستيان" },
            { image: "/mini-decorated-cakes.jpg", title: "ميني كيك" },
            { image: "/green-decorated-cake-with-name-sultan.jpg", title: "كيك مميز" },
            { image: "/mini-decorated-cakes.jpg", title: "ميني كيك" },
            { image: "/pink-strawberry-cake-slice.jpg", title: "كيك بالفراوله" },
            { image: "/green-decorated-cake-with-name-sultan.jpg", title: "كيك خاص حسب الطلب" },
            { image: "/pink-strawberry-cake-slice.jpg", title: "كيك سان سباستيان" },
            { image: "/mini-decorated-cakes.jpg", title: "ميني كيك" },
            { image: "/green-decorated-cake-with-name-sultan.jpg", title: "كيك مميز" },
            { image: "/mini-decorated-cakes.jpg", title: "ميني كيك" },
            { image: "/pink-strawberry-cake-slice.jpg", title: "كيك بالفراوله" },
            { image: "/green-decorated-cake-with-name-sultan.jpg", title: "كيك خاص حسب الطلب" },].map((item, index) => (
              <Link
                href={`https://wa.me/96566754902?text=%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%86%20%D8%A7%D8%B7%D9%84%D8%A8%20${item.title}`}
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
                      اطلب الحين
                    </h3>
                  </div>
                </div>
                <h4 className="text-center mt-5">{item.title}</h4>
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
              className="object-bottom w-full h-full md:block hidden rounded-t-[72px] transform scale-x-[-1]"
            />
          </div>
          <div className="bg-white rounded-[72px] p-12 m-3 md:p-16 md:my-3 md:ml-3 md:mrs-0 md:w-1/2 md:h-[95%] md:flex md:flex-col md:items-start md:justify-center">
            <h2 className={playpenSansArabic.className + " md:text-[48px] text-[40px] leading-none font-bold mb-6 text-[#361659]"}>جرّب كوكيز ما ذقتها قبل</h2>
            <p className="text-gray-700 mb-8 text-[20px] leading-relaxed">
              في  Krumbs (كرمبز)، كل كوكيز نسويها بوصفاتنا السرّية والبيتية. نخلطها، نجرّبها، ونضبطها بإيدينا مقرمشة، سايحة، تذوب بالفم. كل قضمة مغامرة حلوة من مطبخنا. 🍪
            </p>
            <Button className="bg-[#6b3fa0] hover:bg-[#5a3486] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">جرّب كوكيزنا المميّزة</Link></Button>
          </div>
        </div>
      </section>

      {/* Dream Section */}
      <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
        <div className="flex flex-col items-center bg-[#FDE8BF] w-full rounded-[72px] md:flex-row md:h-full md:justify-between">
          <div className="bg-[#FEF8F1] rounded-[72px] p-12 m-3 md:p-16 md:my-3 md:mr-3 md:ml-0 md:w-[45%] md:h-[95%] md:flex md:flex-col md:justify-center md:items-start">
            <h2 className={playpenSansArabic.className + " md:text-[48px] text-[40px] leading-none font-bold mb-6 text-[#468B4D]"}>كيكة على قد خيالك</h2>
            <p className="text-gray-700 mb-8 text-[20px] leading-relaxed">
              في Krumbs نحول أفكارك المجنونة لواقع. ألوان، شخصيات، أسماء، ثيمات, خلك جريء، إحنا نحب هالشي. مناسبتك تستاهل كيك بنفس روحك وحلاوتك.
            </p>
            <Button className="bg-[#468B4D] hover:bg-[#54945a] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">صمّم كيكك</Link></Button>
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
          <div className="bg-white rounded-[72px] p-12 m-3 md:p-16 md:my-3 md:ml-3 md:mr-0 md:w-1/2 md:h-[95%] md:flex md:flex-col md:items-start md:justify-center">
            <h2 className={playpenSansArabic.className + " md:text-[48px] text-[40px] leading-none font-bold mb-6 text-[#80003C]"}>رسالة اهتمام ما تنسى</h2>
            <p className="text-gray-700 mb-8 text-[20px] leading-relaxed">
              مع بوكسات Krumbs، الفرح يصير له طعم. تشكيلة كوكيز، كيك، وحلويات لذيذة، تنحط في بوكس واحد مليان إحساس وحب. مثالية للمفاجآت الصغيرة اللي معناها كبير، وللناس اللي دايم يضيفون شي حلو لحياتك وتحب ترد لهم الجميل.
            </p>
            <Button className="bg-[#80003C] hover:bg-[#a80350] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">ارسل بوكس السعادة</Link></Button>
          </div>
        </div>
      </section>

      {/* Celebrate Section */}
      <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
        <div className="flex flex-col items-center bg-[#FFCAB3] w-full rounded-[72px] md:flex-row md:h-full md:justify-between">
          <div className="bg-[#FEF8F1] rounded-[72px] p-12 m-3 md:my-3 md:mr-5 md:ml-0 md:w-[45%] md:flex md:flex-col md:justify-center md:items-start md:p-20 md:h-auto">
            <h2 className={playpenSansArabic.className + " md:text-[48px] text-[40px] leading-none font-bold mb-6 text-[#B45425]"}>احتفل وإحنا نشيلها عنك</h2>
            <p className="text-gray-700 mb-8 text-[20px] leading-relaxed">
              من كيكات بثيمات، لطاولات حلويات، لترتيبات كيوت. Krumbs تتكفّل بكل الأشياء الحلوة، وانت استمتع بالحفلة نخلّي مناسبتك شكلها يفتح النفس وطعمها أروع.
            </p>
            <Button className="bg-[#B45425] hover:bg-[#c76534] text-white rounded-full px-6 shadow-[3px_4px_0px_#000000]"><Link href={'https://wa.me/message/PPKFUFEXJHIWJ1'} target="_blank">خلّنا نرتّب حفلتك</Link></Button>
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
          <h2 className={playpenSansArabic.className + " md:text-[64px] text-[32px] font-bold mb-12 text-center"}>تابعونا على الانستغرام</h2>
          <div className="relative min-[1400px]:w-full md:max-[1400px]:w-350 w-full overflow-hidden">
            <div
              className="flex gap-6 animate-infinite-scroll-ar hover:[animation-play-state:paused]"
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
            <h2 className={playpenSansArabic.className + " md:text-[64px] text-[32px] font-bold text-[#80003C]"}>القصص اللي ورا كل قضمة</h2>
            <div className="gap-2 hidden md:flex">
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
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            id="testimonials-container"
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth [&::-webkit-scrollbar]:hidden"
            style={{ paddingRight: "max(1.5rem, calc((100vw - 89rem) / 2))" }}
          >
            <div className="border-2 border-gray-200 rounded-2xl p-6 w-100 shrink-0 bg-white">
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base font-bold text-gray-700 mb-6 leading-relaxed h-22.5">
                &apos;&apos;طلبت كيك عيد ميلاد حسب الطلب، ووااو! Krumbs سوّوه نفس صورة البنترست بالضبط. ويمكن أحلى بعد.&apos;&apos;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <span className="text-sm">تقييمات جوجل</span>
                  <span className="font-bold">G</span>
                </div>
                <p className="font-semibold">هدير محمد</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-6 w-100 shrink-0 bg-white">
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base font-bold text-gray-700 mb-6 leading-relaxed h-22.5 text-right" dir="rtl">
                &apos;&apos;أهديت بوكس من Krumbs لصديقتي، وصج تأثرت. البوكس مرتب وطعمه شي يبرد القلب.&apos;&apos;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <span className="text-sm">تقييمات جوجل</span>
                  <span className="font-bold">G</span>
                </div>
                <p className="font-semibold">غدير سلطان</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-6 w-100 shrink-0 bg-white">
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
                <span className="text-gray-300 text-xl">★</span>
              </div>
              <p className="text-base font-bold text-gray-700 mb-6 leading-relaxed h-22.5">
                &apos;&apos;ريحة الكوكيز أول ما تفتح البوكس؟
                سعادة فورية… العلم لازم يدرس هالشي&apos;&apos;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <span className="text-sm">تقييمات جوجل</span>
                  <span className="font-bold">G</span>
                </div>
                <p className="font-semibold">مؤمن سالم</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-6 w-100 shrink-0 bg-white">
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base font-bold text-gray-700 mb-6 leading-relaxed h-22.5">
                &apos;&apos;لا أشعر بالقلق أبداً عندما أحاول العثور على كعكة أو حلوى لأحضرها إلى تجمعات عائلتي، فشركة krumbs لديها أفضل أنواع البسكويت!&apos;&apos;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <span className="text-sm">تقييمات جوجل</span>
                  <span className="font-bold">G</span>
                </div>
                <p className="font-semibold">سمرين سلطانة</p>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-2xl p-6 w-100 shrink-0 bg-white">
              <div className="flex gap-1 mb-4 justify-end">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base font-bold text-gray-700 mb-6 leading-relaxed h-22.5">
                &apos;&apos;طلبناها لفعالية خاصة بالشركة، وقد نالت إعجاب الجميع. تغليف احترافي وحلويات لذيذة!&apos;&apos;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-1">
                  <span className="text-sm">تقييمات جوجل</span>
                  <span className="font-bold">G</span>
                </div>
                <p className="font-semibold">أحمد حسن</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="my-10 mx-6 md:w-350 md:mx-auto md:h-112.5">
        <div className="flex flex-col items-center bg-[#FCC7E0] w-full rounded-[72px] md:flex-row md:h-full md:justify-between">
          <div className="bg-white rounded-[72px] p-12 m-3 md:my-3 md:mr-4 md:ml-0 md:w-[45%] md:p-12.5 md:h-auto">
            <h2 className={playpenSansArabic.className + " md:text-[64px] text-[40px] leading-none font-bold mb-6 text-[#80003C]"}>تعرف على فريقنا</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              أنا سلمان، مهندس كويتي، والطبخ ما كان مجرد هواية بالنسبة لي، كان مساحة هدوء في فترة صعبة من بعد ما ابتعدت عن السوشال ميديا، وجدت نفسي أرجع للمطبخ، أشتغل بهدوء وأركز على التفاصيل. من هنا بدأت فكرة الكوكيز مشروع بسيط كبر خطوة
              <br/><br/>
              خلال سنة واحدة، بعت أكثر من 10,000 كوكيز من غير ما أحد يعرف من هو صاحب البراند. اليوم قررت أطلع للعلن، وأطور المشروع بشكل أوضح وأضيف عالم الكيك بنفس الروح.
            </p>
            <p className={playpenSansArabic.className + " text-[#80003C] font-bold text-[24px]"}>سلمان العتيبي</p>
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
                  <Image src="/logo.png" alt="Krumbs Logo" width={120} height={40} />
                </Link>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <Link href="#" className="text-sm hover:underline">
                بوكسات كوكيز
              </Link>
              <Link href="#" className="text-sm hover:underline">
                براونيز
              </Link>
              <Link href="#" className="text-sm hover:underline">
                ميني كيك
              </Link>
              <Link href="#" className="text-sm hover:underline">
                كيك خاص حسب الطلب
              </Link>
              <Link href="#aboutus" className="text-sm hover:underline">
                منو إحنا
              </Link>
              <Link href="https://wa.me/message/PPKFUFEXJHIWJ1" className="text-sm hover:underline">
                تواصل ويانا
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
