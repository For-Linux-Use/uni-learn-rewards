import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import { GraduationCap, ArrowLeft, CheckCircle } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    domain: "",
  });

  const domains = [
    { value: "cse", label: "Computer Science & Engineering" },
    { value: "ece", label: "Electronics & Communication" },
    { value: "me", label: "Mechanical Engineering" },
    { value: "ce", label: "Civil Engineering" },
    { value: "business", label: "Business & Management" },
    { value: "data-science", label: "Data Science & Analytics" },
    { value: "design", label: "Design & Creative Arts" },
    { value: "other", label: "Other" },
  ];

  const benefits = [
    "Access to domain-specific courses",
    "Earn reward points for completion",
    "Track your learning progress",
    "Connect with university programs",
    "Free trial courses available",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual signup logic with backend
    console.log("Signup attempt:", formData);
    
    // For demo purposes, redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Benefits */}
            <div className="space-y-8">
              <div>
                <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Join the Future of Learning
                </h1>
                <p className="text-xl text-muted-foreground">
                  Start your journey with domain-specific courses and earn rewards while you learn.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What you'll get:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Already have 5,000+ students</h4>
                    <p className="text-sm text-muted-foreground">Join them in advancing their careers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full max-w-md mx-auto">
              <Card className="shadow-xl border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Create Your Account</CardTitle>
                  <CardDescription>
                    Sign up to start your learning journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="domain">Academic Domain</Label>
                      <Select onValueChange={(value) => handleInputChange("domain", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select your domain/stream" />
                        </SelectTrigger>
                        <SelectContent>
                          {domains.map((domain) => (
                            <SelectItem key={domain.value} value={domain.value}>
                              {domain.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a strong password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base"
                      variant="hero"
                    >
                      Create Account
                    </Button>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">Already have an account? </span>
                      <Link to="/login" className="text-primary hover:text-primary/80 font-medium">
                        Sign in here
                      </Link>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;