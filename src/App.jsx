import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn,FaYelp,FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <div id="home" className="min-h-screen">
      <div className="w-full bg-black text-white text-sm md:text-base h-12 md:h-14 fixed top-0 left-0 z-50">
  <div className="mb-1 px-6 sm:px-8 lg:px-10 flex h-full ml-10">
    <span className="flex items-center gap-2 mr-10 font-medium">
      <Phone className="w-4 h-4 md:w-5 md:h-5" /> 206-919-6886
    </span>
    <span className="flex items-center gap-2 font-medium">
      <Mail className="w-4 h-4 md:w-5 md:h-5" /> marcimetzger@gmail.com
    </span>
  </div>
</div>

{/* 🌆 NAVBAR */}
<nav className="fixed top-[40px] md:top-[48px] left-0 right-0 z-50 bg-white shadow-md w-full">
  <div className="flex justify-between h-24 items-center mx-auto px-6 sm:px-8 lg:px-10 ml-10 mr-10">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <img
        src="/logo.webp"
        alt="Logo"
        className="h-20 w-auto object-contain"
      />
    </div>

{/* Nav Links */}
<div className="hidden md:flex space-x-8">
  {["Home", "Services", "Listings", "Contact"].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      onClick={(e) => {
        e.preventDefault(); // prevent default jump
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className="text-gray-800 hover:text-blue-600 font-medium transition duration-200"
    >
      {item}
    </a>
  ))}
</div>


<button
  className="bg-gray-800 text-white text-md px-6 py-3 rounded-sm shadow-sm hover:bg-gray-700 transition-colors duration-300"
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Inquire Now
</button>

  </div>
</nav>


{/* 🏠 HERO SECTION */}
<section className="relative flex flex-col md:flex-row min-h-screen mt-24">
  {/* Left side: White background with text */}
 <div className="md:w-3/5 bg-white flex flex-col justify-center px-6 md:px-12 lg:px-24">
  <p className="text-gray-600 max-w-xl text-lg font-semibold">
    MARCI METZGER - THE RIDGE REALTY GROUP
  </p>
  <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-black leading-tight mt-4">
    Your Trusted Realtor
    <h1 className="font-serif text-5xl md:text-6xl font-extrabold text-black leading-tight mt-4">
    in Pahrump
  </h1>
  </h1>

  {/* Company-style description */}
  <p className="mt-4 text-gray-700 max-w-2xl text-lg leading-relaxed">
    At The Ridge Realty Group, we provide <strong>expert guidance</strong> to families,
    investors, and first-time buyers throughout Southern Nevada. With 
    <strong> decades of combined experience</strong>, our team helps clients navigate the
    real estate market with confidence, delivering professional service
    and <strong>exceptional results</strong> every step of the way.
  </p>

  <div className="mt-8 flex gap-4">
    <button
  className="bg-gray-800 text-white text-lg px-6 py-3 rounded-sm font-medium shadow-sm hover:bg-gray-700 transition-colors duration-300"
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Our Services
</button>

<button
  className="bg-gray-200 text-gray-800 text-lg px-6 py-3 font-medium rounded-sm shadow-sm hover:bg-gray-300 transition-colors duration-300"
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Contact Agent
</button>
  </div>
</div>


<motion.div
  className="absolute top-[45%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-20 w-[30rem] md:w-[50rem] lg:w-[70rem] h-[24rem] md:h-[36rem] lg:h-[50rem] rounded-xl overflow-hidden"
  style={{
    boxShadow: '-10px 10px 30px rgba(0, 0, 0, 0.4)', 
  }}
  initial={{ x: "100%", opacity: 0 }}  
  animate={{ x: 0, opacity: 1 }}       
  transition={{ type: "spring", stiffness: 30, damping: 30, duration: 0.5 }}
>
  <img
    src="/newbg.png"
    alt="Overlapping Showcase"
    className="w-full h-full object-cover"
  />
