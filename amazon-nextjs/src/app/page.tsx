"use client";
import React, { useState, useEffect } from 'react';
import { MapPin, Search, ShoppingCart, Menu, ChevronDown, ChevronLeft, ChevronRight, Sun, Moon, X, AlertCircle, Globe } from 'lucide-react';
const categoryNavItems = [
  "All", "Fresh", "Amazon miniTV", "Sell", "Best Sellers", "Today's Deals", "Mobiles",
  "New Releases", "Electronics", "Customer Service", "Prime",
  "Home & Kitchen", "Fashion", "Amazon Pay", "Gift Cards"
];

const heroDataSlides = [
  {
    id: 1,
    title: "Up to 60% off",
    subtitle: "Fashion & beauty",
    tabs: [
      { text: "TOP BRANDS", active: true },
      { text: "TRENDS", active: false }
    ],
    offerImageUrl: "https://placehold.co/200x50/f0f0f0/333?text=Cashback+Offer",
    mainImageUrl: "https://placehold.co/400x250/f0f0f0/333?text=Fashion+Collage",
    terms: "*T&C apply"
  },
  {
    id: 2,
    title: "Starting ₹99",
    subtitle: "Home & Kitchen",
    tabs: [
      { text: "DEALS", active: true },
      { text: "TOP RATED", active: false }
    ],
    offerImageUrl: "https://placehold.co/200x50/e0e0e0/333?text=Limited+Time+Deal",
    mainImageUrl: "https://placehold.co/400x250/e0e0e0/333?text=Kitchen+Items",
    terms: "*See all offers"
  },
  {
    id: 3,
    title: "Latest Electronics",
    subtitle: "Up to 40% off",
    tabs: [
      { text: "MOBILES", active: true },
      { text: "LAPTOPS", active: false }
    ],
    offerImageUrl: "https://placehold.co/200x50/d0d0d0/333?text=No+Cost+EMI",
    mainImageUrl: "https://placehold.co/400x250/d0d0d0/333?text=Electronics",
    terms: "*New launches"
  }
];


