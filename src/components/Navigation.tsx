import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X, Award } from "lucide-react";

interface NavigationProps {
  user?: {
    name: string;
    points: number;
  };
}

const Navigation = ({ user }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/90 backdrop-blur-xl border-b border-border/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-hero p-2 rounded-xl shadow-button group-hover:shadow-floating transition-all duration-300 group-hover:scale-110">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              UniX<span className="bg-gradient-hero bg-clip-text text-transparent">Edu</span> Learn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {user ? (
              <>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3 bg-gradient-card px-4 py-2 rounded-2xl shadow-card border border-border/50">
                    <Award className="h-5 w-5 text-warning animate-pulse" />
                    <span className="text-base font-semibold">{user.points} points</span>
                  </div>
                  <span className="text-base text-muted-foreground">
                    Welcome, <span className="font-bold text-foreground text-lg">{user.name}</span>
                  </span>
                </div>
                <Button variant="outline" size="default" className="rounded-xl">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="text-base font-semibold rounded-xl">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button variant="hero" className="text-base font-bold rounded-xl">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border mt-2 pt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {user ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Welcome, {user.name}</span>
                    <div className="flex items-center space-x-1 text-sm">
                      <Award className="h-4 w-4 text-warning" />
                      <span>{user.points} points</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={toggleMenu}>
                    <Button variant="ghost" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={toggleMenu}>
                    <Button variant="hero" className="w-full">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;