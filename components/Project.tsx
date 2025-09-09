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
  ExternalLink,
  Eye,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
      }, 3000);
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

export default function Project() {
  return (
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
                  generation, request logging, and easy configuration through a
                  web interface.
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
                  centralizes icons, illustrations, and other visual assets. It
                  features automated NPM package generation, searchable asset
                  library, and team collaboration tools for consistent design
                  implementation across projects.
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
    </section>
  );
}
