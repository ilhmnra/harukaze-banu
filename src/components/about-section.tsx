import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, BookOpen, Target } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Tutor Bersertifikat",
      description: "Instruktur berpengalaman dengan sertifikasi JLPT dan pengalaman mengajar bertahun-tahun",
      color: "#f8aabe"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kelas Interaktif",
      description: "Pembelajaran yang menyenangkan dengan metode interaktif dan komunitas yang supportif",
      color: "#b7db98"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Kurikulum Terstruktur",
      description: "Materi pembelajaran yang tersusun sistematis dari level pemula hingga mahir",
      color: "#feea8f"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Target Oriented",
      description: "Pembelajaran yang disesuaikan dengan tujuan Anda, baik untuk studi, kerja, atau traveling",
      color: "#eeccd4"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f8aabe]/20 to-[#b7db98]/20 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745911862361-fa4e0815609d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNsYXNzcm9vbSUyMHRlYWNoaW5nfGVufDF8fHx8MTc1NzU2MDMyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Japanese Learning Environment"
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-[#eeccd4]/30"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#f8aabe]">5</div>
                  <div className="text-sm text-gray-600">Tahun</div>
                  <div className="text-sm text-gray-600">Pengalaman</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl font-bold text-gray-800 mb-6"
            >
              Tentang Harukaze
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              Harukaze adalah lembaga kursus bahasa Jepang terpercaya yang telah berdiri sejak 2019. 
              Kami berkomitmen untuk memberikan pembelajaran bahasa Jepang yang berkualitas tinggi dengan 
              metode yang efektif dan menyenangkan.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 mb-12 leading-relaxed"
            >
              Dengan pengajar yang berpengalaman dan kurikulum yang terstruktur, kami telah membantu 
              ratusan siswa mencapai tujuan mereka dalam menguasai bahasa Jepang.
            </motion.p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-[#fafdea] to-white rounded-2xl p-6 border border-[#eeccd4]/30 hover:shadow-lg transition-all duration-300"
                >
                  <div 
                    className="inline-flex p-3 rounded-xl mb-4"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <div style={{ color: feature.color }}>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}