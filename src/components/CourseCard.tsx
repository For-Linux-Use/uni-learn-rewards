import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  domain: string;
  duration: string;
  students: number;
  rating: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  image?: string;
  onEnroll?: () => void;
}

const CourseCard = ({
  title,
  description,
  domain,
  duration,
  students,
  rating,
  difficulty,
  image,
  onEnroll,
}: CourseCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-success text-success-foreground";
      case "Intermediate":
        return "bg-warning text-warning-foreground";
      case "Advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="group hover:shadow-floating transition-all duration-500 hover:-translate-y-3 bg-gradient-card border border-border/50 hover:border-primary/30 rounded-2xl overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      <CardHeader className="pb-6 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="text-xs font-semibold px-3 py-1 rounded-full">
            {domain}
          </Badge>
          <Badge className={`${getDifficultyColor(difficulty)} rounded-full px-3 py-1 font-semibold`}>{difficulty}</Badge>
        </div>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-base line-clamp-2 text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        <div className="flex items-center justify-between text-sm text-muted-foreground bg-muted/30 rounded-xl p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-medium">{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-accent" />
            <span className="font-medium">{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 fill-warning text-warning" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        <Button
          onClick={onEnroll}
          className="w-full text-base py-3 rounded-xl font-semibold"
          variant="outline"
        >
          Preview Course
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;