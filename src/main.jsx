import React, { useMemo, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  FileText,
  Globe2,
  Handshake,
  Headphones,
  Landmark,
  Laptop,
  LockKeyhole,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ReceiptText,
  Scale,
  SearchCheck,
  ShieldCheck,
  UserRound,
  UsersRound,
  X,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Coins,
  TrendingUp,
  ShoppingBag,
  Cpu,
  HeartPulse,
  Factory,
  Store,
  GraduationCap,
  Bell,
  FolderSync,
  Sliders,
  FileSpreadsheet,
  Award,
  Check,
  Sparkles
} from "lucide-react";
import "./styles.css";

const navItems = [
  { label: "Ana Sayfa", page: "home" },
  { label: "Hakkımızda", page: "about" },
  { label: "Hizmetlerimiz", page: "services" },
  { label: "Sektörler", page: "sectors" },
  { label: "Şirket Kuruluşu", page: "company" },
  { label: "Bilgi Merkezi", page: "knowledge" },
  { label: "Sık Sorulan Sorular", page: "faq" },
  { label: "İletişim", page: "contact" }
];

const services = [
  {
    title: "Muhasebe ve Mali Müşavirlik",
    icon: ReceiptText,
    text: "Yasal defterlerin tutulması, beyannamelerin hazırlanması, dönem sonu kapanış işlemleri ve yasal defterlerin güncel mevzuata uygun şekilde yönetilmesi.",
    items: ["Yasal defterlerin tutulması", "KDV, Muhtasar, Geçici ve Kurumlar Vergisi Beyanları", "Gelir-gider belge kontrolü", "Dönem sonu amortisman ve kapanış işlemleri"]
  },
  {
    title: "Vergi Danışmanlığı ve Tasdik Hizmetleri",
    icon: Landmark,
    text: "Sürekli vergi danışmanlığı, vergi planlaması, Kurumlar/Gelir Vergisi matrah tasdiki, KDV iadesi tasdik raporlarının hazırlanması.",
    items: ["Kurumlar ve Gelir Vergisi tasdiki", "KDV, ÖTV iadesi ve mahsup işlemleri tasdiki", "Yabancı yatırımcılar için vergi danışmanlığı", "Vergi incelemeleri ve uyuşmazlıklarında destek"]
  },
  {
    title: "Bağımsız Denetim",
    icon: Scale,
    text: "TFRS, UFRS ve US GAAP standartlarına göre mali tabloların bağımsız denetimi, sınırlı denetim ve özel amaçlı denetim raporlarının hazırlanması.",
    items: ["Finansal tabloların yasal bağımsız denetimi", "UFRS ve konsolidasyon raporlamaları", "Üzerinde mutabık kalınan prosedürlerin denetimi", "Mali analiz ve risk değerlendirme raporları"]
  },
  {
    title: "Kurumsal Finansman ve Değerleme",
    icon: BarChart3,
    text: "Şirket satın alma ve birleşmeleri (M&A), due diligence (mali durum tespiti), şirket ve marka değerlemeleri, borç ve sermaye finansmanı rehberliği.",
    items: ["Mali ve vergisel Due Diligence (Durum Tespiti)", "Şirket, marka ve patent değerleme çalışmaları", "Şirket birleşme, devralma ve bölünme süreçleri", "Borç yapılandırma ve nakit akış finansman analizleri"]
  },
  {
    title: "Şirket Kuruluşu ve Yapılandırma",
    icon: Building2,
    text: "Şahıs, Limited, Anonim ve yabancı sermayeli şirketlerin kuruluşu, şube/irtibat bürosu açılışları ve kurumsal yapılandırma yönetimi.",
    items: ["Ticaret sicili ve oda tescil süreçleri", "Yabancı ortaklı şirketlerin kuruluşu", "Ana sözleşme tadilleri ve genel kurul yönetimi", "İrtibat bürosu ve şube açılış işlemleri"]
  },
  {
    title: "Bordro ve SGK Danışmanlığı",
    icon: UsersRound,
    text: "İşe giriş/çıkış süreçleri, aylık bordrolama, SGK bildirgeleri, iş hukuku ihtilafları, kıdem ve ihbar tazminatı hesaplama danışmanlığı.",
    items: ["Personel işe giriş ve çıkış bildirimleri", "Aylık bordro hazırlama ve banka ödeme listeleri", "SGK bildirgelerinin gönderilmesi ve tavan kontrolü", "İş ve sosyal güvenlik mevzuatı danışmanlığı"]
  },
  {
    title: "E-Dönüşüm ve BT Süreç Denetimi",
    icon: Laptop,
    text: "E-Fatura, E-Defter, E-Arşiv geçiş süreçlerinin kurulması, bilgi sistemleri kontrolleri ve KVKK (Kişisel Verilerin Korunması) uyum danışmanlığı.",
    items: ["E-Fatura, E-Arşiv ve E-Defter entegrasyonu", "BT süreç güvenliği ve bilgi sistemleri denetimi", "KVKK uyumluluk denetimleri ve veri haritası", "Dijital belge ve arşivleme standartları kurulumu"]
  },
  {
    title: "Teşvik ve Destek Yönetimi",
    icon: BadgeCheck,
    text: "Yatırım Teşvik Belgesi alımı, SGK istihdam teşvikleri, Ar-Ge ve Teknokent muafiyetleri, ihracat ve marka destekleri süreçlerinin yönetimi.",
    items: ["Yatırım Teşvik Belgesi başvurusu ve kapatma", "Teknopark ve Ar-Ge merkezi vergi istisnaları", "SGK ve İŞKUR istihdam teşvik takipleri", "Döviz kazandırıcı hizmet ve ihracat destekleri"]
  }
];

const sectors = [
  "E-ticaret",
  "Yazılım ve teknoloji",
  "Sağlık",
  "İnşaat ve gayrimenkul",
  "Üretim ve sanayi",
  "İhracat ve ithalat",
  "Perakende",
  "Eğitim",
  "Turizm",
  "Danışmanlık şirketleri",
  "Freelancer ve içerik üreticileri",
  "Yabancı ortaklı şirketler",
  "Startuplar",
  "Dernek ve vakıflar"
];

const sectorDetails = {
  "E-ticaret": {
    structure: "Yüksek hacimli günlük faturalandırma, sanal pos entegrasyonları, kargo ve pazaryeri mutabakatları.",
    problems: "Stok entegrasyonu hataları, iadelerin muhasebeleştirilmesi, yurtdışı mikro ihracat KDV hesaplamaları.",
    duties: "E-Arşiv/E-Fatura entegrasyonunun kontrolü, KDV beyannamelerinde pazaryeri gelirlerinin ayrıştırılması.",
    incentives: "Genç girişimci vergi muafiyeti (%50 gelir vergisi indirimi), mikro ihracatta %50 kazanç istisnası.",
    services: "Pazaryeri API entegrasyonu (Trendyol, Hepsiburada, Amazon), e-ticaret özel KDV iadesi danışmanlığı.",
    faq: "Yurtdışı e-ticaret satışlarında KDV ödenir mi? Hayır, mikro ihracat (ETGB) kapsamında KDV'siz fatura kesilir."
  },
  "Yazılım ve teknoloji": {
    structure: "Fikri mülkiyet hakları, SaaS (yazılım aboneliği) gelirleri, Teknopark/Ar-Ge merkezi mevzuatı.",
    problems: "Yurtdışı yazılım satışlarında vergi indirimlerinin ve muafiyetlerin beyannamede yanlış gösterilmesi.",
    duties: "Teknoloji Geliştirme Bölgesi portal bildirimleri, Ar-Ge personeli zaman kartları ve SGK entegrasyonu.",
    incentives: "Teknokent kurumlar vergisi istisnası, Ar-Ge personeli gelir vergisi ve SGK teşviki (%80-%95).",
    services: "Teknopark muhasebe kurulumu, Ar-Ge teşvik denetimi, yurtdışı lisans ve hizmet ihracatı danışmanlığı.",
    faq: "Hizmet ihracatında vergi indirimi ne kadardır? Yurtdışına verilen yazılım hizmetinde kazancın %80'i vergiden muaftır."
  },
  "Sağlık": {
    structure: "Serbest meslek makbuzu (SMM) yönetimi, özel hastane anlaşmaları, sağlık turizmi KDV muafiyetleri.",
    problems: "Hekimlerin vergi dilimi takipleri, sağlık turizmi faturalarında KDV muafiyeti uygulaması hataları.",
    duties: "Sağlık turizmi yetki belgeli kurumların fatura kontrolleri, hekim pos cihazlarının beyanname eşleşmesi.",
    incentives: "Sağlık turizmi hizmet ihracatı kazanç istisnası (%80 vergi muafiyeti), döviz kazandırıcı hizmet destekleri.",
    services: "Klinik muhasebe kurulumu, sağlık turizmi vergi teşviki danışmanlığı, doktor vergi planlaması.",
    faq: "Sağlık turizmi vergi indirimi şartları nelerdir? Sağlık Bakanlığı yetki belgesine sahip olmak ve faturayı yurtdışı hastaya kesmek gerekir."
  },
  "İnşaat ve gayrimenkul": {
    structure: "Arsa payı karşılığı inşaat sözleşmeleri, hakediş yönetimi, KDV iade süreçleri, tapu harçları.",
    problems: "Yıllara yaygın inşaat maliyetlerinin dönemleştirilmesi, arsa sahibi daire teslimlerinde fatura düzeni.",
    duties: "Geçici vergi dönemlerinde inşaat maliyet dağıtımları, tapu harcı ve harç iadelerinin takibi.",
    incentives: "Kentsel dönüşüm KDV indirimleri (%1 KDV avantajı), yabancıya konut satışında KDV muafiyeti.",
    services: "İnşaat KDV iadesi takibi, yıllara yaygın inşaat muhasebesi danışmanlığı, kat karşılığı sözleşme analizi.",
    faq: "Kentsel dönüşüm projelerinde KDV oranı nedir? Belirli şartlar dahilinde teslimlerde KDV oranı %1 olarak uygulanmaktadır."
  },
  "Üretim ve sanayi": {
    structure: "Maliyet muhasebesi sistemleri, hammadde-yarı mamul takibi, fire hesaplamaları, kapasite raporları.",
    problems: "Üretim reçetelerinin sisteme yanlış girilmesi sonucu oluşan fiili stok farkları, amortisman hesapları.",
    duties: "Aylık fiili maliyet hesaplamaları, dönem sonu stok değerlemeleri ve fire oranlarının yasal takibi.",
    incentives: "Yatırım teşvik belgesi kapsamında KDV ve Gümrük Vergisi muafiyeti, bölgesel vergi indirimleri.",
    services: "Maliyet muhasebesi sistemi kurulumu, Yatırım Teşvik Belgesi takibi, kapasite raporu danışmanlığı.",
    faq: "Yatırım teşvik belgesi ne sağlar? Yatırımlarda makine alımlarında KDV ödenmez ve kurumlar vergisi indirimli uygulanır."
  },
  "İhracat ve ithalat": {
    structure: "Dış ticaret muhasebesi, gümrük beyannameleri, kur farkları, KDV iadesi (ihracat istisnası).",
    problems: "Gümrük beyannamesi kapanma tarihlerinin yanlış girilmesi, döviz kur farklarının yanlış muhasebeleştirilmesi.",
    duties: "Gümrük beyannamesi (GB) takipleri, İthalatta KDV ve KKDF beyanları, ihracat bedeli kabul belgesi (İBKB).",
    incentives: "İhracattan elde edilen kazançlarda 5 puanlık kurumlar vergisi indirimi, Dahilde İşleme İzin Belgesi.",
    services: "İhracat KDV İadesi (yüklenilen KDV) takipleri, gümrük muhabere entegrasyonu, yurtdışı fuar teşvikleri.",
    faq: "İhracat KDV iadesi nakden alınabilir mi? Evet, yasal vergi incelemesi veya YMM raporu ile nakden veya mahsuben alınabilir."
  }
};

