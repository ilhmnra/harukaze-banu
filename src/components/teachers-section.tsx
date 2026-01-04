import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Award, Globe, MessageCircle } from 'lucide-react';

export function TeachersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const teachers = [
    {
      name: "Tanaka Yuki",
      title: "Head Instructor",
      experience: "8 tahun",
      specialization: "JLPT Preparation",
      image: "https://images.unsplash.com/photo-1585220703112-616f98566b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRlYWNoZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTc1NjAzNzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      students: 150,
      certifications: ["JLPT N1", "Teaching Certificate", "Business Japanese"],
      description: "Native speaker dengan pengalaman mengajar di berbagai universitas di Jepang",
      color: "#f8aabe"
    },
    {
      name: "Sari Nakamura",
      title: "Senior Instructor",
      experience: "6 tahun",
      specialization: "Conversational Japanese",
      image: "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwdGVhY2hlciUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc1NjAzODJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.8,
      students: 120,
      certifications: ["JLPT N1", "Conversation Expert", "Cultural Studies"],
      description: "Spesialis percakapan dengan metode pembelajaran yang interaktif dan menyenangkan",
      color: "#b7db98"
    },
    {
      name: "Hiroshi Watanabe",
      title: "Grammar Specialist",
      experience: "5 tahun",
      specialization: "Grammar & Writing",
      image: "https://images.unsplash.com/flagged/photo-1574110878761-bc035e74595d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0dXRvciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzU2MDM4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 4.9,
      students: 95,
      certifications: ["JLPT N1", "Academic Writing", "Translation"],
      description: "Ahli tata bahasa dengan kemampuan menjelaskan konsep kompleks secara sederhana",
      color: "#feea8f"
    }
  ];

  return (
    <section id="teachers" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tim Pengajar Profesional</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Belajar langsung dari instruktur berpengalaman yang berkomitmen untuk kesuksesan Anda
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden border-2 border-[#eeccd4]/30 hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold">{teacher.rating}</span>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4">
                      <Badge 
                        className="text-white border-white/30"
                        style={{ backgroundColor: `${teacher.color}90` }}
                      >
                        {teacher.experience} pengalaman
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Teacher Info */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{teacher.name}</h3>
                    <p className="text-gray-600 font-medium">{teacher.title}</p>
                    <p className="text-sm" style={{ color: teacher.color }}>{teacher.specialization}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{teacher.description}</p>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{teacher.students} siswa</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4" />
                      <span>{teacher.certifications.length} sertifikat</span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Sertifikasi:</h4>
                    <div className="flex flex-wrap gap-2">
                      {teacher.certifications.map((cert, certIndex) => (
                        <Badge
                          key={certIndex}
                          variant="outline"
                          className="text-xs"
                          style={{ 
                            color: teacher.color, 
                            borderColor: `${teacher.color}50`,
                            backgroundColor: `${teacher.color}10`
                          }}
                        >
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Teaching Approach */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-[#fafdea] to-[#feea8f]/20 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Metode Pengajaran Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#f8aabe] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Pembelajaran Interaktif</h4>
                    <p className="text-gray-600">Kombinasi teori dan praktek dengan aktivitas yang menyenangkan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#b7db98] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Pendekatan Personal</h4>
                    <p className="text-gray-600">Setiap siswa mendapat perhatian khusus sesuai kebutuhan belajar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#feea8f] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Budaya & Bahasa</h4>
                    <p className="text-gray-600">Tidak hanya bahasa, tetapi juga budaya Jepang yang otentik</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Globe className="w-8 h-8 text-[#f8aabe] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-gray-600 text-sm">Native Approach</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Award className="w-8 h-8 text-[#b7db98] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">95%</div>
                <div className="text-gray-600 text-sm">Pass Rate JLPT</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <MessageCircle className="w-8 h-8 text-[#feea8f] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">24/7</div>
                <div className="text-gray-600 text-sm">Online Support</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Star className="w-8 h-8 text-[#eeccd4] mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">4.9</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}