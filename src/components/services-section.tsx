import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Clock, Users, Star, BookOpen } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const courses = [
    {
      title: "Kelas Pemula (N5-N4)",
      description: "Mulai perjalanan Anda dalam bahasa Jepang dengan dasar-dasar Hiragana, Katakana, dan Kanji sederhana",
      duration: "3 Bulan",
      students: "12-15 siswa",
      level: "Beginner",
      price: "Rp 1.500.000",
      features: ["Hiragana & Katakana", "Kanji Dasar (100+)", "Tata Bahasa N5-N4", "Percakapan Sehari-hari"],
      color: "#f8aabe",
      popular: false
    },
    {
      title: "Kelas Menengah (N3-N2)",
      description: "Tingkatkan kemampuan dengan tata bahasa yang lebih kompleks dan kosakata yang lebih luas",
      duration: "4 Bulan",
      students: "10-12 siswa",
      level: "Intermediate",
      price: "Rp 2.000.000",
      features: ["Kanji Menengah (500+)", "Tata Bahasa N3-N2", "Reading Comprehension", "Business Japanese"],
      color: "#b7db98",
      popular: true
    },
    {
      title: "Kelas Mahir (N1)",
      description: "Capai tingkat mahir dengan persiapan ujian JLPT N1 dan bahasa Jepang tingkat lanjut",
      duration: "6 Bulan",
      students: "8-10 siswa",
      level: "Advanced",
      price: "Rp 2.500.000",
      features: ["Kanji Lanjut (1000+)", "Keigo (Bahasa Hormat)", "Academic Writing", "JLPT N1 Prep"],
      color: "#feea8f",
      popular: false
    },
    {
      title: "Kelas Privat",
      description: "Pembelajaran one-on-one yang disesuaikan dengan kebutuhan dan kecepatan belajar Anda",
      duration: "Fleksibel",
      students: "1 siswa",
      level: "All Levels",
      price: "Rp 300.000/jam",
      features: ["Jadwal Fleksibel", "Materi Kustom", "Progress Tracking", "Fokus Sesuai Kebutuhan"],
      color: "#eeccd4",
      popular: false
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-br from-[#fafdea]/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Program Kursus Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pilih program yang sesuai dengan level dan tujuan pembelajaran bahasa Jepang Anda
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-[#f8aabe] text-white px-4 py-1">Most Popular</Badge>
                </div>
              )}
              
              <Card className={`h-full border-2 hover:shadow-xl transition-all duration-300 ${course.popular ? 'border-[#f8aabe] shadow-lg' : 'border-[#eeccd4]/30'}`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      variant="outline" 
                      className="text-xs"
                      style={{ color: course.color, borderColor: course.color }}
                    >
                      {course.level}
                    </Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold" style={{ color: course.color }}>
                        {course.price}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Course Info */}
                  <div className="flex justify-between items-center mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Yang Dipelajari:
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <div 
                            className="w-2 h-2 rounded-full mr-3 flex-shrink-0"
                            style={{ backgroundColor: course.color }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: course.color,
                      borderColor: course.color
                    }}
                  >
                    Daftar Sekarang
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl shadow-lg border border-[#eeccd4]/30 p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Fasilitas Pembelajaran</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#f8aabe]/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-8 h-8 text-[#f8aabe]" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Materi Digital</h4>
                <p className="text-gray-600 text-sm">Akses materi pembelajaran online 24/7</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#b7db98]/20 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[#b7db98]" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Komunitas Aktif</h4>
                <p className="text-gray-600 text-sm">Group study dan diskusi dengan sesama siswa</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-[#feea8f]/20 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-[#feea8f]" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Sertifikat</h4>
                <p className="text-gray-600 text-sm">Sertifikat resmi setelah menyelesaikan kursus</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}