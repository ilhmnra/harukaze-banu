import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Alamat",
      content: "Jl. Sudirman No. 123, Jakarta Pusat\nDKI Jakarta 10220",
      color: "#f8aabe"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telepon",
      content: "+62 21 1234 5678\n+62 812 3456 7890",
      color: "#b7db98"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@nihongoacademy.id\nhello@nihongoacademy.id",
      color: "#feea8f"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Jam Operasional",
      content: "Senin - Jumat: 09:00 - 21:00\nSabtu - Minggu: 10:00 - 18:00",
      color: "#eeccd4"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.", {
      duration: 4000,
    });
    
    setIsSubmitting(false);
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-[#fafdea] via-white to-[#f8aabe]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap memulai perjalanan belajar bahasa Jepang? Hubungi kami untuk konsultasi gratis atau daftar kelas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="border-2 border-[#eeccd4]/30 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div 
                          className="p-3 rounded-xl flex-shrink-0"
                          style={{ backgroundColor: `${info.color}20` }}
                        >
                          <div style={{ color: info.color }}>
                            {info.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Quick Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="bg-gradient-to-br from-[#f8aabe] to-[#eeccd4] rounded-2xl p-6 text-white"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="w-6 h-6" />
                  <h3 className="text-lg font-semibold">Konsultasi Gratis</h3>
                </div>
                <p className="text-white/90 text-sm mb-4">
                  Tidak yakin kelas mana yang cocok? Chat dengan konselor kami untuk mendapat rekomendasi yang tepat!
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white text-[#f8aabe] hover:bg-gray-100"
                >
                  Chat Sekarang
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="border-2 border-[#eeccd4]/30 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 flex items-center">
                  <Send className="w-6 h-6 mr-3 text-[#f8aabe]" />
                  Kirim Pesan
                </CardTitle>
                <p className="text-gray-600">
                  Isi form di bawah ini dan kami akan menghubungi Anda dalam 24 jam
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Masukkan nama lengkap"
                        className="border-[#eeccd4]/50 focus:border-[#f8aabe] focus:ring-[#f8aabe]/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Nomor WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="08xx xxxx xxxx"
                        className="border-[#eeccd4]/50 focus:border-[#f8aabe] focus:ring-[#f8aabe]/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="nama@email.com"
                      className="border-[#eeccd4]/50 focus:border-[#f8aabe] focus:ring-[#f8aabe]/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Level Bahasa Jepang Saat Ini</Label>
                    <select
                      id="level"
                      name="level"
                      className="w-full px-3 py-2 border border-[#eeccd4]/50 rounded-lg focus:border-[#f8aabe] focus:ring-[#f8aabe]/20 focus:outline-none"
                    >
                      <option value="">Pilih level</option>
                      <option value="complete-beginner">Pemula total (belum tahu Hiragana)</option>
                      <option value="beginner">Pemula (tahu Hiragana/Katakana)</option>
                      <option value="elementary">Dasar (N5-N4)</option>
                      <option value="intermediate">Menengah (N3-N2)</option>
                      <option value="advanced">Mahir (N1)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program">Program yang Diminati</Label>
                    <select
                      id="program"
                      name="program"
                      className="w-full px-3 py-2 border border-[#eeccd4]/50 rounded-lg focus:border-[#f8aabe] focus:ring-[#f8aabe]/20 focus:outline-none"
                    >
                      <option value="">Pilih program</option>
                      <option value="beginner-class">Kelas Pemula (N5-N4)</option>
                      <option value="intermediate-class">Kelas Menengah (N3-N2)</option>
                      <option value="advanced-class">Kelas Mahir (N1)</option>
                      <option value="private-class">Kelas Privat</option>
                      <option value="consultation">Konsultasi terlebih dahulu</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Pesan atau Pertanyaan</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Ceritakan tujuan belajar bahasa Jepang Anda atau ajukan pertanyaan..."
                      className="border-[#eeccd4]/50 focus:border-[#f8aabe] focus:ring-[#f8aabe]/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#f8aabe] hover:bg-[#f8aabe]/90 text-white py-3 text-lg transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Mengirim...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Kirim Pesan</span>
                      </div>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    * Field wajib diisi. Data Anda akan dijaga kerahasiaannya dan hanya digunakan untuk keperluan komunikasi kursus.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}