import React from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "motion/react";
import imgImage76 from "figma:asset/3a5017d76e4eb279a233354d9a00784112f08725.png";
import logoImage from "figma:asset/6b93ac1c3c057c9e3b6fe17cb6c6c78c748405d7.png";
import {
  Check,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Briefcase,
  FileText,
  DollarSign,
  Download,
  MessageCircle,
  ArrowRight,
  Quote,
  Eye,
  Target,
  BookOpen,
  TrendingUp,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Utensils,
  Wheat,
  Factory,
  Leaf,
  ChefHat,
  HeartHandshake
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "../components/ui/sheet";

// Unsplash Images
const IMG_HERO = "https://images.unsplash.com/photo-1761491473677-46e3c51249b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbiUyMGNpdHklMjBzdHJlZXQlMjBtb2Rlcm4lMjBidXNpbmVzc3xlbnwxfHx8fDE3Njc0NjQyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CLASSROOM = "https://images.unsplash.com/photo-1678733836013-1b49058ae7d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMGNsYXNzcm9vbSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmd8ZW58MXx8fHwxNzY3NDY0MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_FACTORY = "https://images.unsplash.com/photo-1609153450099-998523a6e2a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKYXBhbmVzZSUyMGZhY3RvcnklMjB3b3JrZXIlMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2NzQ2NDIzNHww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_NURSE = "https://images.unsplash.com/photo-1751203659068-bc200c471d92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudXJzZSUyMGNhcmVnaXZlciUyMGphcGFuJTIwZWxkZXJseXxlbnwxfHx8fDE3Njc0NjQyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_FARMING = "https://images.unsplash.com/photo-1577678582337-1b021857a51e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZSUyMGZhcm1pbmclMjBqYXBhbiUyMGZpZWxkfGVufDF8fHx8MTc2NzQ2NDIzNHww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CONSTRUCTION = "https://images.unsplash.com/photo-1732630480531-3c5e977042cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjBqYXBhbnxlbnwxfHx8fDE3Njc0NjQyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_RESTAURANT = "https://images.unsplash.com/photo-1765718482383-f2addae24105?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGJlc3RhdXJhbnQlMjBzZXJ2aWNlJTIwd29ya2VyfGVufDF8fHx8MTc2NzU1NzU0MHww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_LIVESTOCK = "https://images.unsplash.com/photo-1753408317305-79bf538700ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGxpdmVzdG9jayUyMGZhcm0lMjBjb3dzfGVufDF8fHx8MTc2NzU1NzU0MHww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_FOOD_PROCESSING = "https://images.unsplash.com/photo-1617448570646-652843c87581?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZvb2QlMjBwcm9jZXNzaW5nJTIwZmFjdG9yeSUyMHdvcmtlcnxlbnwxfHx8fDE3Njc1NTc1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080";

// Reusable Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  hover: { scale: 1.03, transition: { duration: 0.3 } },
};

function SectionLabel({ children, className = "", theme = "blue" }: { children: React.ReactNode; className?: string; theme?: "blue" | "dark" | "purple" }) {
  const styles = {
    blue: {
      container: "bg-blue-50 border-blue-100 text-[#00A2FF]",
      dot: "bg-[#00A2FF]"
    },
    dark: {
      container: "bg-white/10 border-white/20 text-blue-200",
      dot: "bg-blue-200"
    },
    purple: {
      container: "bg-purple-50 border-purple-100 text-purple-600",
      dot: "bg-purple-600"
    }
  };

  const currentStyle = styles[theme];

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold tracking-wide uppercase mb-6 ${currentStyle.container} ${className}`}
    >
      <span className={`w-2 h-2 rounded-full animate-pulse ${currentStyle.dot}`} />
      {children}
    </motion.div>
  );
}

// Decorative Background Blob
function Blob({ className }: { className?: string }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-30 pointer-events-none ${className}`} />
  );
}

// Minimal Slick CSS to avoid build errors with font assets
const slickCss = `
.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent}
.slick-list{position:relative;display:block;overflow:hidden;margin:0;padding:0}
.slick-list:focus{outline:0}
.slick-list.dragging{cursor:pointer;cursor:hand}
.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}
.slick-track{position:relative;top:0;left:0;display:block;margin-left:auto;margin-right:auto}
.slick-track:before,.slick-track:after{display:table;content:''}
.slick-track:after{clear:both}
.slick-loading .slick-track{visibility:hidden}
.slick-slide{display:none;float:left;height:100%;min-height:1px}
[dir='rtl'] .slick-slide{float:right}
.slick-slide img{display:block}
.slick-slide.slick-loading img{display:none}
.slick-slide.dragging img{pointer-events:none}
.slick-initialized .slick-slide{display:block}
.slick-loading .slick-slide{visibility:hidden}
.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent}
.slick-arrow.slick-hidden{display:none}
`;

