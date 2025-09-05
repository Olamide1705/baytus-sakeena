"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Filter, X } from "lucide-react"
import { format } from "date-fns"

interface FilterOptions {
  categories: string[]
  contentTypes: string[]
  authors: string[]
  tags: string[]
  dateRange: {
    from: Date | undefined
    to: Date | undefined
  }
  readTime: number[]
  sortBy: string
}

interface AdvancedFiltersProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
  onClearFilters: () => void
}

const availableCategories = [
  "Marriage Guidance",
  "Communication",
  "Conflict Resolution",
  "Financial Matters",
  "In-Law Relations",
  "Islamic Guidance",
]

const availableContentTypes = [
  { id: "article", name: "Articles" },
  { id: "question", name: "Questions" },
  { id: "user", name: "Users" },
  { id: "topic", name: "Topics" },
]

const availableAuthors = [
  "Dr. Amina Hassan",
  "Sheikh Omar Abdullah",
  "Sister Fatima Al-Zahra",
  "Dr. Yusuf Ibrahim",
  "Sister Aisha Malik",
]

const popularTags = [
  "Trust",
  "Communication",
  "Money",
  "Boundaries",
  "Islamic Guidance",
  "First Year",
  "Conflict",
  "Patience",
  "Understanding",
  "Respect",
]

export function AdvancedFilters({ filters, onFiltersChange, onClearFilters }: AdvancedFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const updateFilters = (key: keyof FilterOptions, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    })
  }

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]
    updateFilters("categories", newCategories)
  }

  const toggleContentType = (type: string) => {
    const newTypes = filters.contentTypes.includes(type)
      ? filters.contentTypes.filter((t) => t !== type)
      : [...filters.contentTypes, type]
    updateFilters("contentTypes", newTypes)
  }

  const toggleAuthor = (author: string) => {
    const newAuthors = filters.authors.includes(author)
      ? filters.authors.filter((a) => a !== author)
      : [...filters.authors, author]
    updateFilters("authors", newAuthors)
  }

  const toggleTag = (tag: string) => {
    const newTags = filters.tags.includes(tag) ? filters.tags.filter((t) => t !== tag) : [...filters.tags, tag]
    updateFilters("tags", newTags)
  }

  const activeFiltersCount =
    filters.categories.length +
    filters.contentTypes.length +
    filters.authors.length +
    filters.tags.length +
    (filters.dateRange.from || filters.dateRange.to ? 1 : 0) +
    (filters.readTime[0] !== 0 || filters.readTime[1] !== 30 ? 1 : 0)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2">
          <Filter className="w-4 h-4" />
          Advanced Filters
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-1">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
        {activeFiltersCount > 0 && (
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Categories */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {availableCategories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                    {category}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Content Types */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Content Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {availableContentTypes.map((type) => (
                <div key={type.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`type-${type.id}`}
                    checked={filters.contentTypes.includes(type.id)}
                    onCheckedChange={() => toggleContentType(type.id)}
                  />
                  <label htmlFor={`type-${type.id}`} className="text-sm cursor-pointer">
                    {type.name}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Authors */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Authors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {availableAuthors.map((author) => (
                <div key={author} className="flex items-center space-x-2">
                  <Checkbox
                    id={`author-${author}`}
                    checked={filters.authors.includes(author)}
                    onCheckedChange={() => toggleAuthor(author)}
                  />
                  <label htmlFor={`author-${author}`} className="text-sm cursor-pointer">
                    {author}
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Popular Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={filters.tags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Date Range */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Date Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.dateRange.from ? format(filters.dateRange.from, "MMM dd") : "From"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={filters.dateRange.from}
                      onSelect={(date) => updateFilters("dateRange", { ...filters.dateRange, from: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="justify-start text-left font-normal bg-transparent">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {filters.dateRange.to ? format(filters.dateRange.to, "MMM dd") : "To"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={filters.dateRange.to}
                      onSelect={(date) => updateFilters("dateRange", { ...filters.dateRange, to: date })}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Read Time */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm">Read Time (minutes)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Slider
                value={filters.readTime}
                onValueChange={(value) => updateFilters("readTime", value)}
                max={30}
                min={0}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{filters.readTime[0]} min</span>
                <span>{filters.readTime[1]} min</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
