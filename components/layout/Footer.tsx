import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background-dark py-16 px-10">
      <div className="mx-auto max-w-screen-2xl grid grid-cols-2 gap-12 md:grid-cols-4">
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={"/logoo.png"}
              alt="Zyphra Logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
            <h1 className="font-logo text-2xl font-bold text-primary">
              Zyphra
            </h1>
          </Link>
          <p className="mt-4 text-sm text-slate-400 max-w-sm">
            Pioneering the intersection of luxury and technology.
          </p>
          <div className="flex items-center justify-start">
            <Link href="/#" className="btn text-xl text-primary btn-circle">
              <FaFacebook />
            </Link>
            <Link href="/#" className="btn text-xl text-primary btn-circle">
              <FaTwitter />
            </Link>
            <Link href="/#" className="btn text-xl text-primary btn-circle">
              <FaInstagram />
            </Link>
            <Link href="/#" className="btn text-xl text-primary btn-circle">
              <FaLinkedin />
            </Link> 
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase text-white">Shop</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>New Arrivals</li>
            <li>Electronics</li>
            <li>Apparel</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase text-white">
            Support
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Shipping</li>
            <li>Contact</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-xs text-slate-500 text-center">
        © 2024 ZYPHRA SYSTEMS INC.
      </div>
    </footer>
  );
}
