type SkillBadgeProps = {
  label: string;
};

function SkillBadge({ label }: SkillBadgeProps) {
  return <span className="skill-badge">{label}</span>;
}

export default SkillBadge;