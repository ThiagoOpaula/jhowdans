import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ShoppingCart, Menu, Search, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-10">
      <div className=" flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/highjump.svg" alt="Logo" width={32} height={32} />
          <span className="font-bold">Jhowdans</span>
        </Link>
        <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
          <Link href="/dashboard" className="hidden sm:block text-sm font-medium">Loja</Link>
          <Link href="#" className="hidden sm:block text-sm font-medium">Parcerias</Link>
          <Link href="/about" className="hidden sm:block text-sm font-medium">Sobre</Link>
          <Button size="icon" variant="ghost">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button size="icon" variant="ghost">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button size="icon" variant="ghost" className="sm:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </nav>
      </div>
    </header>
  );
};