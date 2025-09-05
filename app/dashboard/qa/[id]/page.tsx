import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Share2,
  Flag,
  Eye,
  Clock,
  CheckCircle,
  Award,
} from "lucide-react"
import Link from "next/link"

// This would typically come from a database or API
const question = {
  id: 1,
  title: "How do I handle disagreements about spending with my spouse?",
  description:
    "We often disagree about how to spend our money. I want to save more but my spouse likes to spend on things I consider unnecessary. How can we find a balance that respects both our views? We've been married for 2 years and this is becoming a recurring issue that's causing tension between us.",
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
}

const answers = [
  {
    id: 1,
    content: `Assalamu alaikum sister. This is a very common issue in marriages, and you're not alone in facing this challenge.

From an Islamic perspective, both spouses have rights and responsibilities regarding family finances. Here are some suggestions:

**1. Open Communication**
Sit down together and discuss your financial goals openly. Share why saving is important to you and listen to your spouse's perspective on spending.

**2. Create a Budget Together**
Work together to create a monthly budget that includes:
- Essential expenses (rent, food, utilities)
- Savings goals
- Individual "fun money" for each spouse

**3. Islamic Principles**
Remember that Islam encourages moderation: "And those who, when they spend, are not extravagant and not niggardly, but hold a just (balance) between those (extremes)" (Quran 25:67)

**4. Compromise**
Perhaps agree on a percentage for savings and a percentage for discretionary spending that you both feel comfortable with.

**5. Seek Guidance**
If the disagreements continue, consider speaking with a knowledgeable imam or Islamic financial counselor.

May Allah grant you both wisdom and understanding in managing your finances together.`,
    author: "Sister Fatima Al-Zahra",
    isAnonymous: false,
    helpful: 15,
    createdAt: "2024-01-15",
    isBestAnswer: true,
    authorBadge: "Community Mentor",
  },
  {
    id: 2,
    content: `I went through something very similar in my first few years of marriage. Here's what worked for us:

We started having monthly "money meetings" where we review our spending and savings together. It helped us understand each other's priorities better.

One thing that really helped was giving each other a small amount of "no questions asked" money each month that we could spend however we wanted. This reduced the tension around smaller purchases.

Also, we found it helpful to have shared goals - like saving for Hajj or a house - that motivated both of us to be more mindful of our spending.

May Allah bless your marriage and grant you both financial wisdom.`,
    author: "Experienced Husband",
    isAnonymous: true,
    helpful: 8,
    createdAt: "2024-01-15",
    isBestAnswer: false,
  },
  {
    id: 3,
    content: `From a practical standpoint, you might want to consider the 50/30/20 rule adapted for Islamic principles:
- 50% for needs (halal essentials)
- 30% for wants (within Islamic guidelines)
- 20% for savings and charity (including zakat)

This gives structure while allowing both perspectives. The key is agreeing on what falls into each category together.`,
    author: "Financial Advisor",
    isAnonymous: false,
    helpful: 6,
    createdAt: "2024-01-16",
    isBestAnswer: false,
    authorBadge: "Verified Expert",
  },
]

export default function QuestionDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Back Navigation */}
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/dashboard/qa">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Q&A Forum
        </Link>
      </Button>

      {/* Question */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{question.category}</Badge>
            <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
              <CheckCircle className="w-3 h-3 mr-1" />
              Answered
            </Badge>
          </div>
          <CardTitle className="text-2xl md:text-3xl text-balance">{question.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground leading-relaxed">{question.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {question.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Question Meta */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 border-t">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {question.isAnonymous ? "A" : question.author[0]}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-muted-foreground">{question.author}</span>
              </div>
              <span className="text-sm text-muted-foreground flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                Asked {new Date(question.createdAt).toLocaleDateString()}
              </span>
              <span className="text-sm text-muted-foreground flex items-center">
                <Eye className="w-3 h-3 mr-1" />
                {question.views} views
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <ThumbsUp className="w-4 h-4 mr-2" />
                Helpful ({question.helpful})
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Flag className="w-4 h-4 mr-2" />
                Report
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Answers Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-foreground">
            {answers.length} Answer{answers.length !== 1 ? "s" : ""}
          </h2>
        </div>

        {answers.map((answer) => (
          <Card
            key={answer.id}
            className={`border-border ${answer.isBestAnswer ? "border-green-200 bg-green-50/50" : ""}`}
          >
            {answer.isBestAnswer && (
              <div className="bg-green-100 border-b border-green-200 px-6 py-3">
                <div className="flex items-center text-green-800">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Best Answer</span>
                </div>
              </div>
            )}
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="prose prose-sm max-w-none text-foreground">
                  <div className="whitespace-pre-line leading-relaxed">{answer.content}</div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {answer.isAnonymous ? "A" : answer.author[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <span className="text-sm font-medium text-foreground">{answer.author}</span>
                        {answer.authorBadge && (
                          <Badge variant="outline" className="ml-2 text-xs">
                            {answer.authorBadge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(answer.createdAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      {answer.helpful}
                    </Button>
                    <Button variant="outline" size="sm">
                      <ThumbsDown className="w-3 h-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add Answer */}
      <Card>
        <CardHeader>
          <CardTitle>Your Answer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea placeholder="Share your advice, experience, or Islamic guidance that might help..." rows={6} />
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Please ensure your answer follows our community guidelines and Islamic values.
            </p>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Post Answer
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
