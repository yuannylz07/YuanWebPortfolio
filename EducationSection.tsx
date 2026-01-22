import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'STI College Rosario',
    period: '2022 - Present',
    location: 'Cavite, Philippines',
    description: 'Currently pursuing a degree in Information Technology with focus on web development and software engineering.',
    achievements: [
      "Dean's Lister",
      'Academic Excellence Award',
    ],
  },
  {
    degree: 'Senior High School',
    school: 'Tarlac Christian College',
    period: '2019 - 2021',
    location: 'Tarlac City, Philippines',
    description: 'Engaging in tech-based projects and enhancing skills in IT and data analysis.',
    achievements: [
      'With Honors',
      'Research Paper Presenter',
    ],
  },
];

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-medium mb-4">My Journey</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My academic path and achievements in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border" />

            {education.map((item, index) => (
              <div
                key={item.degree}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="p-6 bg-card rounded-xl border border-border card-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-lg">
                          {item.degree}
                        </h3>
                        <p className="text-primary font-medium">{item.school}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