const principles = [
  "Gizlilik ve Bilgi Güvenliği",
  "Hızlı ve Şeffaf İletişim",
  "Düzenli Raporlama ve Bilgilendirme",
  "Mevzuata %100 Uyum ve Takip",
  "Zamanında ve Doğru İşlem",
  "Tamamen Dijital Belge Yönetimi",
  "İşletmeye Özel Yaklaşım ve Analiz"
];

const knowledgeCategories = [
  { title: "Rehberler", desc: "Şirket kurma, mali müşavir değişikliği ve e-ticaret yükümlülükleri gibi kalıcı içerikler." },
  { title: "Mevzuat Değişiklikleri", desc: "Yeni kanun, tebliğ ve kararların işletmeler için sadeleştirilmiş açıklamaları." },
  { title: "Sirkülerler", desc: "Kurumsal müşterilere yönelik teknik ve dönemsel bilgilendirmeler." },
  { title: "Vergi Takvimi", desc: "Aylık beyanname, SGK ve ödeme tarihlerinin düzenli takibi." },
  { title: "Pratik Bilgiler", desc: "Güncel oranlar, istisnalar, tavan tutarlar ve fatura düzenleme sınırları." },
  { title: "Resmi Bağlantılar", desc: "Resmi kurumlar, portal bağlantıları ve mevzuat kütüphaneleri." }
];

const faq = [
  ["Şirket kuruluşu ne kadar sürer?", "Şirket türü, şehir ve evrak hazırlığına göre değişir. Şahıs şirketleri 1 günde kurulurken, Limited ve Anonim şirket kuruluşları ortalama 2-3 iş günü sürmektedir."],
  ["Mevcut mali müşavirimi değiştirebilir miyim?", "Evet. Mevcut mali müşavirinizle olan sözleşme feshini takiben, devir işlemleri planlı bir biçimde dijital olarak hızlıca tamamlanır."],
  ["Evrakları dijital olarak iletebilir miyim?", "Evet. Evraklarınızı WhatsApp, e-posta veya dijital portalımız aracılığıyla taratarak veya fotoğrafını çekerek kolayca iletebilirsiniz."],
  ["Yabancı ortaklı şirketlere destek veriliyor mu?", "Evet. Yabancı kurucu ortaklı şirketlerin kuruluşu, oturma/çalışma izinleri ve uluslararası vergilendirme konularında uzman kadromuz mevcuttur."]
];

function App() {
  const [page, setPage] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedSector, setSelectedSector] = useState(sectors[0]);

  const pageTitle = useMemo(() => navItems.find((item) => item.page === page)?.label ?? "Ana Sayfa", [page]);

  const go = (target) => {
    setPage(target);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Header page={page} go={go} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <FloatingActions setLoginOpen={setLoginOpen} go={go} />
      <main className="flex-grow">
        {page === "home" && <Home go={go} setSelectedService={setSelectedService} />}
        {page === "about" && <About />}
        {page === "services" && (
          <Services selectedService={selectedService} setSelectedService={setSelectedService} go={go} />
        )}
        {page === "sectors" && <Sectors selectedSector={selectedSector} setSelectedSector={setSelectedSector} go={go} />}
        {page === "company" && <CompanySetup go={go} />}
        {page === "knowledge" && <Knowledge />}
        {page === "faq" && <Faq />}
        {page === "contact" && <Contact title={pageTitle} />}
      </main>
      <Footer go={go} />
      {loginOpen && <CustomerLogin onClose={() => setLoginOpen(false)} />}
    </div>
  );
}

