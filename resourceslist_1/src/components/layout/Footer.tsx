import { Facebook, Github, Twitter } from "lucide-react";
import Image from "next/image";

const footerLinks = [
  { name: "Advertise", href: "/ads" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Condition", href: "/termsandcondition" },
  { name: "Sitemap", href: "/sitemap" },
];

const socialLinks = [
  { icon: <Facebook size={18} />, href: "#" },
  { icon: <Twitter size={18} />, href: "#" },
  { icon: <Github size={18} />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold text-primary">
            <Image
              src="/logo-text.svg"
              alt="Brand Logo"
              width={120}
              height={24}
              priority
            />
          </a>

          {/* Navigation Links */}
          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}