export default function AboutUsOurCompany() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'vision' | 'mission'>('vision');
  const [lang, setLang] = React.useState<'en' | 'id' | 'ja'>('id');
  
  // Form state
  const [formData, setFormData] = React.useState({
    name: '',
    age: '',
    phone: '',
    city: '',
    program: ''
  });
  
  // Custom dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  
  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const programOptions = [
    { value: 'magang', label: 'Internship (Magang)', desc: '3 Bulan', icon: '🎓', color: 'bg-blue-50 border-blue-200' },
    { value: 'tg', label: 'Tokutei Ginou (TG)', desc: '6 Bulan', icon: '💼', color: 'bg-purple-50 border-purple-200' },
    { value: 'ssw', label: 'SSW Exam Track', desc: 'Persiapan Ujian', icon: '📝', color: 'bg-green-50 border-green-200' }
  ];
  
  const selectedProgram = programOptions.find(p => p.value === formData.program);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const programLabels: Record<string, string> = {
      magang: 'Internship (Magang)',
      tg: 'Tokutei Ginou (TG)',
      ssw: 'SSW Exam Track'
    };
    const message = `Halo Harukaze Indonesia!

Saya ingin mendaftar program pelatihan:

 *Data Pendaftaran*
━━━━━━━━━━━━━━━━
 Nama: ${formData.name}
 Usia: ${formData.age}
 No. HP: ${formData.phone}
 Kota: ${formData.city}
 Program: ${programLabels[formData.program] || formData.program}
━━━━━━━━━━━━━━━━

Mohon informasi lebih lanjut. Terima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285117832026?text=${encodedMessage}`, '_blank');
  };

  const content = {
    en: {
      nav: [
        { name: 'Programs', id: 'programs' },
        { name: 'Schedule', id: 'schedule' },
        { name: 'Fees', id: 'fees' },
        { name: 'FAQ', id: 'faq' }
      ],
      applyButton: 'Apply Now',
      mobileMenuTitle: 'Mobile Menu',
      mobileMenuDesc: "Navigate through Harukaze's pages",
      hero: {
         headlineStart: "A Breath of",
         headlineMiddle: "Change",
         headlineEnd: "For Your Future.",
         desc: "Intensive Japanese language, cultural training, and placement support that open a clear path from training to employment in Japan.",
         cta: "Explore Programs",
         placementTitle: "Placement Opportunities In:",
         placements: ["Agriculture", "Restaurant", "Livestock", "Caregiving", "Food Processing", "Manufacturing"]
      },
      about: {
         label: "About Us",
         headlinePrefix: "Bringing a breath of change to",
         headlineHighlight: "Indonesia’s workforce",
         imageQuote: "\"Empowering young people to achieve global competitiveness.\"",
         tabs: { vision: "Vision", mission: "Mission" },
         vision: {
             title: "Our Vision",
             text: "To be a trusted training institution that brings a breath of change to Indonesia’s workforce. Empowering young people to achieve economic independence and global competitiveness."
         },
         mission: {
             title: "Our Mission",
             items: [
                { title: "Quality Training", desc: "Provide quality Japanese-language training combined with cultural and mental preparation.", icon: BookOpen },
                { title: "Reduce Unemployment", desc: "Reduce unemployment by opening reliable work opportunities in Japan.", icon: TrendingUp },
                { title: "Community Impact", desc: "Encourage return of skills, technology, and capital to strengthen communities in Indonesia.", icon: Users }
             ]
         }
      },
      programs: {
         label: "Our Programs",
         headline: "Choose Your Path to Japan",
         sub: "We offer structured pathways tailored to your age, skills, and career goals.",
         cards: [
           {
              icon: Users,
              title: "Internship / Ginou Jisshu",
              label: "Magang Program",
              whoFor: "Who it's for",
              whoForDesc: "Age 18–26. Minimal Japanese (N5). Ideal for fresh graduates. No prior experience needed.",
              features: "Key Features",
              featuresDesc: "3-month N5 training. Dorms provided by partners. Focused interview practice.",
              footer: "Fastest route for beginners"
           },
           {
              icon: Briefcase,
              title: "Tokutei Ginou (TG)",
              label: "Specified Skilled Worker",
              whoFor: "Who it's for",
              whoForDesc: "Age 18–33. N4 / JFT A2 required. Must pass SSW skill exams.",
              features: "Key Features",
              featuresDesc: "6-month training. Higher salary. Potential for 5–10 year visa & family support.",
              footer: "Best for long-term career"
           },
           {
              icon: FileText,
              title: "SSW Exam Track",
              label: "Exam Preparation",
              whoFor: "Who it's for",
              whoForDesc: "Candidates aiming to pass SSW technical & language exams for specific sectors.",
              features: "Key Features",
              featuresDesc: "Emphasis on exam readiness, documentation, and job matching.",
              footer: "Focused on certification"
           }
         ]
      },
      eligibility: {
         title: "Eligibility Checklist",
         sub: "Ensure you meet the basic requirements before applying.",
         items: [
            { label: "Age", value: "18–26 (Internship) or up to 33 (TG/SSW)" },
            { label: "Language", value: "Min. N5 (Intern) / N4 or JFT A2 (TG)" },
            { label: "Health", value: "Strict physical & medical checks (MCU)" },
            { label: "Skills", value: "None for Intern; Skill exam for SSW/TG" }
         ]
      },
      schedule: {
         label: "Timeline",
         title: "Batch 1 Schedule",
         desc: "Follow our clear step-by-step timeline from registration to departure. We guide you through every milestone.",
         button: "Download Brochure PDF",
         steps: [
            { title: "Registration & Pre-screening", date: "~15 Dec 2025 — 20 Dec 2025", desc: "Application intake, document check, eligibility screening, registration fee." },
            { title: "MCU & Psychotest", date: "21 Dec 2025 — 30 Dec 2025", desc: "Full medical check (local) and online psychometric test via Zoom." },
            { title: "Training Period", date: "Starts 3 Jan 2026", desc: "3 Months for Internship (N5). 6 Months for TG/SSW (N4). Daily lessons & culture." },
            { title: "Interviews & Matching", date: "Late Dec 2025 — Jan 2026 (Rolling)", desc: "Interview with Japanese employer partners during training." },
            { title: "Placement & Departure", date: "Continuous after placement", desc: "Visa processing, optional financing, pre-departure orientation, and flight." }
         ]
      },
      fees: {
         badge: "Affordable & Transparent",
         title: "Start your journey to Japan today",
         sub: "Flexible installment plans with financing options available!",
         plans: [
            { 
               title: "Magang Program", subtitle: "3-Month Training", discount: "Batch 1",
               items: [{l:"Booking (MCU)",v:"IDR 500,000"}, {l:"Month 1",v:"IDR 5,000,000"}, {l:"Month 2",v:"IDR 3,000,000"}, {l:"Month 3",v:"IDR 2,500,000"}],
               note: "Total training fee IDR 10.5M (includes 3-month dorm, uniform & study materials). MCU from other cities gets IDR 350k cashback."
            },
            {
               title: "TG / SSW Program", subtitle: "6-Month Training", discount: "Batch 1",
               items: [{l:"Booking (MCU)",v:"IDR 500,000"}, {l:"Month 1",v:"IDR 5,000,000"}, {l:"Month 2",v:"IDR 3,000,000"}, {l:"Month 3",v:"IDR 1,500,000"}],
               note: "Departure costs IDR 35-40M (visa, final MCU, tickets, etc). Financing available ± IDR 25M."
            }
         ],
         disclaimer: "After job placement, prepare ± IDR 15M for Japan paperwork. Remaining can use financing. Contact us for details."
      },
      facilities: {
         label: "Facilities & Advantages",
         title: "Why choose Harukaze?",
         items: [
            "Air-conditioned classrooms and dormitories during training",
            "Certified instructors and native speaker sessions",
            "Complete N5 / N4 modules, uniform & study materials",
            "Document translation support for Japanese documents",
            "Departure financing available ± IDR 25 million"
         ],
         highlight: "Full Support until Departure"
      },
      sectors: {
         title: "Primary Placement Industries",
         sub: "We coordinate selection across high-demand sectors in Japan.",
         items: ["Agriculture", "Restaurant", "Livestock", "Caregiving", "Food Processing", "Manufacturing"]
      },
      apply: {
         title: "How to Apply",
         steps: [
            "Fill the online application or register via QR code.",
            "Pay registration fee (IDR 500,000) to secure slot.",
            "Complete MCU (Local) & Psychotest (Zoom).",
            "Attend training & interview with partners.",
            "Finalize paperwork & depart to Japan!"
         ],
         form: {
            title: "Quick Registration",
            name: "Full Name",
            age: "Age",
            phone: "Phone / WhatsApp",
            city: "City / Province",
            prog: "Select Program Interest",
            submit: "Submit Application",
            note: "After submitting, our admissions team will contact you to verify documents."
         }
      },
      faq: {
         title: "Frequently Asked Questions",
         items: [
             { q: "What is the total cost for Magang program?", a: "Total training fee is IDR 10.5M (3-month installment). Includes 3-month dorm, LPK uniform & study materials. Departure costs IDR 35-40M, with financing available ± IDR 25M." },
             { q: "Do I need prior work experience?", a: "For Magang program — no experience needed. For TG/SSW you must pass the required skill tests." },
             { q: "What is the payment scheme?", a: "Booking fee IDR 500K (for MCU). Installments: Month 1 = IDR 5M, Month 2 = IDR 3M, Month 3 = IDR 2.5M. After job placement, prepare ± IDR 15M for paperwork." },
             { q: "Is financing available?", a: "Yes! Departure financing available ± IDR 25M for candidates who have secured job placement." },
             { q: "Where is Harukaze located?", a: "Jl. Malaka Gg. Masjid Almuctar, Kelurahan Munjul, Kecamatan Cipayung, East Jakarta 13850." }
         ]
      },
      footer: {
         ready: "Ready to start your journey?",
         desc: "Harukaze Indonesia — a breath of change for your future. Make your dream of working in Japan come true with us. Arigatou gozaimasu!",
         chat: "Chat WhatsApp",
         contact: "Contact Us",
         copy: "© 2026 Harukaze Indonesia. All rights reserved.",
         links: ["Privacy Policy", "Terms of Service"]
      }
    },
    id: {
      nav: [
        { name: 'Program', id: 'programs' },
        { name: 'Jadwal', id: 'schedule' },
        { name: 'Biaya', id: 'fees' },
        { name: 'FAQ', id: 'faq' }
      ],
      applyButton: 'Daftar Sekarang',
      mobileMenuTitle: 'Menu',
      mobileMenuDesc: "Jelajahi halaman Harukaze",
      hero: {
         headlineStart: "Angin",
         headlineMiddle: "Perubahan",
         headlineEnd: "untuk Masa Depanmu.",
         desc: "Pelatihan bahasa Jepang intensif, pembekalan budaya, dan pendampingan penuh hingga bekerja di Jepang. Wujudkan impianmu bersama kami!",
         cta: "Lihat Program",
         placementTitle: "Peluang Kerja di Bidang:",
         placements: ["Pertanian", "Restoran", "Peternakan", "Keperawatan", "Pengolahan Makanan", "Manufaktur"]
      },
      about: {
         label: "Tentang Kami",
         headlinePrefix: "Membawa angin perubahan bagi",
         headlineHighlight: "generasi muda Indonesia",
         imageQuote: "\"Memberdayakan pemuda Indonesia untuk bersaing di kancah global.\"",
         tabs: { vision: "Visi", mission: "Misi" },
         vision: {
             title: "Visi Kami",
             text: "Menjadi lembaga pelatihan terpercaya yang membawa angin perubahan bagi tenaga kerja Indonesia. Memberdayakan generasi muda untuk meraih kemandirian ekonomi dan daya saing global."
         },
         mission: {
             title: "Misi Kami",
             items: [
                { title: "Pelatihan Berkualitas", desc: "Memberikan pelatihan bahasa Jepang berkualitas tinggi yang dipadukan dengan pembekalan budaya dan mental.", icon: BookOpen },
                { title: "Kurangi Pengangguran", desc: "Membuka peluang kerja terpercaya di Jepang untuk mengurangi angka pengangguran.", icon: TrendingUp },
                { title: "Dampak Positif", desc: "Mendorong transfer keterampilan, teknologi, dan modal untuk membangun komunitas di Indonesia.", icon: Users }
             ]
         }
      },
      programs: {
         label: "Program Kami",
         headline: "Pilih Jalurmu ke Jepang",
         sub: "Kami menyediakan program terstruktur yang disesuaikan dengan usia, kemampuan, dan tujuan karirmu.",
         cards: [
           {
              icon: Users,
              title: "Program Magang / Ginou Jisshu",
              label: "Program Magang",
              whoFor: "Cocok Untuk",
              whoForDesc: "Usia 18–26 tahun. Minimal N5. Cocok untuk fresh graduate. Tanpa pengalaman kerja.",
              features: "Keunggulan",
              featuresDesc: "Pelatihan 3 bulan (N5). Asrama gratis selama pelatihan. Baju LPK & buku panduan.",
              footer: "Jalur tercepat untuk pemula"
           },
           {
              icon: Briefcase,
              title: "Tokutei Ginou (TG)",
              label: "Pekerja Terampil Khusus",
              whoFor: "Cocok Untuk",
              whoForDesc: "Usia 18–33 tahun. Wajib N4 / JFT A2. Harus lulus ujian keterampilan SSW.",
              features: "Keunggulan",
              featuresDesc: "Pelatihan 6 bulan. Gaji lebih tinggi. Potensi visa 5–10 tahun & bisa membawa keluarga.",
              footer: "Pilihan terbaik untuk karir jangka panjang"
           },
           {
              icon: FileText,
              title: "Jalur Ujian SSW",
              label: "Persiapan Ujian",
              whoFor: "Cocok Untuk",
              whoForDesc: "Kandidat yang ingin lulus ujian teknis & bahasa SSW untuk sektor tertentu.",
              features: "Keunggulan",
              featuresDesc: "Fokus persiapan ujian, pendampingan dokumen, dan penempatan kerja.",
              footer: "Fokus pada sertifikasi"
           }
         ]
      },
      eligibility: {
         title: "Syarat Pendaftaran",
         sub: "Pastikan kamu memenuhi persyaratan dasar sebelum mendaftar.",
         items: [
            { label: "Usia", value: "18–26 tahun (Magang) atau hingga 33 tahun (TG/SSW)" },
            { label: "Bahasa", value: "Minimal N5 (Magang) / N4 atau JFT A2 (TG)" },
            { label: "Kesehatan", value: "Lolos pemeriksaan kesehatan (MCU)" },
            { label: "Keahlian", value: "Tidak diperlukan untuk Magang; Ujian skill untuk SSW/TG" }
         ]
      },
      schedule: {
         label: "Timeline",
         title: "Jadwal Batch 1",
         desc: "Ikuti tahapan yang jelas dari pendaftaran hingga keberangkatan. Kami mendampingimu di setiap langkah.",
         button: "Unduh Brosur PDF",
         steps: [
            { title: "Pendaftaran & Seleksi Awal", date: "~15 Des 2025 — 20 Des 2025", desc: "Pengisian formulir, pengecekan dokumen, seleksi kelayakan, dan pembayaran booking." },
            { title: "MCU & Psikotes", date: "21 Des 2025 — 30 Des 2025", desc: "Pemeriksaan kesehatan lengkap dan psikotes online via Zoom." },
            { title: "Periode Pelatihan", date: "Mulai 3 Jan 2026", desc: "3 bulan untuk Magang (N5). 6 bulan untuk TG/SSW (N4). Pembelajaran harian & budaya Jepang." },
            { title: "Wawancara & Penempatan", date: "Selama Pelatihan", desc: "Wawancara dengan perusahaan mitra Jepang selama masa pelatihan." },
            { title: "Keberangkatan ke Jepang", date: "Setelah penempatan", desc: "Pengurusan visa, MCU akhir, orientasi pra-keberangkatan, dan penerbangan." }
         ]
      },
      fees: {
         badge: "Transparan & Terjangkau",
         title: "Mulai perjalananmu ke Jepang sekarang",
         sub: "Skema pembayaran fleksibel dengan cicilan ringan. Dana talang tersedia!",
         plans: [
            { 
               title: "Program Magang", subtitle: "Pelatihan 3 Bulan", discount: "Batch 1",
               items: [{l:"Booking Awal (MCU)",v:"Rp 500.000"}, {l:"Bulan 1",v:"Rp 5.000.000"}, {l:"Bulan 2",v:"Rp 3.000.000"}, {l:"Bulan 3",v:"Rp 2.500.000"}],
               note: "Total biaya pendidikan Rp 10.500.000 (sudah termasuk asrama 3 bulan, baju LPK & buku panduan). MCU dari daerah dapat cashback Rp 350.000."
            },
            {
               title: "Program TG / SSW", subtitle: "Pelatihan 6 Bulan", discount: "Batch 1",
               items: [{l:"Booking Awal (MCU)",v:"Rp 500.000"}, {l:"Bulan 1",v:"Rp 5.000.000"}, {l:"Bulan 2",v:"Rp 3.000.000"}, {l:"Bulan 3",v:"Rp 1.500.000"}],
               note: "Biaya keberangkatan Rp 35-40 juta (visa, MCU akhir, tiket, dll). Dana talang tersedia ± Rp 25 juta."
            }
         ],
         disclaimer: "Setelah dapat job, siapkan ± Rp 15 juta untuk pemberkasan ke Jepang. Sisanya bisa pakai dana talang. Hubungi admin untuk info lengkap."
      },
      facilities: {
         label: "Fasilitas & Keunggulan",
         title: "Kenapa pilih Harukaze?",
         items: [
            "Ruang kelas dan asrama ber-AC selama pelatihan",
            "Instruktur bersertifikat dan sesi bersama native speaker",
            "Modul N5 / N4 lengkap, baju LPK & buku panduan",
            "Bantuan penerjemahan dokumen ke bahasa Jepang",
            "Dana talang keberangkatan tersedia ± Rp 25 juta"
         ],
         highlight: "Pendampingan Penuh Sampai Berangkat"
      },
      sectors: {
         title: "Bidang Penempatan Kerja",
         sub: "Kami bekerja sama dengan berbagai sektor industri di Jepang.",
         items: ["Pertanian", "Restoran", "Peternakan", "Keperawatan", "Pengolahan Makanan", "Manufaktur"]
      },
      apply: {
         title: "Cara Mendaftar",
         steps: [
            "Isi formulir pendaftaran online atau daftar via QR code.",
            "Bayar biaya booking Rp 500.000 untuk mengamankan slot.",
            "Ikuti MCU dan Psikotes (online via Zoom).",
            "Jalani pelatihan 3 bulan & wawancara dengan perusahaan Jepang.",
            "Lengkapi dokumen & berangkat ke Jepang!"
         ],
         form: {
            title: "Form Pendaftaran",
            name: "Nama Lengkap",
            age: "Usia",
            phone: "No. WhatsApp",
            city: "Kota / Provinsi",
            prog: "Pilih Program",
            submit: "Kirim Pendaftaran",
            note: "Setelah mengirim, tim kami akan menghubungimu untuk verifikasi data."
         }
      },
      faq: {
         title: "Pertanyaan yang Sering Ditanyakan",
         items: [
             { q: "Berapa total biaya untuk program Magang?", a: "Total biaya pendidikan Rp 10.500.000 (dicicil 3 bulan). Sudah termasuk asrama 3 bulan, baju LPK & buku panduan. Biaya keberangkatan Rp 35-40 juta, dengan dana talang tersedia ± Rp 25 juta." },
             { q: "Apakah butuh pengalaman kerja?", a: "Untuk program Magang tidak perlu pengalaman kerja. Untuk TG/SSW harus lulus ujian keterampilan sesuai bidang." },
             { q: "Bagaimana skema pembayarannya?", a: "Booking awal Rp 500.000 (untuk MCU). Cicilan: Bulan 1 = Rp 5 juta, Bulan 2 = Rp 3 juta, Bulan 3 = Rp 2,5 juta. Setelah dapat job, siapkan ± Rp 15 juta untuk pemberkasan." },
             { q: "Apakah ada dana talang?", a: "Ya! Dana talang keberangkatan tersedia ± Rp 25 juta untuk kandidat yang sudah mendapat penempatan kerja." },
             { q: "Dimana lokasi Harukaze?", a: "Jl. Malaka Gg. Masjid Almuctar, Kelurahan Munjul, Kecamatan Cipayung, Jakarta Timur 13850." }
         ]
      },
      footer: {
         ready: "Siap memulai perjalananmu?",
         desc: "Harukaze Indonesia — angin perubahan untuk masa depanmu. Wujudkan impian bekerja di Jepang bersama kami. Arigatou gozaimasu!",
         chat: "Chat WhatsApp",
         contact: "Hubungi Kami",
         copy: "© 2026 Harukaze Indonesia. Semua hak dilindungi.",
         links: ["Kebijakan Privasi", "Syarat & Ketentuan"]
      }
    },
    ja: {
      nav: [
        { name: 'プログラム', id: 'programs' },
        { name: 'スケジュール', id: 'schedule' },
        { name: '費用', id: 'fees' },
        { name: 'よくある質問', id: 'faq' }
      ],
      applyButton: '今すぐ申し込む',
      mobileMenuTitle: 'メニュー',
      mobileMenuDesc: "Harukazeのページをご覧ください",
      hero: {
         headlineStart: "未来を変える",
         headlineMiddle: "新しい風",
         headlineEnd: "ここから始まる。",
         desc: "日本語の集中トレーニング、文化研修、そして就職までの完全サポート。私たちと一緒に日本での夢を実現しましょう！",
         cta: "プログラムを見る",
         placementTitle: "就職先の業種：",
         placements: ["農業", "飲食業", "畜産業", "介護", "食品加工", "製造業"]
      },
      about: {
         label: "私たちについて",
         headlinePrefix: "インドネシアの若者に",
         headlineHighlight: "新しい可能性を",
         imageQuote: "「若者がグローバルに活躍できる力を育みます。」",
         tabs: { vision: "ビジョン", mission: "ミッション" },
         vision: {
             title: "私たちのビジョン",
             text: "インドネシアの労働力に新しい風を届ける、信頼される研修機関を目指します。若者が経済的自立とグローバルな競争力を獲得できるよう支援します。"
         },
         mission: {
             title: "私たちのミッション",
             items: [
                { title: "質の高い研修", desc: "文化・メンタル面の準備を含めた質の高い日本語研修を提供します。", icon: BookOpen },
                { title: "失業率の削減", desc: "日本での信頼できる就業機会を通じて失業問題に取り組みます。", icon: TrendingUp },
                { title: "コミュニティへの貢献", desc: "スキル・技術・資本の還元を通じてインドネシアのコミュニティを強化します。", icon: Users }
             ]
         }
      },
      programs: {
         label: "プログラム紹介",
         headline: "日本への道を選ぼう",
         sub: "年齢、スキル、キャリア目標に合わせた体系的なプログラムをご用意しています。",
         cards: [
           {
              icon: Users,
              title: "技能実習プログラム",
              label: "技能実習生",
              whoFor: "対象者",
              whoForDesc: "18〜26歳。N5レベル以上。新卒者歓迎。職務経験不要。",
              features: "特徴",
              featuresDesc: "3ヶ月のN5研修。寮完備。面接対策付き。制服・教材支給。",
              footer: "初心者に最適なルート"
           },
           {
              icon: Briefcase,
              title: "特定技能（TG）",
              label: "特定技能労働者",
              whoFor: "対象者",
              whoForDesc: "18〜33歳。N4 / JFT A2必須。特定技能試験合格者。",
              features: "特徴",
              featuresDesc: "6ヶ月研修。より高い給与。5〜10年ビザ取得可能。家族帯同可。",
              footer: "長期キャリアに最適"
           },
           {
              icon: FileText,
              title: "SSW試験対策コース",
              label: "試験準備",
              whoFor: "対象者",
              whoForDesc: "特定分野のSSW技術・語学試験合格を目指す方。",
              features: "特徴",
              featuresDesc: "試験対策重視。書類サポート。就職マッチング。",
              footer: "資格取得に集中"
           }
         ]
      },
      eligibility: {
         title: "応募資格",
         sub: "申し込み前に基本要件を確認してください。",
         items: [
            { label: "年齢", value: "18〜26歳（技能実習）または33歳まで（TG/SSW）" },
            { label: "語学力", value: "N5以上（技能実習）/ N4またはJFT A2（TG）" },
            { label: "健康状態", value: "健康診断（MCU）合格必須" },
            { label: "スキル", value: "技能実習は不要、SSW/TGは技能試験必須" }
         ]
      },
      schedule: {
         label: "スケジュール",
         title: "第1期生スケジュール",
         desc: "登録から出発までの明確なステップをご案内します。すべての段階でサポートいたします。",
         button: "パンフレットをダウンロード",
         steps: [
            { title: "登録・事前審査", date: "2025年12月15日〜20日頃", desc: "申込受付、書類確認、適格審査、予約金支払い。" },
            { title: "健康診断・適性検査", date: "2025年12月21日〜30日", desc: "総合健康診断とZoomによるオンライン適性検査。" },
            { title: "研修期間", date: "2026年1月3日開始", desc: "技能実習3ヶ月（N5）。TG/SSW 6ヶ月（N4）。日本語・文化学習。" },
            { title: "面接・マッチング", date: "研修期間中", desc: "研修中に日本企業パートナーとの面接を実施。" },
            { title: "日本への出発", date: "内定後", desc: "ビザ申請、最終健康診断、出発前オリエンテーション、渡航。" }
         ]
      },
      fees: {
         badge: "明確で安心な料金体系",
         title: "日本への第一歩を踏み出そう",
         sub: "分割払い対応。渡航費用の立替制度あり！",
         plans: [
            { 
               title: "技能実習プログラム", subtitle: "3ヶ月研修", discount: "第1期",
               items: [{l:"予約金（MCU）",v:"Rp 500,000"}, {l:"1ヶ月目",v:"Rp 5,000,000"}, {l:"2ヶ月目",v:"Rp 3,000,000"}, {l:"3ヶ月目",v:"Rp 2,500,000"}],
               note: "研修費用合計Rp 10,500,000（3ヶ月寮費、制服、教材込み）。地方からのMCUはRp 350,000キャッシュバック。"
            },
            {
               title: "TG / SSWプログラム", subtitle: "6ヶ月研修", discount: "第1期",
               items: [{l:"予約金（MCU）",v:"Rp 500,000"}, {l:"1ヶ月目",v:"Rp 5,000,000"}, {l:"2ヶ月目",v:"Rp 3,000,000"}, {l:"3ヶ月目",v:"Rp 1,500,000"}],
               note: "渡航費用Rp 35〜40百万（ビザ、最終MCU、航空券等）。約Rp 25百万の立替制度あり。"
            }
         ],
         disclaimer: "内定後、日本への手続き費用として約Rp 15百万をご準備ください。残額は立替制度利用可能。詳細はお問い合わせください。"
      },
      facilities: {
         label: "施設・サポート",
         title: "Harukazeを選ぶ理由",
         items: [
            "研修期間中はエアコン完備の教室と寮を提供",
            "資格を持つ講師とネイティブスピーカーによる授業",
            "N5 / N4教材、制服、学習資料を完備",
            "日本語書類の翻訳サポート",
            "渡航費用の立替制度（約Rp 25百万）"
         ],
         highlight: "出発までフルサポート"
      },
      sectors: {
         title: "主な就職先業種",
         sub: "日本の需要の高い業種への就職をコーディネートします。",
         items: ["農業", "飲食業", "畜産業", "介護", "食品加工", "製造業"]
      },
      apply: {
         title: "申し込み方法",
         steps: [
            "オンラインフォームまたはQRコードから登録。",
            "予約金Rp 500,000を支払い、枠を確保。",
            "健康診断と適性検査（Zoomオンライン）を受ける。",
            "3ヶ月の研修と日本企業との面接に参加。",
            "書類を完成させ、日本へ出発！"
         ],
         form: {
            title: "簡単登録フォーム",
            name: "氏名",
            age: "年齢",
            phone: "電話番号 / WhatsApp",
            city: "都市 / 地域",
            prog: "希望プログラムを選択",
            submit: "申し込む",
            note: "送信後、担当者より書類確認のご連絡をいたします。"
         }
      },
      faq: {
         title: "よくある質問",
         items: [
             { q: "技能実習プログラムの総費用はいくらですか？", a: "研修費用合計Rp 10,500,000（3ヶ月分割払い）。3ヶ月寮費、LPK制服、教材込み。渡航費用Rp 35〜40百万、約Rp 25百万の立替制度あり。" },
             { q: "職務経験は必要ですか？", a: "技能実習プログラムは経験不要です。TG/SSWは分野別の技能試験合格が必要です。" },
             { q: "支払い方法は？", a: "予約金Rp 500,000（MCU用）。分割：1ヶ月目Rp 5百万、2ヶ月目Rp 3百万、3ヶ月目Rp 2.5百万。内定後、手続き費用として約Rp 15百万が必要。" },
             { q: "立替制度はありますか？", a: "はい！内定者には渡航費用の立替制度（約Rp 25百万）をご利用いただけます。" },
             { q: "Harukazeの所在地は？", a: "Jl. Malaka Gg. Masjid Almuctar, Kelurahan Munjul, Kecamatan Cipayung, 東ジャカルタ 13850" }
         ]
      },
      footer: {
         ready: "日本への一歩を踏み出しませんか？",
         desc: "Harukaze Indonesia — あなたの未来に新しい風を届けます。私たちと一緒に日本で働く夢を実現しましょう。ありがとうございます！",
         chat: "WhatsAppで相談",
         contact: "お問い合わせ",
         copy: "© 2026 Harukaze Indonesia. All rights reserved.",
         links: ["プライバシーポリシー", "利用規約"]
      }
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const c = content[lang];

  const placementItems = [
      { i: Wheat, t: c.hero.placements[0] },
      { i: Utensils, t: c.hero.placements[1] },
      { i: Leaf, t: c.hero.placements[2] },
      { i: HeartHandshake, t: c.hero.placements[3] },
      { i: ChefHat, t: c.hero.placements[4] },
      { i: Factory, t: c.hero.placements[5] },
  ];
  
  // Tripling the list to ensure smooth infinite scrolling on wide screens
  const carouselItems = [...placementItems, ...placementItems, ...placementItems];

  const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 15000, // Slower for smoother readability
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      variableWidth: true,
      arrows: false,
      pauseOnHover: true,
      draggable: true,
      swipeToSlide: true,
      touchThreshold: 10
  };

  return (
    <div className="bg-white min-h-screen w-full overflow-x-hidden font-['Rethink_Sans',sans-serif] text-slate-900 selection:bg-[#00A2FF] selection:text-white">
      <style>{`
        html, body {
            overflow-x: hidden;
        }
        ${slickCss}
      `}</style>
      {/* Header - Transparent to Glass Transition */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled 
            ? "bg-white/80 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm" 
            : "bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 h-12 flex items-center justify-between">
          <motion.div 
            className="h-10 md:h-12 cursor-pointer flex-shrink-0" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logoImage} alt="Harukaze Indonesia" className="h-full w-auto object-contain" />
          </motion.div>
          
          <div className="flex items-center gap-4 lg:gap-8">
            <nav className="hidden lg:flex items-center gap-8">
               {c.nav.map((item) => (
                 <button 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  className="text-slate-600 hover:text-[#00A2FF] font-medium text-sm transition-colors duration-200"
                 >
                    {item.name}
                 </button>
               ))}
            </nav>

            {/* Language Switcher Desktop */}
            <div className="hidden lg:flex items-center bg-slate-100 rounded-full p-1 relative">
                <div 
                  className="absolute inset-y-1 bg-white rounded-full shadow-sm transition-all duration-300"
                  style={{ 
                    left: lang === 'en' ? '4px' : lang === 'id' ? 'calc(33.33% + 2px)' : 'calc(66.66% + 2px)', 
                    width: 'calc(33.33% - 4px)' 
                  }}
                />
                <button 
                  onClick={() => setLang('en')}
                  className={`relative z-10 px-3 py-1 text-xs font-bold transition-colors ${lang === 'en' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLang('id')}
                  className={`relative z-10 px-3 py-1 text-xs font-bold transition-colors ${lang === 'id' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  ID
                </button>
                <button 
                  onClick={() => setLang('ja')}
                  className={`relative z-10 px-3 py-1 text-xs font-bold transition-colors ${lang === 'ja' ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  JA
                </button>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden lg:block">
              <Button 
                className="bg-[#00A2FF] text-white rounded-full px-5 py-2 h-auto text-sm font-medium shadow-[0_4px_14px_0_rgba(0,162,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,162,255,0.23)] hover:bg-[#0095eb] transition-all"
                onClick={() => scrollToSection('apply')}
              >
                {c.applyButton}
              </Button>
            </motion.div>

            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden relative group p-2">
                  <div className="absolute inset-0 bg-blue-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <Menu className="w-7 h-7 text-slate-700 relative z-10 group-hover:text-[#00A2FF] transition-colors" />
                </button>
              </SheetTrigger>
              <SheetContent className="w-[320px] bg-white/95 backdrop-blur-3xl border-none shadow-[0_0_80px_rgba(0,162,255,0.1)] p-0 [&>button]:hidden">
                <div className="relative flex flex-col h-full pt-24 px-8">
                   <SheetTitle className="sr-only">{c.mobileMenuTitle}</SheetTitle>
                   <SheetDescription className="sr-only">
                        {c.mobileMenuDesc}
                   </SheetDescription>

                   {/* Language Switcher Mobile */}
                   <div className="flex items-center gap-3 mb-10">
                      <button 
                        onClick={() => setLang('en')}
                        className={`text-sm font-bold tracking-wide transition-colors ${lang === 'en' ? 'text-[#00A2FF]' : 'text-slate-400'}`}
                      >
                        English
                      </button>
                      <span className="text-slate-300">/</span>
                      <button 
                        onClick={() => setLang('id')}
                        className={`text-sm font-bold tracking-wide transition-colors ${lang === 'id' ? 'text-[#00A2FF]' : 'text-slate-400'}`}
                      >
                        Indonesia
                      </button>
                      <span className="text-slate-300">/</span>
                      <button 
                        onClick={() => setLang('ja')}
                        className={`text-sm font-bold tracking-wide transition-colors ${lang === 'ja' ? 'text-[#00A2FF]' : 'text-slate-400'}`}
                      >
                        日本語
                      </button>
                   </div>

                  {/* Menu Items List - Premium & Clean */}
                  <div className="flex flex-col space-y-6">
                      {c.nav.map((item) => (
                        <SheetClose key={item.id} asChild>
                          <button 
                            onClick={() => scrollToSection(item.id)}
                            className="group flex items-center justify-between py-2 text-left"
                          >
                            <span className="text-3xl font-light text-slate-800 group-hover:text-[#00A2FF] transition-colors tracking-tight">
                              {item.name}
                            </span>
                            <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#00A2FF]">
                               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                               </svg>
                            </span>
                          </button>
                        </SheetClose>
                      ))}

                      {/* Apply Now - Standalone Highlight */}
                      <SheetClose asChild>
                          <button 
                            onClick={() => scrollToSection('apply')}
                            className="mt-4 inline-flex items-center text-3xl font-semibold text-[#00A2FF] hover:text-[#008bd9] transition-colors tracking-tight text-left"
                          >
                            {c.applyButton}
                          </button>
                      </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-12" style={{ backgroundColor: '#a3d7ff' }}>
           {/* Subtle Grain Texture Background */}
           <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

           {/* Glowing Orbs Background */}
           <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
               {/* Main Blue Orb */}
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1 }}
                 className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] rounded-full bg-blue-100/50 blur-[60px] will-change-transform"
               />
               
               {/* Secondary Soft Orb */}
               <div 
                  className="absolute top-[20%] -right-[15%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-purple-100/50 blur-[60px]"
               />

               {/* Small Accent Orb */}
               <div 
                  className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full bg-cyan-100/50 blur-[50px]"
               />
           </div>

           {/* Bottom Gradient Blend to next section */}
           <div 
              className="absolute bottom-0 left-0 right-0 h-48 md:h-64 lg:h-80 pointer-events-none z-[5]"
              style={{ 
                background: 'linear-gradient(to bottom, rgba(189, 226, 255, 0) 0%, rgba(189, 226, 255, 0.2) 30%, rgba(189, 226, 255, 0.5) 60%, rgba(189, 226, 255, 0.8) 85%, #bde2ff 100%)'
              }}
           />

           <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col h-full justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                 
                 {/* Left Column: Massive Headline */}
                 <div className="lg:col-span-7">
                    <motion.h1 
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-bold tracking-tight text-slate-900"
                    >
                       {c.hero.headlineStart}<br/> {c.hero.headlineMiddle} <br/>
                       <span className="text-[#00A2FF]">{c.hero.headlineEnd}</span>
                    </motion.h1>
                 </div>

                 {/* Right Column: Content & Actions */}
                 <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-4">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <p className="text-xl md:text-2xl text-slate-600 font-normal leading-relaxed mb-10 max-w-md">
                           {c.hero.desc}
                        </p>

                        <div className="flex items-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('programs')}
                                className="relative w-20 h-20 rounded-full flex items-center justify-center focus:outline-none group"
                            >
                                <motion.div 
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                    className="absolute inset-0 rounded-full border border-[#6AC9FF]/40" 
                                />
                                <motion.div 
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                                    className="absolute inset-[6px] rounded-full border border-[#6AC9FF]/60" 
                                />
                                <motion.div 
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                                    className="absolute inset-[12px] rounded-full border border-[#6AC9FF]/80" 
                                />
                                
                                <div className="absolute inset-[18px] rounded-full bg-[#6AC9FF] flex items-center justify-center shadow-lg shadow-blue-100 transition-all duration-300 group-hover:bg-[#5bb8ee]">
                                    <ArrowRight className="w-6 h-6 text-black" strokeWidth={2} />
                                </div>
                            </motion.button>
                            
                            <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
                                {c.hero.cta}
                            </span>
                        </div>
                    </motion.div>
                 </div>
              </div>

              {/* Bottom Section: Trust Indicators */}
              <motion.div 
                className="mt-24 lg:mt-32 pt-8 w-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                  <p className="text-sm text-slate-400 font-medium mb-6 uppercase tracking-wider">{c.hero.placementTitle}</p>
                  
                  {/* Slider Container */}
                  <div className="w-full relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] cursor-grab active:cursor-grabbing select-none">
                     <Slider {...sliderSettings} className="opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {carouselItems.map((item, idx) => (
                           <div key={idx} className="px-8 md:px-12 outline-none">
                              <div className="flex items-center gap-3 group">
                                 <item.i className="w-8 h-8 text-slate-800 group-hover:text-[#00A2FF] transition-colors" />
                                 <span className="text-xl font-bold text-slate-800 group-hover:text-[#00A2FF] transition-colors whitespace-nowrap">{item.t}</span>
                              </div>
                           </div>
                        ))}
                     </Slider>
                  </div>
              </motion.div>
           </div>
        </section>

        {/* 2. About (Vision & Mission) */}
        <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#bde2ff' }}>
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 -right-64 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60" />
                <div className="absolute -bottom-32 -left-64 w-[600px] h-[600px] bg-purple-50/50 rounded-full blur-3xl opacity-60" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    
                    {/* Left Column: Sticky Image */}
                    <motion.div 
                        className="lg:w-5/12 lg:sticky lg:top-32"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative group">
                            <div className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-white">
                                <img 
                                    loading="lazy"
                                    src={IMG_CLASSROOM} 
                                    alt="Japanese Classroom" 
                                    className="w-full aspect-[3/4] md:aspect-[4/5] object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out" 
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
                                    <div className="border-l-4 border-[#00A2FF] pl-6">
                                       <p className="text-white text-lg font-medium italic">{c.about.imageQuote}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Content */}
                    <div className="lg:w-7/12 pt-8">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-slate-900 leading-[1.15] tracking-tight">
                                {c.about.headlinePrefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A2FF] to-blue-600">{c.about.headlineHighlight}</span>
                            </motion.h2>

                            {/* Desktop: Tabbed View */}
                            <div className="hidden lg:block">
                                <motion.div variants={fadeInUp} className="mb-8">
                                  <div className="bg-slate-100/80 p-1.5 rounded-full inline-flex relative">
                                    <div 
                                      className="absolute inset-y-1.5 rounded-full bg-white shadow-sm transition-all duration-300 ease-out"
                                      style={{
                                        left: activeTab === 'vision' ? '6px' : '50%',
                                        width: 'calc(50% - 6px)',
                                      }}
                                    />
                                    <button
                                      onClick={() => setActiveTab('vision')}
                                      className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 w-32 ${activeTab === 'vision' ? 'text-[#00A2FF]' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                      {c.about.tabs.vision}
                                    </button>
                                    <button
                                      onClick={() => setActiveTab('mission')}
                                      className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-bold transition-colors duration-300 w-32 ${activeTab === 'mission' ? 'text-[#00A2FF]' : 'text-slate-500 hover:text-slate-700'}`}
                                    >
                                      {c.about.tabs.mission}
                                    </button>
                                  </div>
                                </motion.div>

                                <div className="min-h-[300px] relative">
                                  <AnimatePresence mode="wait">
                                    {activeTab === 'vision' ? (
                                      <motion.div
                                        key="vision"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white p-8 rounded-3xl border border-blue-100/50 shadow-sm relative overflow-hidden"
                                      >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -mr-10 -mt-10" />
                                        <h3 className="text-lg font-bold text-[#00A2FF] mb-4 flex items-center gap-2 relative z-10">
                                            <Eye className="w-5 h-5" /> {c.about.vision.title}
                                        </h3>
                                        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium relative z-10">
                                            {c.about.vision.text}
                                        </p>
                                      </motion.div>
                                    ) : (
                                      <motion.div
                                        key="mission"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                      >
                                        <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                            <Target className="w-5 h-5" /> {c.about.mission.title}
                                        </h3>
                                        <div className="grid gap-4">
                                            {c.about.mission.items.map((item, i) => (
                                                <motion.div 
                                                    key={i}
                                                    className="group flex gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: i * 0.1 }}
                                                >
                                                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00A2FF] flex items-center justify-center shrink-0 group-hover:bg-[#00A2FF] group-hover:text-white transition-colors">
                                                        <item.icon className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                            </div>

                            {/* Mobile/Tablet: Stacked View */}
                            <div className="block lg:hidden">
                                <motion.div variants={fadeInUp} className="mb-12 relative">
                                     <div className="bg-white p-8 rounded-3xl border border-blue-100/50 shadow-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl -mr-10 -mt-10" />
                                        
                                        <h3 className="text-lg font-bold text-[#00A2FF] mb-4 flex items-center gap-2 relative z-10">
                                            <Eye className="w-5 h-5" /> {c.about.vision.title}
                                        </h3>
                                        <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium relative z-10">
                                            {c.about.vision.text}
                                        </p>
                                     </div>
                                </motion.div>

                                <motion.div variants={fadeInUp}>
                                    <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                                        <Target className="w-5 h-5" /> {c.about.mission.title}
                                    </h3>
                                    
                                    <div className="grid gap-4">
                                         {c.about.mission.items.map((item, i) => (
                                            <motion.div 
                                                key={i}
                                                className="group flex gap-6 p-6 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300"
                                                whileHover={{ x: 5 }}
                                            >
                                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00A2FF] flex items-center justify-center shrink-0 group-hover:bg-[#00A2FF] group-hover:text-white transition-colors">
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                                                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                         ))}
                                    </div>
                                </motion.div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>
        </section>

        {/* 3. Programs */}
        <section id="programs" className="py-20 md:py-32 relative" style={{ backgroundColor: '#a1d6ff' }}>
           <div className="absolute inset-0 opacity-[0.15]" 
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237cb7e5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
           />

           <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                className="text-center max-w-3xl mx-auto mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">{c.programs.headline}</h2>
                 <p className="text-lg text-slate-600">
                    {c.programs.sub}
                 </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 {c.programs.cards.map((card, i) => (
                    <motion.div 
                      key={i}
                      className={`${i === 1 ? 'bg-slate-900 text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden' : 'bg-white shadow-lg shadow-slate-200/50 border border-slate-100'} rounded-[30px] p-8 flex flex-col h-full`}
                      variants={scaleOnHover}
                      whileHover="hover"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                       {i === 1 && (
                         <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
                            <Briefcase className="w-40 h-40" />
                         </div>
                       )}
                       
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${i === 1 ? 'bg-white/10 text-white backdrop-blur-sm' : (i === 2 ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-[#00A2FF]')}`}>
                          <card.icon className="w-7 h-7" />
                       </div>
                       <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                       <SectionLabel theme={i === 1 ? 'dark' : (i === 2 ? 'purple' : 'blue')} className="self-start">{card.label}</SectionLabel>
                       
                       <div className="space-y-6 flex-1 relative z-10">
                          <div>
                             <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${i === 1 ? 'text-blue-400' : 'text-slate-400'}`}>{card.whoFor}</p>
                             <p className={`${i === 1 ? 'text-slate-200' : 'text-slate-700'} font-medium`}>{card.whoForDesc}</p>
                          </div>
                          <div>
                             <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${i === 1 ? 'text-blue-400' : 'text-slate-400'}`}>{card.features}</p>
                             <p className={`${i === 1 ? 'text-slate-300' : 'text-slate-600'}`}>{card.featuresDesc}</p>
                          </div>
                       </div>
                       <div className={`mt-8 pt-6 border-t ${i === 1 ? 'border-white/10' : 'border-slate-100'} relative z-10`}>
                          <p className={`text-sm font-semibold flex items-center gap-2 ${i === 1 ? 'text-blue-200' : 'text-slate-500'}`}>
                            <Check className={`w-4 h-4 ${i === 1 ? '' : 'text-green-500'}`} /> {card.footer}
                          </p>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* 4. Eligibility & Requirements */}
        <section className="py-20 md:py-32" style={{ backgroundColor: '#bde2ff' }}>
          <div className="container mx-auto px-4 md:px-8">
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
               <div className="bg-[#eff8ff] rounded-[40px] p-8 md:p-16 border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/4" />
                  
                  <div className="text-center mb-12 relative z-10">
                     <h2 className="text-3xl md:text-4xl font-bold mb-4">{c.eligibility.title}</h2>
                     <p className="text-slate-600">{c.eligibility.sub}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                     {c.eligibility.items.map((req, i) => (
                        <motion.div 
                          key={i} 
                          className="bg-white rounded-2xl p-6 flex items-start gap-4 shadow-sm border border-blue-50/50 hover:shadow-md transition-shadow"
                          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A2FF] to-blue-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-blue-200">
                              <Check className="w-5 h-5" />
                           </div>
                           <div>
                              <h4 className="font-bold text-lg mb-1 text-slate-800">{req.label}</h4>
                              <p className="text-slate-600 text-sm leading-relaxed">{req.value}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* 5. Schedule */}
        <section id="schedule" className="py-20 md:py-32" style={{ backgroundColor: '#bde2ff' }}>
           <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row gap-16">
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-4xl font-bold mb-6 text-slate-900">{c.schedule.title}</h2>
                 <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {c.schedule.desc}
                 </p>
                 <Button 
                    asChild
                    className="w-full md:w-auto rounded-full bg-slate-900 text-white hover:bg-slate-800 h-12 shadow-lg hover:shadow-xl transition-all"
                 >
                    <a href={import.meta.env.BASE_URL + "harukaze-brochure.pdf"} download="Harukaze-Brochure.pdf">
                       <Calendar className="w-4 h-4 mr-2" />
                       {c.schedule.button}
                    </a>
                 </Button>
              </motion.div>
              
              <div className="md:w-2/3">
                 <div className="space-y-12 relative">
                    <motion.div 
                      className="absolute left-5 top-2 bottom-2 w-0.5 -translate-x-1/2"
                      style={{ 
                        background: 'linear-gradient(to bottom, #00a4ff 0%, #00a4ff 50%, transparent 100%)'
                      }}
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    
                    {c.schedule.steps.map((step, i) => (
                       <motion.div 
                         key={i} 
                         className="relative pl-14"
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.15 }}
                       >
                          <motion.div 
                            className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border-4 border-[#00A2FF] flex items-center justify-center z-10 shadow-md"
                            whileHover={{ scale: 1.2, borderColor: "#008ce6" }}
                          >
                             <span className="font-bold text-xs text-slate-900">{i+1}</span>
                          </motion.div>
                          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                             <span className="inline-block px-3 py-1 bg-blue-50 text-[#00A2FF] text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                                {step.date}
                             </span>
                             <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                             <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
           </div>
        </section>

        {/* 6. Fees & Plans */}
        <section id="fees" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00A2FF] rounded-full opacity-10 blur-3xl -translate-y-1/2 translate-x-1/4" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600 rounded-full opacity-10 blur-3xl translate-y-1/2 -translate-x-1/2" />
           </div>

           <div className="container mx-auto px-4 md:px-8 relative z-10">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                 <div className="bg-white/10 backdrop-blur-md inline-flex items-center justify-center px-4 py-2 rounded-full mb-6 border border-white/10">
                    <span className="font-medium text-blue-300 text-sm tracking-tight">{c.fees.badge}</span>
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.fees.title}</h2>
                 <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                    {c.fees.sub}
                 </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                 {c.fees.plans.map((plan, i) => (
                    <motion.div 
                       key={i}
                       className={`${i === 1 ? 'bg-gradient-to-br from-[#00A2FF]/20 to-slate-800 border-[#00A2FF]/40 relative overflow-hidden group' : 'bg-white/5 border-white/10 hover:bg-white/10 backdrop-blur-sm'} border rounded-[30px] p-8 md:p-12 transition-colors`}
                       initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       whileHover={i === 1 ? { scale: 1.02 } : undefined}
                    >
                        {i === 1 && <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A2FF] blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity" />}
                        
                        <div className="flex justify-between items-start mb-8 relative z-10">
                           <div>
                              <h3 className="text-2xl font-bold">{plan.title}</h3>
                              <p className={i === 1 ? "text-blue-200" : "text-slate-400"}>{plan.subtitle}</p>
                           </div>
                           <div className={`px-3 py-1 rounded-lg text-sm font-bold shadow-lg ${i === 1 ? 'bg-white text-[#00A2FF]' : 'bg-[#00A2FF] shadow-blue-500/20'}`}>{plan.discount}</div>
                        </div>
                        
                        <div className="space-y-4 mb-8 relative z-10">
                           {plan.items.map((item, idx) => (
                               <div key={idx} className="flex justify-between py-3 border-b border-white/10">
                                  <span className="text-slate-300">{item.l}</span>
                                  <span className="font-bold">{item.v}</span>
                               </div>
                           ))}
                        </div>
                        
                        <div className={`${i === 1 ? 'bg-blue-500/20 border-blue-400/20' : 'bg-blue-900/30 border-blue-500/20'} p-4 rounded-xl mb-6 border relative z-10`}>
                           <p className={`text-sm ${i === 1 ? 'text-blue-100' : 'text-blue-200'}`}>
                              {i === 1 ? <Users className="w-4 h-4 inline mr-1" /> : <DollarSign className="w-4 h-4 inline mr-1" />}
                              {plan.note}
                           </p>
                        </div>
                    </motion.div>
                 ))}
              </div>
              
              <p className="text-center text-slate-500 text-sm mt-12">
                 {c.fees.disclaimer}
              </p>
           </div>
        </section>

        {/* 7. Facilities */}
        <section className="py-20 md:py-32" style={{ backgroundColor: '#bde2ff' }}>
          <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-4xl font-bold mb-6">{c.facilities.title}</h2>
                 <ul className="space-y-4">
                    {c.facilities.items.map((item, i) => (
                       <motion.li 
                         key={i} 
                         className="flex gap-4 items-center p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-colors cursor-default"
                         whileHover={{ x: 10 }}
                       >
                          <Check className="w-6 h-6 text-[#00A2FF] shrink-0" />
                          <span className="font-medium text-slate-800">{item}</span>
                       </motion.li>
                    ))}
                 </ul>
              </motion.div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                 {[IMG_CLASSROOM, IMG_HERO, IMG_FACTORY].map((img, i) => (
                    <motion.img 
                      loading="lazy"
                      key={i}
                      src={img} 
                      className="rounded-2xl w-full h-48 object-cover shadow-md hover:shadow-xl transition-shadow"
                      alt="Facility" 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    />
                 ))}
                 <motion.div 
                   className="bg-[#00A2FF] rounded-2xl flex items-center justify-center h-48 p-6 text-center shadow-lg shadow-blue-200"
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.3 }}
                   whileHover={{ scale: 1.05, backgroundColor: "#008ce6" }}
                 >
                    <p className="text-white font-bold text-xl">{c.facilities.highlight}</p>
                 </motion.div>
              </div>
           </div>
          </div>
        </section>

        {/* 8. Sectors */}
        <section className="py-20" style={{ backgroundColor: '#bde2ff' }}>
           <div className="container mx-auto px-4 md:px-8">
              <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                 <h2 className="text-3xl font-bold mb-4">{c.sectors.title}</h2>
                 <p className="text-slate-600">{c.sectors.sub}</p>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                 {[
                    { name: c.sectors.items[0], img: IMG_FARMING }, // Agriculture
                    { name: c.sectors.items[1], img: IMG_RESTAURANT }, // Restaurant
                    { name: c.sectors.items[2], img: IMG_LIVESTOCK }, // Livestock
                    { name: c.sectors.items[3], img: IMG_NURSE }, // Caregiving
                    { name: c.sectors.items[4], img: IMG_FOOD_PROCESSING }, // Food Processing
                    { name: c.sectors.items[5], img: IMG_FACTORY }, // Manufacturing
                 ].map((sector, i) => (
                    <motion.div 
                      key={i} 
                      className="group relative rounded-2xl overflow-hidden h-64 shadow-md cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                       <img loading="lazy" src={sector.img} alt={sector.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                       <div className="absolute bottom-0 left-0 p-6">
                          <h3 className="text-white text-xl font-bold group-hover:text-[#00a4ff] transition-colors">{sector.name}</h3>
                       </div>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* 9. Application Flow & Form */}
        <section id="apply" className="py-20 md:py-32" style={{ backgroundColor: '#bde2ff' }}>
           <div className="container mx-auto px-4 md:px-8">
           <div className="bg-slate-900 rounded-[40px] text-white p-8 md:p-16 flex flex-col lg:flex-row gap-16 relative shadow-2xl">
              <Blob className="bg-blue-600 w-96 h-96 top-0 right-0 mix-blend-overlay opacity-20" />
              
              <div className="lg:w-1/2 relative z-10">
                 <h2 className="text-4xl font-bold mb-8">{c.apply.title}</h2>
                 <div className="space-y-8">
                    {c.apply.steps.map((step, i) => (
                       <motion.div 
                         key={i} 
                         className="flex gap-6 items-start"
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.1 }}
                       >
                          <span className="text-2xl font-bold text-[#00A2FF] opacity-50 font-mono">0{i+1}</span>
                          <p className="text-lg font-medium pt-1 text-slate-200">{step}</p>
                       </motion.div>
                    ))}
                 </div>
              </div>

              <motion.div 
                className="lg:w-1/2 bg-white text-slate-900 rounded-3xl p-8 shadow-xl relative z-10 overflow-visible"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                 <h3 className="text-2xl font-bold mb-6">{c.apply.form.title}</h3>
                 <form className="space-y-4 overflow-visible" onSubmit={handleWhatsAppSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                       <input 
                         type="text" 
                         name="name"
                         value={formData.name}
                         onChange={handleFormChange}
                         placeholder={c.apply.form.name} 
                         className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00A2FF] focus:ring-2 focus:ring-blue-100 transition-all" 
                         required
                       />
                       <input 
                         type="text" 
                         name="age"
                         value={formData.age}
                         onChange={handleFormChange}
                         placeholder={c.apply.form.age} 
                         className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00A2FF] focus:ring-2 focus:ring-blue-100 transition-all" 
                         required
                       />
                    </div>
                    <input 
                      type="text" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      placeholder={c.apply.form.phone} 
                      className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00A2FF] focus:ring-2 focus:ring-blue-100 transition-all" 
                      required
                    />
                    <input 
                      type="text" 
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      placeholder={c.apply.form.city} 
                      className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:border-[#00A2FF] focus:ring-2 focus:ring-blue-100 transition-all" 
                      required
                    />
                    
                    {/* Custom Dropdown */}
                    <div className="relative z-20" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full p-4 bg-slate-50 rounded-xl transition-all duration-200 cursor-pointer text-left flex items-center justify-between ${
                          isDropdownOpen 
                            ? 'border-2 border-[#00A2FF] ring-2 ring-blue-100' 
                            : 'border border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {selectedProgram ? (
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{selectedProgram.icon}</span>
                            <div>
                              <p className="font-semibold text-slate-900">{selectedProgram.label}</p>
                              <p className="text-xs text-slate-500">{selectedProgram.desc}</p>
                            </div>
                          </div>
                        ) : (
                          <span className="text-slate-400">{c.apply.form.prog}</span>
                        )}
                        <motion.svg 
                          animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className={`w-5 h-5 flex-shrink-0 ${
                            isDropdownOpen ? 'text-[#00A2FF]' : 'text-slate-400'
                          }`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </button>
                      
                      <AnimatePresence>
                        {isDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border-2 border-slate-200 shadow-2xl overflow-hidden z-[100]"
                          >
                            {programOptions.map((option) => (
                              <button
                                key={option.value}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, program: option.value }));
                                  setIsDropdownOpen(false);
                                }}
                                className={`w-full p-4 flex items-center gap-4 transition-all duration-150 hover:bg-slate-50 ${
                                  formData.program === option.value ? 'bg-blue-50' : ''
                                }`}
                              >
                                <div className={`w-12 h-12 rounded-xl ${option.color} border flex items-center justify-center text-2xl`}>
                                  {option.icon}
                                </div>
                                <div className="text-left flex-1">
                                  <p className="font-semibold text-slate-900">{option.label}</p>
                                  <p className="text-sm text-slate-500">{option.desc}</p>
                                </div>
                                {formData.program === option.value && (
                                  <div className="w-6 h-6 rounded-full bg-[#00A2FF] flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" />
                                  </div>
                                )}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Hidden input for form validation */}
                      <input 
                        type="hidden" 
                        name="program" 
                        value={formData.program} 
                        required 
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full h-14 bg-[#25D366] hover:bg-[#1da851] text-white rounded-xl font-bold text-lg mt-4 shadow-lg shadow-green-200 hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3"
                    >
                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                       </svg>
                       {c.apply.form.submit}
                    </Button>
                    <p className="text-xs text-slate-500 text-center mt-4">
                       {c.apply.form.note}
                    </p>
                 </form>
              </motion.div>
           </div>
           </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="py-20" style={{ backgroundColor: '#bde2ff' }}>
           <div className="container mx-auto px-4 md:px-8 max-w-3xl">
           <motion.h2 
             className="text-3xl font-bold text-center mb-12"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
           >
             {c.faq.title}
           </motion.h2>
           <Accordion type="single" collapsible className="w-full">
              {c.faq.items.map((faq, i) => (
                 <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-b-0 [&]:border-b-[#849eb2]">
                    <AccordionTrigger className="text-lg font-medium text-left hover:text-[#00A2FF] transition-colors">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-600 text-base leading-relaxed">
                       {faq.a}
                    </AccordionContent>
                 </AccordionItem>
              ))}
           </Accordion>
           </div>
        </section>

        {/* 11. Footer */}
        <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
           <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                 <div className="max-w-md">
                    <h2 className="text-3xl font-bold mb-6">{c.footer.ready}</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                       {c.footer.desc}
                    </p>
                    <div className="flex gap-4">
                       <a href="https://wa.me/6285117832026" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-bold inline-flex items-center gap-2 transition-colors shadow-lg shadow-green-900/20">
                          <MessageCircle className="w-5 h-5" /> {c.footer.chat}
                       </a>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h3 className="font-bold text-lg mb-4 text-blue-200">{c.footer.contact}</h3>
                    <div className="flex gap-4 text-slate-300 items-start">
                       <MapPin className="w-5 h-5 text-[#00A2FF] shrink-0 mt-1" />
                       <p className="max-w-xs leading-relaxed">Jl. Malaka gg. Masjid Almuctar, Kelurahan Munjul, Kecamatan Cipayung, Jakarta Timur, 13850</p>
                    </div>
                    <div className="flex gap-4 text-slate-300 items-center">
                       <Phone className="w-5 h-5 text-[#00A2FF] shrink-0" />
                       <p>+62 851 1783 2026</p>
                    </div>
                    <div className="flex gap-4 text-slate-300 items-center">
                       <Mail className="w-5 h-5 text-[#00A2FF] shrink-0" />
                       <p>harukazeindonesia@gmail.com</p>
                    </div>
                 </div>
              </div>
              
              <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                 <p>{c.footer.copy}</p>
                 <div className="flex gap-6">
                    {c.footer.links.map((link, i) => (
                        <a key={i} href="#" className="hover:text-white transition-colors">{link}</a>
                    ))}
                 </div>
              </div>
           </div>
        </footer>
      </main>

      {/* Floating WhatsApp CTA */}
      <motion.a
        href={`https://wa.me/6285117832026?text=${encodeURIComponent(`Halo Harukaze Indonesia!

Saya ingin mendaftar program pelatihan:

*Data Pendaftaran*
━━━━━━━━━━━━━━━━
 Nama: 
 Usia: 
 No. HP: 
 Kota:
 Program:
━━━━━━━━━━━━━━━━

Mohon informasi lebih lanjut. Terima kasih!`)}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)] transition-shadow group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Hubungi Kami
        </span>
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}
