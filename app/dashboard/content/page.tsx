"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Heart, Search, Star, Eye, TrendingUp } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "all", name: "All Content", count: 156 },
  { id: "marriage-guidance", name: "Marriage Guidance", count: 45 },
  { id: "communication", name: "Communication", count: 32 },
  { id: "conflict-resolution", name: "Conflict Resolution", count: 28 },
  { id: "financial-planning", name: "Financial Planning", count: 19 },
  { id: "in-law-relations", name: "In-Law Relations", count: 15 },
  { id: "islamic-principles", name: "Islamic Principles", count: 17 },
]

const articles = [
  {
    id: 1,
    title: "Building Trust in Early Marriage: An Islamic Perspective",
    description:
      "Learn how to establish deep trust and understanding in your marriage through Islamic teachings and practical advice.",
    category: "Marriage Guidance",
    author: "Dr. Amina Hassan",
    readTime: "8 min read",
    views: 1247,
    likes: 89,
    image: "/islamic-couple-trust.jpg",
    tags: ["Trust", "Early Marriage", "Islamic Guidance"],
    featured: true,
    publishedAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Effective Communication: The Prophetic Way",
    description:
      "Discover how Prophet Muhammad (PBUH) communicated with his wives and apply these principles in your marriage.",
    category: "Communication",
    author: "Sheikh Omar Abdullah",
    readTime: "6 min read",
    views: 892,
    likes: 67,
    image: "/prophetic-communication.jpg",
    tags: ["Communication", "Sunnah", "Marriage"],
    featured: false,
    publishedAt: "2024-01-12",
  },
  {
    id: 3,
    title: "Resolving Conflicts with Patience and Wisdom",
    description:
      "Islamic approaches to handling disagreements and conflicts in marriage with patience and understanding.",
    category: "Conflict Resolution",
    author: "Sister Fatima Al-Zahra",
    readTime: "10 min read",
    views: 756,
    likes: 54,
    image: "/conflict-resolution.jpg",
    tags: ["Conflict", "Patience", "Wisdom"],
    featured: true,
    publishedAt: "2024-01-10",
  },
  {
    id: 4,
    title: "Financial Harmony: Islamic Principles for Couples",
    description: "Managing finances as a Muslim couple according to Islamic principles and modern practical advice.",
    category: "Financial Planning",
    author: "Dr. Yusuf Ibrahim",
    readTime: "12 min read",
    views: 634,
    likes: 43,
    image: "/islamic-finance.jpg",
    tags: ["Finance", "Islamic Banking", "Planning"],
    featured: false,
    publishedAt: "2024-01-08",
  },
  {
    id: 5,
    title: "Navigating In-Law Relationships with Grace",
    description:
      "Building positive relationships with in-laws while maintaining your marriage bond, guided by Islamic values.",
    category: "In-Law Relations",
    author: "Sister Aisha Malik",
    readTime: "7 min read",
    views: 523,
    likes: 38,
    image: "/in-law-relations.jpg",
    tags: ["In-Laws", "Family", "Relationships"],
    featured: false,
    publishedAt: "2024-01-05",
  },
  {
    id: 6,
    title: "The Rights and Responsibilities of Spouses in Islam",
    description:
      "Understanding the balanced approach Islam takes to marriage rights and responsibilities for both partners.",
    category: "Islamic Principles",
    author: "Dr. Muhammad Al-Faqih",
    readTime: "15 min read",
    views: 1156,
    likes: 92,
    image: "/islamic-marriage-rights.jpg",
    tags: ["Rights", "Responsibilities", "Islamic Law"],
    featured: true,
    publishedAt: "2024-01-03",
  },
]

export default function ContentHubPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "all" || article.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.views - a.views
      case "liked":
        return b.likes - a.likes
      case "recent":
      default:
        return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    }
  })

  const featuredArticles = articles.filter((article) => article.featured)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Content Hub</h1>
        <p className="text-muted-foreground">
          Discover Islamic guidance, practical advice, and wisdom for strengthening your marriage
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search articles, topics, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="liked">Most Liked</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name}
              <Badge variant="secondary" className="ml-1 text-xs">
                {category.count}
              </Badge>
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory} className="mt-8">
          {/* Featured Articles */}
          {selectedCategory === "all" && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                Featured Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="border-border hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-primary" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <Badge variant="outline" className="text-primary border-primary">
                          Featured
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {article.views}
                          </span>
                          <span className="flex items-center">
                            <Heart className="w-3 h-3 mr-1" />
                            {article.likes}
                          </span>
                        </div>
                        <Button size="sm" asChild>
                          <Link href={`/dashboard/content/${article.id}`}>Read Article</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Articles */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              {selectedCategory === "all" ? "All Articles" : categories.find((c) => c.id === selectedCategory)?.name}
              <span className="ml-2 text-sm text-muted-foreground">({sortedArticles.length} articles)</span>
            </h2>

            <div className="grid gap-6">
              {sortedArticles.map((article) => (
                <Card key={article.id} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="w-full md:w-48 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          {article.featured && (
                            <Badge variant="outline" className="text-primary border-primary">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{article.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{article.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>{article.author}</span>
                            <span>{article.readTime}</span>
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {article.views}
                            </span>
                            <span className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              {article.likes}
                            </span>
                          </div>
                          <Button asChild>
                            <Link href={`/dashboard/content/${article.id}`}>Read Article</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedArticles.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No articles found</h3>
                <p className="text-muted-foreground">Try adjusting your search terms or browse different categories.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
