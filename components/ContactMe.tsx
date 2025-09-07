import { Button } from "@/components/ui/button";
import { SiWhatsapp, SiGithub, SiLinkedin } from "react-icons/si";
import { RiMailSendFill } from "react-icons/ri";
import { MdCloudDownload } from "react-icons/md";

// {/* <a href="mailto:hubbusysyuhada@gmail.com"> */}

export default function ContactMe() {
  function goTo(url: string, shouldClose?: boolean) {
    const action = window.open(url, "_blank");
    if (action) {
      if (shouldClose) setTimeout(() => action.close(), 2000);
      else action.focus();
    }
  }
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let&apos;s Work Together
        </h2>
        <p className="text-lg text-muted-foreground mb-8 text-balance">
          I&apos;m always interested in new opportunities and exciting projects.
          Let&apos;s discuss how we can work together to build something
          amazing.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            className="hover:cursor-pointer"
            onClick={() => goTo("mailto:hubbusysyuhada@gmail.com")}
          >
            <RiMailSendFill className="w-4 h-4 mr-2" />
            Send Email
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:cursor-pointer"
            onClick={() => goTo("https://wa.me/6282233197540")}
          >
            <SiWhatsapp className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button
            variant="default"
            size="lg"
            className="hover:cursor-pointer"
            onClick={() =>
              goTo(
                "https://dthfdbabbttkfwqxlpqv.supabase.co/storage/v1/object/public/assets/CV%20Muhammad%20Hafidz%20Hubbusysyuhada%202025.pdf"
              )
            }
          >
            <MdCloudDownload className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:cursor-pointer"
            onClick={() => goTo("https://www.linkedin.com/in/hubbusysyuhada/")}
          >
            <SiLinkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="hover:cursor-pointer"
            onClick={() => goTo("https://github.com/hubbusysyuhada")}
          >
            <SiGithub className="w-4 h-4 mr-2" />
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