</motion.div>


  {/* Right side: Image */}
  <div className="md:w-2/5 h-[400px] md:h-auto relative">
    <div
      className="absolute inset-0 bg-cover bg-center filter"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    ></div>
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50"></div>
  </div>
</section>


{/* 🏡 ABOUT SECTION */}
<section className="relative py-20 px-6 md:px-12 lg:px-24 text-gray-800 overflow-hidden">
  {/* Background Image with dim and blur */}
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-xs"
    style={{ backgroundImage: "url('/about.jpg')" }}
  ></div>
  {/* Dim overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
<div className="relative max-w-[1700px] mx-auto grid md:grid-cols-2 gap-12 items-center">
  <motion.img
    src="/icon.webp"
    alt="Marci Metzger"
    className="rounded-2xl shadow-lg object-cover h-[500px]"
    initial={{ y: 50, opacity: 0 }}     
    whileInView={{ y: 0, opacity: 1 }}  
    viewport={{ once: true, amount: 0.3 }} 
    transition={{ type: "spring", stiffness: 70, damping: 20, duration: 1 }}
  />
  
  <div>

      <h2 className="text-4xl font-serif font-bold mb-4 text-white">
        Experience You Can Trust
      </h2>
      <p className="mb-4 leading-relaxed text-lg text-gray-300">
        Buying or selling a home is one of life’s biggest decisions — and you
        deserve someone who knows how to make it seamless. With over{" "}
        <strong>30 years of real estate experience</strong>, our team brings
        deep knowledge of the <strong>Pahrump and Southern Nevada</strong>{" "}
        market, helping clients make confident, informed decisions every step
        of the way.
      </p>
      <p className="leading-relaxed text-lg text-gray-300">
        Whether you’re a first-time homebuyer, a growing family, or an
        investor, our team ensures your real estate journey is smooth,
        professional, and stress-free. Our approach is built on{" "}
        <strong>honesty</strong>, <strong>care</strong>, and{" "}
        <strong>dedication</strong>.
      </p>

      {/* Name and Contact with Socials */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="text-lg font-medium text-gray-100">
          <strong>Marci Metzger</strong>
        </p>

        <span className="flex items-center gap-2 font-medium text-gray-100 text-lg mr-10 ml-10">
          <Phone className="w-4 h-4 md:w-5 md:h-5 text-gray-100" /> 206-919-6886
        </span>

{/* Social Icons */}
<div className="flex items-center gap-8">
  <a
    href="https://www.facebook.com/MarciHomes/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-100 hover:text-blue-600 transition-colors duration-300"
  >
    <FaFacebookF className="text-lg md:text-2xl" />
  </a>
  <a
    href="https://www.instagram.com/marciandlauren_nvrealtors/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-100 hover:text-pink-500 transition-colors duration-300"
  >
    <FaInstagram className="text-lg md:text-3xl" />
  </a>
  <a
    href="https://www.linkedin.com/in/marci-metzger-30642496/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-100 hover:text-blue-500 transition-colors duration-300"
  >
    <FaLinkedinIn className="text-lg md:text-3xl" />
  </a>
    <a
            href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-red-500 transition-colors duration-300"
          >
            <FaYelp className="text-lg md:text-3xl" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



      <section className="relative bg-gradient-to-b from-white to-gray-100 py-12 px-6 md:px-12 lg:px-24">
  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-serif text-gray-900 mb-3 font-bold">The Metzger Way</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Strategic marketing, local expertise, and dedicated service that
      turn listings into sold signs.
    </p>
    <hr className="w-24 border-t-2 border-black mx-auto mt-4" />
  </div>

  <div className="space-y-12">
    {/* Block 1 - Image on left */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 max-w-[1900px] mx-auto relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img
        src="/room.webp"
        alt=""
        className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-[450px] transition-transform duration-500 hover:scale-105"
      />
      {/* Decorative Line */}
      <div className="hidden md:block absolute top-[39%] left-[50.5%] w-[50%] h-[2px] bg-black -translate-y-1/2 translate-x-2"></div>

      <div className="md:w-1/2 text-center md:text-left relative z-10">
        <h3 className="text-2xl text-gray-800 mb-2 flex items-center justify-center md:justify-start gap-2 font-serif">
          Top Residential Sales Last 5 Years
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          We’ve helped over <strong>90 clients</strong> and closed more
          than <strong>$28.5M</strong> in sales. Our team works tirelessly
          to deliver results that exceed expectations — because your success is our success.
        </p>
        <button className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
  See Our Listings
</button>

      </div>
    </motion.div>

    {/* Block 2 - Image on right */}
    <motion.div
      className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-[1900px] mx-auto relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <img
        src="/outside.webp"
        alt=""
        className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-[450px] transition-transform duration-500 hover:scale-105"
      />
      {/* Decorative Line */}
      <div className="hidden md:block absolute top-[40%] right-[51%] w-[49.5%] h-[2px] bg-black -translate-y-1/2 translate-x-2"></div>

      <div className="md:w-1/2 text-center md:text-left relative z-10">
        <h3 className="text-2xl font-serif text-gray-800 mb-2 flex items-center justify-center md:justify-start gap-2">
          Don’t Just List It…
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          Get it <strong>SOLD!</strong> We use advanced marketing, professional
          photography, and local insights to make sure your listing reaches
          the right buyers — and gets top dollar in today’s market.
        </p>
<button className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
  Schedule a Consultation
</button>

      </div>
    </motion.div>

    {/* Block 3 - Image on left */}
    <motion.div
      className="flex flex-col md:flex-row items-center gap-8 max-w-[1900px] mx-auto relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src="/keys.webp"
        alt=""
        className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover h-[450px] transition-transform duration-500 hover:scale-105"
      />
      {/* Decorative Line */}
      <div className="hidden md:block absolute top-[39%] left-[50.5%] w-[50%] h-[2px] bg-black -translate-y-1/2 translate-x-1"></div>

      <div className="md:w-1/2 text-center md:text-left relative z-10">
        <h3 className="text-2xl font-serif text-gray-800 mb-5 flex items-center justify-center md:justify-start gap-2">
          Guide to Buyers
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          Nobody knows the Pahrump market like we do. Enjoy having a professional
          by your side — with market analysis, upgrade recommendations, trusted
          contractors, and more to guide you from offer to closing.
        </p>
<button className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition">
  Contact Us Today
</button>

      </div>
    </motion.div>
  </div>
</section>

<section id="services"className="relative bg-white py-20 px-6 md:px-12 lg:px-24">
      {/* Top Gray Line */}
      <div className="w-[2000px] md:w-[2000px] mx-auto h-[3px] bg-gray-300 mb-12"></div>

      {/* Section Title */}
      <div className="max-w-6xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Discover how we make real estate seamless, profitable, and stress-free.
        </p>
        <hr className="w-24 border-t-2 border-black mx-auto mt-6" />
      </div>

      {/* Services Grid */}
      <div className="max-w-[1900px] mx-auto grid md:grid-cols-3 gap-12 relative z-10">
        {/* Card 1 */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="h-80 w-full rounded-xl bg-gray-200 mb-4 flex items-center justify-center">
            <img
              src="/service1.webp"
              alt="Real Estate Done Right"
              className="h-80 w-full rounded-xl object-cover mb-4"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-serif">Real Estate Done Right</h3>
          <p className="text-gray-600 flex-1 text-lg">
            Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8, delay: 0.2 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="h-80 w-full rounded-xl bg-gray-200 mb-4 flex items-center justify-center">
            <img
              src="/service2.webp"
              alt="Commercial & Residential"
              className="h-80 w-full rounded-xl object-cover mb-4"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-serif">Commercial & Residential</h3>
          <p className="text-gray-600 flex-1 text-lg">
            Large or small, condo or mansion, we can find it and get it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2, duration: 0.8, delay: 0.4 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="h-80 w-full rounded-xl bg-gray-200 mb-4 flex items-center justify-center">
            <img
              src="/service3.webp"
              alt="Rely on Expertise"
              className="h-80 w-full rounded-xl object-cover mb-4"
            />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 font-serif">Rely on Expertise</h3>
          <p className="text-gray-600 flex-1 text-lg">
            If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.
          </p>
        </motion.div>
      </div>
    </section>


<section id="listings"className="py-28 px-6 md:px-12 lg:px-24 bg-gray-800">
  {/* Section Title */}
  <div className="max-w-[1900px] mx-auto text-center mb-12">
    <h2 className="text-4xl font-serif font-bold text-white mb-2">
      Find Your Dream Home
    </h2>
    <p className="text-gray-300 text-lg">
      Search our listings by location, type, bathrooms, bedrooms, and price.
    </p>
  </div>

  {/* Filters Grid */}
  <motion.div
    className="grid grid-cols-9 gap-x-4 gap-y-6 max-w-[1500px] mx-auto"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {/* Row 1 */}
    <input
      type="text"
      placeholder="Location"
      className="col-span-5 p-3 rounded-md bg-gray-600 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
    />
    <select className="col-span-2 p-3 rounded-md bg-gray-600 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg">
      <option>Type</option>
      <option>House</option>
      <option>Condo</option>
      <option>Townhouse</option>
    </select>
    <select className="col-span-2 p-3 rounded-md bg-gray-600 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg">
      <option>Sort</option>
      <option>Price: Low → High</option>
      <option>Price: High → Low</option>
      <option>Newest Listings</option>
    </select>

    {/* Row 2 */}
    <input
      type="number"
      placeholder="Min Price"
      className="col-span-1.5 p-3 rounded-md bg-gray-600 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
    />
    <input
      type="number"
      placeholder="Max Price"
      className="col-span-1.5 p-3 rounded-md bg-gray-600 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
    />
    <div className="col-span-2">
      <select className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg">
        <option>Bathrooms</option>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
      </select>
    </div>
    <div className="col-span-2">
      <select className="w-full p-3 rounded-md bg-gray-600 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg">
        <option>Bedrooms</option>
        <option>1+</option>
        <option>2+</option>
        <option>3+</option>
      </select>
    </div>
    <button className="col-span-3 bg-blue-500 text-white font-medium rounded-md p-3 hover:bg-blue-600 shadow-lg transition-colors duration-300">
      Search Now
    </button>
  </motion.div>
</section>


 {/* 🏘️ PHOTO GALLERY / FEATURED LISTINGS */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        {/* Section Title */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-3">
            Explore Our Featured Homes
          </h2>
          <p className="text-gray-600 text-lg">
            A curated selection of properties showcasing the best of Pahrump and Southern Nevada.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1900px] mx-auto">
          {["/property1.webp", "/property2.webp", "/property3.webp", "/property4.webp", "/property5.webp", "/property6.webp"].map((src, idx) => (
            <motion.div
              key={idx}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={src}
                alt={`Property ${idx + 1}`}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-2xl backdrop-blur-[2px]">
                <p className="text-white font-medium text-lg">Property {idx + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <button className="bg-gray-800 text-white text-md px-6 py-3 rounded-sm shadow-sm hover:bg-gray-700 transition-colors duration-300">
            View All Listings
          </button>
        </div>
      </section>

      {/* Logos / Partners */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-[1900px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 items-center justify-items-center">
          <motion.img
            src="/partner1.webp"
            alt="Partner 1"
            className="h-24 object-contain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/partner2.webp"
            alt="Partner 2"
            className="h-24 object-contain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/partner3.webp"
            alt="Partner 3"
            className="h-24 object-contain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <motion.img
            src="/partner4.webp"
            alt="Partner 4"
            className="h-24 object-contain"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

<section id="contact"className="relative bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
  <div className="max-w-[1900px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 items-stretch">
    {/* Contact Form Card */}
    <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col gap-6 h-full">
      <h2 className="text-3xl font-bold text-gray-900">Send Message</h2>
      <p className="text-gray-600">Have questions? Reach out to us and we’ll get back to you promptly.</p>

      <form className="flex flex-col gap-4 flex-1">
        <input
          type="text"
          placeholder="Name"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Email*"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Message"
          className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 h-32 resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium rounded-md p-3 hover:bg-blue-700 transition-colors duration-300"
        >
          Send
        </button>
      </form>
      <p className="text-xs text-gray-400 mt-2">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </div>

    {/* Contact Info Card */}
    <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col gap-6 h-full">
      <h2 className="text-3xl font-bold text-gray-900">Call or Visit</h2>

    <a
  href="https://wa.me/14259412560"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-green-600 text-white font-medium rounded-full px-6 py-3 hover:bg-green-700 transition-colors duration-300"
>
  <FaWhatsapp className="h-5 w-5" />
  Message us on WhatsApp
</a>

      <div className="flex flex-col gap-2 mt-10">
        <p className="font-medium text-gray-800">Marci Metzger - THE RIDGE REALTY GROUP</p>
        <p className="text-gray-600">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
        <p className="text-gray-600">(206) 919-6886</p>
      </div>

      <div className="mt-4 flex-1 flex flex-col justify-end">
        <h3 className="font-semibold text-gray-800 mb-2">Office Hours</h3>
        <ul className="text-gray-600 space-y-1">
          <li>Open today: 08:00 am – 07:00 pm</li>
          <li>Open daily: 08:00 am – 07:00 pm</li>
        </ul>
        <p className="text-gray-500 mt-2 text-sm mb-10">
          Appointments outside office hours available upon request. Just call!
        </p>
      </div>
    </div>

    {/* Google Maps Card */}
    <div className="bg-white shadow-lg rounded-2xl p-10 flex flex-col gap-6 h-full">
      <h2 className="text-3xl font-bold text-gray-900">Our Location</h2>
      <p className="text-gray-600 mb-4">Find us on the map and plan your visit.</p>

      <div className="flex-1">
<iframe
  title="The Ridge Realty Group Location"
  src="https://www.google.com/maps?q=3190+HW-160,+Suite+F,+Pahrump,+NV+89048&output=embed"
  width="100%"
  height="100%"
  class="rounded-xl border-0"
  allowfullscreen=""
  loading="lazy"
></iframe>
      </div>
    </div>
  </div>
</section>
 <footer className="bg-black text-gray-100 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Footer Info */}
        <div className="text-center md:text-left">
          <div className="flex items-center space-x-2">
      <img
        src="/toplogo.png"
        alt="Logo"
        className="h-20 w-auto object-contain"
      />
    </div>
          <p className="text-gray-400 mt-2">
            3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
          </p>
          <p className="text-gray-400 mt-1">(206) 919-6886</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-8">
          <a
            href="https://www.facebook.com/MarciHomes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebookF className="text-lg md:text-4xl" />
          </a>
          <a
            href="https://www.instagram.com/marciandlauren_nvrealtors/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram className="text-lg md:text-5xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/marci-metzger-30642496/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedinIn className="text-lg md:text-5xl" />
          </a>
          <a
            href="https://www.yelp.com/biz/xr3yQN_m2SgO0R_7S6p62w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-red-500 transition-colors duration-300"
          >
            <FaYelp className="text-lg md:text-4xl" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-500 text-sm text-center mt-8">
        &copy; {new Date().getFullYear()} MARCI METZGER HOMES. All rights reserved.
      </p>
    </footer>
    </div>
  );
}

export default App;
