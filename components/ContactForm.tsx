"use client";
import React from "react";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqyrrzb");
  const inputFields = [
    {
      id: 1,
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
    },
    {
      id: 2,
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
    },
    {
      id: 3,
      label: "Phone No.",
      placeholder: "Enter your phone no.",
      type: "text",
    },
  ];

  if (state.succeeded) {
    toast.success("Message Sent.");
  }
  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {inputFields.map(({ id, label, placeholder, type }) => (
        <div className="flex flex-col gap-1" key={id}>
          <Label htmlFor={label}>{label}</Label>
          <Input
            id={label}
            placeholder={placeholder}
            type={type}
            name={label}
            required
          />
        </div>
      ))}

      {/* text area */}

      <div className="flex flex-col gap-1">
        <Label htmlFor="message">Message</Label>
        <textarea
          className="py-2.5 px-4 rounded-xl border border-gray-300 outline-none focus-visible:ring-2 ring-pink-600"
          id="message"
          name="Message"
          placeholder="Enter your message"
          cols={30}
          rows={5}
        ></textarea>
      </div>

      <Button
        type="submit"
        disabled={state.submitting}
        className="rounded-xl text-base w-full py-3 h-fit"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
