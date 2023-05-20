import React from "react";
import cn from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import { Button, buttonVariants } from "@/components/ui/Button";
import { IoCallOutline } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jaipur Event | Contact Us",
};

const Contact = () => {
  return (
    <section className="container py-12 md:py-16 space-y-6">
      <h1 className="heading">Contact Us</h1>

      <div className="md:flex gap-8">
        <div className="max-w-md mx-auto md:max-w-lg md:mx-0 flex-1">
          <ContactForm />

          {/* divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="h-[1px] bg-gray-200 w-full" />
            <p className="text-sm text-gray-500 font-semibold">OR</p>
            <div className="h-[1px] bg-gray-300 w-full" />
          </div>

          <div className="flex gap-4">
            <a
              className={buttonVariants({
                variant: "outline",
                className: "text-base gap-2 w-full",
              })}
              href="tel:+918107496980"
            >
              <IoCallOutline size={20} />
              Call Us
            </a>
            <a
              className={buttonVariants({
                variant: "outline",
                className: "text-base gap-2 w-full",
              })}
              href="https://api.whatsapp.com/send?phone=+918107496980"
              target="_blank"
            >
              <MdWhatsapp size={20} />
              Whatsapp Us
            </a>
          </div>
        </div>

        <Image
          className="flex-1 hidden md:block aspect-[4/3] object-cover"
          height={500}
          width={500}
          src="https://illustrations.popsy.co/pink/shaking-hands.svg"
          alt="illustration"
        />
      </div>
    </section>
  );
};

export default Contact;
