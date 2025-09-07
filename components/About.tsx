import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About Me
        </h2>
        <Card className="border-0 shadow-lg card relative">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Full Stack Engineer with 4+ years of experience building scalable
              web applications using TypeScript, Node.js, PHP (Laravel), Nuxt,
              and PostgreSQL. Led development of design systems, internal tools,
              and AI integrations that improved workflow efficiency and code
              consistency. Operates at senior level, adept at collaborating with
              PMs/designers and contributing to architecture discussions.
              Eligible for EU Blue Card/Skilled Workers Visa. Currently learning
              German (A2) for integration into German-speaking teams.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">4+</div>
                <div className="text-sm text-muted-foreground">
                  Years of Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">
                  Projects Handled & Maintained
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Tech Stacks</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
