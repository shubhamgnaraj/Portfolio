import React, { useState } from "react";
import { motion } from "framer-motion";
import { a } from "framer-motion/client";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const [contactForm, setContactForm] = useState(false);

  const openContactForm = () => setContactForm(true)
  const closeContactForm = () => setContactForm(false)
  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* logo name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
            M
          </div>

          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            MiladiCode
          </span>
        </motion.div>

        {/* desktop navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experince", "Contact"].map(
            (item, idx) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + idx * 0.2,
                }}
                href=""
                key={item}
                className="relative text-gray-800 dark:text-gray-200 hover:via-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/* social icons -Desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
        </div>

        {/* hire me button */}
        <motion.button
        onClick={openContactForm}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 1.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15,
          }}
          className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition:all duration-500"
        >
          Hire Me
        </motion.button>

        {/* mobile menu button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            className="text-gray-300"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-5 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experince", "Contact"].map(
            (item, idx) => (
              <a
                href=""
                onClick={toggleMenu}
                key={idx}
                className="text-gray-300 font-medium py-2"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiLinkedin className="h-5 w-5 text-gray-300" />
            </a>
          </div>

          <button
          onClick={() => {
            toggleMenu()
          }}
          className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold">Contact Me</button>
        </div>
      </motion.div>

      {/* contack form  */}
      {contactForm && (
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration:0.5}}
        className="fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl
           w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-gray-300">
                Get In Touch
              </h1>
              <button onClick={closeContactForm}>
                <FiX  className="w-5 h-5 text-gray-300 font-extrabold"/>
              </button>
            </div>

            {/* Input field  */}
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none "
                 />
              </div>
            </form>
           </div>
        </motion.div>
      )}
    </header>
  );
}

export default Header;
