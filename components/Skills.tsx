import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Award, Globe } from "lucide-react";
import { BiCodeBlock } from "react-icons/bi";
import LanguageCard from "./Language";
import CertificateCard from "./Certificate";
import SkillBadge from "./SkillBadge";
import languages from "@/variables/skills/languages";
import certificates from "@/variables/skills/certificates";
import frameworks from "@/variables/skills/frameworks";
import databases from "@/variables/skills/databases";
import tools from "@/variables/skills/tools";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <Card className="mb-8 relative">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <BiCodeBlock className="w-6 h-6 text-primary" />
              All Technical Skills
            </CardTitle>
            <CardDescription>
              Languages, Frameworks, Databases, Tools & Cloud Technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                  Languages & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map(({ icon, label }, key) => (
                    <SkillBadge icon={icon} label={label} key={key} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                  Databases
                </h4>
                <div className="flex flex-wrap gap-2">
                  {databases.map(({ icon, label }, key) => (
                    <SkillBadge icon={icon} label={label} key={key} />
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-3">
                  Tools & Cloud
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map(({ icon, label }, key) => (
                    <SkillBadge icon={icon} label={label} key={key} />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              <div className="space-y-3">
                {certificates.map(({ img, provider, title, url }, key) => (
                  <CertificateCard
                    title={title}
                    provider={provider}
                    img={img}
                    url={url}
                    key={key}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {languages.map(({ name, img, level }, key) => (
                  <LanguageCard name={name} img={img} level={level} key={key} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
