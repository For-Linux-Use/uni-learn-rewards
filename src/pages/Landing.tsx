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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm">
              🎓 Where Learning Meets Rewards
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Master Your Domain with{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                UniXEdu Learn
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Join thousands of students who are advancing their careers with domain-specific courses, 
              earning reward points, and building skills that matter in their academic journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                  Start Learning Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose UniXEdu Learn?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We bridge the gap between academic learning and practical skills with our innovative platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Popular Sample Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preview courses aligned with your academic domain and start learning today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who are already earning rewards while building essential skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="text-lg font-bold">UniXEdu Learn</span>
            </div>
            <p className="text-background/70">
              Empowering students with domain-specific learning and reward-based education.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;