import { Search, Heart, BookOpen, MessageCircle, Users, Trash2, ExternalLink, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

const favoriteArticles = [
  {
    id: 1,
    title: "Building Trust in Your Marriage",
    excerpt: "Trust is the foundation of any strong marriage. Here are practical ways to build and maintain trust...",
    category: "Marriage Guidance",
    readTime: "6 min read",
    savedAt: "2 days ago",
    tags: ["Trust", "Communication", "Relationship Building"],
  },
  {
    id: 2,
    title: "Financial Planning for Newlyweds",
    excerpt: "Starting your married life with a solid financial foundation is crucial for long-term happiness...",
    category: "Financial Wisdom",
    readTime: "8 min read",
    savedAt: "1 week ago",
    tags: ["Finance", "Planning", "Newlyweds"],
  },
  {
    id: 3,
    title: "Dealing with In-Law Relationships",
    excerpt: "Building positive relationships with in-laws requires patience, understanding, and Islamic wisdom...",
    category: "Family Relations",
    readTime: "5 min read",
    savedAt: "2 weeks ago",
    tags: ["In-Laws", "Family", "Relationships"],
  },
]

const favoriteStories = [
  {
    id: 1,
    title: "How We Overcame Our First Year Challenges",
    author: "Anonymous Sister",
    excerpt: "Marriage isn't always easy, but with patience and understanding, we learned to communicate better...",
    category: "Challenges Overcome",
    readTime: "5 min read",
    savedAt: "3 days ago",
    likes: 24,
  },
  {
    id: 2,
    title: "The Beauty of Arranged Marriage: Our Love Story",
    author: "Brother Ahmad",
    excerpt: "Many people question arranged marriages, but our journey shows how love can grow beautifully...",
    category: "Love Stories",
    readTime: "6 min read",
    savedAt: "1 week ago",
    likes: 32,
  },
]

const favoriteQAs = [
  {
    id: 1,
    question: "How do we handle disagreements about money?",
    category: "Financial Issues",
    answers: 12,
    savedAt: "4 days ago",
    tags: ["Finance", "Conflict Resolution"],
  },
  {
    id: 2,
    question: "Is it normal to feel overwhelmed in the first year of marriage?",
    category: "First Year",
    answers: 8,
    savedAt: "1 week ago",
    tags: ["First Year", "Emotions", "Support"],
  },
]

const favoriteMentors = [
  {
    id: 1,
    name: "Ustadh Ahmad & Sister Khadijah",
    title: "Marriage Counselors",
    specialties: ["Communication", "Conflict Resolution"],
    rating: 4.9,
    sessions: 156,
    savedAt: "5 days ago",
    image: "/muslim-mentor-couple.png",
  },
  {
    id: 2,
    name: "Sister Aisha Rahman",
    title: "Family Life Coach",
    specialties: ["Work-Life Balance", "Motherhood"],
    rating: 4.8,
    sessions: 89,
    savedAt: "2 weeks ago",
    image: "/muslim-mentor-sister.png",
  },
]

export default function FavoritesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Favorites</h1>
          <p className="text-gray-600 mt-1">Your saved articles, stories, questions, and mentors</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent">
            <Filter className="h-4 w-4 mr-2" />
            Organize
          </Button>
          <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent">
            Export List
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search your favorites..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="marriage">Marriage Guidance</SelectItem>
              <SelectItem value="financial">Financial Wisdom</SelectItem>
              <SelectItem value="family">Family Relations</SelectItem>
              <SelectItem value="stories">Personal Stories</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="title">Title A-Z</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Favorites Content */}
      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Articles ({favoriteArticles.length})
          </TabsTrigger>
          <TabsTrigger value="stories" className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            Stories ({favoriteStories.length})
          </TabsTrigger>
          <TabsTrigger value="qa" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Q&A ({favoriteQAs.length})
          </TabsTrigger>
          <TabsTrigger value="mentors" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Mentors ({favoriteMentors.length})
          </TabsTrigger>
        </TabsList>

        {/* Articles Tab */}
        <TabsContent value="articles" className="space-y-4">
          {favoriteArticles.length > 0 ? (
            <div className="space-y-4">
              {favoriteArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Saved {article.savedAt}</span>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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

                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{article.readTime}</span>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Read Article
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No favorite articles yet</h3>
                <p className="text-gray-500 mb-4">Start exploring our content hub to save articles you love</p>
                <Link href="/dashboard/content">
                  <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                    Browse Articles
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Stories Tab */}
        <TabsContent value="stories" className="space-y-4">
          {favoriteStories.length > 0 ? (
            <div className="space-y-4">
              {favoriteStories.map((story) => (
                <Card key={story.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        {story.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Saved {story.savedAt}</span>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
                        <div className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          <span>{story.likes} likes</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Read Story
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No favorite stories yet</h3>
                <p className="text-gray-500 mb-4">Discover inspiring stories from our community</p>
                <Link href="/dashboard/stories">
                  <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                    Browse Stories
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Q&A Tab */}
        <TabsContent value="qa" className="space-y-4">
          {favoriteQAs.length > 0 ? (
            <div className="space-y-4">
              {favoriteQAs.map((qa) => (
                <Card key={qa.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        {qa.category}
                      </Badge>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">Saved {qa.savedAt}</span>
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <MessageCircle className="h-4 w-4" />
                        <span>{qa.answers} answers</span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="bg-transparent">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Discussion
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No favorite Q&A posts yet</h3>
                <p className="text-gray-500 mb-4">Save helpful questions and answers from the community forum</p>
                <Link href="/dashboard/qa">
                  <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                    Browse Q&A
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        {/* Mentors Tab */}
        <TabsContent value="mentors" className="space-y-4">
          {favoriteMentors.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {favoriteMentors.map((mentor) => (
                <Card key={mentor.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-3">
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
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm font-medium">{mentor.rating}</span>
                            <span className="text-sm text-gray-500">({mentor.sessions} sessions)</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {mentor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Saved {mentor.savedAt}</span>
                      <div className="flex gap-2">
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
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No favorite mentors yet</h3>
                <p className="text-gray-500 mb-4">Save mentors you'd like to remember for future sessions</p>
                <Link href="/dashboard/mentorship">
                  <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                    Find Mentors
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <Card className="bg-emerald-50 border-emerald-200">
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-700">{favoriteArticles.length}</div>
              <div className="text-sm text-emerald-600">Articles Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-700">{favoriteStories.length}</div>
              <div className="text-sm text-emerald-600">Stories Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-700">{favoriteQAs.length}</div>
              <div className="text-sm text-emerald-600">Q&A Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-700">{favoriteMentors.length}</div>
              <div className="text-sm text-emerald-600">Mentors Saved</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
