import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, MessageCircle, Heart, Users, TrendingUp, Clock, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground mb-2">Assalamu Alaikum, Ahmed!</h1>
            <p className="text-muted-foreground">
              Welcome back to your house of tranquility. Continue your journey of strengthening your marriage.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Articles Read</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Questions Asked</CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">+2 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stories Saved</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+1 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mentor Sessions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: Tomorrow</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recommended for You */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Recommended for You
              </CardTitle>
              <CardDescription>Personalized content based on your interests and marriage stage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Building Trust in Early Marriage</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Learn Islamic principles for establishing trust and communication in your first years of marriage.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Marriage Guidance</Badge>
                    <span className="text-xs text-muted-foreground">5 min read</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">"How We Overcame Our First Big Argument"</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    A couple shares their story of resolving conflict through patience and Islamic guidance.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Real Stories</Badge>
                    <span className="text-xs text-muted-foreground">3 min read</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">"How to handle financial disagreements?"</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Anonymous question with 12 helpful responses from the community.
                  </p>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Q&A Forum</Badge>
                    <span className="text-xs text-muted-foreground">12 answers</span>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/dashboard/content">
                  View All Recommendations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">You saved "Patience in Marriage" to your favorites</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">You asked a question in the Q&A forum</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">You completed reading "Islamic Marriage Principles"</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Trending Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                Trending This Week
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Communication Tips</span>
                <Badge variant="secondary">Hot</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Financial Planning</span>
                <span className="text-xs text-muted-foreground">+15%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">In-Law Relations</span>
                <span className="text-xs text-muted-foreground">+8%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Conflict Resolution</span>
                <span className="text-xs text-muted-foreground">+12%</span>
              </div>
            </CardContent>
          </Card>

          {/* Your Mentor */}
          <Card>
            <CardHeader>
              <CardTitle>Your Mentor Couple</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage src="/muslim-mentor-couple.png" alt="Mentors" />
                  <AvatarFallback className="bg-primary/10 text-primary">SA</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">Sister Aisha & Brother Omar</p>
                  <p className="text-xs text-muted-foreground">Married 15 years • 3 children</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "We're here to support you on your marriage journey with Islamic guidance and personal experience."
              </p>
              <Button size="sm" className="w-full" asChild>
                <Link href="/dashboard/mentorship">Schedule Session</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                <Link href="/dashboard/forum">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask a Question
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                <Link href="/dashboard/stories">
                  <Heart className="w-4 h-4 mr-2" />
                  Share Your Story
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start bg-transparent" asChild>
                <Link href="/dashboard/content">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Articles
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
