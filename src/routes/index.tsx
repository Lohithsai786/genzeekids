import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import heroKids from "@/assets/hero-kids.jpg";
import logoAsset from "@/assets/gen-zee-logo.webp.asset.json";
import indoorPlayAsset from "@/assets/indoor-play.jpg.asset.json";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import {
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Heart,
  GraduationCap,
  Palette,
  Brain,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Users,
  Star,
  MessageCircle,
  Menu,
  X,
  Baby,
  School,
  Smile,
  Leaf,
  Lightbulb,
  Send,
  ArrowRight,
} from "lucide-react";

const logo = logoAsset.url;
const indoorPlay = indoorPlayAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gen Zee Kids Pre School — Admissions Open 2026-27 | Tirupati" },
      {
        name: "description",
        content:
          "Joyful preschool in Tirupati offering Play Group, LKG, UKG & Day Care. Safe, caring & activity-based learning. Admissions open for 2026-27.",
      },
      { property: "og:title", content: "Gen Zee Kids Pre School — Tirupati" },
      {
        property: "og:description",
        content: "A joyful space where children discover, learn, create and thrive. Admissions Open 2026-27.",
      },
    ],
  }),
  component: Index,
});

const PHONE_1 = "8333806350";
const PHONE_2 = "8333806358";
const ADDRESS =
  "19-12-532, Bairagipatteda, Near Padmavathi Park, Tirupati – 517501";
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Gen Zee Kids Pre School, Bairagipatteda, Padmavathi Park, Tirupati",
)}`;
const FB_URL =
  "https://www.facebook.com/permalink.php?story_fbid=pfbid0R4cWzJ5rxp6utop6MewxGmZfv1FgFNTTRGpxYhmPxdwP7He3BJYkpWPkaVvCEGZpl&id=61590375818143";
const IG_URL =
  "https://www.instagram.com/p/DZWtVhfz4G9/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==";
const WHATSAPP_URL = `https://wa.me/91${PHONE_1}?text=${encodeURIComponent(
  "Hi, I'm interested in admission at Gen Zee Kids Pre School.",
)}`;

function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Gallery />
      <WhyUs />
      <Testimonials />
      <Social />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? "shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)]" : ""}`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <img src={logo} alt="Gen Zee Kids Pre School logo" width={48} height={48} className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0" />
          <div className="leading-tight min-w-0">
            <div className="font-display font-bold text-primary text-base sm:text-lg truncate">Gen Zee Kids</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground truncate">Pre School</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-foreground/80">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:+91${PHONE_1}`}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-2 text-sm font-bold shadow-warm hover:scale-105 transition"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-muted text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t bg-white animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-xl text-foreground font-semibold hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:+91${PHONE_1}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-secondary text-secondary-foreground px-4 py-3 font-bold"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-10 sm:pt-16 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-sky/50 blob-shape blur-2xl opacity-70" />
      <div className="pointer-events-none absolute top-40 -right-24 w-96 h-96 bg-sunshine/50 blob-shape blur-2xl opacity-70" />
      <div className="container relative mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center lg:text-left animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-bubblegum text-bubblegum-foreground px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-warm">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Open 2026-27
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-foreground">
            Where <span className="text-primary">Little Dreams</span> Begin and{" "}
            <span className="text-secondary">Bright Futures</span>{" "}
            <span className="text-mint-foreground bg-mint px-2 rounded-lg">Grow</span>.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            A safe, joyful and nurturing preschool where children learn, play,
            explore and flourish every day.
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href={`tel:+91${PHONE_1}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-bold shadow-soft hover:scale-105 transition"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-6 py-3 font-bold shadow-warm hover:scale-105 transition"
            >
              <MapPin className="w-4 h-4" /> Get Directions
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-card border-2 border-bubblegum text-bubblegum px-6 py-3 font-bold hover:bg-bubblegum hover:text-bubblegum-foreground transition"
            >
              <MessageCircle className="w-4 h-4" /> Contact Us
            </a>
          </div>
          <div className="flex items-center gap-4 justify-center lg:justify-start pt-4 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[0,1,2,3].map(i => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-background ${["bg-primary","bg-secondary","bg-bubblegum","bg-mint"][i]}`} />
              ))}
            </div>
            <span>Loved by 100+ happy families in Tirupati</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blob-shape -rotate-3" />
          <img
            src={heroKids}
            alt="Happy preschool children learning and playing at Gen Zee Kids"
            width={1536}
            height={1024}
            className="relative rounded-[2.5rem] shadow-soft w-full h-auto object-cover border-4 border-card"
          />
          <div className="absolute -bottom-5 -left-3 sm:left-6 bg-card rounded-2xl shadow-warm px-4 py-3 flex items-center gap-3 animate-float">
            <div className="w-10 h-10 rounded-full bg-mint flex items-center justify-center">
              <Heart className="w-5 h-5 text-mint-foreground" />
            </div>
            <div className="text-xs">
              <div className="font-bold text-foreground">Safe & Caring</div>
              <div className="text-muted-foreground">Hygienic Campus</div>
            </div>
          </div>
          <div className="absolute -top-4 right-2 sm:right-8 bg-card rounded-2xl shadow-soft px-4 py-3 flex items-center gap-3 animate-float [animation-delay:1s]">
            <Star className="w-5 h-5 text-secondary fill-secondary" />
            <div className="text-xs">
              <div className="font-bold text-foreground">Activity-Based</div>
              <div className="text-muted-foreground">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
        <SectionTag color="mint">About Us</SectionTag>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
          Where learning begins with <span className="text-primary">fun</span>,{" "}
          <span className="text-secondary">care</span> and{" "}
          <span className="text-bubblegum">creativity</span>.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Welcome to <strong className="text-foreground">Gen Zee Kids Pre School</strong>.
          Our mission is to provide a safe, nurturing, and engaging environment that helps
          children develop confidence, creativity, communication skills, and a love for
          learning. We focus on activity-based learning and overall child development.
        </p>
      </div>
    </section>
  );
}

