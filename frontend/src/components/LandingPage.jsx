import React, { useEffect, useState, useRef } from "react";
import iphone15 from "../assets/apple-17.jpeg";
import boatHeadphones from "../assets/boat-head.jpg";
import samsungTv from "../assets/samsung.jpg";
import lenovoLaptop from "../assets/laptop.jpeg";

import banner1 from "../assets/MainBanner.jpg";
import banner2 from "../assets/Tv-sale.webp";
import banner3 from "../assets/Gun-shop.webp";

import  Wallpaper  from "../assets/housewallpaper.jpg";
import Kits from "../assets/Kits.jpg";
import refrige from "../assets/refige.jpg";
import noise from "../assets/noise.jpg";
import micro from "../assets/micro.jpg";
import Washing from "../assets/washing.jpg";
import shopping from "../assets/shopping.webp";
import cleaniess from "../assets/cleaniess.jpg";
import bath from "../assets/bath.jpg";
import fan from "../assets/fan.jpg";
import Zep from "../assets/Zeb.jpg";

import hearts from "../assets/hearts.webp";
import boathead from "../assets/boat-head.jpg"
import bedshit from "../assets/bedshit.webp"
import lighting from "../assets/lighting.webp"
import boult from "../assets/boult.webp"
import amazon from "../assets/amazon.png";

const recommendedProducts = [
  {
    title: "Apple iPhone 15 Pro",
    price: "₹1,29,900",
    img: iphone15,
  },
  {
    title: "boAt Rockerz Headphones",
    price: "₹1,999",
    img: boatHeadphones,
  },
  {
    title: "Samsung QLED TV 55",
    price: "₹79,999",
    img: samsungTv,
  
  },
  {
    title: "Lenovo Ideapad Slim Laptop",
    price: "₹52,990",
    img: lenovoLaptop,
  },
];

const bannerSlides = [
  {
    img: banner1,
    main: "Starting ₹799",
    sub: "Gun Massager",
    caption: "Extra 5% unlimited cashback* with Amazon Pay SBI Bank credit card",
    tag: "*T&C apply",
  },
  {
    img: banner2,
    main: "Big Savings on TVs",
    sub: "Up to 65% Off",
    caption: "Top brands | Latest models",
    tag: "Limited time only",
  },
  {
    img: banner3,
    main: "Mega Mobiles Sale",
    sub: "Exchange Offer",
    caption: "Smartphones starting ₹5,999",
    tag: "Free delivery",
  },
];


