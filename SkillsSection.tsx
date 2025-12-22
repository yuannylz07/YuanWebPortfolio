const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 90, color: 'hsl(var(--primary))' },
      { name: 'TypeScript', level: 85, color: 'hsl(var(--primary))' },
      { name: 'Tailwind CSS', level: 95, color: 'hsl(var(--primary))' },
      { name: 'HTML/CSS', level: 95, color: 'hsl(var(--primary))' },
      { name: 'JavaScript', level: 90, color: 'hsl(var(--primary))' },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'MySQL', level: 80, color: 'hsl(var(--accent))' },
      { name: 'Node.js', level: 70, color: 'hsl(var(--accent))' },
      { name: 'REST APIs', level: 85, color: 'hsl(var(--accent))' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git/GitHub', level: 85, color: 'hsl(var(--primary))' },
      { name: 'VS Code', level: 95, color: 'hsl(var(--primary))' },
      { name: 'Figma', level: 75, color: 'hsl(var(--primary))' },
    ],
  },
];

const techIcons = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Git', icon: '📁' },
  { name: 'Node.js', icon: '🟢' },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">My Expertise</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Tech Icons Row */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techIcons.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border card-hover"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, categoryIndex) => (
            <div
              key={category.category}
              className="p-6 bg-card rounded-xl border border-border"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="font-display font-semibold text-xl mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: 'var(--gradient-primary)',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
