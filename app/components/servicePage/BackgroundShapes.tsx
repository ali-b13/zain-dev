// components/ServicePage/BackgroundShapes.tsx
"use client";

export const BackgroundShapes = () => (
  <div className="absolute inset-0 z-0">
    <div className="absolute w-[800px] h-[800px] -top-64 -right-64 bg-blue-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
    <div className="absolute w-[600px] h-[600px] -bottom-48 -left-48 bg-indigo-50/40 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
  </div>
);