const productGridData = [
  {
    id: "home-style",
    title: "Revamp your home in style",
    footerLinkText: "Explore all",
    products: [
      { title: "Cushion covers, bedsheets & more", imageUrl: "https://placehold.co/200x200/eee/333?text=Cushions", linkText: "Cushion covers, bedsheets" },
      { title: "Figurines, vases & more", imageUrl: "https://placehold.co/200x200/eee/333?text=Vases", linkText: "Figurines, vases & more" },
      { title: "Home storage", imageUrl: "https://placehold.co/200x200/eee/333?text=Storage", linkText: "Home storage" },
      { title: "Lighting solutions", imageUrl: "https://placehold.co/200x200/eee/333?text=Lamps", linkText: "Lighting solutions" }
    ]
  },
  {
    id: "appliances",
    title: "Appliances for your home | Up to 55% off",
    footerLinkText: "See more",
    products: [
      { title: "Air conditioners", imageUrl: "https://placehold.co/200x200/eee/333?text=AC", linkText: "Air conditioners" },
      { title: "Refrigerators", imageUrl: "https://placehold.co/200x200/eee/333?text=Fridge", linkText: "Refrigerators" },
      { title: "Microwaves", imageUrl: "https://placehold.co/200x200/eee/333?text=Microwave", linkText: "Microwaves" },
      { title: "Washing machines", imageUrl: "https://placehold.co/200x200/eee/333?text=Washer", linkText: "Washing machines" }
    ]
  },
  {
    id: "headphones-1",
    title: "Starting ₹149 | Headphones",
    footerLinkText: "See all offers",
    products: [
      { title: "boat", imageUrl: "https://placehold.co/200x200/eee/333?text=boAt", linkText: "Starting ₹149 | boAt" },
      { title: "boult", imageUrl: "https://placehold.co/200x200/eee/333?text=Boult", linkText: "Starting ₹149 | Boult" },
      { title: "noise", imageUrl: "https://placehold.co/200x200/eee/333?text=Noise", linkText: "Starting ₹149 | Noise" },
      { title: "zebronics", imageUrl: "https://placehold.co/200x200/eee/333?text=Zebronics", linkText: "Starting ₹149 | Zebronics" }
    ]
  },
  {
    id: "home-improvement",
    title: "Under ₹499 | Deals on home improvement essentials",
    footerLinkText: "Explore all",
    products: [
      { title: "Cleaning supplies", imageUrl: "https://placehold.co/200x200/eee/333?text=Cleaning", linkText: "Under ₹199 | Cleaning" },
      { title: "Bathroom accessories", imageUrl: "https://placehold.co/200x200/eee/333?text=Shower", linkText: "Under ₹399 | Bathroom" },
      { title: "Home tools", imageUrl: "https://placehold.co/200x200/eee/333?text=Tools", linkText: "Under ₹499 | Home tools" },
      { title: "Wallpapers", imageUrl: "https://placehold.co/200x200/eee/333?text=Wallpaper", linkText: "Under ₹299 | Wallpapers" }
    ]
  },
  {
    id: "automotive",
    title: "Automotive essentials | Up to 60% off",
    footerLinkText: "See all",
    products: [
      { title: "Cleaning accessories", imageUrl: "https://placehold.co/200x200/eee/333?text=Cleaning", linkText: "Cleaning accessories" },
      { title: "Tyre & rim care", imageUrl: "https://placehold.co/200x200/eee/333?text=Tyres", linkText: "Tyre & rim care" },
      { title: "Helmets & riding gear", imageUrl: "https://placehold.co/200x200/eee/333?text=Helmet", linkText: "Helmets & riding gear" },
      { title: "Car & bike parts", imageUrl: "https://placehold.co/200x200/eee/333?text=Parts", linkText: "Car & bike parts" }
    ]
  },
  {
    id: "amazon-brands",
    title: "Starting ₹199 | Amazon Brands & more",
    footerLinkText: "See more",
    products: [
      { title: "Bedsheets", imageUrl: "https://placehold.co/200x200/eee/333?text=Bedsheet", linkText: "Starting ₹199 | Bedsheets" },
      { title: "Curtains", imageUrl: "https://placehold.co/200x200/eee/333?text=Curtains", linkText: "Starting ₹299 | Curtains" },
      { title: "Home storage", imageUrl: "https://placehold.co/200x200/eee/333?text=Storage", linkText: "Starting ₹199 | Home" },
      { title: "Furniture", imageUrl: "https://placehold.co/200x200/eee/333?text=Furniture", linkText: "Starting ₹499 | Furniture" }
    ]
  },
  {
    id: "baby-care",
    title: "Up to 50% off | Baby care & toys | Amazon Brands",
    footerLinkText: "See all",
    products: [
      { title: "Baby diapers & wipes", imageUrl: "https://placehold.co/200x200/eee/333?text=Diapers", linkText: "Up to 50% off | Baby" },
      { title: "Ride-ons", imageUrl: "https://placehold.co/200x200/eee/333?text=Ride-on", linkText: "Up to 30% off | Ride-ons" },
      { title: "Soft toys", imageUrl: "https://placehold.co/200x200/eee/333?text=Toy", linkText: "Up to 50% off | Soft toys" },
      { title: "Indoor games", imageUrl: "https://placehold.co/200x200/eee/333?text=Games", linkText: "Up to 50% off | Indoor" }
    ]
  },
  {
    id: "headphones-2",
    title: "Starting ₹149 | Headphones",
    footerLinkText: "See all offers",
    products: [
      { title: "boat", imageUrl: "https://placehold.co/200x200/eee/333?text=boAt", linkText: "Starting ₹149 | boAt" },
      { title: "boult", imageUrl: "https://placehold.co/200x200/eee/333?text=Boult", linkText: "Starting ₹149 | Boult" },
      { title: "noise", imageUrl: "https://placehold.co/200x200/eee/333?text=Noise", linkText: "Starting ₹149 | Noise" },
      { title: "zebronics", imageUrl: "https://placehold.co/200x200/eee/333?text=Zebronics", linkText: "Starting ₹149 | Zebronics" }
    ]
  }
];

