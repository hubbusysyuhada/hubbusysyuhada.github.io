import experiences from "@/variables/experience";
import MultipleExperienceCard from "./MultipleExperienceCard";
import SingleExperienceCard from "./SingleExperienceCard";
export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, key) =>
            exp.positions.length > 1 ? (
              <MultipleExperienceCard experience={exp} key={key} />
            ) : (
              <SingleExperienceCard experience={exp} key={key} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
