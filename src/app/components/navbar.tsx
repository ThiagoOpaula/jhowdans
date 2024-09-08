"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { ShoppingCart, Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className="flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/highjump.svg" alt="Logo" width={32} height={32} />
          <span className="font-bold">Jhowdans</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
          <Link href="/" className="hidden sm:block text-sm font-medium">Loja</Link>
          <Link href="#" className="hidden sm:block text-sm font-medium">Parcerias</Link>
          <Link href="/about" className="hidden sm:block text-sm font-medium">Sobre</Link>
          <Button size="icon" variant="ghost">
            <Search className="h-5 w-5" />
            <span className="sr-only">Loja</span>
          </Button>
          <Button size="icon" variant="ghost">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Parcerias</span>
          </Button>
          <Button size="icon" variant="ghost" className="sm:hidden" onClick={handleMenuToggle}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden flex flex-col space-y-2 px-4 pb-4">
          <Link href="/" className="text-sm font-medium">Loja</Link>
          <Link href="#" className="text-sm font-medium">Parcerias</Link>
          <Link href="/about" className="text-sm font-medium">Sobre</Link>
        </div>
      )}
    </header>
  );
};
