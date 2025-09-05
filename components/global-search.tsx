"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Search, BookOpen, MessageCircle, Users, Clock, TrendingUp } from "lucide-react"
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
}

const mockSearchResults: SearchResult[] = [
  {
    id: "1",
    title: "Building Trust in Early Marriage: An Islamic Perspective",
    description: "Learn how to establish deep trust and understanding in your marriage through Islamic teachings...",
    type: "article",
    category: "Marriage Guidance",
    url: "/dashboard/content/1",
    relevance: 95,
    tags: ["Trust", "Early Marriage", "Islamic Guidance"],
    author: "Dr. Amina Hassan",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    title: "How do I handle disagreements about spending with my spouse?",
    description: "We often disagree about how to spend our money. I want to save more but my spouse likes to spend...",
    type: "question",
    category: "Financial Matters",
    url: "/dashboard/qa/1",
    relevance: 88,
    tags: ["Money", "Disagreements", "Budgeting"],
    author: "Anonymous Sister",
    createdAt: "2024-01-15",
  },
  {
    id: "3",
    title: "Effective Communication: The Prophetic Way",
    description: "Discover how Prophet Muhammad (PBUH) communicated with his wives and apply these principles...",
    type: "article",
    category: "Communication",
    url: "/dashboard/content/2",
    relevance: 82,
    tags: ["Communication", "Sunnah", "Marriage"],
    author: "Sheikh Omar Abdullah",
    createdAt: "2024-01-12",
  },
]

const recentSearches = ["trust in marriage", "financial planning", "communication", "in-law relations"]

const popularTopics = [
  { name: "Marriage Guidance", count: 45 },
  { name: "Communication", count: 32 },
  { name: "Conflict Resolution", count: 28 },
  { name: "Financial Planning", count: 19 },
]

interface GlobalSearchProps {
  placeholder?: string
  showRecentSearches?: boolean
}

export function GlobalSearch({
  placeholder = "Search articles, questions, topics...",
  showRecentSearches = true,
}: GlobalSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        const filtered = mockSearchResults.filter(
          (result) =>
            result.title.toLowerCase().includes(query.toLowerCase()) ||
            result.description.toLowerCase().includes(query.toLowerCase()) ||
            result.tags?.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
        )
        setResults(filtered)
        setIsLoading(false)
      }, 300)
    } else {
      setResults([])
    }
  }, [query])

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder={placeholder} className="pl-10 cursor-pointer" readOnly onClick={() => setIsOpen(true)} />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden p-0">
        <DialogHeader className="px-6 py-4 border-b">
          <DialogTitle>Search Baytus-Sakeenah</DialogTitle>
        </DialogHeader>
        <Command className="overflow-hidden">
          <CommandInput
            placeholder="Search articles, questions, topics..."
            value={query}
            onValueChange={setQuery}
            className="border-0"
          />
          <CommandList className="max-h-[60vh] overflow-y-auto">
            {query.length === 0 && (
              <>
                {showRecentSearches && recentSearches.length > 0 && (
                  <CommandGroup heading="Recent Searches">
                    {recentSearches.map((search) => (
                      <CommandItem
                        key={search}
                        onSelect={() => setQuery(search)}
                        className="flex items-center space-x-2"
                      >
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{search}</span>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
                <CommandGroup heading="Popular Topics">
                  {popularTopics.map((topic) => (
                    <CommandItem
                      key={topic.name}
                      onSelect={() => setQuery(topic.name)}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span>{topic.name}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {topic.count}
                      </Badge>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}

            {query.length > 0 && (
              <>
                {isLoading && (
                  <CommandEmpty>
                    <div className="flex items-center justify-center py-6">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                    </div>
                  </CommandEmpty>
                )}

                {!isLoading && results.length === 0 && query.length > 2 && (
                  <CommandEmpty>
                    <div className="text-center py-6">
                      <Search className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
                      <p className="text-xs text-muted-foreground mt-1">Try different keywords or browse categories</p>
                    </div>
                  </CommandEmpty>
                )}

                {!isLoading && results.length > 0 && (
                  <CommandGroup heading={`${results.length} Results`}>
                    {results.map((result) => (
                      <CommandItem key={result.id} className="p-0">
                        <Link
                          href={result.url}
                          className="flex items-start space-x-3 p-3 w-full hover:bg-muted/50 rounded-md"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={`p-2 rounded-md ${getTypeColor(result.type)}`}>
                            {getTypeIcon(result.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="outline" className="text-xs">
                                {result.category}
                              </Badge>
                              <Badge variant="secondary" className="text-xs capitalize">
                                {result.type}
                              </Badge>
                            </div>
                            <h4 className="font-medium text-foreground text-sm line-clamp-1">{result.title}</h4>
                            <p className="text-xs text-muted-foreground line-clamp-2 mt-1">{result.description}</p>
                            {result.tags && (
                              <div className="flex gap-1 mt-2">
                                {result.tags.slice(0, 3).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </Link>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                )}
              </>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