const PROGRAMS = [
  {
    name: "Play Group",
    age: "1.5+ Years",
    color: "bg-bubblegum text-bubblegum-foreground",
    accent: "bg-bubblegum/15",
    desc: "Learning through play and exploration.",
    items: ["Interactive play", "Sensory activities", "Music & movement", "Social interaction", "Early development"],
    icon: Heart,
  },
  {
    name: "LKG",
    age: "3+ Years",
    color: "bg-mint text-mint-foreground",
    accent: "bg-mint/30",
    desc: "Building strong foundations through fun.",
    items: ["Alphabets", "Numbers", "Basic writing", "Communication", "Creative activities"],
    icon: BookOpen,
  },
  {
    name: "UKG",
    age: "4+ Years",
    color: "bg-primary text-primary-foreground",
    accent: "bg-primary/15",
    desc: "Preparing for future academic success.",
    items: ["Reading readiness", "Writing skills", "Maths concepts", "Problem solving", "Confidence"],
    icon: GraduationCap,
  },
  {
    name: "Day Care",
    age: "All Ages",
    color: "bg-secondary text-secondary-foreground",
    accent: "bg-secondary/15",
    desc: "Safe and caring supervision.",
    items: ["Safe environment", "Caring staff", "Activity time", "Rest time", "Peace of mind"],
    icon: ShieldCheck,
  },
];

