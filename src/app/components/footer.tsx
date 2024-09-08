import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { ShoppingCart, Menu, Search, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const Footer = () => {
  return (
    <footer className="border-t bg-muted px-20">
      {/* <div className=" flex flex-col gap-4 py-10 md:flex-row md:gap-8">
        <div className="flex-1 space-y-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/highjump.svg" alt="Logo" width={32} height={32} />
            <span className="font-bold">CollegeSportsGear</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Your one-stop shop for college athletic gear and merchandise.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h4 className="font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">All Products</Link></li>
              <li><Link href="#">Jerseys</Link></li>
              <li><Link href="#">Accessories</Link></li>
              <li><Link href="#">Sale</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
              <li><Link href="#">Affiliates</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Help Center</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
              <li><Link href="#">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="border-t">
        <div className=" flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">© 2024 Jhowdans. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-muted-foreground hover:text-muted">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-muted-foreground hover:text-muted">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="rounded-full bg-muted p-2 text-muted-foreground hover:bg-muted-foreground hover:text-muted">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};