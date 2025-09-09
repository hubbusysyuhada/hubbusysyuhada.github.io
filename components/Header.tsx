import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Header() {
  return (
    <section className="relative pt-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg relative">
          <Image
            src="https://dthfdbabbttkfwqxlpqv.supabase.co/storage/v1/object/public/assets/profile-photo.png"
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
          Full Stack Engineer with 4+ years of experience building scalable web
          applications
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
    </section>
  );
}
