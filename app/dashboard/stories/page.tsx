import { Search, Heart, BookOpen, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const stories = [
  {
    id: 1,
    title: "How We Overcame Our First Year Challenges",
    excerpt:
      "Marriage isn't always easy, but with patience and understanding, we learned to communicate better and strengthen our bond through Islamic principles.",
    author: "Anonymous Sister",
    readTime: "5 min read",
    category: "Challenges Overcome",
    tags: ["Communication", "First Year", "Patience"],
    likes: 24,
    publishedAt: "2 days ago",
    featured: true,
  },
  {
    id: 2,
    title: "Finding Balance: Career and Family Life",
    excerpt:
      "As a working mother, I struggled to balance my career aspirations with my family responsibilities. Here's how Islamic guidance helped me find harmony.",
    author: "Umm Yusuf",
    readTime: "7 min read",
    category: "Life Balance",
    tags: ["Career", "Motherhood", "Balance"],
    likes: 18,
    publishedAt: "4 days ago",
    featured: false,
  },
  {
    id: 3,
    title: "The Beauty of Arranged Marriage: Our Love Story",
    excerpt:
      "Many people question arranged marriages, but our journey shows how love can grow beautifully when built on Islamic foundations and mutual respect.",
    author: "Brother Ahmad",
    readTime: "6 min read",
    category: "Love Stories",
    tags: ["Arranged Marriage", "Love", "Respect"],
    likes: 32,
    publishedAt: "1 week ago",
    featured: true,
  },
  {
    id: 4,
    title: "Dealing with In-Law Relationships",
    excerpt:
      "Building positive relationships with in-laws can be challenging. Here are practical Islamic approaches that transformed our family dynamics.",
    author: "Sister Khadijah",
    readTime: "4 min read",
    category: "Family Relations",
    tags: ["In-Laws", "Family", "Relationships"],
    likes: 15,
    publishedAt: "1 week ago",
    featured: false,
  },
  {
    id: 5,
    title: "Financial Planning as Newlyweds",
    excerpt:
      "Starting our married life with limited resources taught us valuable lessons about financial planning according to Islamic principles.",
    author: "Brother Omar",
    readTime: "8 min read",
    category: "Financial Wisdom",
    tags: ["Finance", "Planning", "Newlyweds"],
    likes: 21,
    publishedAt: "2 weeks ago",
    featured: false,
  },
  {
    id: 6,
    title: "When Children Don't Come Easily",
    excerpt:
      "Our journey through infertility was difficult, but it strengthened our faith and brought us closer together. Here's our story of hope and patience.",
    author: "Anonymous Couple",
    readTime: "9 min read",
    category: "Trials & Patience",
    tags: ["Infertility", "Patience", "Hope"],
    likes: 28,
    publishedAt: "3 weeks ago",
    featured: true,
  },
]

const categories = [
  "All Stories",
  "Love Stories",
  "Challenges Overcome",
  "Life Balance",
  "Family Relations",
  "Financial Wisdom",
  "Trials & Patience",
]

export default function StoriesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Real Stories</h1>
          <p className="text-gray-600 mt-1">Authentic experiences from our community members</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
          Share Your Story
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search stories..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="recent">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Featured Stories */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Stories</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories
            .filter((story) => story.featured)
            .map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                      {story.category}
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    <Link href={`/dashboard/stories/${story.id}`} className="hover:text-emerald-700 transition-colors">
                      {story.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">{story.excerpt}</p>
                  <div className="flex flex-wrap gap-1">
                    {story.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{story.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{story.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      <span>{story.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* All Stories */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">All Stories</h2>
        <div className="space-y-4">
          {stories.map((story) => (
            <Card key={story.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    {story.category}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-gray-500">{story.likes}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  <Link href={`/dashboard/stories/${story.id}`} className="hover:text-emerald-700 transition-colors">
                    {story.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-3 leading-relaxed">{story.excerpt}</p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {story.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{story.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{story.readTime}</span>
                    </div>
                    <span>{story.publishedAt}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-800">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Read Story
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent">
          Load More Stories
        </Button>
      </div>
    </div>
  )
}
