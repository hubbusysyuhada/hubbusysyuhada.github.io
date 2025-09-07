"use client";
import AnimatedDots from "@/components/AnimatedDots";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Users,
  Award,
  Download,
  Eye,
  Code,
  Globe,
  Cloud,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React from "react";
import Image from "next/image";

// function AnimatedDots() {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {Array.from({ length: 50 }).map((_, i) => (
//         <div
//           key={i}
//           className={`absolute rounded-full animate-float-extreme`}
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             width: `${2 + Math.random() * 4}px`,
//             height: `${2 + Math.random() * 4}px`,
//             background: [
//               "radial-gradient(circle, rgba(74, 144, 226, 0.9) 0%, rgba(74, 144, 226, 0.5) 100%)",
//               "radial-gradient(circle, rgba(226, 74, 144, 0.9) 0%, rgba(226, 74, 144, 0.5) 100%)",
//               "radial-gradient(circle, rgba(226, 196, 74, 0.9) 0%, rgba(226, 196, 74, 0.5) 100%)",
//               "radial-gradient(circle, rgba(74, 226, 144, 0.9) 0%, rgba(74, 226, 144, 0.5) 100%)",
//               "radial-gradient(circle, rgba(144, 74, 226, 0.9) 0%, rgba(144, 74, 226, 0.5) 100%)",
//               "radial-gradient(circle, rgba(255, 140, 0, 0.9) 0%, rgba(255, 140, 0, 0.5) 100%)",
//               "radial-gradient(circle, rgba(0, 191, 255, 0.9) 0%, rgba(0, 191, 255, 0.5) 100%)",
//             ][Math.floor(Math.random() * 7)],
//             boxShadow: [
//               "0 0 15px rgba(74, 144, 226, 0.8)",
//               "0 0 15px rgba(226, 74, 144, 0.8)",
//               "0 0 15px rgba(226, 196, 74, 0.8)",
//               "0 0 15px rgba(74, 226, 144, 0.8)",
//               "0 0 15px rgba(144, 74, 226, 0.8)",
//               "0 0 15px rgba(255, 140, 0, 0.8)",
//               "0 0 15px rgba(0, 191, 255, 0.8)",
//             ][Math.floor(Math.random() * 7)],
//             animationDuration: `${8 + Math.random() * 12}s`,
//             animationDelay: `${Math.random() * 5}s`,
//           }}
//         />
//       ))}
//     </div>
//   );
// }

function ProjectImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isFullSizeOpen, setIsFullSizeOpen] = React.useState(false);

  React.useEffect(() => {
    if (images.length > 1 && !isFullSizeOpen) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      return () => clearInterval(interval);
    }
  }, [images.length, isFullSizeOpen]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="aspect-video rounded-lg overflow-hidden relative group">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-opacity duration-500 cursor-pointer"
          onClick={() => setIsFullSizeOpen(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <Dialog open={isFullSizeOpen} onOpenChange={setIsFullSizeOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black/90">
          <div className="relative">
            <Image
              src={images[currentImage] || "/placeholder.svg"}
              alt={alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImage + 1} / {images.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function scrollTo(id: string) {
  const el = document.querySelector(`#${id}`);
  console.log(el, "<<< el");
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedDots />

      <Navbar />

      <Header />

      <About />

      {/* <section className="relative py-20 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg relative">
              <Image
                src="/professional-headshot-of-muhammad-hafidz-software-.jpg"
                alt="Muhammad Hafidz Hubbusysyuhada"
                fill
                className="object-cover"
                sizes="128px"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-4">
              Muhammad <span className="text-primary">Hafidz</span>
              <br />
              Hubbusysyuhada
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance">
              Full Stack Engineer with 4+ years of experience building scalable
              web applications
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Surabaya, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+6282233197540</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hubbusysyuhada@gmail.com</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          <Card className="border-0 shadow-lg card">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Full Stack Engineer with 4+ years of experience building
                scalable web applications using TypeScript, Node.js, PHP
                (Laravel), Nuxt, and PostgreSQL. Led development of design
                systems, internal tools, and AI integrations that improved
                workflow efficiency and code consistency. Operates at senior
                level, adept at collaborating with PMs/designers and
                contributing to architecture discussions. Eligible for EU Blue
                Card/Skilled Workers Visa. Currently learning German (A2) for
                integration into German-speaking teams.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Years of Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    10+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Handled & Maintained
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tech Stacks
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl">Frontend Developer</CardTitle>
                  <Badge variant="outline">Jul 2024 - Present</Badge>
                </div>
                <CardDescription className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  sekolah.mu (~500 employees)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Leading frontend development for large-scale assessment
                    platforms
                  </li>
                  <li>• Maintaining and enhancing design system components</li>
                  <li>
                    • Optimizing performance and user experience across multiple
                    client projects
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary/70">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl">
                    Full Stack Developer (Frontend Heavy)
                  </CardTitle>
                  <Badge variant="outline">Sep 2022 - Jul 2024</Badge>
                </div>
                <CardDescription className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  sekolah.mu (~500 employees)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Built scalable platforms generating up to €1.4M revenue in
                    2024 for major clients including Bank Indonesia, Bank
                    Syariah Indonesia (BSI), and MIND ID
                  </li>
                  <li>
                    • Led frontend initiatives for large-scale online
                    assessment/survey platform with reusable design system
                  </li>
                  <li>
                    • Developed internal asset management tool (NPM package) for
                    reusable icons/illustrations
                  </li>
                  <li>
                    • Integrated Google Gemini AI for automated video
                    transcription
                  </li>
                  <li>
                    • Tech stack: PHP Laravel, Nuxt 3, Golang, TypeScript, SCSS,
                    Redis, MySQL, AWS S3, Cypress
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl">
                    Full Stack Developer (Freelance)
                  </CardTitle>
                  <Badge variant="outline">Oct 2023 - Jan 2024</Badge>
                </div>
                <CardDescription>Local Automotive Garage</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Developed full-featured web application for car repair
                    shop with complete CRUD operations
                  </li>
                  <li>
                    • Implemented role-based access control (RBAC) and JWT
                    authentication
                  </li>
                  <li>
                    • Created automated invoice generation and interactive data
                    visualizations
                  </li>
                  <li>
                    • Tech stack: Node.js, Fastify, MikroORM, TypeScript,
                    Next.js, Redux, MySQL, SCSS
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-xl">Backend Developer</CardTitle>
                  <Badge variant="outline">Jun 2021 - Sep 2022</Badge>
                </div>
                <CardDescription className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  feedloop.io (~100 employees)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Contributed to securing enterprise deals valued at up to
                    €115,000
                  </li>
                  <li>
                    • Designed backend infrastructure for low-code platform
                    inspired by Hasura and Supabase
                  </li>
                  <li>
                    • Implemented Row-Level Security (RLS) and RBAC policies in
                    PostgreSQL
                  </li>
                  <li>
                    • Maintained over 90% test coverage with robust automated
                    testing
                  </li>
                  <li>
                    • Tech stack: REST API, Node.js, TypeScript, Fastify, Mikro
                    ORM, Redis, PostgreSQL
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Stubsit
                      <Eye className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription>
                      API Stub Tool for Frontend Developers
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectImageCarousel
                      images={[
                        "/api-stub-tool-dashboard-interface.jpg",
                        "/api-endpoint-configuration-screen.jpg",
                        "/request-response-mockup-interface.jpg",
                      ]}
                      alt="Stubsit API Stub Tool"
                    />
                    <p className="text-sm text-muted-foreground mb-4 mt-4">
                      Tool designed for Frontend Developers to mimic backend
                      services while building and testing applications.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Fastify</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Stubsit - API Stub Tool</DialogTitle>
                  <DialogDescription>
                    A comprehensive tool for frontend developers to create mock
                    APIs
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <ProjectImageCarousel
                    images={[
                      "/api-stub-tool-dashboard-interface.jpg",
                      "/api-endpoint-configuration-screen.jpg",
                      "/request-response-mockup-interface.jpg",
                    ]}
                    alt="Stubsit API Stub Tool"
                  />
                  <p className="text-muted-foreground">
                    Stubsit is a powerful API stubbing tool that allows frontend
                    developers to create realistic mock APIs without waiting for
                    backend implementation. Features include dynamic response
                    generation, request logging, and easy configuration through
                    a web interface.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Fastify</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">Next.js</Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild>
                      <a
                        href="https://stubsit.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://github.com/hubbusysyuhada/stubsit"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Lern Talentics
                      <Eye className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription>
                      Internal Asset Management Tool
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectImageCarousel
                      images={[
                        "/asset-management-dashboard-with-icons-and-illustra.jpg",
                        "/npm-package-generation-interface.jpg",
                        "/team-collaboration-asset-library.jpg",
                      ]}
                      alt="Lern Talentics Asset Management"
                    />
                    <p className="text-sm text-muted-foreground mb-4 mt-4">
                      Streamlines shared visual assets across teams with unified
                      NPM library and searchable documentation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Nuxt 3</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Supabase</Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Lern Talentics - Asset Management</DialogTitle>
                  <DialogDescription>
                    Internal tool for managing and distributing design assets
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <ProjectImageCarousel
                    images={[
                      "/asset-management-dashboard-with-icons-and-illustra.jpg",
                      "/npm-package-generation-interface.jpg",
                      "/team-collaboration-asset-library.jpg",
                    ]}
                    alt="Lern Talentics Asset Management"
                  />
                  <p className="text-muted-foreground">
                    Lern Talentics is an internal asset management system that
                    centralizes icons, illustrations, and other visual assets.
                    It features automated NPM package generation, searchable
                    asset library, and team collaboration tools for consistent
                    design implementation across projects.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Nuxt 3</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">NPM</Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild>
                      <a
                        href="https://talentics-assets.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://github.com/hubbusysyuhada/talentics-assets"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      Mandoor
                      <Eye className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                    <CardDescription>
                      Low-Code Project Scaffolding Tool
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ProjectImageCarousel
                      images={[
                        "/low-code-project-scaffolding-interface-with-databa.jpg",
                        "/visual-database-schema-designer.jpg",
                        "/generated-node-js-project-structure-preview.jpg",
                      ]}
                      alt="Mandoor Low-Code Tool"
                    />
                    <p className="text-sm text-muted-foreground mb-4 mt-4">
                      Quickly scaffold Node.js + Fastify projects by defining
                      database schema through intuitive GUI.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Fastify</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Mandoor - Low-Code Scaffolding</DialogTitle>
                  <DialogDescription>
                    Visual project generator for Node.js applications
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <ProjectImageCarousel
                    images={[
                      "/low-code-project-scaffolding-interface-with-databa.jpg",
                      "/visual-database-schema-designer.jpg",
                      "/generated-node-js-project-structure-preview.jpg",
                    ]}
                    alt="Mandoor Low-Code Tool"
                  />
                  <p className="text-muted-foreground">
                    Mandoor is a low-code tool that generates complete Node.js +
                    Fastify projects based on database schema definitions. It
                    includes automatic API generation, authentication setup, and
                    database migrations, significantly reducing development time
                    for new projects.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Fastify</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">SCSS</Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild>
                      <a
                        href="https://mandoor.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href="https://github.com/hubbusysyuhada/mandoor"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section> */}

      <Skills />

      <ContactMe />

      <Footer />
    </div>
  );
}
