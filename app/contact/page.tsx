import React from "react";
import cn from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/Button";
import { IoCallOutline } from "react-icons/io5";
import { MdWhatsapp } from "react-icons/md";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="container py-8 space-y-6">
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
            <Button variant="outline" className="text-base gap-4 w-full">
              <IoCallOutline size={20} />
              Call Us
            </Button>

            <Button className="flex gap-4 w-full" variant="outline">
              <MdWhatsapp size={20} />
              Whatsapp Us
            </Button>
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
