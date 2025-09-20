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
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-muted/30 border-2 hover:border-primary/20">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="secondary" className="text-xs">
            {domain}
          </Badge>
          <Badge className={getDifficultyColor(difficulty)}>{difficulty}</Badge>
        </div>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-sm line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-warning text-warning" />
            <span>{rating}</span>
          </div>
        </div>

        <Button
          onClick={onEnroll}
          className="w-full"
          variant="outline"
        >
          Preview Course
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;