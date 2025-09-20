import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Clock, 
  PlayCircle, 
  Star,
  Target,
  Calendar
} from "lucide-react";

const Dashboard = () => {
  const [user] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    domain: "Computer Science & Engineering",
    points: 150,
    joinDate: "September 2024",
  });

  const [currentCourse] = useState({
    title: "Python Programming Fundamentals",
    description: "Master Python basics with hands-on projects and real-world applications.",
    progress: 25,
    nextLesson: "Variables and Data Types",
    totalLessons: 24,
    completedLessons: 6,
    estimatedCompletion: "6 weeks",
  });

  const recommendedCourses = [
    {
      title: "Advanced Python Programming",
      description: "Deep dive into advanced Python concepts including OOP, decorators, and async programming.",
      domain: "Computer Science",
      duration: "10 weeks",
      students: 890,
      rating: 4.9,
      difficulty: "Advanced" as const,
    },
    {
      title: "Web Development with React",
      description: "Build modern web applications using React, JSX, and component-based architecture.",
      domain: "Computer Science",
      duration: "12 weeks",
      students: 1200,
      rating: 4.8,
      difficulty: "Intermediate" as const,
    },
    {
      title: "Data Structures & Algorithms",
      description: "Essential CS concepts for coding interviews and software development.",
      domain: "Computer Science",
      duration: "14 weeks",
      students: 2100,
      rating: 4.7,
      difficulty: "Intermediate" as const,
    },
  ];

  const achievements = [
    { title: "First Course Started", points: 50, earned: true },
    { title: "Week Streak", points: 25, earned: true },
    { title: "Quick Learner", points: 75, earned: false },
    { title: "Course Completer", points: 100, earned: false },
  ];

  const upcomingTasks = [
    { task: "Complete Module 3: Functions", due: "Tomorrow", priority: "high" },
    { task: "Submit Python Project", due: "In 3 days", priority: "medium" },
    { task: "Take Module Quiz", due: "This week", priority: "low" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation user={{ name: user.name, points: user.points }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Continue your learning journey in {user.domain}
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Reward Points</p>
                  <p className="text-3xl font-bold text-primary">{user.points}</p>
                </div>
                <Award className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Course Progress</p>
                  <p className="text-3xl font-bold text-success">{currentCourse.progress}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning/10 to-warning/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Lessons Completed</p>
                  <p className="text-3xl font-bold text-warning">{currentCourse.completedLessons}/{currentCourse.totalLessons}</p>
                </div>
                <BookOpen className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Time to Complete</p>
                  <p className="text-3xl font-bold text-accent">{currentCourse.estimatedCompletion}</p>
                </div>
                <Clock className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Course */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">{currentCourse.title}</CardTitle>
                    <CardDescription>{currentCourse.description}</CardDescription>
                  </div>
                  <Badge variant="secondary">{user.domain}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{currentCourse.progress}% complete</span>
                  </div>
                  <Progress value={currentCourse.progress} className="h-2" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">Next: {currentCourse.nextLesson}</p>
                    <p className="text-sm text-muted-foreground">
                      {currentCourse.completedLessons} of {currentCourse.totalLessons} lessons completed
                    </p>
                  </div>
                  <Button variant="hero" className="ml-4">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Continue Learning
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
                <CardDescription>
                  Based on your domain and current progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {recommendedCourses.slice(0, 2).map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Upcoming Tasks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{task.task}</p>
                      <p className="text-xs text-muted-foreground">{task.due}</p>
                    </div>
                    <Badge 
                      variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'warning' : 'secondary'}
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${
                    achievement.earned ? 'bg-success/10 border border-success/20' : 'bg-muted/30'
                  }`}>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`}>
                        {achievement.title}
                      </p>
                      <p className="text-xs text-muted-foreground">+{achievement.points} points</p>
                    </div>
                    {achievement.earned && (
                      <Award className="h-4 w-4 text-success" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Schedule
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Browse Courses
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  Redeem Points
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;