const footerLinkColumns = [
  {
    id: "get-to-know-us",
    title: "Get to Know Us",
    links: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Press Releases", href: "#" },
      { text: "Amazon Science", href: "#" }
    ]
  },
  {
    id: "connect-with-us",
    title: "Connect with Us",
    links: [
      { text: "Facebook", href: "#" },
      { text: "Twitter", href: "#" },
      { text: "Instagram", href: "#" }
    ]
  },
  {
    id: "make-money",
    title: "Make Money with Us",
    links: [
      { text: "Sell on Amazon", href: "#" },
      { text: "Sell under Amazon Accelerator", href: "#" },
      { text: "Protect and Build Your Brand", href: "#" },
      { text: "Amazon Global Selling", href: "#" },
      { text: "Become an Affiliate", href: "#" },
      { text: "Fulfilment by Amazon", href: "#" },
      { text: "Advertise Your Products", href: "#" },
      { text: "Amazon Pay on Merchants", href: "#" }
    ]
  },
  {
    id: "let-us-help",
    title: "Let Us Help You",
    links: [
      { text: "Your Account", href: "#" },
      { text: "Returns Centre", href: "#" },
      { text: "Recalls and Product Safety Alerts", href: "#" },
      { text: "100% Purchase Protection", href: "#" },
      { text: "Amazon App Download", href: "#" },
      { text: "Help", href: "#" }
    ]
  }
];

const amazonServices = [
  { id: "abebooks", title: "AbeBooks", description: ["Books, art & collectibles"], href: "#" },
  { id: "aws", title: "Amazon Web Services", description: ["Scalable Cloud Computing Services"], href: "#" },
  { id: "audible", title: "Audible", description: ["Download Audio Books"], href: "#" },
  { id: "imdb", title: "IMDb", description: ["Movies, TV & Celebrities"], href: "#" },
  { id: "shopbop", title: "Shopbop", description: ["Designer Fashion Brands"], href: "#" },
  { id: "business", title: "Amazon Business", description: ["Everything For Your Business"], href: "#" },
  { id: "prime-now", title: "Prime Now", description: ["2-Hour Delivery on Everyday Items"], href: "#" },
  { id: "prime-music", title: "Amazon Prime Music", description: ["100 million songs, ad-free", "Over 15 million podcast episodes"], href: "#" }
];

const footerBottomLinks = [
  { text: "Conditions of Use & Sale", href: "#" },
  { text: "Privacy Notice", href: "#" },
  { text: "Interest-Based Ads", href: "#" }
];

const MiniProductCard = ({ title, imageUrl, linkText }) => (
  <div className="flex flex-col space-y-1">
    <a href="#" className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        onError={(e) => e.currentTarget.src = 'https://placehold.co/150x150/f0f0f0/333?text=Image'}
      />
    </a>
    <a href="#" className="text-xs text-gray-700 dark:text-gray-300 hover:text-red-700">{linkText || title}</a>
  </div>
);

const GridCard = ({ title, children, footerLinkText }) => (
  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col h-full">
    <h2 className="text-xl font-bold mb-4 dark:text-white">{title}</h2>
    <div className="flex-grow grid grid-cols-2 gap-4 mb-4">
      {children}
    </div>
    <a href="#" className="text-sm text-cyan-700 dark:text-cyan-400 hover:text-red-700">{footerLinkText || 'See more'}</a>
  </div>
);

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-white border border-transparent hover:border-gray-300 dark:hover:border-white"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};

const LoginModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setIsLogin(true);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { email, password, isLogin });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-6 md:p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          {isLogin ? 'Sign In' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-700 dark:text-white`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-700 dark:text-white`}
            />
            {errors.password && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.password}</p>}
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 bg-gray-50 dark:bg-gray-700 dark:text-white`}
              />
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.confirmPassword}</p>}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg shadow-md transition duration-200"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setErrors({});
            }}
            className="font-medium text-cyan-700 dark:text-cyan-400 hover:underline ml-1"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};


const Header = ({ onLoginClick, theme, setTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-2 flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="#" className="flex items-center">
          <img
            src={theme === 'light'
              ? "https://placehold.co/100x30/000000/ffffff?text=amazon.in"
              : "https://placehold.co/100x30/ffffff/000000?text=amazon.in"
            }
            alt="Amazon.in"
            className="h-8"
            key={theme}
          />
        </a>
      </div>

      <div className="hidden md:flex items-end space-x-1 p-2 border border-transparent hover:border-gray-300 dark:hover:border-white rounded-sm cursor-pointer">
        <MapPin className="w-5 h-5 mb-1" />
        <div className="flex flex-col -space-y-1">
          <span className="text-xs text-gray-500 dark:text-gray-300">Delivering to</span>
          <span className="text-sm font-bold">Pune 411015</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex-grow flex w-full md:w-auto">
        <button className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs px-3 rounded-l-md border border-gray-300 dark:border-gray-600 flex items-center space-x-1 hover:bg-gray-200 dark:hover:bg-gray-600">
          <span>All</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        <input
          type="text"
          placeholder="Search Amazon.in"
          className="flex-grow p-2 text-black dark:text-white bg-white dark:bg-gray-800 border-y border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 p-2 rounded-r-md border border-yellow-400 hover:border-yellow-500">
          <Search className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-3 md:space-x-4">
        {/* Theme Toggle */}
        <ThemeToggle theme={theme} setTheme={setTheme} />

        {/* Language */}
        <div className="hidden md:flex items-center space-x-1 p-2 border border-transparent hover:border-gray-300 dark:hover:border-white rounded-sm cursor-pointer">
          <span className="text-sm font-bold">EN</span>
          <ChevronDown className="w-3 h-3" />
        </div>

        {/* Sign In */}
        <button
          onClick={onLoginClick}
          className="flex flex-col -space-y-1 p-2 border border-transparent hover:border-gray-300 dark:hover:border-white rounded-sm text-left"
        >
          <span className="text-xs">Hello, sign in</span>
          <span className="text-sm font-bold flex items-center">
            Account & Lists
            <ChevronDown className="w-3 h-3 ml-1" />
          </span>
        </button>

        {/* Returns & Orders */}
        <a href="#" className="hidden md:flex flex-col -space-y-1 p-2 border border-transparent hover:border-gray-300 dark:hover:border-white rounded-sm">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </a>

        {/* Cart */}
        <a href="#" className="flex items-end space-x-1 p-2 border border-transparent hover:border-gray-300 dark:hover:border-white rounded-sm">
          <ShoppingCart className="w-8 h-8" />
          <span className="text-sm font-Tbold">Cart</span>
        </a>
      </div>
    </header>
  );
};

const CategoryNav = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-700 dark:text-white text-sm p-2 flex items-center space-x-4 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
      <a href="#" className="flex items-center space-x-1 font-bold p-1 border border-transparent hover:border-gray-300 dark:hover:border-white rounded-sm">
        <Menu className="w-5 h-5" />
        <span>All</span>
      </a>
      {categoryNavItems.slice(1).map(item => (
        <a
          key={item}
          href="#"
          className="p-1 border border-transparent hover:border-gray-300 dark:hover:border-white rounded-sm whitespace-nowrap"
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroDataSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroDataSlides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(slideInterval); // Clean up interval on component unmount

  }, []);

  const currentHeroData = heroDataSlides[currentSlide];

  return (
    <div className="relative w-full h-64 md:h-80 bg-white dark:bg-gray-800 overflow-hidden">
      <div
        key={currentSlide}
        className="absolute inset-0 flex items-center justify-between p-4 animate-fade-in"
      >
        {/* Left Side Content */}
        <div className="z-10 ml-8 md:ml-20 flex flex-col space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold mb-1 dark:text-white">
            {currentHeroData.title}
          </h1>
          <p className="text-xl md:text-3xl dark:text-white">
            {currentHeroData.subtitle}
          </p>
          <div className="flex space-x-4 text-sm font-semibold">
            {currentHeroData.tabs.map(tab => (
              <span
                key={tab.text}
                className={tab.active
                  ? "border-b-2 border-red-600 pb-1 dark:text-white"
                  : "text-gray-600 dark:text-gray-300"}
              >
                {tab.text}
              </span>
            ))}
          </div>
          <img
            src={currentHeroData.offerImageUrl}
            alt="Cashback Offer"
            className="h-12 w-auto mt-4"
            onError={(e) => e.currentTarget.src = 'https://placehold.co/200x50/f0f0f0/333?text=Cashback+Offer'}
          />
          <span className="text-xs text-gray-500 dark:text-gray-400">{currentHeroData.terms}</span>
        </div>

        {/* Right Side Image */}
        <img
          src={currentHeroData.mainImageUrl}
          alt="Fashion & Beauty"
          className="relative z-10 h-48 w-auto md:h-72 object-contain mr-8 md:mr-20"
          onError={(e) => e.currentTarget.src = 'https://placehold.co/400x250/f0f0f0/333?text=Fashion+Collage'}
        />
      </div>

      {/* Carousel Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white p-4 rounded-r-lg shadow-lg h-24 z-20 border-y border-r border-gray-300 dark:border-gray-600"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white p-4 rounded-l-lg shadow-lg h-24 z-20 border-y border-l border-gray-300 dark:border-gray-600"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="p-4 md:p-6 bg-transparent grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:mx-18 z-10 relative">
      {productGridData.map(card => (
        <GridCard key={card.id} title={card.title} footerLinkText={card.footerLinkText}>
          {card.products.map(product => (
            <MiniProductCard
              key={product.title}
              title={product.title}
              imageUrl={product.imageUrl}
              linkText={product.linkText}
            />
          ))}
        </GridCard>
      ))}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-gray-700 hover:bg-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 text-white text-sm p-4"
      >
        Back to top
      </button>

      <div className="bg-gray-800 dark:bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12">
          {footerLinkColumns.map(column => (
            <div key={column.id}>
              <h4 className="font-bold mb-2">{column.title}</h4>
              <ul className="space-y-2 text-sm">
                {column.links.map(link => (
                  <li key={link.text}><a href={link.href} className="text-gray-300 hover:underline">{link.text}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-800 dark:bg-gray-900 text-white border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <img
            src="https://placehold.co/100x30/ffffff/000000?text=amazon.in"
            alt="Amazon.in"
            className="h-8"
            onError={(e) => e.currentTarget.src = 'https://placehold.co/100x30/ffffff/000000?text=amazon.in'}
          />
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 border border-gray-600 rounded-md px-3 py-1 text-sm text-gray-300 hover:border-white">
              <Globe className="w-4 h-4" />
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center space-x-2 border border-gray-600 rounded-md px-3 py-1 text-sm text-gray-300 hover:border-white">
              <span>🇮🇳</span>
              <span>India</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub-Footer Links */}
      <div className="bg-gray-900 dark:bg-gray-950 text-gray-400 text-xs p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-x-4 gap-y-6">
            {amazonServices.map(service => (
              <a key={service.id} href={service.href} className="hover:underline">
                <span className="font-bold text-white">{service.title}</span>
                {service.description.map((line, index) => (
                  <React.Fragment key={index}><br />{line}</React.Fragment>
                ))}
              </a>
            ))}
          </div>
          <div className="text-center text-gray-400 space-x-4 mt-8">
            {footerBottomLinks.map(link => (
              <a key={link.text} href={link.href} className="hover:underline">{link.text}</a>
            ))}
          </div>
          <p className="text-center text-gray-400 mt-2">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
      <div className="font-sans bg-gray-100 dark:bg-gray-900">
        <Header
          onLoginClick={() => setIsLoginModalOpen(true)}
          theme={theme}
          setTheme={setTheme}
        />
        <CategoryNav />
        <main>
          <HeroSection />
          <ProductGrid />
        </main>
        <Footer />

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </div>
    </>
  );
}



