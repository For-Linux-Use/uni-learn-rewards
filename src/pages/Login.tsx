import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { ArrowLeft, BookOpen, Users, Award } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic with backend
    console.log("Login attempt:", formData);
    
    // For demo purposes, redirect to dashboard
    navigate("/dashboard");
  };

  const quickStats = [
    { icon: BookOpen, value: "100+", label: "Courses" },
    { icon: Users, value: "5,000+", label: "Students" },
    { icon: Award, value: "10,000+", label: "Points Earned" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Welcome back */}
            <div className="space-y-8">
              <div>
                <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  Welcome Back to Learning
                </h1>
                <p className="text-xl text-muted-foreground">
                  Continue your journey towards mastering your domain and earning valuable reward points.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                {quickStats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-xl">
                    <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Success Story */}
              <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-6">
                <blockquote className="text-foreground">
                  "UniXEdu Learn helped me master Python programming before my semester even started. 
                  The reward points I earned gave me a great advantage in my coursework!"
                </blockquote>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Sarah Chen</div>
                    <div className="text-sm text-muted-foreground">CSE Student, MIT</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Login Form */}
            <div className="w-full max-w-md mx-auto">
              <Card className="shadow-xl border-2">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Sign In</CardTitle>
                  <CardDescription>
                    Access your learning dashboard
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <div className="flex justify-between items-center">
                        <Label htmlFor="password">Password</Label>
                        <button
                          type="button"
                          className="text-sm text-primary hover:text-primary/80"
                        >
                          Forgot password?
                        </button>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        required
                        className="h-12"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base"
                      variant="hero"
                    >
                      Sign In
                    </Button>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">Don't have an account? </span>
                      <Link to="/signup" className="text-primary hover:text-primary/80 font-medium">
                        Sign up here
                      </Link>
                    </div>
                  </form>

                  {/* Demo Login */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button 
                      variant="outline" 
                      className="w-full h-12"
                      onClick={() => {
                        setFormData({
                          email: "demo@unixedu.learn",
                          password: "demo123"
                        });
                      }}
                    >
                      Use Demo Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;