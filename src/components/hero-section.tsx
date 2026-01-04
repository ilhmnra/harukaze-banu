import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const text = "Master Japanese with Expert Guidance";

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fafdea] via-[#feea8f]/20 to-[#f8aabe]/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={typingVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6"
            >
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className={letter === " " ? "inline-block w-2" : ""}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Pelajari bahasa Jepang dengan mudah dan menyenangkan bersama tutor berpengalaman. 
              Dari pemula hingga mahir, kami siap membantu perjalanan belajar Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                className="bg-[#f8aabe] hover:bg-[#f8aabe]/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Mulai Belajar Sekarang
              </Button>
              <Button 
                variant="outline" 
                className="border-[#f8aabe] text-[#f8aabe] hover:bg-[#f8aabe] hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                Konsultasi Gratis
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[#eeccd4]/30"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#f8aabe]">500+</div>
                <div className="text-gray-600">Siswa Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#b7db98]">15+</div>
                <div className="text-gray-600">Tutor Expert</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#feea8f]">98%</div>
                <div className="text-gray-600">Tingkat Kepuasan</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Background decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#feea8f] to-[#f8aabe] rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#b7db98] to-[#eeccd4] rounded-full opacity-20"
              />
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#eeccd4]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=600&h=600&fit=crop&crop=face"
                  alt="Japanese Learning"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f8aabe]/20 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -top-6 left-6 bg-white rounded-2xl shadow-xl p-4 border border-[#eeccd4]/30"
              >
                <div className="text-2xl">こんにちは</div>
                <div className="text-sm text-gray-600">Konnichiwa</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 right-6 bg-white rounded-2xl shadow-xl p-4 border border-[#eeccd4]/30"
              >
                <div className="text-2xl">ありがとう</div>
                <div className="text-sm text-gray-600">Arigatou</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}