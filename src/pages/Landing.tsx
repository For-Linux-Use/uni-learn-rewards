import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { 
  BookOpen, 
  Award, 
  Users, 
  Zap, 
  TrendingUp, 
  Code, 
  Database, 
  MessageSquare,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Landing = () => {
  const courses = [
    {
      title: "Python Programming Fundamentals",
      description: "Master Python basics with hands-on projects and real-world applications for computer science students.",
      domain: "Computer Science",
      duration: "8 weeks",
      students: 1250,
      rating: 4.8,
      difficulty: "Beginner" as const,
    },
    {
      title: "Data Science & Analytics",
      description: "Learn data analysis, visualization, and machine learning concepts with practical datasets.",
      domain: "Data Science",
      duration: "12 weeks",
      students: 890,
      rating: 4.9,
      difficulty: "Intermediate" as const,
    },
    {
      title: "Business Communication",
      description: "Develop professional communication skills essential for business and management careers.",
      domain: "Business",
      duration: "6 weeks",
      students: 2100,
      rating: 4.7,
      difficulty: "Beginner" as const,
    },
    {
      title: "Digital Circuit Design",
      description: "Understand digital logic, circuit design, and embedded systems for electronics engineering.",
      domain: "Electronics",
      duration: "10 weeks",
      students: 650,
      rating: 4.6,
      difficulty: "Intermediate" as const,
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Domain-Specific Learning",
      description: "Courses tailored to your academic stream and career goals."
    },
    {
      icon: Award,
      title: "Reward System",
      description: "Earn points for course completion that benefit your academics."
    },
    {
      icon: Users,
      title: "University Integration",
      description: "Seamlessly connects with your educational institution."
    },
    {
      icon: Zap,
      title: "Free Trial Courses",
      description: "Preview courses before committing to full enrollment."
    }
  ];

  const stats = [
    { number: "5,000+", label: "Active Students" },
    { number: "50+", label: "Universities" },
    { number: "100+", label: "Courses" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-floating"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow opacity-30 blur-2xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12 animate-fade-in">
            <Badge variant="secondary" className="px-6 py-3 text-base font-semibold rounded-full shadow-card">
              🎓 Where Learning Meets Rewards
            </Badge>
            
            <div className="space-y-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                Master Your Domain with{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  UniXEdu Learn
                </span>
              </h1>
              
              <p className="text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
                Join thousands of students who are advancing their careers with <span className="text-primary font-semibold">domain-specific courses</span>, 
                earning <span className="text-accent font-semibold">reward points</span>, and building skills that matter in their academic journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link to="/signup">
                <Button variant="hero" size="lg" className="text-xl px-12 py-6 rounded-2xl font-bold">
                  Start Learning Free
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="text-xl px-12 py-6 rounded-2xl font-semibold">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-card p-8 rounded-3xl shadow-floating border border-border/50 group-hover:shadow-hero transition-all duration-500 group-hover:-translate-y-2">
                  <div className="text-4xl lg:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">{stat.number}</div>
                  <div className="text-lg text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/5 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 animate-slide-up">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Why Choose UniXEdu Learn?
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between academic learning and practical skills with our innovative platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-gradient-card p-8 rounded-3xl shadow-floating border border-border/50 hover:shadow-hero transition-all duration-500 hover:-translate-y-4">
                  <div className="w-20 h-20 bg-gradient-hero rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-button">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-32 bg-background relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 animate-slide-up">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-8">
              Popular Sample Courses
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Preview courses aligned with your academic domain and start learning today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {courses.map((course, index) => (
              <div key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-hero rounded-[3rem] p-16 text-white relative overflow-hidden shadow-hero">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-30"></div>
              <div className="absolute top-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-floating"></div>
              <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-floating" style={{animationDelay: '2s'}}></div>
            </div>
            <div className="relative z-10 space-y-8 animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-2xl mb-12 opacity-90 font-light leading-relaxed max-w-3xl mx-auto">
                Join thousands of students who are already earning rewards while building essential skills.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 font-bold rounded-2xl shadow-floating hover:shadow-hero hover:scale-105">
                    Get Started Free
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white hover:text-primary text-xl px-12 py-6 font-semibold rounded-2xl">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-b from-foreground to-foreground/90 text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-gradient-hero p-3 rounded-2xl shadow-button">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">UniX<span className="text-primary">Edu</span> Learn</span>
            </div>
            <p className="text-background/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering students with domain-specific learning and reward-based education for academic excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;