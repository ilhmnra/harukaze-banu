import { motion } from 'motion/react';
import { Heart, Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Teachers", href: "#teachers" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Kelas Pemula (N5-N4)", href: "#services" },
    { name: "Kelas Menengah (N3-N2)", href: "#services" },
    { name: "Kelas Mahir (N1)", href: "#services" },
    { name: "Kelas Privat", href: "#services" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f8aabe] to-[#eeccd4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">日</span>
              </div>
              <span className="text-xl font-bold">NihongoAcademy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Lembaga kursus bahasa Jepang terpercaya yang membantu Anda menguasai bahasa Jepang dengan metode yang efektif dan menyenangkan.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#f8aabe]/20 rounded-full flex items-center justify-center hover:bg-[#f8aabe] transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#f8aabe]">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-[#f8aabe] transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#b7db98]">Program Kursus</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={program.name}>
                  <motion.a
                    href={program.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-300 hover:text-[#b7db98] transition-colors duration-300 cursor-pointer"
                  >
                    {program.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#feea8f]">Kontak</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-medium text-white mb-1">Alamat</p>
                <p className="text-sm">Jl. Sudirman No. 123<br />Jakarta Pusat, DKI Jakarta 10220</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Telepon</p>
                <p className="text-sm">+62 21 1234 5678</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <p className="text-sm">info@nihongoacademy.id</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Jam Operasional</p>
                <p className="text-sm">Senin - Jumat: 09:00 - 21:00<br />Sabtu - Minggu: 10:00 - 18:00</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>© {currentYear} NihongoAcademy. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="w-4 h-4 text-[#f8aabe] fill-current" />
              </motion.div>
              <span>for Japanese learners.</span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-300">
              <motion.a
                href="#"
                whileHover={{ color: '#f8aabe' }}
                className="hover:text-[#f8aabe] transition-colors cursor-pointer"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#f8aabe' }}
                className="hover:text-[#f8aabe] transition-colors cursor-pointer"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#f8aabe' }}
                className="hover:text-[#f8aabe] transition-colors cursor-pointer"
              >
                FAQ
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}