function Programs() {
  return (
    <section id="programs" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag color="primary">Our Programs</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">Programs designed for every little learner</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROGRAMS.map((p) => (
            <div
              key={p.name}
              className="group bg-card rounded-3xl p-6 shadow-soft hover:-translate-y-2 transition-transform border-2 border-transparent hover:border-primary/30"
            >
              <div className={`w-14 h-14 rounded-2xl ${p.color} flex items-center justify-center mb-4 group-hover:rotate-6 transition`}>
                <p.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold">{p.name}</h3>
              <div className={`inline-block ${p.accent} text-xs font-bold px-2 py-1 rounded-full mt-1 mb-3`}>
                {p.age}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <ul className="space-y-1.5">
                {p.items.map((i) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-secondary mt-1 shrink-0" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const FACILITIES = [
  { icon: ShieldCheck, title: "Safe Campus", text: "Secure, hygienic spaces designed for young children.", color: "bg-primary text-primary-foreground" },
  { icon: Baby, title: "Age-Appropriate Care", text: "Gentle routines for preschoolers and day-care children.", color: "bg-bubblegum text-bubblegum-foreground" },
  { icon: School, title: "Smart Classrooms", text: "Bright classrooms that support play-based learning.", color: "bg-secondary text-secondary-foreground" },
  { icon: Smile, title: "Indoor Play Zone", text: "Colorful activity corners for movement and imagination.", color: "bg-mint text-mint-foreground" },
  { icon: Leaf, title: "Healthy Atmosphere", text: "Clean surroundings that help children feel comfortable.", color: "bg-sunshine text-sunshine-foreground" },
  { icon: Lightbulb, title: "Creative Learning", text: "Activities that build curiosity, confidence and expression.", color: "bg-sky text-sky-foreground" },
];

function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-sunshine/20 via-background to-mint/25">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div className="space-y-5">
            <SectionTag color="sunshine">Facilities</SectionTag>
            <h2 className="text-3xl sm:text-4xl font-bold">A bright, safe and joyful place for every child</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our preschool environment is thoughtfully planned for comfort, safety,
              creativity and confident early learning.
            </p>
            <img
              src={indoorPlay}
              alt="Indoor play area at Gen Zee Kids Pre School"
              width={900}
              height={650}
              loading="lazy"
              className="rounded-[2rem] shadow-soft w-full aspect-[4/3] object-cover border-4 border-card"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {FACILITIES.map((facility) => (
              <div key={facility.title} className="bg-card rounded-3xl p-5 shadow-soft hover:-translate-y-1 transition-transform">
                <div className={`w-12 h-12 rounded-2xl ${facility.color} flex items-center justify-center mb-4`}>
                  <facility.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{facility.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Heart, title: "Loving & Caring Environment", color: "bg-bubblegum text-bubblegum-foreground" },
  { icon: GraduationCap, title: "Experienced & Qualified Teachers", color: "bg-mint text-mint-foreground" },
  { icon: Palette, title: "Activity Based Learning", color: "bg-sunshine text-sunshine-foreground" },
  { icon: Brain, title: "Focus on Overall Development", color: "bg-primary text-primary-foreground" },
  { icon: ShieldCheck, title: "Safe, Secure & Hygienic Campus", color: "bg-secondary text-secondary-foreground" },
  { icon: Star, title: "Individual Attention for Every Child", color: "bg-sky text-sky-foreground" },
  { icon: BookOpen, title: "Fun Learning Activities", color: "bg-bubblegum text-bubblegum-foreground" },
  { icon: Users, title: "Parent Partnership", color: "bg-mint text-mint-foreground" },
];

function WhyUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag color="secondary">Why Choose Us</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">
            Everything your child needs to flourish
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {WHY.map((w) => (
            <div key={w.title} className="bg-card rounded-3xl p-5 text-center shadow-soft hover:scale-105 transition">
              <div className={`w-14 h-14 ${w.color} rounded-2xl mx-auto flex items-center justify-center mb-3`}>
                <w.icon className="w-7 h-7" />
              </div>
              <div className="font-bold text-sm leading-snug">{w.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const JOURNEY = [
  { step: "Play Group", caption: "Explore", color: "bg-bubblegum text-bubblegum-foreground" },
  { step: "LKG", caption: "Learn", color: "bg-mint text-mint-foreground" },
  { step: "UKG", caption: "Grow", color: "bg-primary text-primary-foreground" },
  { step: "Beyond", caption: "Shine", color: "bg-secondary text-secondary-foreground" },
];

function Journey() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky/20 via-background to-sunshine/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag color="primary">Learning Journey</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">A smooth journey from Play Group to UKG</h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-2">
          {JOURNEY.map((j, i) => (
            <div key={j.step} className="flex items-center gap-3 sm:gap-2">
              <div className={`${j.color} rounded-2xl px-5 py-4 shadow-warm text-center min-w-[120px]`}>
                <div className="font-bold text-lg">{j.step}</div>
                <div className="text-xs uppercase tracking-wider opacity-90">{j.caption}</div>
              </div>
              {i < JOURNEY.length - 1 && (
                <ArrowRight className="w-6 h-6 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { src: gallery1, label: "Play Area" },
  { src: gallery2, label: "Art & Craft" },
  { src: gallery3, label: "Learning Sessions" },
  { src: gallery4, label: "Day Care Activities" },
];

function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag color="bubblegum">Gallery</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">A peek inside our happy campus</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((g) => (
            <div key={g.label} className="relative group overflow-hidden rounded-3xl shadow-soft aspect-square">
              <img
                src={g.src}
                alt={g.label}
                width={800}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-card font-bold">{g.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 text-center text-sm">
          {["Classroom Activities","Play Area","Art & Craft","Learning Sessions","Group Activities","Day Care","Student Engagement","Indoor Learning"].map((t) => (
            <span key={t} className="bg-muted rounded-full px-3 py-2 font-semibold text-muted-foreground">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHTS = [
  "Safe Campus", "Hygienic Environment", "Activity-Based Learning", "Qualified Teachers",
  "Child-Friendly Classrooms", "Creative Development", "Emotional Development", "Social Development",
];

function Highlights() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-secondary/30 blob-shape" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-bubblegum/30 blob-shape" />
      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold">School Highlights</h2>
          <p className="opacity-90 mt-2">What makes Gen Zee a wonderful place to begin.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {HIGHLIGHTS.map((h) => (
            <div key={h} className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-4 flex items-center gap-2 border border-primary-foreground/20">
              <Sparkles className="w-4 h-4 text-accent shrink-0" />
              <span className="font-semibold text-sm">{h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Lakshmi P.", role: "Mother of Aarav (LKG)", text: "The teachers are so caring and patient. My son loves going to school every day — he's grown in confidence and creativity!" },
  { name: "Ravi Kumar", role: "Father of Anika (Play Group)", text: "Safe, hygienic and full of joyful activities. We can see real development in our daughter's communication and social skills." },
  { name: "Sireesha M.", role: "Mother of Vihaan (UKG)", text: "Wonderful learning environment with the perfect mix of fun and academics. Highly recommend Gen Zee Kids to every parent in Tirupati." },
];

function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <SectionTag color="mint">Parent Testimonials</SectionTag>
          <h2 className="text-3xl sm:text-4xl font-bold mt-4">Loved by parents across Tirupati</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-card rounded-3xl p-6 shadow-soft border border-border/60">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-bubblegum" />
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Social() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
        <SectionTag color="bubblegum">Stay Connected</SectionTag>
        <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-3">Follow Gen Zee Kids Pre School</h2>
        <p className="text-muted-foreground mb-8">See our daily adventures, events and happy moments on social media.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={FB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-[#1877F2] text-white px-6 py-4 font-bold shadow-soft hover:scale-105 transition"
          >
            <Facebook className="w-6 h-6" /> Facebook
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white px-6 py-4 font-bold shadow-warm hover:scale-105 transition"
          >
            <Instagram className="w-6 h-6" /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-primary to-sky text-primary-foreground rounded-[2.5rem] p-8 sm:p-12 shadow-soft relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-sunshine/40 blob-shape" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-bubblegum/40 blob-shape" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionTag color="sunshine">Visit Us</SectionTag>
              <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">Come say hello!</h2>
              <p className="opacity-90 mb-6">We'd love to show you around our campus. Admissions Open 2026-27.</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                  <span>{ADDRESS}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 shrink-0" />
                  <a href={`tel:+91${PHONE_1}`} className="hover:underline">+91 {PHONE_1.slice(0,5)} {PHONE_1.slice(5)}</a>
                  <span className="opacity-60">|</span>
                  <a href={`tel:+91${PHONE_2}`} className="hover:underline">+91 {PHONE_2.slice(0,5)} {PHONE_2.slice(5)}</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`tel:+91${PHONE_1}`} className="bg-card text-foreground rounded-2xl p-4 font-bold flex items-center gap-3 hover:scale-[1.02] transition shadow-warm">
                <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center"><Phone className="w-5 h-5"/></div>
                Call Now
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-card text-foreground rounded-2xl p-4 font-bold flex items-center gap-3 hover:scale-[1.02] transition shadow-warm">
                <div className="w-10 h-10 rounded-xl bg-mint text-mint-foreground flex items-center justify-center"><MessageCircle className="w-5 h-5"/></div>
                WhatsApp Us
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="bg-card text-foreground rounded-2xl p-4 font-bold flex items-center gap-3 hover:scale-[1.02] transition shadow-warm">
                <div className="w-10 h-10 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center"><MapPin className="w-5 h-5"/></div>
                Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Gen Zee Kids logo" width={40} height={40} className="rounded-full bg-background p-1" />
            <div>
              <div className="font-display font-bold text-lg">Gen Zee Kids Pre School</div>
              <div className="text-xs opacity-70">Play • Learn • Grow • Shine</div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-bold mt-2">
            <Sparkles className="w-3 h-3" /> Admissions Open 2026-27
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <p className="text-sm opacity-80 mb-2">{ADDRESS}</p>
          <p className="text-sm opacity-80">
            <a href={`tel:+91${PHONE_1}`} className="hover:underline">+91 {PHONE_1}</a> · <a href={`tel:+91${PHONE_2}`} className="hover:underline">+91 {PHONE_2}</a>
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-3">Follow Us</h3>
          <div className="flex gap-3">
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 mt-10 pt-6 border-t border-background/10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} Gen Zee Kids Pre School. All rights reserved.
      </div>
    </footer>
  );
}

function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:+91${PHONE_1}`}
        aria-label="Call Gen Zee Kids Pre School"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-soft flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Gen Zee Kids Pre School"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-mint text-mint-foreground shadow-warm flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
      </a>
    </div>
  );
}

function SectionTag({ children, color }: { children: ReactNode; color: "primary" | "secondary" | "mint" | "bubblegum" | "sunshine" }) {
  const map: Record<string,string> = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/15 text-secondary",
    mint: "bg-mint text-mint-foreground",
    bubblegum: "bg-bubblegum/15 text-bubblegum",
    sunshine: "bg-sunshine text-sunshine-foreground",
  };
  return (
    <span className={`inline-block ${map[color]} px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest`}>
      {children}
    </span>
  );
}
