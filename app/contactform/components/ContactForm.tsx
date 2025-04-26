"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";

// ✅ EmailJS Init in useEffect
const SERVICE_ID = "service_201ifj9";
const TEMPLATE_ID = "template_ux4bvm9";
const PUBLIC_KEY = "4CnHJBGuPcrjuCnQQ";

// ✅ Validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ✅ Input component
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
));
Input.displayName = "Input";

// ✅ Textarea component
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => (
  <textarea
    ref={ref}
    className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
));
Textarea.displayName = "Textarea";

// ✅ Button component
const Button = ({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ${className}`}
    {...props}
  />
);

const ContactForm = () => {
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });

      if (result.status === 200 || result.text === "OK") {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("EmailJS Error:", JSON.stringify(error, null, 2));
      alert("Something went wrong while sending your message.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-6 p-4"
    >
      <div>
        <label className="block font-medium mb-1">Name</label>
        <Input type="text" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Subject</label>
        <Input type="text" {...register("subject")} />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block font-medium mb-1">Message</label>
        <Textarea rows={5} {...register("message")} />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>

      {isSubmitSuccessful && (
        <p className="text-green-600 font-medium">
          Thanks! Your message was sent.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