const Navbar = () => (
  <header className="sticky top-0 z-30">
    <nav className="bg-[#131921] text-white px-4 py-3 shadow">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <a href="/" className="flex items-center gap-2">
          <img
            src={amazon}
            alt="logo"
            className="h-8"
            loading="lazy"
          />
          <span className="hidden sm:inline font-bold text-white text-lg">.in</span>
        </a>

        <div className="hidden md:flex items-center gap-2 bg-white rounded overflow-hidden ml-4 flex-1 max-w-xl">
          <input
            type="search"
            aria-label="Search"
            placeholder="Search Amazon.in"
            className="w-full px-3 py-2 text-sm outline-none text-black"
          />
          <button className="bg-yellow-400 px-4 py-2 text-sm font-semibold hover:bg-yellow-500">
            Search
          </button>
        </div>

        <div className="ml-auto flex items-center gap-6 text-xs md:text-sm">
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-gray-200">Deliver to</span>
            <span className="font-semibold">Mumbai 400001</span>
          </div>

          <a className="hidden md:block text-sm">Hello, sign in</a>
          <a className="hidden md:block text-sm">Returns & Orders</a>

          <a className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
            </svg>
            <span className="font-semibold">Cart</span>
            <span className="ml-1 bg-yellow-400 text-black rounded px-1 text-xs font-bold">0</span>
          </a>
        </div>
      </div>

      <div className="bg-[#232f3e] text-gray-200 px-4 py-2 mt-2">
        <div className="max-w-7xl mx-auto flex gap-6 text-sm overflow-x-auto">
          {["All", "Fresh", "Mobiles", "Electronics", "Prime", "Fashion", "Amazon Pay"].map((link) => (
            <a key={link} href="#" className="hover:text-white whitespace-nowrap">
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  </header>
);

const Banner = () => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((p) => (p + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, []);

  const prev = () => {
    clearInterval(timerRef.current);
    setActive((a) => (a - 1 + bannerSlides.length) % bannerSlides.length);
  };
  const next = () => {
    clearInterval(timerRef.current);
    setActive((a) => (a + 1) % bannerSlides.length);
  };

  const slide = bannerSlides[active];

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-6 px-4">
      <div className="relative overflow-hidden rounded-xl h-64 md:h-96 shadow-lg">
        <img
          src={slide.img}
          alt={slide.sub}
          className="w-full h-full object-cover opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center px-6 md:px-12">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800">{slide.main}</h1>
            <h2 className="text-xl md:text-2xl font-bold mt-2">{slide.sub}</h2>
            <p className="mt-4 bg-white/90 text-gray-900 px-3 py-2 inline-block rounded">{slide.caption}</p>
            <div className="mt-2 text-xs">{slide.tag}</div>
          </div>
          <div className="ml-auto hidden md:block" />
        </div>

        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full text-xl"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full text-xl"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2 h-2 rounded-full ${i === active ? "bg-blue-700" : "bg-white/70"}`}
              onClick={() => { clearInterval(timerRef.current); setActive(i); }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }) => (
  <article className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition">
    <a href={product.url} target="_blank" rel="noopener noreferrer">
      <img src={product.img} alt={product.title} className="h-32 w-full object-contain mb-3 mx-auto" loading="lazy" />
    </a>
    <h3 className="font-semibold text-sm mb-1">{product.title}</h3>
    <div className="text-gray-600 text-sm mb-3">{product.price}</div>
    <a href={product.url} target="_blank" rel="noopener noreferrer">
      <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-2 rounded text-sm font-semibold">View</button>
    </a>
  </article>
);

const FeaturedSection = () => (
  <section className="max-w-7xl mx-auto px-4 mt-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-lg mb-4">Revamp your home in style</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 flex items-center justify-center overflow-hidden">
              <img src={bedshit} alt="home" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600 text-center">Cushion covers, bedsheets</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={hearts} alt="decor" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600 mt-4">Figurines, vases</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={shopping} alt="storage" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600">Home storage</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={lighting} alt="lighting" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600 mt-6">Lighting</p>
          </div>
        </div>
        <button className="mt-4 text-blue-600 text-sm font-medium">Explore all</button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-lg mb-4">Appliances for home | Up to 55% off</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={fan} alt="ac" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600">Air conditioners</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={refrige} alt="fridge" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600">Refrigerators</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-10 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={micro} alt="microwave" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600">Microwaves</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={Washing} alt="washing" loading="lazy" />
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">Washing machines</p>
          </div>
        </div>
        <button className="mt-4 text-blue-600 text-sm font-medium">See more</button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-lg mb-4">Starting ₹149 | Headphones</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={boathead}  alt="headphone" loading="lazy" />
            </div>
            <p className="text-xs text-gray-500 mt-6">Starting ₹249</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={boult} alt="headphone2" loading="lazy" />
            </div>
            <p className="text-xs text-gray-500">Starting ₹349</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={noise} alt="headphone3" loading="lazy" />
            </div>
            <p className="text-xs text-gray-500 mt-4">Starting ₹649</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={Zep} alt="headphone4" loading="lazy" />
            </div>
            <p className="text-xs text-gray-500 mb-6">Starting ₹149</p>
          </div>
        </div>
        <button className="mt-4 text-blue-600 text-sm font-medium">See all offers</button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-semibold text-lg mb-4">Under ₹499 | Home improvement essentials</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={cleaniess} alt="cleaning" loading="lazy" />
            </div>
            <p className="text-xs text-gray-600">Cleaning supplies</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={bath} alt="bathroom" loading="lazy" />
            </div>
            <p className="text-xs text-gray-600">Bathroom accessories</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={Kits} alt="tools" loading="lazy" />
            </div>
            <p className="text-xs text-gray-600">Home tools</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 bg-gray-100 rounded mb-2 overflow-hidden">
              <img src={Wallpaper} alt="wallpaper" loading="lazy" />
            </div>
            <p className="text-xs text-gray-600">Wallpapers</p>
          </div>
        </div>
        <button className="mt-4 text-blue-600 text-sm font-medium">Explore all</button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 mt-12">
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8 border-b border-gray-700">
      <div>
        <h4 className="font-bold mb-3 text-lg text-white">Get to Know Us</h4>
        <ul>
          <li className="mb-2 hover:text-white cursor-pointer">About Us</li>
          <li className="mb-2 hover:text-white cursor-pointer">Careers</li>
          <li className="mb-2 hover:text-white cursor-pointer">Press Releases</li>
          <li className="mb-2 hover:text-white cursor-pointer">Amazon Science</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3 text-lg text-white">Connect With Us</h4>
        <ul>
          <li className="mb-2 hover:text-white cursor-pointer">Facebook</li>
          <li className="mb-2 hover:text-white cursor-pointer">Twitter</li>
          <li className="mb-2 hover:text-white cursor-pointer">Instagram</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3 text-lg text-white">Make Money with Us</h4>
        <ul>
          <li className="mb-2 hover:text-white cursor-pointer">Sell on Amazon</li>
          <li className="mb-2 hover:text-white cursor-pointer">Amazon Pay on Merchants</li>
          <li className="mb-2 hover:text-white cursor-pointer">Become an Affiliate</li>
          <li className="mb-2 hover:text-white cursor-pointer">Advertise Your Products</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-3 text-lg text-white">Let Us Help You</h4>
        <ul>
          <li className="mb-2 hover:text-white cursor-pointer">COVID-19 FAQs</li>
          <li className="mb-2 hover:text-white cursor-pointer">Your Account</li>
          <li className="mb-2 hover:text-white cursor-pointer">Returns Centre</li>
          <li className="mb-2 hover:text-white cursor-pointer">Help</li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-2">
        <div>
          <span className="font-bold text-white">amazon<span className="text-yellow-400">.in</span></span>
        </div>
        <div className="space-x-4 my-2">
          <span className="hover:underline cursor-pointer">Australia</span>
          <span className="hover:underline cursor-pointer">Brazil</span>
          <span className="hover:underline cursor-pointer">Canada</span>
          <span className="hover:underline cursor-pointer">France</span>
        </div>
      </div>
      <div>© 2025 Amazon Clone Demo. All Rights Reserved.</div>
    </div>
  </footer>
);



const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <Navbar />
      <main>
        <Banner />
        <FeaturedSection />
        <section className="max-w-7xl mx-auto px-4 mt-12">
          <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map((p, idx) => (
              <ProductCard key={idx} product={p} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
