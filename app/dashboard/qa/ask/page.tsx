"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, HelpCircle, Shield, AlertCircle } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "marriage-guidance", name: "Marriage Guidance" },
  { id: "communication", name: "Communication" },
  { id: "conflict-resolution", name: "Conflict Resolution" },
  { id: "financial-matters", name: "Financial Matters" },
  { id: "in-law-relations", name: "In-Law Relations" },
  { id: "islamic-guidance", name: "Islamic Guidance" },
]

const suggestedTags = [
  "First Year",
  "Communication",
  "Trust",
  "Boundaries",
  "Money",
  "In-Laws",
  "Conflict",
  "Islamic Guidance",
  "Patience",
  "Understanding",
  "Respect",
  "Love",
]

export default function AskQuestionPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [agreedToGuidelines, setAgreedToGuidelines] = useState(false)

  const handleTagToggle = (tag: string) => {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ title, description, category, tags, isAnonymous, agreedToGuidelines })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Navigation */}
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/dashboard/qa">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Q&A Forum
        </Link>
      </Button>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Ask a Question</h1>
        <p className="text-muted-foreground">
          Get advice from our supportive community. Your question will be reviewed before being published.
        </p>
      </div>

      {/* Guidelines Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Shield className="w-5 h-5 mr-2 text-primary" />
            Community Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Be respectful and maintain Islamic values in your question and interactions
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Provide enough context for others to give helpful advice
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Avoid sharing overly personal or inappropriate details
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
              Use appropriate categories and tags to help others find your question
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Question Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Your Question</CardTitle>
            <CardDescription>Be clear and specific to get the best advice from our community</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium text-foreground">
                Question Title *
              </label>
              <Input
                id="title"
                placeholder="e.g., How do I handle disagreements about spending with my spouse?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <p className="text-xs text-muted-foreground">
                Be specific and clear. This will help others understand your question quickly.
              </p>
            </div>

            {/* Category */}
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium text-foreground">
                Category *
              </label>
              <Select value={category} onValueChange={setCategory} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-foreground">
                Detailed Description *
              </label>
              <Textarea
                id="description"
                placeholder="Provide more context about your situation. What have you tried? What specific advice are you looking for?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                required
              />
              <p className="text-xs text-muted-foreground">
                The more context you provide, the better advice you'll receive. Minimum 50 characters.
              </p>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Tags (Optional)</label>
              <p className="text-xs text-muted-foreground mb-3">
                Select relevant tags to help others find your question
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={tags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10"
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              {tags.length > 0 && (
                <div className="mt-3">
                  <p className="text-xs text-muted-foreground mb-2">Selected tags:</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="default">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Anonymous Option */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="anonymous"
                checked={isAnonymous}
                onCheckedChange={(checked) => setIsAnonymous(checked as boolean)}
              />
              <label htmlFor="anonymous" className="text-sm font-medium text-foreground">
                Post anonymously
              </label>
              <HelpCircle className="w-4 h-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">
              Your question will be posted anonymously to protect your privacy. This is recommended for sensitive
              topics.
            </p>
          </CardContent>
        </Card>

        {/* Agreement */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="guidelines"
                checked={agreedToGuidelines}
                onCheckedChange={(checked) => setAgreedToGuidelines(checked as boolean)}
                required
              />
              <div className="space-y-1">
                <label htmlFor="guidelines" className="text-sm font-medium text-foreground">
                  I agree to follow the community guidelines *
                </label>
                <p className="text-xs text-muted-foreground">
                  By posting this question, you agree to maintain respectful and appropriate communication that aligns
                  with Islamic values.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <AlertCircle className="w-4 h-4 mr-2" />
            Your question will be reviewed before being published
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" asChild>
              <Link href="/dashboard/qa">Cancel</Link>
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
              disabled={!title || !description || !category || !agreedToGuidelines}
            >
              Submit Question
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}