function Header({ page, go, mobileOpen, setMobileOpen }) {
  const [megaOpen, setMegaOpen] = useState(null);
  
  const menuGroups = [
    {
      id: "corporate",
      label: "Kurumsal",
      description: "Ofis yapımız, çalışma ilkelerimiz ve kurucu mali müşavirimiz hakkında bilgi edinin.",
      links: [
        ["Hakkımızda", "about"],
        ["Kurucu Mali Müşavir", "about"],
        ["Ekibimiz", "about"],
        ["Çalışma İlkelerimiz", "about"],
        ["Ofislerimiz", "about"]
      ]
    },
    {
      id: "services",
      label: "Hizmetler",
      description: "Muhasebe, vergi danışmanlığı, şirket kuruluşu, bordro ve e-dönüşüm süreçleri.",
      links: [
        ["Muhasebe ve Mali Müşavirlik", "services"],
        ["Vergi Danışmanlığı", "services"],
        ["Şirket Kuruluşu", "company"],
        ["Bordro ve SGK", "services"],
        ["E-Dönüşüm", "services"],
        ["Finansal Raporlama", "services"],
        ["Teşvik ve Destekler", "services"],
        ["Şirket Değişiklik İşlemleri", "services"]
      ]
    },
    {
      id: "knowledge",
      label: "Bilgi Merkezi",
      description: "Güncel vergi takvimi, mevzuat duyuruları, rehberler ve sık sorulan sorular.",
      links: [
        ["Rehberler", "knowledge"],
        ["Mevzuat Değişiklikleri", "knowledge"],
        ["Sirkülerler", "knowledge"],
        ["Vergi Takvimi", "knowledge"],
        ["Pratik Bilgiler", "knowledge"],
        ["Sık Sorulan Sorular", "faq"]
      ]
    }
  ];

  const openGroup = menuGroups.find((group) => group.id === megaOpen);

  const navigate = (target) => {
    setMegaOpen(null);
    go(target);
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md text-white shadow-lg border-b border-white/5">
      <div className="hidden border-b border-white/5 bg-slate-950/40 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs font-semibold text-slate-400 lg:px-6">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2"><MapPin size={13} className="text-skybrand-500" /> Ataşehir, İstanbul / Türkiye</span>
            <a className="inline-flex items-center gap-2 hover:text-white transition" href="mailto:info@sonermusavirlik.com">
              <Mail size={13} className="text-skybrand-500" /> info@sonermusavirlik.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("knowledge")} className="hover:text-white transition">Vergi Takvimi</button>
            <span className="text-white/10">/</span>
            <button onClick={() => navigate("faq")} className="hover:text-white transition">Destek & SSS</button>
            <span className="text-white/10">/</span>
            <button onClick={() => navigate("contact")} className="hover:text-white transition">İletişim</button>
          </div>
        </div>
      </div>
      
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-6">
        <button onClick={() => navigate("home")} className="flex items-center gap-3 text-left group">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-skybrand-600 text-base font-black text-white shadow-md shadow-skybrand-600/10 group-hover:scale-105 transition duration-300">
            SM
          </span>
          <span>
            <span className="block text-base font-black tracking-tight text-white group-hover:text-skybrand-100 transition">Soner Mali Müşavirlik</span>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">SMMM / Vergi Danışmanlığı</span>
          </span>
        </button>
        
        <nav className="hidden items-center gap-1 lg:flex">
          <button
            onClick={() => navigate("home")}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              page === "home" ? "bg-white text-slate-950 font-bold" : "text-slate-200 hover:bg-white/5 hover:text-white"
            }`}
          >
            Ana Sayfa
          </button>
          
          {menuGroups.map((group) => (
            <div key={group.id} className="relative" onMouseEnter={() => setMegaOpen(group.id)}>
              <button
                onClick={() => setMegaOpen(megaOpen === group.id ? null : group.id)}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                  megaOpen === group.id ? "bg-white/10 text-white" : "text-slate-200 hover:bg-white/5"
                }`}
              >
                {group.label} <ChevronDown size={14} className={`transition duration-200 ${megaOpen === group.id ? "rotate-180" : ""}`} />
              </button>
            </div>
          ))}
          
          <button
            onClick={() => navigate("sectors")}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              page === "sectors" ? "bg-white text-slate-950 font-bold" : "text-slate-200 hover:bg-white/5 hover:text-white"
            }`}
          >
            Sektörler
          </button>
          
          <button
            onClick={() => navigate("contact")}
            className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              page === "contact" ? "bg-white text-slate-950 font-bold" : "text-slate-200 hover:bg-white/5 hover:text-white"
            }`}
          >
            İletişim
          </button>
        </nav>
        
        <div className="hidden items-center gap-4 xl:flex">
          <button onClick={() => navigate("company")} className="primary-btn">
            Şirket Kuruluşu
          </button>
          <a href="tel:+905000000000" className="flex items-center gap-3 border-l border-white/10 pl-5 group">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-skybrand-600/10 text-skybrand-100 group-hover:bg-skybrand-600 group-hover:text-white transition duration-300">
              <Headphones size={18} />
            </span>
            <span>
              <span className="block text-[10px] font-bold text-slate-400">Danışma Hattı</span>
              <span className="block text-xs font-bold tracking-tight text-white group-hover:text-skybrand-100 transition">+90 500 000 00 00</span>
            </span>
          </a>
        </div>
        
        <button className="rounded-lg border border-white/10 p-2 lg:hidden hover:bg-white/5 transition" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Dropdown Menu for desktop */}
      {openGroup && (
        <div 
          className="absolute left-0 right-0 top-full hidden border-b border-white/5 bg-slate-950/98 shadow-2xl lg:block animate-fade-in" 
          onMouseLeave={() => setMegaOpen(null)}
        >
          <div className="mx-auto grid max-w-7xl grid-cols-[0.8fr_1.4fr_0.8fr] gap-8 px-6 py-8">
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-skybrand-400">{openGroup.label}</p>
              <h3 className="mt-3 text-xl font-black leading-tight text-white">İhtiyacınız olan başlığa hızlı ulaşın</h3>
              <p className="mt-3 text-xs leading-6 text-slate-400">{openGroup.description}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {openGroup.links.map(([label, target]) => (
                <button
                  key={label}
                  onClick={() => navigate(target)}
                  className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-left text-xs font-semibold text-slate-200 transition-all duration-300 hover:border-skybrand-500/50 hover:bg-skybrand-600"
                >
                  {label}
                  <ArrowRight size={14} className="transition group-hover:translate-x-1" />
                </button>
              ))}
            </div>
            <div className="rounded-xl bg-white p-5 text-slate-950 shadow-md">
              <FileText className="text-skybrand-600" size={24} />
              <h4 className="mt-3 text-sm font-black">Görüşme planlayın</h4>
              <p className="mt-2 text-xs leading-5 text-slate-650">Talebinizi seçin, hizmet kapsamını birlikte netleştirelim.</p>
              <button onClick={() => navigate("contact")} className="mt-4 w-full rounded-lg bg-slate-950 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800">
                Görüşme Talep Et
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-84px)] overflow-y-auto border-t border-white/5 bg-slate-950 px-4 py-4 lg:hidden animate-fade-in">
          <button onClick={() => navigate("home")} className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-200 hover:bg-white/5">Ana Sayfa</button>
          {menuGroups.map((group) => (
            <div key={group.id} className="mt-3 rounded-xl border border-white/5 bg-white/5 p-3">
              <p className="px-2 pb-1.5 text-xs font-black uppercase tracking-wider text-skybrand-400">{group.label}</p>
              <div className="grid gap-1">
                {group.links.map(([label, target]) => (
                  <button 
                    key={label} 
                    onClick={() => navigate(target)} 
                    className="block w-full rounded-lg px-2 py-2 text-left text-xs font-semibold text-slate-350 hover:bg-white/5 hover:text-white"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={() => navigate("sectors")} className="mt-3 block w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-200 hover:bg-white/5">Sektörler</button>
          <button onClick={() => navigate("contact")} className="block w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-slate-200 hover:bg-white/5">İletişim</button>
          <button onClick={() => navigate("company")} className="mt-4 w-full rounded-lg bg-skybrand-600 px-4 py-3 text-center text-sm font-bold text-white">Şirket Kuruluşu</button>
        </div>
      )}
    </header>
  );
}

function FloatingActions({ setLoginOpen, go }) {
  return (
    <aside className="fixed right-3 top-44 z-30 hidden w-44 flex-col gap-2 xl:flex">
      <button onClick={() => setLoginOpen(true)} className="side-action">
        <span className="grid h-6 w-6 place-items-center rounded bg-slate-900 text-white"><LockKeyhole size={13} /></span>
        Müşteri Girişi
      </button>
      <button onClick={() => go("contact")} className="side-action">
        <span className="grid h-6 w-6 place-items-center rounded bg-skybrand-600 text-white"><CalendarDays size={13} /></span>
        Görüşme Talebi
      </button>
      <a href="tel:+905000000000" className="side-action">
        <span className="grid h-6 w-6 place-items-center rounded bg-skybrand-100 text-skybrand-600"><Phone size={13} /></span>
        Hemen Arayın
      </a>
      <a href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer" className="side-action">
        <span className="grid h-6 w-6 place-items-center rounded bg-emerald-600 text-white"><MessageCircle size={13} /></span>
        WhatsApp
      </a>
    </aside>
  );
}

function Home({ go, setSelectedService }) {
  return (
    <div className="animate-fade-in">
      <HeroSlider go={go} />
      <HeroTicker />
      <TrustStrip />
      <ServiceCards go={go} setSelectedService={setSelectedService} />
      <Audience />
      <WhyUs />
      <HowItWorks />
      <FounderMini />
      <SectorPreview go={go} />
      <KnowledgePreview />
      <Contact title="Ücretsiz Danışmanlık Görüşmesi" compact />
    </div>
  );
}

function HeroSlider({ go }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      eyebrow: "Kurumsal Mali Müşavirlik & Danışmanlık",
      title: "İşletmenizin mali süreçlerini güvenle yönetin",
      description: "Şirket kuruluşu, muhasebe, vergi, bordro, SGK, e-dönüşüm ve finansal raporlama süreçlerinde işletmenizin ihtiyaçlarına uygun şeffaf mali çözümler.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2200&q=88"
    },
    {
      eyebrow: "Dijital Çağda Akıllı Muhasebe",
      title: "E-Dönüşüm entegrasyonu ile hız ve güç kazanın",
      description: "E-fatura, e-arşiv, e-defter ve e-irsaliye geçişlerinizi sıfır hata ile tamamlıyoruz. Tüm evrak takibinizi dijital ortamda şeffafça izleyin.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2200&q=88"
    },
    {
      eyebrow: "Maksimum Teşvik ve Minimum Risk",
      title: "Devlet teşvikleri ve vergi avantajlarını kaçırmayın",
      description: "Genç girişimci destekleri, SGK istihdam teşvikleri, ihracat muafiyetleri ve teknopark avantajlarıyla işletmenizin nakit akışını güçlendirin.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=2200&q=88"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative min-h-[calc(100vh-112px)] overflow-hidden bg-slate-950">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10 animate-fade-in" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={slide.image}
            alt={slide.title}
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent" />
          
          <div className="relative mx-auto flex min-h-[calc(100vh-112px)] max-w-7xl items-center px-4 py-16 lg:px-6 z-20">
            <div className="max-w-3xl text-white">
              <p className="mb-4 inline-block rounded-full bg-skybrand-600/20 border border-skybrand-500/30 px-4 py-1.5 text-xs font-bold text-skybrand-100 tracking-wider uppercase">
                {slide.eyebrow}
              </p>
              <h1 className="text-4xl font-black leading-[1.15] sm:text-5xl lg:text-6xl text-white tracking-tight animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="mt-6 text-base sm:text-lg font-normal leading-8 text-slate-300 animate-fade-in-up delay-100">
                {slide.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up delay-200">
                <button onClick={() => go("contact")} className="primary-btn">
                  Görüşme Talep Et <ArrowRight size={18} />
                </button>
                <button onClick={() => go("services")} className="secondary-btn !bg-white/10 !text-white hover:!bg-white/20 !border-white/20">
                  Hizmetlerimizi İnceleyin
                </button>
                <a href="tel:+905000000000" className="secondary-btn !bg-white/5 !text-slate-200 hover:!bg-white/10 !border-white/10">
                  <Phone size={18} /> Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Side Social Buttons */}
      <div className="absolute left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-350 hover:bg-skybrand-600 hover:text-white hover:border-skybrand-500 transition-all duration-300" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-350 hover:bg-slate-900 hover:text-white hover:border-slate-800 transition-all duration-300" aria-label="Twitter">
          <Twitter size={18} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-350 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300" aria-label="Facebook">
          <Facebook size={18} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-350 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300" aria-label="YouTube">
          <Youtube size={18} />
        </a>
      </div>

      {/* Slider Controls */}
      <div className="absolute right-8 bottom-8 z-30 flex gap-3">
        <button onClick={prevSlide} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-slate-950/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-skybrand-600 hover:border-skybrand-500" aria-label="Önceki">
          <ArrowRight className="rotate-180" size={18} />
        </button>
        <button onClick={nextSlide} className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-slate-950/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-skybrand-600 hover:border-skybrand-500" aria-label="Sonraki">
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-8 bg-skybrand-500" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

function HeroTicker() {
  const items = ["Mali Müşavirlik", "Vergi Danışmanlığı", "Şirket Kuruluşu", "Bordro ve SGK", "E-Dönüşüm", "Finansal Raporlama", "Yatırım Teşvikleri"];
  return (
    <section className="overflow-hidden bg-slate-950 py-5 text-white border-b border-white/5">
      <div className="ticker-track flex min-w-max gap-10 text-xs font-black tracking-widest uppercase">
        {[...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="inline-flex items-center gap-10 whitespace-nowrap">
            <span className="text-skybrand-500 text-base">•</span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function TrustStrip() {
  const stats = [
    { value: "15+", label: "Sektörel Tecrübe", sub: "Yılların getirdiği yasal mevzuat birikimi", icon: BriefcaseBusiness },
    { value: "%100", label: "Dijital İş Akışı", sub: "Kağıtsız, hızlı ve hatasız evrak yönetimi", icon: Laptop },
    { value: "500+", label: "Şirket Kuruluşu", sub: "Sıfırdan kurulan başarılı iş modelleri", icon: Building2 },
    { value: "50M+ ₺", label: "Yönetilen Teşvik", sub: "Maksimum vergi avantajı ve SGK indirimi", icon: Coins }
  ];
  return (
    <section className="bg-slate-50 py-16 border-b border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 h-64 w-64 rounded-full bg-skybrand-500/5 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:border-skybrand-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-12 w-12 rounded-full bg-skybrand-50/50 group-hover:scale-150 transition-all duration-500" />
              <div className="flex justify-between items-start relative z-10">
                <span className="block text-3xl sm:text-4xl font-black text-skybrand-600 tracking-tight">
                  {stat.value}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-skybrand-50 text-skybrand-600 group-hover:bg-skybrand-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <stat.icon size={18} />
                </span>
              </div>
              <p className="mt-4 text-xs font-black text-navy-950 tracking-wider uppercase">{stat.label}</p>
              <p className="mt-2 text-[11px] leading-5 text-slate-400 font-semibold">{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-skybrand-650">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-sm leading-7 text-slate-500 font-medium">{text}</p>}
    </div>
  );
}

function ServiceCards({ go, setSelectedService }) {
  return (
    <section className="bg-slate-50/50 py-20 border-t border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_2.15fr]">
          {/* Left Column (Sticky Title) */}
          <div className="lg:sticky lg:top-28 self-start">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-skybrand-600 bg-skybrand-50 px-3.5 py-1.5 rounded-lg shadow-sm">
              Hizmet Yelpazemiz
            </span>
            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl leading-tight">
              İşletmeniz için tasarlanmış kurumsal çözümler
            </h2>
            <p className="mt-4 text-xs leading-6 text-slate-500 font-medium">
              Mali müşavirliğin ötesinde, yasal mevzuata tam uyum ve mali büyümeyi hedefleyen bütünsel vergi, bağımsız denetim ve kurumsal finansman hizmetleri.
            </p>
            <button onClick={() => go("services")} className="mt-8 primary-btn">
              Tüm Hizmetleri İncele <ArrowRight size={16} />
            </button>
          </div>
          
          {/* Right Column (Dynamic Grid) */}
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => {
                  setSelectedService(service);
                  go("services");
                }}
                className="group text-left border border-slate-100 bg-slate-50/20 p-8 rounded-2xl transition-all duration-300 hover:border-skybrand-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between min-h-[260px]"
              >
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-skybrand-600 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <span className="outline-number absolute top-2 right-4 text-5xl font-black select-none pointer-events-none transition-all duration-350">
                  0{index + 1}
                </span>
                <div>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-skybrand-50 text-skybrand-600 group-hover:bg-skybrand-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                    <service.icon size={20} />
                  </span>
                  <h3 className="mt-5 text-base font-black text-navy-950 tracking-tight leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-5 text-slate-500 font-medium">
                    {service.text}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-skybrand-600 group-hover:translate-x-1 transition duration-300">
                  Hizmet Detayları <ArrowRight size={14} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Audience() {
  const audiences = [
    { title: "Startuplar & Teknoloji Şirketleri", desc: "Teknokent kurumlar vergisi muafiyetleri, Ar-Ge personeli gelir vergisi ve SGK teşviklerinin uçtan uca yönetimi.", bullets: ["Teknopark İstisnaları", "Ar-Ge Stopaj Desteği"], icon: Cpu },
    { title: "E-Ticaret & İhracatçılar", desc: "Sanal pos entegrasyonu, günlük fatura kesim otomasyonu, KDV iadeleri ve mikro ihracat kazanç istisnası danışmanlığı.", bullets: ["Pazaryeri API Entegrasyonu", "İhracat KDV İadesi"], icon: ShoppingBag },
    { title: "KOBİ'ler & Aile Şirketleri", desc: "Maliyet muhasebesi sistemlerinin kurulması, kurumsal check-up, yasal defter ve beyanname süreçlerinin tam takibi.", bullets: ["Maliyet Muhasebesi", "Genel Kurul & Pay Takibi"], icon: Building2 }
  ];
  return (
    <section className="py-24 bg-slate-50/50 border-t border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
          <div className="space-y-6">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-600 bg-emerald-50 px-3.5 py-1.5 rounded-lg shadow-sm">
              Kimlere Hizmet Veriyoruz?
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl leading-tight">
              İş modelinizin gerektirdiği mali sistemi önceden kuruyoruz
            </h2>
            <p className="text-xs leading-6 text-slate-500 font-medium max-w-2xl">
              Her şirketin gelir yapısı, belge akışı ve teşvik potansiyeli farklıdır. Sektörel dinamikleri bilerek finansal yol haritanızı tasarlıyoruz.
            </p>
            
            <div className="space-y-4 pt-4">
              {audiences.map((aud, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-skybrand-100 hover:shadow-md flex gap-4 items-start group">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500 group-hover:bg-skybrand-50 group-hover:text-skybrand-600 transition-colors duration-300 shrink-0">
                    <aud.icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-black text-navy-950 text-xs uppercase tracking-wider">{aud.title}</h3>
                    <p className="mt-2 text-[11px] leading-5 text-slate-500 font-semibold">{aud.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {aud.bullets.map((b) => (
                        <span key={b} className="text-[9px] font-bold text-skybrand-600 bg-skybrand-50 px-2.5 py-1 rounded-md flex items-center gap-1">
                          <Check size={10} /> {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual element on the right (Premium layout element) */}
          <div className="relative rounded-3xl bg-slate-950 p-8 text-white border border-white/5 overflow-hidden shadow-2xl min-h-[460px] flex flex-col justify-between group">
            {/* Background glows */}
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-skybrand-500/20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
            
            {/* Grid overlay pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-skybrand-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                <Sparkles size={10} className="text-skybrand-400" /> Dijital Müşteri Deneyimi
              </span>
              <h3 className="mt-5 text-2xl font-black text-white leading-tight">Tüm evrak takibinizi cepten ve webden izleyin</h3>
              <p className="mt-3 text-[10px] leading-5 text-slate-400 font-semibold">
                Excel listeleri veya kaybolan faturalarla zaman kaybetmeyin. Dijital mali portalımız üzerinden beyannamelerinize ve vergi ödemelerinize 7/24 erişin.
              </p>
            </div>
            
            {/* Visual Mock Card list inside dark column */}
            <div className="space-y-3 mt-8 z-10 relative">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-emerald-500/10 text-emerald-400"><FileCheck2 size={14} /></span>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-200">KDV Beyannamesi</span>
                    <span className="block text-[9px] text-slate-500">Haziran 2026</span>
                  </div>
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-md border border-emerald-400/20">Yüklendi</span>
              </div>
              
              <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-skybrand-500/10 text-skybrand-400"><FileText size={14} /></span>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-200">SGK Tahakkuku</span>
                    <span className="block text-[9px] text-slate-500">Haziran 2026</span>
                  </div>
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-skybrand-400 bg-skybrand-400/10 px-2.5 py-1 rounded-md border border-skybrand-400/20">Hazır</span>
              </div>
              
              <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 flex items-center justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-yellow-500/10 text-yellow-400"><Bell size={14} className="animate-bounce" /></span>
                  <div>
                    <span className="block text-[11px] font-bold text-slate-200">Geçici Vergi Hatırlatıcısı</span>
                    <span className="block text-[9px] text-slate-500">Mali Takvim</span>
                  </div>
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider text-yellow-500 bg-yellow-400/10 px-2.5 py-1 rounded-md border border-yellow-400/20">Yarın Son Gün</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { title: "Dijital Belge Aktarımı", desc: "Evraklar düzenli, izlenebilir ve arşivlenebilir biçimde dijital kanallarla toplanır.", icon: FolderSync },
    { title: "Yakın Yükümlülük Takibi", desc: "Yaklaşan vergi, beyan ve SGK ödeme tarihleri periyodik olarak hatırlatılır.", icon: Bell },
    { title: "Düzenli Mali Raporlama", desc: "İşletme sahibi yalnızca vergisini değil, şirketin net mali gidişatını da görür.", icon: BarChart3 },
    { title: "Ulaşılabilir Danışmanlık", desc: "Sorulara hızlı dönüş, anlaşılır açıklamalar ve butik danışmanlık standardı.", icon: MessageCircle },
    { title: "Sektörel Uzmanlık", desc: "E-ticaret, yazılım ve teknoloji gibi dinamik sektörlerin teşviklerine tam hakimiyet.", icon: Award },
    { title: "Mevzuat Sadeleştirmesi", desc: "Karmaşık yasal değişiklikler, işletmenize etkisi analiz edilerek sade dille aktarılır.", icon: BookOpen }
  ];
  return (
    <section className="bg-slate-950 py-24 text-white relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 h-80 w-80 rounded-full bg-skybrand-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-skybrand-400">Neden Bizimle?</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">Genel vaat değil, somut çalışma disiplini</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 z-10 relative">
          {items.map((item, idx) => (
            <div key={idx} className="dark-glow-card group flex flex-col justify-between min-h-[220px]">
              <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-skybrand-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div>
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-skybrand-400 group-hover:bg-skybrand-600 group-hover:text-white transition-all duration-300 shadow-sm mb-5 group-hover:scale-110 group-hover:rotate-6">
                  <item.icon size={18} />
                </span>
                <h3 className="font-black text-white text-base tracking-tight">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-slate-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Ön Görüşme", desc: "İşletmenizin yapısını, büyüme planlarını ve mevcut vergi modelinizi dinliyoruz.", icon: MessageCircle },
    { title: "İhtiyaç Analizi", desc: "Mevcut beyannameleri, vergi risklerini ve teşvik imkanlarını tarıyoruz.", icon: SearchCheck },
    { title: "Süreç Kurulumu", desc: "Entegrasyonları kuruyor ve dijital evrak akışını başlatıyoruz.", icon: Sliders },
    { title: "Sürekli Raporlama", desc: "Muhasebenizi tutarken aylık gelir-gider ve vergi planlama raporlarını sunuyoruz.", icon: FileSpreadsheet }
  ];
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionIntro eyebrow="Süreç Adımları" title="Sıfırdan düzenli takibe geçiş yol haritası" />
        
        <div className="relative mt-20 grid gap-8 md:grid-cols-4">
          {/* Line connector for desktop */}
          <div className="absolute top-8 left-16 right-16 hidden h-0.5 border-t border-dashed border-slate-200 md:block pointer-events-none" />
          
          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center text-center group">
              <div className="relative">
                {/* Step badge */}
                <span className="absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 font-bold text-white text-[10px] shadow-sm border border-white">
                  0{index + 1}
                </span>
                {/* Step icon circle */}
                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white border-2 border-skybrand-500 text-skybrand-600 shadow-md group-hover:bg-skybrand-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-3">
                  <step.icon size={24} />
                </span>
              </div>
              <h3 className="mt-6 font-black text-navy-950 text-sm tracking-tight">{step.title}</h3>
              <p className="mt-2 text-[11px] leading-5 text-slate-500 font-semibold px-4">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderMini() {
  return (
    <section className="bg-skybrand-50/20 py-20 border-t border-b border-skybrand-100/20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:px-6">
        <div className="relative">
          <img
            className="h-[380px] w-full rounded-tr-[100px] rounded-bl-[100px] object-cover shadow-lg border border-slate-100"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=85"
            alt="Kurucu SMMM Soner Yılmaz profesyonel portre"
          />
          <div className="absolute -bottom-4 right-4 rounded-xl bg-white border border-slate-150 p-4 shadow-lg">
            <span className="block text-2xl font-black text-skybrand-600">15+ Yıllık</span>
            <span className="block text-[9px] font-bold text-slate-500 uppercase tracking-wider font-sans">Kurumsal Tecrübe</span>
          </div>
        </div>
        
        <div className="space-y-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-skybrand-600 bg-skybrand-50 px-3 py-1.5 rounded-lg shadow-sm inline-block">Kurucu Mali Müşavir</span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">Soner Yılmaz, SMMM</h2>
          <p className="text-xs leading-6 text-slate-600 font-medium">
            Marmara Üniversitesi İktisat Fakültesi mezunudur. Mali müşavirlik, vergi planlaması, şirket kuruluşları ve finansal raporlama alanlarında 15 yılı aşkın deneyime sahiptir. Dijital muhasebe süreçleri ve teknoloji odaklı girişimlerin vergilendirilmesi konusunda uzmanlaşmıştır. İstanbul SMMM Odası üyesidir.
          </p>
          
          {/* Signed Quote Block */}
          <div className="rounded-xl border border-skybrand-100/50 bg-white p-5 shadow-sm italic text-xs text-slate-700 leading-6 relative font-medium">
            <span className="absolute -top-3 left-4 text-4xl font-serif text-skybrand-200 select-none">“</span>
            "İşletmenizin mali yüklerini tamamen üzerimizden alıyor, devlet teşviklerini en üst düzeyde uygulayarak sadece büyümenize odaklanmanızı sağlıyoruz."
            <span className="block mt-2 not-italic font-bold text-navy-950 text-right">— Soner Yılmaz</span>
          </div>
          
          {/* Credentials Grid */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="rounded-xl border border-slate-100 bg-white p-3 text-center shadow-[0_2px_6px_rgba(15,23,42,0.01)] hover:border-skybrand-100 transition duration-300">
              <span className="block text-skybrand-600"><Award size={16} className="mx-auto mb-1.5" /></span>
              <span className="block text-[9px] font-black text-slate-800 uppercase tracking-wider">İSMMMO Üyesi</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3 text-center shadow-[0_2px_6px_rgba(15,23,42,0.01)] hover:border-skybrand-100 transition duration-300">
              <span className="block text-skybrand-600"><CheckCircle2 size={16} className="mx-auto mb-1.5" /></span>
              <span className="block text-[9px] font-black text-slate-800 uppercase tracking-wider">KGK Denetçi</span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-3 text-center shadow-[0_2px_6px_rgba(15,23,42,0.01)] hover:border-skybrand-100 transition duration-300">
              <span className="block text-skybrand-600"><BookOpen size={16} className="mx-auto mb-1.5" /></span>
              <span className="block text-[9px] font-black text-slate-800 uppercase tracking-wider">Marmara Mezunu</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectorPreview({ go }) {
  const getSectorIcon = (sector) => {
    switch (sector) {
      case "E-ticaret": return ShoppingBag;
      case "Yazılım ve teknoloji": return Cpu;
      case "Sağlık": return HeartPulse;
      case "İnşaat ve gayrimenkul": return Building2;
      case "Üretim ve sanayi": return Factory;
      case "İhracat ve ithalat": return Globe2;
      case "Perakende": return Store;
      case "Eğitim": return GraduationCap;
      default: return BriefcaseBusiness;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionIntro
          eyebrow="Sektörler"
          title="Her sektöre aynı mali şablon uygulanmaz"
          text="Gelir modeli, belge akışı, teşvik ihtimali ve vergisel riskler sektöre göre değişir. Sektörünüze özel yaklaşımı inceleyin."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.slice(0, 8).map((sector) => {
            const Icon = getSectorIcon(sector);
            return (
              <button 
                key={sector} 
                onClick={() => go("sectors")} 
                className="group rounded-xl border border-slate-100 p-5 text-left font-bold text-sm text-slate-800 hover:border-skybrand-500 hover:text-skybrand-600 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3 bg-slate-50/20 hover:bg-white"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-100 text-slate-500 group-hover:bg-skybrand-50 group-hover:text-skybrand-600 transition-colors duration-300 shrink-0 shadow-sm">
                  <Icon size={16} />
                </span>
                <span className="truncate font-black text-navy-950 tracking-tight text-xs uppercase tracking-wide">{sector}</span>
              </button>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <button onClick={() => go("sectors")} className="secondary-btn">
            Tüm Sektörleri Gör <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}

const blogPosts = [
  {
    id: 1,
    title: "E-Ticaret ve Sosyal Medya Gelirlerinin Vergilendirilmesi",
    summary: "Sosyal içerik üreticiliği istisnası, mikro ihracat KDV muafiyetleri ve e-ticaret mükellefiyet süreçlerine dair detaylı rehber.",
    category: "Vergi Rehberi",
    date: "08 Haziran 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Teknokent ve Ar-Ge Merkezleri Vergi Muafiyet Rehberi (2026)",
    summary: "Yazılım şirketleri ve teknoloji startupları için Kurumlar Vergisi istisnası, gelir vergisi stopaj desteği ve SGK teşviklerinin uygulanması.",
    category: "Mevzuat",
    date: "01 Haziran 2026",
    readTime: "7 dk okuma",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Limited Şirket mi, Anonim Şirket mi Kurmalıyım?",
    summary: "Sermaye miktarı, ortakların yasal sorumlulukları, hisse devir şartları ve vergi avantajları açısından LTD ve A.Ş. karşılaştırması.",
    category: "Girişimcilik",
    date: "24 Mayıs 2026",
    readTime: "4 dk okuma",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Genç Girişimci Desteği Şartları ve Avantajları Nelerdir?",
    summary: "29 yaşını doldurmamış girişimciler için 3 yıl boyunca 150.000 TL gelir vergisi muafiyeti ve 1 yıl Bağkur prim desteğinin kapsamı.",
    category: "Girişimcilik",
    date: "15 Mayıs 2026",
    readTime: "3 dk okuma",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Uzaktan Çalışanlar (Freelancer) İçin Şirket Kurma Rehberi",
    summary: "Yurtdışına yazılım, tasarım veya danışmanlık hizmeti veren freelancer'ların fatura kesmesi ve %80 kazanç istisnasından faydalanma detayları.",
    category: "Vergi Rehberi",
    date: "05 Mayıs 2026",
    readTime: "5 dk okuma",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  }
];

function KnowledgePreview() {
  const [activeCategory, setActiveCategory] = useState("Hepsi");

  const categories = ["Hepsi", "Vergi Rehberi", "Mevzuat", "Girişimcilik"];

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Hepsi") return blogPosts;
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = filteredPosts[0];
  const listPosts = filteredPosts.slice(1, 4);

  return (
    <section className="bg-slate-50/50 py-24 border-t border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-skybrand-600 bg-skybrand-50 px-3.5 py-1.5 rounded-lg shadow-sm">
              Bilgi Kütüphanesi
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Mali pusulanız olacak rehber makaleler
            </h2>
          </div>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition duration-300 ${
                  activeCategory === cat
                    ? "bg-skybrand-600 text-white shadow-md shadow-skybrand-600/15"
                    : "bg-white border border-slate-100 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 rounded-2xl bg-white border border-slate-100">
            <p className="text-xs text-slate-400 font-bold">Bu kategoride henüz yayınlanmış makale bulunmamaktadır.</p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] animate-scale-in">
            {/* Featured Post (Left Column) */}
            {featuredPost && (
              <div className="group rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[460px] relative">
                <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-skybrand-600 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="h-64 w-full overflow-hidden relative">
                  <img
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    src={featuredPost.image}
                    alt={featuredPost.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider text-white bg-skybrand-600 px-3 py-1.5 rounded-lg shadow-md">
                    {featuredPost.category}
                  </span>
                </div>
                
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-3">
                      <span className="flex items-center gap-1"><CalendarDays size={12} /> {featuredPost.date}</span>
                      <span className="flex items-center gap-1"><Clock3 size={12} /> {featuredPost.readTime}</span>
                    </div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-skybrand-600 transition">
                      {featuredPost.title}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-slate-500 font-medium line-clamp-2">
                      {featuredPost.summary}
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold text-skybrand-600 group-hover:translate-x-1.5 transition duration-300 flex items-center gap-1">
                      Makaleyi Oku <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* List Posts (Right Column) */}
            <div className="space-y-4">
              {listPosts.map((post) => (
                <div
                  key={post.id}
                  className="group rounded-2xl border border-slate-100 bg-white p-4 shadow-[0_2px_8px_rgba(15,23,42,0.01)] hover:shadow-lg hover:border-skybrand-100 transition duration-300 flex gap-4 items-center cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-skybrand-600 to-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <div className="h-20 w-20 rounded-xl overflow-hidden shrink-0 relative">
                    <img
                      className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
                      src={post.image}
                      alt={post.title}
                    />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <span className="text-[9px] font-black uppercase tracking-wider text-skybrand-600 block mb-1">
                      {post.category}
                    </span>
                    <h4 className="text-xs font-black text-slate-900 tracking-tight leading-snug group-hover:text-skybrand-600 transition truncate">
                      {post.title}
                    </h4>
                    <p className="mt-1 text-[10px] leading-4 text-slate-500 font-medium line-clamp-2">
                      {post.summary}
                    </p>
                    <div className="flex items-center justify-between text-[9px] font-bold text-slate-400 mt-2">
                      <div className="flex items-center gap-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-skybrand-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300"><ArrowRight size={12} /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function About() {
  return (
    <PageShell eyebrow="Kurumsal" title="Biz Kimiz?" text="Kurumsal güven ile kişisel uzmanlığı harmanlayan yapımız.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-slate-100 p-8 shadow-sm">
          <h2 className="text-2xl font-black text-navy-950 tracking-tight">Hizmet Anlayışımız</h2>
          <p className="mt-4 leading-7 text-xs text-slate-500 font-medium">
            Mali müşavirlik büromuz, mükelleflerine yalnızca vergi beyannamesi hazırlayan geleneksel bir yapıdan ziyade; işletmelerin dijital evrak süreçlerini yöneten, nakit akışını ve devlet teşviklerini takip eden modern bir mali çözüm ortağı olarak kurulmuştur. Kurucumuz Soner Yılmaz liderliğinde, teknolojiyi iş süreçlerimizin merkezine alıyoruz.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {principles.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 border border-slate-100/50">
                <ShieldCheck className="text-skybrand-650 shrink-0" size={18} />
                <span className="font-bold text-xs text-slate-800 tracking-tight">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="rounded-2xl bg-slate-950 p-8 text-white flex flex-col justify-between">
          <div>
            <img
              className="h-60 w-full rounded-xl object-cover shadow-inner"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85"
              alt="Profesyonel SMMM"
            />
            <h3 className="mt-6 text-xl font-black text-white">Soner Yılmaz</h3>
            <p className="text-xs font-semibold text-skybrand-400 mt-1">Kurucu SMMM / Vergi Danışmanı</p>
            <p className="mt-4 text-xs leading-6 text-slate-300 font-medium">
              Eğitim ve mesleki tecrübesiyle, vergi kanunlarındaki karmaşık süreçleri mükellefleri için sadeleştirmeyi hedefler.
            </p>
          </div>
          <a href="mailto:info@sonermusavirlik.com" className="inline-flex items-center gap-2 text-xs font-bold text-skybrand-400 mt-6 hover:text-white transition">
            Doğrudan İletişime Geç <ArrowRight size={14} />
          </a>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-black text-navy-950 tracking-tight text-center mb-8">Uzman Ekibimiz</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Elif Kaya", role: "Kıdemli Mali Müşavir", exp: "10+ Yıl tecrübe, vergi davaları ve beyanname süreçleri." },
            { name: "Can Demir", role: "Bordro ve SGK Uzmanı", exp: "Bordrolama, iş hukuku, kıdem tazminatları ve personel özlük takipleri." },
            { name: "Gizem Aksoy", role: "E-Dönüşüm Yöneticisi", exp: "E-Fatura, portal kurulumları ve müşteri entegrasyon süreçleri." }
          ].map((member) => (
            <div key={member.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-skybrand-50 text-skybrand-600">
                <UserRound size={22} />
              </div>
              <h3 className="mt-4 font-black text-slate-900 text-base">{member.name}</h3>
              <p className="text-xs font-bold text-skybrand-600 mt-0.5">{member.role}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500 font-medium">{member.exp}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 rounded-2xl border border-slate-100 p-8 shadow-sm">
        <h2 className="text-2xl font-black text-navy-950 tracking-tight mb-6">Ofislerimiz</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { name: "Merkez Ofis (İstanbul)", address: "Barbaros Mah. Dereboyu Cad. Ağaoğlu My Office, Ataşehir/İstanbul", contact: "Tel: +90 500 000 00 00" },
            { name: "Şube Ofis (Şişli)", address: "Büyükdere Cad. 19 Mayis Mah. Plaza No: 120, Şişli/İstanbul", contact: "E-posta: info@sonermusavirlik.com" }
          ].map((office) => (
            <div key={office.name} className="rounded-xl bg-slate-50/50 p-6 border border-slate-100">
              <MapPin className="text-skybrand-600" size={20} />
              <h3 className="mt-3 font-black text-navy-950 tracking-tight text-sm">{office.name}</h3>
              <p className="mt-2 text-xs text-slate-500 font-medium">{office.address}</p>
              <p className="mt-2 text-xs font-bold text-slate-800">{office.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function Services({ selectedService, setSelectedService, go }) {
  return (
    <PageShell eyebrow="Hizmetlerimiz" title="Süreç odaklı hizmet kapsamlarımız" text="İlgili hizmetin yasal kapsamını ve detaylarını incelemek için yan taraftan seçim yapabilirsiniz.">
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <div className="space-y-2">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left text-xs font-bold transition-all duration-200 ${
                selectedService.title === service.title 
                  ? "border-skybrand-500 bg-skybrand-50 text-skybrand-600 shadow-sm" 
                  : "border-slate-100 bg-white hover:bg-slate-50 text-slate-700"
              }`}
            >
              <span className={`grid h-8 w-8 place-items-center rounded-lg ${selectedService.title === service.title ? "bg-skybrand-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                <service.icon size={16} />
              </span>
              {service.title}
            </button>
          ))}
        </div>
        
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm animate-fade-in flex flex-col justify-between">
          <div>
            <selectedService.icon className="h-10 w-10 text-skybrand-600" />
            <h2 className="mt-4 text-2xl font-black text-slate-900 tracking-tight">{selectedService.title}</h2>
            <p className="mt-4 text-xs leading-7 text-slate-500 font-medium max-w-3xl">{selectedService.text}</p>
            
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {selectedService.items.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-slate-50 p-4 border border-slate-100/50">
                  <CheckCircle2 className="text-skybrand-600 shrink-0" size={16} />
                  <span className="font-bold text-xs text-slate-800 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 rounded-xl bg-slate-950 p-6 text-white">
            <h3 className="font-black text-sm text-white">Hizmet Kimler İçin Uygun?</h3>
            <p className="mt-2 text-xs leading-6 text-slate-350 font-medium">
              Yeni kurulan veya dijitalleşme sürecine girmiş limited ve anonim şirketler, genç girişimciler ve finansal durumunu anlık olarak izlemek isteyen KOBİ'ler için uygundur.
            </p>
            <button onClick={() => go("contact")} className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-3 text-xs font-bold text-slate-950 hover:bg-slate-100 transition">
              Kapsam Belirlemek İçin Görüşme Al <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function Sectors({ selectedSector, setSelectedSector, go }) {
  const detail = useMemo(() => {
    return sectorDetails[selectedSector] || {
      structure: "Sektörel faaliyet hacmi, fatura akışı ve genel mevzuat gerekliliklerinin analizi.",
      problems: "Genel mevzuat değişiklikleri, belge teslim gecikmeleri ve risk yönetimi sorunları.",
      duties: "Dönemsel beyannamelerin hazırlanması, defterlerin yasal takibi ve kontrolleri.",
      incentives: "Personel istihdam indirimleri ve SGK prim teşvikleri.",
      services: "Genel beyanname takibi, bilanço analizleri ve vergi planlaması danışmanlığı.",
      faq: "Soru: Sektörüm için teşvik var mı? Cevap: Yaş, istihdam ve yatırım türüne göre SGK teşvikleri mevcuttur."
    };
  }, [selectedSector]);

  return (
    <PageShell eyebrow="Sektörel Muhasebe" title="Sektöre özel muhasebe yaklaşımı" text="Gelir modeli ve vergisel riskler sektöre göre değişir. Aşağıdan sektörünüzü seçip ilgili yasal takipleri inceleyebilirsiniz.">
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <div className="grid gap-2 max-h-[600px] overflow-y-auto pr-2">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`rounded-xl border p-4 text-left text-xs font-bold transition ${
                selectedSector === sector 
                  ? "border-skybrand-500 bg-skybrand-50 text-skybrand-600 shadow-sm" 
                  : "border-slate-100 bg-white hover:bg-slate-50 text-slate-700"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>
        
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm animate-fade-in">
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-skybrand-50 text-skybrand-600">
              <SearchCheck size={24} />
            </span>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-skybrand-600">Sektörel Uzmanlık</span>
              <h2 className="text-3xl font-black text-navy-950 tracking-tight">{selectedSector}</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 transition hover:border-skybrand-100">
              <h3 className="font-black text-navy-950 text-xs uppercase tracking-wider">Sektörün Mali Yapısı</h3>
              <p className="mt-3 text-xs leading-5 text-slate-500 font-medium">{detail.structure}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 transition hover:border-skybrand-100">
              <h3 className="font-black text-red-950 text-xs uppercase tracking-wider">Karşılaşılan Yaygın Sorunlar</h3>
              <p className="mt-3 text-xs leading-5 text-slate-500 font-medium">{detail.problems}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 transition hover:border-skybrand-100">
              <h3 className="font-black text-navy-950 text-xs uppercase tracking-wider">Vergisel Yükümlülükler</h3>
              <p className="mt-3 text-xs leading-5 text-slate-500 font-medium">{detail.duties}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 transition hover:border-skybrand-100">
              <h3 className="font-black text-emerald-950 text-xs uppercase tracking-wider">Kullanılabilecek Teşvikler</h3>
              <p className="mt-3 text-xs leading-5 text-slate-500 font-medium">{detail.incentives}</p>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-6 transition hover:border-skybrand-100">
              <h3 className="font-black text-skybrand-950 text-xs uppercase tracking-wider">Sunulan Özel Hizmetler</h3>
              <p className="mt-3 text-xs leading-5 text-slate-500 font-medium">{detail.services}</p>
            </div>
            <div className="rounded-xl border border-skybrand-200 bg-skybrand-50/25 p-6 transition hover:border-skybrand-300">
              <h3 className="font-black text-skybrand-900 text-xs uppercase tracking-wider">Pratik Soru-Cevap</h3>
              <p className="mt-3 text-xs leading-5 text-skybrand-950 font-semibold">{detail.faq}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button onClick={() => go("contact")} className="primary-btn">
              Sektöre Özel Görüşme Planla <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function CompanySetup({ go }) {
  const companyTypes = ["Şahıs Şirketi", "Limited Şirket (LTD)", "Anonim Şirket (A.Ş.)", "Şube Kuruluşları", "Yabancı Ortaklı Şirketler"];
  return (
    <PageShell eyebrow="Kuruluş Süreçleri" title="Doğru Şirket Türü ile Güçlü Başlangıç" text="Ticaret sicili, vergi dairesi, e-imza, mali mühür ve e-fatura başvuruları tek akışta planlanır.">
      <div className="grid gap-4 md:grid-cols-5">
        {companyTypes.map((type) => (
          <div key={type} className="rounded-xl border border-slate-100 bg-white p-5 text-center text-xs font-black text-navy-950 shadow-sm">{type}</div>
        ))}
      </div>
      
      <div className="mt-8 rounded-2xl bg-slate-50/50 border border-slate-100 p-8">
        <h2 className="text-xl font-black text-navy-950 tracking-tight">Adım Adım Şirket Kurulumu</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            "1. Şirket Türünün Belirlenmesi", 
            "2. Gerekli Evrakların Hazırlanması", 
            "3. Ticaret Sicili & Vergi Açılışı", 
            "4. E-İmza & Mali Mühür Temini", 
            "5. E-Fatura/E-Arşiv Başvurusu", 
            "6. İlk Muhasebe Düzeninin Kurulması"
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-100 bg-white p-5 text-xs font-bold text-slate-800 shadow-sm">{item}</div>
          ))}
        </div>
        <button onClick={() => go("contact")} className="mt-8 primary-btn">Kuruluş Danışmanlığı Al <ArrowRight size={16} /></button>
      </div>
    </PageShell>
  );
}

function Knowledge() {
  return (
    <PageShell eyebrow="Bilgi Merkezi" title="Mevzuat Kütüphanesi & Duyurular" text="Blog mantığından daha profesyonel, kategori bazlı pratik bilgi arşivi.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {knowledgeCategories.map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm bg-white">
            <BookOpen className="text-skybrand-600" size={22} />
            <h2 className="mt-4 text-base font-black text-slate-900 tracking-tight">{item.title}</h2>
            <p className="mt-3 text-xs leading-5 text-slate-500 font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 rounded-2xl bg-slate-950 p-8 text-white border border-white/5">
        <h2 className="text-xl font-black text-white tracking-tight">Harici Resmi Bağlantılar</h2>
        <p className="text-xs text-slate-400 mt-2">İşlemlerinizde kullanabileceğiniz e-devlet ve resmi beyanname portalları.</p>
        
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Gelir İdaresi Başkanlığı", url: "https://www.gib.gov.tr" },
            { name: "SGK (Sosyal Güvenlik Kurumu)", url: "https://www.sgk.gov.tr" },
            { name: "Resmi Gazete", url: "https://www.resmigazete.gov.tr" },
            { name: "Mersis / Ticaret Sicili", url: "https://mersis.gtb.gov.tr" },
            { name: "TÜRMOB", url: "https://www.turmob.org.tr" },
            { name: "GİB E-Fatura Portalı", url: "https://efatura.gib.gov.tr" },
            { name: "e-Devlet Kapısı", url: "https://www.turkiye.gov.tr" },
            { name: "İstanbul SMMM Odası", url: "https://www.ismmmo.org.tr" }
          ].map((item) => (
            <a 
              key={item.name} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-between rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-xs font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              <span>{item.name}</span>
              <Globe2 size={14} className="text-skybrand-400 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <PageShell eyebrow="SSS" title="Sık Sorulan Sorular" text="Şirket kuruluşu, devir, dijital evrak takipleri ve danışmanlık süreçlerine dair merak edilen temel başlıklar.">
      <div className="mx-auto max-w-3xl space-y-3">
        {faq.map(([q, a], index) => (
          <div key={q} className="rounded-xl border border-slate-100 bg-white overflow-hidden shadow-sm">
            <button 
              onClick={() => setOpen(open === index ? -1 : index)} 
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-navy-950 hover:bg-slate-50 transition"
            >
              {q} <ChevronDown className={`shrink-0 transition duration-300 ${open === index ? "rotate-180 text-skybrand-600" : "text-slate-400"}`} size={18} />
            </button>
            {open === index && (
              <div className="px-5 pb-5 pt-1 text-xs leading-6 text-slate-500 font-medium bg-slate-50/50 border-t border-slate-50 animate-fade-in">
                {a}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageShell>
  );
}

function Contact({ title = "İletişim", compact = false }) {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <section className={`${compact ? "bg-white py-16" : "py-16"}`}>
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <SectionIntro eyebrow="İletişim" title={title} text="Aşağıdaki formu doldurarak talebinizi iletebilirsiniz. En kısa sürede geri dönüş yapılacaktır." />
        
        {success ? (
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/20 p-8 text-center shadow-sm max-w-2xl mx-auto my-12 animate-scale-in">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="mt-5 text-xl font-black text-slate-900">Talebiniz Başarıyla Alındı!</h3>
            <p className="mt-3 text-xs text-slate-500 leading-6 font-medium max-w-md mx-auto">
              Mesajınız başarıyla kurucu mali müşavirimiz Soner Yılmaz'a iletilmiştir. En kısa sürede dönüş sağlanacaktır.
            </p>
            <button onClick={() => setSuccess(false)} className="mt-6 primary-btn">
              Yeni Mesaj Gönder
            </button>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr]">
            <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:grid-cols-2">
              {[
                { label: "Ad Soyad", type: "text", req: true },
                { label: "Telefon", type: "tel", req: true },
                { label: "E-posta Adresi", type: "email", req: true },
                { label: "Firma Adı", type: "text", req: false },
                { label: "Şehir", type: "text", req: false },
                { label: "Faaliyet Alanı", type: "text", req: false }
              ].map((field) => (
                <label key={field.label} className="grid gap-1.5 text-xs font-bold text-slate-700">
                  {field.label} {field.req && <span className="text-red-500">*</span>}
                  <input type={field.type} required={field.req} className="form-field" placeholder={field.label} />
                </label>
              ))}
              
              <label className="grid gap-1.5 text-xs font-bold text-slate-700">
                Şirket Türü
                <select className="form-field">
                  <option>Seçiniz</option>
                  <option>Şahıs Şirketi</option>
                  <option>Limited Şirket</option>
                  <option>Anonim Şirket</option>
                </select>
              </label>
              
              <label className="grid gap-1.5 text-xs font-bold text-slate-700">
                Çalışan Sayısı
                <select className="form-field">
                  <option>Seçiniz</option>
                  <option>0-5 Kişi</option>
                  <option>6-25 Kişi</option>
                  <option>26+ Kişi</option>
                </select>
              </label>
              
              <label className="grid gap-1.5 text-xs font-bold text-slate-700 sm:col-span-2">
                Talep Edilen Hizmet
                <select className="form-field">
                  {["Şirket Kuruluşu", "Mali Müşavir Değişikliği", "Muhasebe Hizmeti", "Vergi Danışmanlığı", "Bordro ve SGK", "E-dönüşüm", "Finansal Raporlama", "Teşvik Danışmanlığı", "Diğer"].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              
              <label className="grid gap-1.5 text-xs font-bold text-slate-700 sm:col-span-2">
                Kısa Açıklama <span className="text-red-500">*</span>
                <textarea required className="form-field min-h-24" placeholder="Talebinizi detaylandırarak yazın" />
              </label>
              
              <label className="flex items-start gap-2.5 text-xs leading-5 text-slate-500 font-medium sm:col-span-2 select-none cursor-pointer">
                <input type="checkbox" required className="mt-1 rounded border-slate-350 text-skybrand-600 focus:ring-skybrand-500" />
                <span>KVKK aydınlatma metnini okudum ve başvuru amacıyla iletişime geçilmesini kabul ediyorum.</span>
              </label>
              
              <label className="flex items-start gap-2.5 text-xs leading-5 text-slate-500 font-medium sm:col-span-2 select-none cursor-pointer">
                <input type="checkbox" className="mt-1 rounded border-slate-350 text-skybrand-600 focus:ring-skybrand-500" />
                <span>Bülten ve güncel vergi değişiklikleri hakkında e-posta almayı kabul ediyorum.</span>
              </label>
              
              <button disabled={submitting} className="primary-btn sm:col-span-2 justify-center" type="submit">
                {submitting ? "Gönderiliyor..." : "İletişim Formunu Gönder"} <ArrowRight size={16} />
              </button>
            </form>
            
            <div className="rounded-2xl bg-slate-950 p-8 text-white flex flex-col justify-between border border-white/5 shadow-lg">
              <div>
                <h3 className="text-xl font-black text-white">Doğrudan İletişim</h3>
                <p className="text-xs text-slate-400 mt-1">Hızlı koordinasyon için aşağıdaki kanalları kullanabilirsiniz.</p>
                <div className="mt-6 space-y-3">
                  <a className="contact-line" href="tel:+905000000000"><Phone size={16} className="text-skybrand-400 shrink-0" /> +90 500 000 00 00</a>
                  <a className="contact-line" href="mailto:info@sonermusavirlik.com"><Mail size={16} className="text-skybrand-400 shrink-0" /> info@sonermusavirlik.com</a>
                  <a className="contact-line" href="https://wa.me/905000000000" target="_blank" rel="noopener noreferrer"><MessageCircle size={16} className="text-skybrand-400 shrink-0" /> WhatsApp'tan Mesaj Gönder</a>
                  <div className="contact-line"><MapPin size={16} className="text-skybrand-400 shrink-0" /> Barbaros Mah. Dereboyu Cad. Ağaoğlu My Office, Ataşehir/İstanbul</div>
                  <div className="contact-line"><Clock3 size={16} className="text-skybrand-400 shrink-0" /> Hafta İçi: 09:00 - 18:00</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10 text-[10px] font-semibold text-slate-400 text-center">
                Soner Mali Müşavirlik Büro Ruhsat No: SMMM-12345
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function CustomerLogin({ onClose }) {
  const [loggingIn, setLoggingIn] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setError("");
    setLoggingIn(true);
    setTimeout(() => {
      setLoggingIn(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl border border-slate-100 animate-scale-in">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h2 className="text-xl font-black text-navy-950">Müşteri Giriş Paneli</h2>
          <button onClick={onClose} className="rounded-lg border border-slate-150 p-2 hover:bg-slate-50 transition"><X size={18} /></button>
        </div>
        
        {success ? (
          <div className="py-8 text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="mt-4 text-lg font-black text-slate-950">Giriş Başarılı!</h3>
            <p className="mt-2 text-sm text-slate-600 font-medium">Müşteri portalına yönlendiriliyorsunuz...</p>
            <button onClick={() => { setSuccess(false); onClose(); }} className="mt-6 primary-btn w-full">Paneli Kapat</button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="mt-4 space-y-4">
            <p className="text-xs leading-5 text-slate-500 bg-skybrand-50/50 border border-skybrand-100/50 rounded-lg p-3">
              Mali tablolarınızı, beyannamelerinizi ve SGK tahakkuklarınızı dijital olarak takip etmek için giriş yapın.
            </p>
            {error && <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-100 rounded-lg p-2">{error}</p>}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">E-posta Adresi</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-field" 
                placeholder="Örn: sirket@firma.com" 
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Şifre</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-field" 
                placeholder="••••••••" 
              />
            </div>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input type="checkbox" className="rounded border-slate-300 text-skybrand-600" /> Beni Hatırla
              </label>
              <button type="button" className="text-skybrand-600 hover:underline">Şifremi Unuttum</button>
            </div>
            <button type="submit" disabled={loggingIn} className="primary-btn w-full justify-center">
              {loggingIn ? "Doğrulanıyor..." : "Müşteri Sistemine Giriş Yap"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function PageShell({ eyebrow, title, text, children }) {
  return (
    <div className="animate-fade-in">
      <section className="bg-slate-950 py-16 text-white border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <p className="text-xs font-black uppercase tracking-widest text-skybrand-400">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl text-white">{title}</h1>
          {text && <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-350 font-medium">{text}</p>}
        </div>
      </section>
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">{children}</div>
      </section>
    </div>
  );
}

function Footer({ go }) {
  return (
    <footer className="bg-slate-950 py-16 text-white border-t border-white/5 mt-auto">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-4 lg:px-6">
        <div>
          <div className="text-lg font-black tracking-tight flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded bg-skybrand-600 text-white text-xs font-black">SM</span>
            Soner Mali Müşavirlik
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-400 font-medium">
            Muhasebe, vergi danışmanlığı, şirket kuruluşu ve finansal raporlama süreçlerinde kurumsal, güvenilir ve dijital çözüm ortağınız.
          </p>
        </div>
        <div>
          <h3 className="font-black text-sm tracking-tight text-white">Menü</h3>
          <div className="mt-4 grid gap-2">
            {navItems.slice(0, 6).map((item) => (
              <button key={item.page} onClick={() => go(item.page)} className="text-left text-xs text-slate-400 hover:text-white transition">{item.label}</button>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black text-sm tracking-tight text-white">Hukuki Alanlar</h3>
          <div className="mt-4 grid gap-2 text-xs text-slate-400 font-medium">
            {["KVKK Aydınlatma Metni", "Çerez Politikası", "Gizlilik Politikası", "Açık Rıza Metni", "Ticari Elektronik İleti Onayı"].map((item) => (
              <span key={item} className="cursor-pointer hover:text-white transition">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-black text-sm tracking-tight text-white">Dil Seçenekleri</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Türkçe", "English", "Arapça", "Русский"].map((lang) => (
              <span key={lang} className="rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-xs font-bold cursor-pointer hover:bg-white/10 transition">{lang}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 lg:px-6 mt-12 pt-8 border-t border-white/5 text-[10px] font-semibold text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>© 2026 Soner Mali Müşavirlik. Tüm Hakları Saklıdır.</span>
        <span>Tasarım & Altyapı Entegrasyonu: Antigravity AI</span>
      </div>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
