import { TrendingUp, Eye, Heart, MessageCircle, Users, Star, Clock, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const trendingArticles = [
  {
    id: 1,
    title: "The Art of Listening in Marriage",
    excerpt:
      "True listening goes beyond hearing words - it's about understanding hearts and building deeper connections...",
    category: "Communication",
    author: "Dr. Amina Hassan",
    readTime: "7 min read",
    views: 2847,
    likes: 156,
    comments: 23,
    trend: "+45%",
    publishedAt: "2 days ago",
    trending: true,
  },
  {
    id: 2,
    title: "Balancing Career and Family: An Islamic Perspective",
    excerpt: "Finding harmony between professional aspirations and family responsibilities through Islamic guidance...",
    category: "Work-Life Balance",
    author: "Imam Abdullah",
    readTime: "9 min read",
    views: 1923,
    likes: 98,
    comments: 31,
    trend: "+32%",
    publishedAt: "4 days ago",
    trending: true,
  },
  {
    id: 3,
    title: "Building Financial Trust in Marriage",
    excerpt: "Money matters can make or break relationships. Here's how to build financial transparency and trust...",
    category: "Financial Wisdom",
    author: "Sister Khadijah",
    readTime: "6 min read",
    views: 1654,
    likes: 87,
    comments: 19,
    trend: "+28%",
    publishedAt: "1 week ago",
    trending: false,
  },
]

const trendingStories = [
  {
    id: 1,
    title: "From Conflict to Connection: Our Journey",
    author: "Anonymous Couple",
    excerpt: "We were on the brink of separation, but Islamic counseling and patience transformed our marriage...",
    category: "Success Stories",
    readTime: "8 min read",
    likes: 234,
    comments: 45,
    shares: 67,
    trend: "+67%",
    publishedAt: "3 days ago",
  },
  {
    id: 2,
    title: "Learning to Love Again After Loss",
    author: "Sister Maryam",
    excerpt: "Remarriage after being widowed brought unique challenges, but also unexpected blessings...",
    category: "Second Chances",
    readTime: "10 min read",
    likes: 189,
    comments: 38,
    shares: 52,
    trend: "+41%",
    publishedAt: "5 days ago",
  },
]

const trendingQAs = [
  {
    id: 1,
    question: "How do we handle different parenting styles?",
    category: "Parenting",
    answers: 24,
    views: 1456,
    helpful: 89,
    trend: "+52%",
    tags: ["Parenting", "Disagreements", "Children"],
    askedAt: "1 day ago",
  },
  {
    id: 2,
    question: "Is it normal to feel lonely in marriage sometimes?",
    category: "Emotional Support",
    answers: 18,
    views: 1203,
    helpful: 76,
    trend: "+38%",
    tags: ["Loneliness", "Emotional Health", "Support"],
    askedAt: "3 days ago",
  },
]

const trendingMentors = [
  {
    id: 1,
    name: "Ustadh Ahmad & Sister Khadijah",
    title: "Marriage Counselors",
    specialties: ["Communication", "Conflict Resolution"],
    rating: 4.9,
    reviews: 47,
    sessionsThisWeek: 12,
    trend: "+25%",
    image: "/muslim-mentor-couple.png",
  },
  {
    id: 2,
    name: "Sister Aisha Rahman",
    title: "Family Life Coach",
    specialties: ["Work-Life Balance", "Motherhood"],
    rating: 4.8,
    reviews: 32,
    sessionsThisWeek: 8,
    trend: "+18%",
    image: "/muslim-mentor-sister.png",
  },
]

const trendingTopics = [
  { name: "Communication", posts: 45, trend: "+23%" },
  { name: "Financial Planning", posts: 32, trend: "+19%" },
  { name: "In-Law Relations", posts: 28, trend: "+15%" },
  { name: "First Year Marriage", posts: 24, trend: "+12%" },
  { name: "Work-Life Balance", posts: 21, trend: "+8%" },
]

const communityHighlights = [
  {
    type: "milestone",
    content: "1000+ couples have found guidance through our mentorship program",
    icon: Users,
    color: "text-emerald-600",
  },
  {
    type: "achievement",
    content: "500+ success stories shared this month",
    icon: Heart,
    color: "text-red-500",
  },
  {
    type: "engagement",
    content: "2000+ helpful answers provided by the community",
    icon: MessageCircle,
    color: "text-blue-500",
  },
]

export default function TrendingPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <TrendingUp className="h-8 w-8 text-emerald-600" />
            Trending Now
          </h1>
          <p className="text-gray-600 mt-1">Discover what's popular in our community</p>
        </div>
        <Select defaultValue="week">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Time period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
            <SelectItem value="all">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Community Highlights */}
      <div className="grid gap-4 md:grid-cols-3">
        {communityHighlights.map((highlight, index) => (
          <Card key={index} className="border-l-4 border-l-emerald-600">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <highlight.icon className={`h-8 w-8 ${highlight.color}`} />
                <p className="text-sm font-medium text-gray-900">{highlight.content}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trending Content */}
      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="stories">Stories</TabsTrigger>
          <TabsTrigger value="qa">Q&A</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="topics">Topics</TabsTrigger>
        </TabsList>

        {/* Trending Articles */}
        <TabsContent value="articles" className="space-y-4">
          <div className="space-y-4">
            {trendingArticles.map((article, index) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            {article.category}
                          </Badge>
                          {article.trending && (
                            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                              <Flame className="h-3 w-3 mr-1" />
                              Hot
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm">
                          <TrendingUp className="h-3 w-3" />
                          {article.trend}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        <Link
                          href={`/dashboard/content/${article.id}`}
                          className="hover:text-emerald-700 transition-colors"
                        >
                          {article.title}
                        </Link>
                      </h3>

                      <p className="text-gray-600 mb-3 leading-relaxed">{article.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>by {article.author}</span>
                          <span>{article.readTime}</span>
                          <span>{article.publishedAt}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{article.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{article.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{article.comments}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Trending Stories */}
        <TabsContent value="stories" className="space-y-4">
          <div className="space-y-4">
            {trendingStories.map((story, index) => (
              <Card key={story.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                          {story.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm">
                          <TrendingUp className="h-3 w-3" />
                          {story.trend}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-2">
                        <Link
                          href={`/dashboard/stories/${story.id}`}
                          className="hover:text-emerald-700 transition-colors"
                        >
                          {story.title}
                        </Link>
                      </h3>

                      <p className="text-sm text-gray-600 mb-2">by {story.author}</p>
                      <p className="text-gray-600 mb-3 leading-relaxed">{story.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{story.readTime}</span>
                          <span>{story.publishedAt}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Heart className="h-4 w-4" />
                            <span>{story.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{story.comments}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{story.shares} shares</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Trending Q&A */}
        <TabsContent value="qa" className="space-y-4">
          <div className="space-y-4">
            {trendingQAs.map((qa, index) => (
              <Card key={qa.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                          {qa.category}
                        </Badge>
                        <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm">
                          <TrendingUp className="h-3 w-3" />
                          {qa.trend}
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold mb-3">
                        <Link href={`/dashboard/qa/${qa.id}`} className="hover:text-emerald-700 transition-colors">
                          {qa.question}
                        </Link>
                      </h3>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {qa.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Asked {qa.askedAt}</span>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{qa.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{qa.answers} answers</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{qa.helpful} helpful</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Trending Mentors */}
        <TabsContent value="mentors" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {trendingMentors.map((mentor, index) => (
              <Card key={mentor.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
                            <AvatarFallback className="bg-emerald-100 text-emerald-700">
                              {mentor.name.split(" ")[0][0]}
                              {mentor.name.split(" ")[1] ? mentor.name.split(" ")[1][0] : ""}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                            <p className="text-sm text-gray-600">{mentor.title}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm">
                          <TrendingUp className="h-3 w-3" />
                          {mentor.trend}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        {mentor.specialties.map((specialty) => (
                          <Badge key={specialty} variant="outline" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{mentor.rating}</span>
                          </div>
                          <span>{mentor.reviews} reviews</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          <span>{mentor.sessionsThisWeek} sessions this week</span>
                        </div>
                      </div>

                      <div className="mt-3 flex gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          View Profile
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700"
                        >
                          Book Session
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Trending Topics */}
        <TabsContent value="topics" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trendingTopics.map((topic, index) => (
              <Card key={topic.name} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full font-bold text-sm">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-gray-900">{topic.name}</h3>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 font-medium text-sm">
                      <TrendingUp className="h-3 w-3" />
                      {topic.trend}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{topic.posts} posts this week</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Weekly Summary */}
      <Card className="bg-emerald-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="text-emerald-800 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            This Week's Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-700">156</div>
            <div className="text-sm text-emerald-600">New Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-700">89</div>
            <div className="text-sm text-emerald-600">Stories Shared</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-700">234</div>
            <div className="text-sm text-emerald-600">Questions Asked</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-700">67</div>
            <div className="text-sm text-emerald-600">Mentorship Sessions</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
