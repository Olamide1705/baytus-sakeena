"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Filter, BookOpen, MessageCircle, Users, Clock, Eye, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"

interface SearchResult {
  id: string
  title: string
  description: string
  type: "article" | "question" | "user" | "topic"
  category: string
  url: string
  relevance: number
  tags?: string[]
  author?: string
  createdAt?: string
  views?: number
  likes?: number
  answers?: number
}

const searchResults: SearchResult[] = [
  {
    id: "1",
    title: "Building Trust in Early Marriage: An Islamic Perspective",
    description:
      "Learn how to establish deep trust and understanding in your marriage through Islamic teachings and practical advice.",
    type: "article",
    category: "Marriage Guidance",
    url: "/dashboard/content/1",
    relevance: 95,
    tags: ["Trust", "Early Marriage", "Islamic Guidance"],
    author: "Dr. Amina Hassan",
    createdAt: "2024-01-15",
    views: 1247,
    likes: 89,
  },
  {
    id: "2",
    title: "How do I handle disagreements about spending with my spouse?",
    description:
      "We often disagree about how to spend our money. I want to save more but my spouse likes to spend on things I consider unnecessary.",
    type: "question",
    category: "Financial Matters",
    url: "/dashboard/qa/1",
    relevance: 88,
    tags: ["Money", "Disagreements", "Budgeting"],
    author: "Anonymous Sister",
    createdAt: "2024-01-15",
    views: 156,
    answers: 12,
  },
  {
    id: "3",
    title: "Effective Communication: The Prophetic Way",
    description:
      "Discover how Prophet Muhammad (PBUH) communicated with his wives and apply these principles in your marriage.",
    type: "article",
    category: "Communication",
    url: "/dashboard/content/2",
    relevance: 82,
    tags: ["Communication", "Sunnah", "Marriage"],
    author: "Sheikh Omar Abdullah",
    createdAt: "2024-01-12",
    views: 892,
    likes: 67,
  },
  {
    id: "4",
    title: "My in-laws are too involved in our marriage decisions",
    description: "My mother-in-law constantly gives unsolicited advice about our marriage and how we should live.",
    type: "question",
    category: "In-Law Relations",
    url: "/dashboard/qa/2",
    relevance: 78,
    tags: ["Boundaries", "In-Laws", "Respect"],
    author: "Concerned Wife",
    createdAt: "2024-01-14",
    views: 203,
    answers: 8,
  },
]

const categories = [
  "Marriage Guidance",
  "Communication",
  "Conflict Resolution",
  "Financial Matters",
  "In-Law Relations",
  "Islamic Guidance",
]

const contentTypes = [
  { id: "all", name: "All Content" },
  { id: "article", name: "Articles" },
  { id: "question", name: "Questions" },
  { id: "user", name: "Users" },
]

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>(searchResults)
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>(searchResults)
  const [selectedType, setSelectedType] = useState("all")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("relevance")
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    let filtered = results

    // Filter by type
    if (selectedType !== "all") {
      filtered = filtered.filter((result) => result.type === selectedType)
    }

    // Filter by categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((result) => selectedCategories.includes(result.category))
    }

    // Filter by search query
    if (query) {
      filtered = filtered.filter(
        (result) =>
          result.title.toLowerCase().includes(query.toLowerCase()) ||
          result.description.toLowerCase().includes(query.toLowerCase()) ||
          result.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
      )
    }

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "relevance":
          return b.relevance - a.relevance
        case "recent":
          return new Date(b.createdAt || "").getTime() - new Date(a.createdAt || "").getTime()
        case "popular":
          return (b.views || 0) - (a.views || 0)
        case "liked":
          return (b.likes || 0) - (a.likes || 0)
        default:
          return 0
      }
    })

    setFilteredResults(filtered)
  }, [results, selectedType, selectedCategories, query, sortBy])

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "article":
        return <BookOpen className="w-4 h-4" />
      case "question":
        return <MessageCircle className="w-4 h-4" />
      case "user":
        return <Users className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "article":
        return "bg-blue-100 text-blue-800"
      case "question":
        return "bg-green-100 text-green-800"
      case "user":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Search Results</h1>
        <p className="text-muted-foreground">Find articles, questions, and guidance across our community platform</p>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search articles, questions, topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Filters
          {(selectedCategories.length > 0 || selectedType !== "all") && (
            <Badge variant="secondary" className="ml-1">
              {selectedCategories.length + (selectedType !== "all" ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className={`lg:col-span-1 space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-4">Content Type</h3>
              <Tabs value={selectedType} onValueChange={setSelectedType} orientation="vertical">
                <TabsList className="grid w-full grid-cols-1 h-auto">
                  {contentTypes.map((type) => (
                    <TabsTrigger key={type.id} value={type.id} className="justify-start">
                      {type.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                    />
                    <label htmlFor={category} className="text-sm text-foreground cursor-pointer">
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-foreground mb-4">Sort By</h3>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Most Relevant</SelectItem>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="liked">Most Liked</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-foreground flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-primary" />
              Search Results
              <span className="ml-2 text-sm text-muted-foreground">({filteredResults.length} results)</span>
            </h2>
          </div>

          <div className="space-y-4">
            {filteredResults.map((result) => (
              <Card key={result.id} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-md ${getTypeColor(result.type)} flex-shrink-0`}>
                      {getTypeIcon(result.type)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{result.category}</Badge>
                        <Badge variant="outline" className="capitalize">
                          {result.type}
                        </Badge>
                        <div className="text-xs text-muted-foreground">Relevance: {result.relevance}%</div>
                      </div>

                      <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary">
                        <Link href={result.url}>{result.title}</Link>
                      </h3>

                      <p className="text-muted-foreground mb-4 line-clamp-2">{result.description}</p>

                      {result.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {result.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Avatar className="h-6 w-6 mr-2">
                              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                {result.author?.[0] || "A"}
                              </AvatarFallback>
                            </Avatar>
                            <span>{result.author}</span>
                          </div>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {new Date(result.createdAt || "").toLocaleDateString()}
                          </span>
                          {result.views && (
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {result.views} views
                            </span>
                          )}
                          {result.likes && (
                            <span className="flex items-center">
                              <Heart className="w-3 h-3 mr-1" />
                              {result.likes} likes
                            </span>
                          )}
                          {result.answers && (
                            <span className="flex items-center">
                              <MessageCircle className="w-3 h-3 mr-1" />
                              {result.answers} answers
                            </span>
                          )}
                        </div>
                        <Button size="sm" asChild>
                          <Link href={result.url}>{result.type === "article" ? "Read Article" : "View Question"}</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("")
                  setSelectedType("all")
                  setSelectedCategories([])
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
