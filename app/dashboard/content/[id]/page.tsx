import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Clock, Heart, Eye, Share2, Bookmark, ArrowLeft, MessageCircle, ThumbsUp } from "lucide-react"
import Link from "next/link"

// This would typically come from a database or API
const article = {
  id: 1,
  title: "Building Trust in Early Marriage: An Islamic Perspective",
  description:
    "Learn how to establish deep trust and understanding in your marriage through Islamic teachings and practical advice.",
  content: `
    <p>Trust forms the foundation of any successful marriage, and in Islam, this concept is deeply rooted in our faith and the teachings of Prophet Muhammad (peace be upon him). When couples embark on their marriage journey, establishing trust becomes one of the most crucial elements for long-term happiness and spiritual growth together.</p>

    <h2>The Islamic Foundation of Trust</h2>
    <p>The Quran beautifully describes the relationship between spouses: "They are clothing for you and you are clothing for them" (2:187). This metaphor illustrates the intimate protection, comfort, and trust that should exist between husband and wife.</p>

    <p>Trust in marriage encompasses several dimensions:</p>
    <ul>
      <li><strong>Emotional Trust:</strong> Being vulnerable and open with your feelings</li>
      <li><strong>Physical Trust:</strong> Respecting boundaries and maintaining intimacy</li>
      <li><strong>Spiritual Trust:</strong> Supporting each other's relationship with Allah</li>
      <li><strong>Financial Trust:</strong> Being transparent about money matters</li>
    </ul>

    <h2>Practical Steps to Build Trust</h2>
    <p>Building trust requires consistent effort from both partners. Here are some practical Islamic approaches:</p>

    <h3>1. Honest Communication</h3>
    <p>The Prophet (PBUH) emphasized truthfulness in all aspects of life. In marriage, this means being honest about your feelings, concerns, and expectations. Create regular opportunities for open dialogue without judgment.</p>

    <h3>2. Keeping Promises</h3>
    <p>Allah says in the Quran: "O you who believe! Fulfill your contracts" (5:1). This applies to the small daily promises we make to our spouses. Consistency in keeping your word builds reliability.</p>

    <h3>3. Respecting Privacy</h3>
    <p>While transparency is important, respecting your spouse's need for personal space and privacy shows trust. The Prophet (PBUH) taught us to respect others' boundaries.</p>

    <h2>When Trust is Broken</h2>
    <p>If trust has been damaged, Islam provides a path for healing through repentance (tawbah), forgiveness, and gradual rebuilding. Remember that Allah is "Oft-Forgiving, Most Merciful" (2:173), and we should strive to embody these qualities in our marriages.</p>

    <p>Seeking help from knowledgeable community members, Islamic counselors, or trusted mentors can provide guidance during difficult times.</p>

    <h2>Conclusion</h2>
    <p>Building trust in marriage is a continuous journey that requires patience, understanding, and commitment to Islamic values. When both partners work together with sincerity and faith, they can create a marriage that truly becomes a source of tranquility and blessing.</p>

    <p>May Allah bless all Muslim couples with marriages filled with trust, love, and spiritual growth. Ameen.</p>
  `,
  category: "Marriage Guidance",
  author: {
    name: "Dr. Amina Hassan",
    bio: "Islamic Marriage Counselor and Scholar",
    avatar: "/dr-amina-hassan.png",
  },
  readTime: "8 min read",
  views: 1247,
  likes: 89,
  comments: 23,
  tags: ["Trust", "Early Marriage", "Islamic Guidance"],
  publishedAt: "2024-01-15",
  relatedArticles: [
    {
      id: 2,
      title: "Effective Communication: The Prophetic Way",
      category: "Communication",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Resolving Conflicts with Patience and Wisdom",
      category: "Conflict Resolution",
      readTime: "10 min read",
    },
  ],
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Navigation */}
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/dashboard/content">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Content Hub
        </Link>
      </Button>

      {/* Article Header */}
      <div className="space-y-6">
        <div>
          <Badge variant="secondary" className="mb-4">
            {article.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{article.title}</h1>
          <p className="text-xl text-muted-foreground text-pretty">{article.description}</p>
        </div>

        {/* Author and Meta Info */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={article.author.avatar || "/placeholder.svg"} alt={article.author.name} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {article.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{article.author.name}</p>
              <p className="text-sm text-muted-foreground">{article.author.bio}</p>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {article.readTime}
            </span>
            <span className="flex items-center">
              <Eye className="w-4 h-4 mr-1" />
              {article.views} views
            </span>
            <span>Published {new Date(article.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Like ({article.likes})
          </Button>
          <Button variant="outline" size="sm">
            <Bookmark className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            Comment ({article.comments})
          </Button>
        </div>
      </div>

      <Separator />

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>

      <Separator />

      {/* Engagement Section */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Was this article helpful?</h3>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Yes
              </Button>
              <Button variant="outline" size="sm">
                No
              </Button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">Share your thoughts or ask questions about this article</p>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Join the Discussion
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      <div>
        <h3 className="text-xl font-semibold text-foreground mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {article.relatedArticles.map((related) => (
            <Card key={related.id} className="border-border hover:shadow-md transition-shadow">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  {related.category}
                </Badge>
                <CardTitle className="text-lg">{related.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{related.readTime}</span>
                  <Button size="sm" asChild>
                    <Link href={`/dashboard/content/${related.id}`}>Read Article</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
