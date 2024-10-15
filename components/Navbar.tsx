"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { links } from "@/app/homeContent";

const email = process.env.NEXT_PUBLIC_EMAIL;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center px-4 h-40">
        <Image src="/logo/Nav-logo.png" alt="Logo" width={150} height={50} />
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-start gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-gray-600">
              <p className="font-bold">Head Office</p>
              <p>56/38-C, Jinnah Town, Quetta</p>
              <p>Phone: +92 {process.env.NEXT_PUBLIC_PHONE_NUMBER}</p>
            </div>
          </div>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4">
              {links.map((link, index) => (
                <React.Fragment key={index}>
                  {link.subLinks ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem value={link.label}>
                        <AccordionTrigger>{link.label}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2">
                            {link.subLinks.map((subLink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subLink.path}
                                className="text-sm hover:underline"
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={link.path}
                      className="text-sm hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
            <div className="mt-8 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>{email}</span>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex bg-red-800 justify-between items-center py-4 px-4">
        <div className="flex items-center space-x-4">
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {link.subLinks ? (
                <div className="relative group">
                  <button className="text-white hover:underline capitalize">
                    {link.label}
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subLink.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.path}
                  className="text-white hover:underline capitalize"
                >
                  {link.label}
                </Link>
              )}
              {index < links.length - 1 && (
                <Separator orientation="vertical" className="h-5 bg-white" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>{email}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
