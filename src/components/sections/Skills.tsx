import { Code2, Database, MonitorCog, ServerCog, Wrench } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";
import { skills } from "../../data/skills";

const skillIcons = [ServerCog, Database, Code2, MonitorCog, Wrench];

function Skills() {
  return (
    <section id="skills" className="section-container">
      <SectionTitle
        eyebrow="Skills"
        title="A practical technical stack for software and infrastructure work."
        description="My skill set is shaped by full-stack projects, enterprise IT operations, database-backed systems, automation, and reporting workflows."
      />

      <div className="skills-layout">
        <div className="skills-summary-card">
          <span className="skills-summary-kicker">Core Strength</span>
          <h3>Bridging development and IT operations.</h3>
          <p>
            I work across software development and infrastructure-oriented tasks,
            which helps me understand both application logic and the operational
            environment where systems run.
          </p>

          <div className="skills-summary-stats">
            <div>
              <strong>5</strong>
              <span>Skill Areas</span>
            </div>
            <div>
              <strong>25+</strong>
              <span>Tools & Technologies</span>
            </div>
          </div>
        </div>

        <div className="skills-grid-v2">
          {skills.map((group, index) => {
            const Icon = skillIcons[index] ?? Code2;

            return (
              <article className="skill-group-v2" key={group.title}>
                <div className="skill-group-header">
                  <div className="skill-group-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="skill-list">
                  {group.items.map((item) => (
                    <SkillBadge key={item} label={item} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;