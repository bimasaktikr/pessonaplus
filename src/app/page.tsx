import Link from "next/link";
import { BookOpen, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    // Main container with gradient background and responsive padding
    <div className="min-h-screen bg-gradient-to-br from-white to-orange-100 flex flex-col relative overflow-hidden">
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating stars */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-orange-300 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-orange-400 rounded-full opacity-80 animate-ping"></div>
        <div className="absolute top-48 left-1/4 w-1.5 h-1.5 bg-orange-200 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-64 right-1/3 w-1 h-1 bg-orange-300 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-80 left-1/3 w-2 h-2 bg-orange-400 rounded-full opacity-50 animate-pulse"></div>
        
        {/* Larger decorative elements */}
        <div className="absolute top-40 right-10 w-16 h-16 border border-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-10 w-12 h-12 border border-orange-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-60 right-1/4 w-20 h-20 border border-orange-200 rounded-full opacity-25"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-1/6 w-8 h-8 border-2 border-orange-300 rotate-45 opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/6 w-6 h-6 bg-orange-200 rotate-45 opacity-30"></div>
        <div className="absolute top-1/2 left-1/12 w-4 h-4 border border-orange-400 rounded-full opacity-40"></div>
        
        {/* Much larger grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_3px_3px,rgba(251,146,60,0.2)_3px,transparent_0)] bg-[length:120px_120px] opacity-50"></div>
      </div>
      
      {/* Main content area with centered layout */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero section with modern layout */}
          <div className="text-center mb-16">
            {/* Badge/Subtitle */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium mb-8 backdrop-blur-sm bg-opacity-80">
              <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
              Platform Pembinaan Statistik Terdepan
            </div>
            
            {/* Main headline with enhanced typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Selamat Datang di{" "}
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Pessona Plus
              </span>
            </h1>
            
            {/* Subheading with improved styling */}
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Tempat Pembinaan Statistik Sektoral terintegrasi yang menghubungkan{" "}
              <span className="font-semibold text-gray-800">pengetahuan</span> dan{" "}
              <span className="font-semibold text-gray-800">praktik</span> dalam satu platform
            </p>

            {/* Action buttons container with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              
              {/* Blog navigation button with enhanced styling */}
              <a
                href="https://blog.pessona.bpskotamalang.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto min-w-[220px] backdrop-blur-sm"
              >
                <BookOpen className="w-5 h-5" />
                Menuju Blog
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* LMS navigation button with enhanced styling */}
              <a
                href="https://lms.pessona.bpskotamalang.id"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-semibold text-orange-600 bg-white border-2 border-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto min-w-[220px] backdrop-blur-sm"
              >
                <GraduationCap className="w-5 h-5" />
                Menuju LMS
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Additional feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 backdrop-blur-sm bg-opacity-80">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Artikel Berkualitas</h3>
                <p className="text-gray-600 text-sm">Konten statistik terpercaya dan terupdate</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 backdrop-blur-sm bg-opacity-80">
                  <GraduationCap className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Pembelajaran Interaktif</h3>
                <p className="text-gray-600 text-sm">Sistem pembelajaran yang adaptif</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 backdrop-blur-sm bg-opacity-80">
                  <div className="w-6 h-6 text-orange-600">📊</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Terintegrasi</h3>
                <p className="text-gray-600 text-sm">Akses data statistik yang terpusat</p>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Simple footer with company information */}
      <footer className="py-6 text-center text-gray-600 text-sm relative z-10">
        <p>PessonaPlus | BPS Kota Malang</p>
      </footer>

    </div>
  );
}
