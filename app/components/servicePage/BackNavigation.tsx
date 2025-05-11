"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const BackNavigation = ({
  title,
  link,
}: {
  title: string;
  link: string;
}) => (
  <nav className="container mx-auto px-4 py-6 relative z-10">
    <Link
      href={link}
      className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
    >
      <ArrowLeft className="w-5 h-5" />
      {title}
    </Link>
  </nav>
);
