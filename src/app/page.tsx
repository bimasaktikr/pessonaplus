import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    // Main container with gradient background and responsive padding
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-100 flex flex-col">
      
      {/* Main content area with centered layout */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Hero section with main headline and subheading */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Selamat Datang di Pessona Plus
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Tempat Pembinaan Statistik Sektoral terintegrasi
            </p>
          </div>

          {/* Action buttons container with responsive layout and icons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            
            {/* Blog navigation button with book icon */}
            <a
              href="https://blog.pessona.bpskotamalang.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto min-w-[200px]"
            >
              <BookOpen className="w-5 h-5" />
              Menuju Blog
            </a>

            {/* LMS navigation button with graduation cap icon */}
            <a
              href="https://lms.pessona.bpskotamalang.id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-orange-600 bg-white border-2 border-orange-600 hover:bg-orange-50 focus:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto min-w-[200px]"
            >
              <GraduationCap className="w-5 h-5" />
              Menuju LMS
            </a>
          </div>

        </div>
      </main>

      {/* Simple footer with company information */}
      <footer className="py-6 text-center text-gray-600 text-sm">
        <p>PessonaPlus | BPS Kota Malang</p>
      </footer>

    </div>
  );
}
