"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import aboutData from "@/data/about.json";

import contactApi from "@/api/modules/contact.api"; // Import the contact API

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: aboutData.phone },
  { icon: <FaEnvelope />, title: "Email", description: aboutData.email },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: aboutData.address,
  },
];

const tabDetails = {
  title: "Let's work together",
  description:
    "Looking for a full-time opportunity to collaborate and bring value to an innovative team. I'm ready to contribute my skills and expertise, working together to achieve shared goals and drive success. Let's connect and create something impactful!",
};

import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    serviceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, serviceType: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation

    if (isSubmitting) {
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.message ||
      !formData.serviceType
    ) {
      toast.error("All fields except phone/email are required.");
      return;
    }

    if (!formData.email && !formData.phoneNumber) {
      toast.error("Please provide at least an email or phone number.");
      return;
    }

    setIsSubmitting(true);
    try {
      const { response, err } = await contactApi.sendMail(formData);
      if (err) {
        toast.error("Failed to submit the form. Please try again later.");
      } else {
        toast.success("Thanks for reaching out!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          serviceType: "",
          message: "",
        }); // Reset the form
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send the message. Please try again later."); // Show error toast
    }
    setIsSubmitting(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">{tabDetails.title} </h3>
              <p className="text-white/60">{tabDetails.description}</p>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="Firstname"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Lastname"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              {/* select */}
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />

              {/* btn */}
              <Button size="md" className="max-w-40">
                {isSubmitting ? "Submitting..." : "Send message"}
              </Button>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="max-w-full flex flex-col gap-4 md:gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 md:gap-6">
                  <div className="min-w-[40px] h-[40px] md:min-w-[52px] md:w-[52px] md:h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-sm md:text-base">
                      {item.title}
                    </p>
                    <h3 className="text-sm md:text-lg break-words">
                      {item.description}
                    </h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
