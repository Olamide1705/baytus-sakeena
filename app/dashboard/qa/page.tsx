"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, Search, Plus, TrendingUp, Clock, CheckCircle, Users, Eye } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "all", name: "All Questions", count: 234 },
  { id: "marriage-guidance", name: "Marriage Guidance", count: 67 },
  { id: "communication", name: "Communication", count: 45 },
  { id: "conflict-resolution", name: "Conflict Resolution", count: 38 },
  { id: "financial-matters", name: "Financial Matters", count: 29 },
  { id: "in-law-relations", name: "In-Law Relations", count: 25 },
  { id: "islamic-guidance", name: "Islamic Guidance", count: 30 },
]

const questions = [
  {
    id: 1,
    title: "How do I handle disagreements about spending with my spouse?",
    description:
      "We often disagree about how to spend our money. I want to save more but my spouse likes to spend on things I consider unnecessary. How can we find a balance that respects both our views?",
    category: "Financial Matters",
    author: "Anonymous Sister",
    isAnonymous: true,
    answers: 12,
    views: 156,
    helpful: 23,
    tags: ["Money", "Disagreements", "Budgeting"],
    status: "answered",
    createdAt: "2024-01-15",
    lastActivity: "2024-01-16",
  },
  {
    id: 2,
    title: "My in-laws are too involved in our marriage decisions",
    description:
      "My mother-in-law constantly gives unsolicited advice about our marriage and how we should live. It's causing tension between me and my spouse. How do I set boundaries respectfully?",
    category: "In-Law Relations",
    author: "Concerned Wife",
    isAnonymous: true,
    answers: 8,
    views: 203,
    helpful: 31,
    tags: ["Boundaries", "In-Laws", "Respect"],
    status: "answered",
    createdAt: "2024-01-14",
    lastActivity: "2024-01-15",
  },
  {
    id: 3,
    title: "Is it normal to feel overwhelmed in the first year of marriage?",
    description:
      "I've been married for 6 months and sometimes feel overwhelmed by all the changes and adjustments. Is this normal? How did other couples handle the transition?",
    category: "Marriage Guidance",
    author: "New Husband",
    isAnonymous: true,
    answers: 15,
    views: 289,
    helpful: 45,
    tags: ["First Year", "Adjustment", "Normal"],
    status: "answered",
    createdAt: "2024-01-13",
    lastActivity: "2024-01-16",
  },
  {
    id: 4,
    title: "How to improve communication when we both get defensive?",
    description:
      "Whenever we try to discuss problems, we both get defensive and the conversation goes nowhere. What are some Islamic approaches to better communication?",
    category: "Communication",
    author: "Anonymous Brother",
    isAnonymous: true,
    answers: 6,
    views: 134,
    helpful: 18,
    tags: ["Defensive", "Islamic Approach", "Discussion"],
    status: "open",
    createdAt: "2024-01-12",
    lastActivity: "2024-01-14",
  },
  {
    id: 5,
    title: "Balancing work and marriage - need advice",
    description:
      "I work long hours and my spouse feels neglected. How do other couples balance career demands with marriage responsibilities?",
    category: "Marriage Guidance",
    author: "Working Professional",
    isAnonymous: true,
    answers: 9,
    views: 178,
    helpful: 27,
    tags: ["Work-Life Balance", "Time Management", "Priorities"],
    status: "answered",
    createdAt: "2024-01-11",
    lastActivity: "2024-01-15",
  },
]

export default function QAForumPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("recent")

  const filteredQuestions = questions.filter((question) => {
    const matchesSearch =
      question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      question.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      selectedCategory === "all" || question.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory

    return matchesSearch && matchesCategory
  })

  const sortedQuestions = [...filteredQuestions].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.helpful - a.helpful
      case "most-answers":
        return b.answers - a.answers
      case "recent":
      default:
        return new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
    }
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "answered":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "open":
        return <MessageCircle className="w-4 h-4 text-primary" />
      default:
        return <MessageCircle className="w-4 h-4 text-muted-foreground" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "answered":
        return "bg-green-100 text-green-800 border-green-200"
      case "open":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Q&A Forum</h1>
          <p className="text-muted-foreground">
            Ask questions anonymously and get advice from our supportive community
          </p>
        </div>
        <Button
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          asChild
        >
          <Link href="/dashboard/qa/ask">
            <Plus className="w-4 h-4 mr-2" />
            Ask Question
          </Link>
        </Button>
      </div>

      {/* Community Guidelines */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Community Guidelines</h3>
              <p className="text-sm text-muted-foreground">
                Please maintain Islamic values and respect in all interactions. Questions and answers should be helpful,
                respectful, and appropriate for our community.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search questions, topics, or tags..."
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
            <SelectItem value="popular">Most Helpful</SelectItem>
            <SelectItem value="most-answers">Most Answers</SelectItem>
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
          {/* Questions List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                {selectedCategory === "all" ? "All Questions" : categories.find((c) => c.id === selectedCategory)?.name}
                <span className="ml-2 text-sm text-muted-foreground">({sortedQuestions.length} questions)</span>
              </h2>
            </div>

            <div className="space-y-4">
              {sortedQuestions.map((question) => (
                <Card key={question.id} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex flex-col items-center space-y-2 flex-shrink-0">
                        <div className="text-center">
                          <div className="text-lg font-semibold text-foreground">{question.answers}</div>
                          <div className="text-xs text-muted-foreground">answers</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-primary">{question.helpful}</div>
                          <div className="text-xs text-muted-foreground">helpful</div>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{question.category}</Badge>
                          <Badge variant="outline" className={getStatusColor(question.status)}>
                            {getStatusIcon(question.status)}
                            <span className="ml-1 capitalize">{question.status}</span>
                          </Badge>
                        </div>

                        <h3 className="text-lg font-semibold text-foreground mb-2 hover:text-primary">
                          <Link href={`/dashboard/qa/${question.id}`}>{question.title}</Link>
                        </h3>

                        <p className="text-muted-foreground mb-4 line-clamp-2">{question.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {question.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                  {question.isAnonymous ? "A" : question.author[0]}
                                </AvatarFallback>
                              </Avatar>
                              <span>{question.author}</span>
                            </div>
                            <span className="flex items-center">
                              <Eye className="w-3 h-3 mr-1" />
                              {question.views} views
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="flex items-center">
                              <Clock className="w-3 h-3 mr-1" />
                              {new Date(question.lastActivity).toLocaleDateString()}
                            </span>
                            <Button size="sm" asChild>
                              <Link href={`/dashboard/qa/${question.id}`}>View Question</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {sortedQuestions.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No questions found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or browse different categories.
                </p>
                <Button asChild>
                  <Link href="/dashboard/qa/ask">Ask the First Question</Link>
                </Button>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
