import { Code, Lightbulb, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Finding creative solutions to challenges',
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Quickly adapting to new technologies',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with others',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">Get To Know Me</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A passionate individual with a drive for excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi! I'm <span className="text-foreground font-semibold">Yuan Nylz Porcopio</span>, 
              an IT student with a deep passion for Web development. My journey in tech started with curiosity and has 
              evolved into a dedicated pursuit of excellence in web development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building responsive, accessible, and performant web applications 
              using modern technologies like <span className="text-primary font-medium">React</span>, 
              <span className="text-primary font-medium"> Tailwind CSS</span>, and 
              <span className="text-primary font-medium"> TypeScript</span>. I believe in 
              continuous learning and staying updated with the latest industry trends.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies or learning about UI/UX design principles to enhance 
              my development skills.
            </p>
          </div>

          {/* Right - Highlights Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="group p-6 bg-card rounded-xl border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
