import { useEffect, useRef, useState } from 'react';
import { Code, Shield, Database, Settings, TestTube, Server } from 'lucide-react';

const skills = [
  { name: 'Java', percentage: 95, icon: Code, color: 'from-orange-500 to-red-500' },
  { name: 'Application Security', percentage: 90, icon: Shield, color: 'from-red-500 to-pink-500' },
  { name: 'Spring', percentage: 90, icon: Settings, color: 'from-green-500 to-emerald-500' },
  { name: 'DevOps', percentage: 95, icon: Server, color: 'from-blue-500 to-cyan-500' },
  { name: 'Testing - JUnit', percentage: 96, icon: TestTube, color: 'from-purple-500 to-violet-500' },
  { name: 'Tomcat/Websphere', percentage: 90, icon: Database, color: 'from-yellow-500 to-amber-500' },
];

interface AnimatedProgressBarProps {
  skill: typeof skills[0];
  isVisible: boolean;
}

function AnimatedProgressBar({ skill, isVisible }: AnimatedProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percentage]);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
            <skill.icon className="text-white" size={20} />
          </div>
          <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
        </div>
        <span className="text-blue-400 font-bold text-lg">{skill.percentage}%</span>
      </div>
      
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <div 
          className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            My <span className="text-blue-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Proficient in Java, Spring, databases, DevOps, AWS, testing (JUnit, selenium) and linux
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <AnimatedProgressBar 
              key={skill.name} 
              skill={skill} 
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}