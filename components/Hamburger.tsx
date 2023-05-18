"use client";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Button } from "./ui/Button";
import Logo from "./Logo";
import { navLinks } from "@/constants";
import NavLink from "./NavLink";
import { motion, AnimatePresence } from "framer-motion";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let overflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <Button
        className="z-20 h-fit p-2 rounded-full md:hidden"
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <RxCross2 size={25} /> : <HiBars3BottomRight size={25} />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen w-full fixed bg-black/10 backdrop-blur-sm top-0 left-0 flex justify-end md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 240 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 240 }}
              transition={{ delay: 0.1, type: "tween", duration: 0.2 }}
              className="bg-white pt-14 px-6 w-60 space-y-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <Logo />
              </div>
              <ul className="gap-4 flex flex-col">
                {navLinks.map(({ id, text, href }) => (
                  <li key={id}>
                    <NavLink className="text-lg" href={href}>
                      {/* <Link href={href}>{text}</Link> */}
                      {text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
