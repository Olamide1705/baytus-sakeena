import { ArrowLeft, Heart, Share2, BookmarkPlus, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

// Mock data for individual story
const story = {
  id: 1,
  title: "How We Overcame Our First Year Challenges",
  content: `Assalamu alaikum, dear brothers and sisters,

I wanted to share our story because I know many couples go through similar struggles in their first year of marriage. When my husband and I got married, we thought love would be enough to overcome any obstacle. While love is indeed important, we quickly learned that marriage requires much more.

## The Early Struggles

Our first few months were filled with misunderstandings. Coming from different families with different traditions, we often clashed over simple things like how to manage household chores, financial decisions, and even how to spend our weekends.

I remember one particular argument about money that lasted for days. I felt unheard, and he felt criticized. We were both hurt and didn't know how to bridge the gap between us.

## Finding Islamic Guidance

It was during this difficult time that we decided to seek guidance from our local imam and also started reading more about marriage in Islam. We learned about the importance of:

- **Patience (Sabr)**: Understanding that building a strong marriage takes time
- **Communication**: Speaking with kindness and listening with an open heart  
- **Compromise**: Finding middle ground while respecting each other's perspectives
- **Dua**: Making regular prayers for our marriage and each other

## The Turning Point

The real change came when we started having weekly "marriage meetings." Every Friday evening, we would sit together and discuss:

1. What went well that week
2. Any concerns or issues we needed to address
3. Our goals for the coming week
4. Gratitude for each other

This simple practice transformed our relationship. Instead of letting small issues build up into big arguments, we addressed them regularly with love and respect.

## What We Learned

Through this journey, we discovered that:

- **Every marriage has challenges** - it's how you handle them that matters
- **Islamic principles provide the best framework** for resolving conflicts
- **Regular communication prevents most problems** from escalating
- **Patience and forgiveness** are essential virtues in marriage
- **Seeking help is a sign of wisdom**, not weakness

## Our Advice to Other Couples

If you're going through similar struggles, please know that you're not alone. Here's what helped us:

1. **Make time for each other** - even 15 minutes of focused conversation daily
2. **Learn together** - read Islamic books on marriage, attend workshops
3. **Pray together** - make dua for your marriage and each other
4. **Be patient** - change takes time, but it's worth it
5. **Seek guidance** - from knowledgeable people in your community

## Today

Alhamdulillah, we're now in our third year of marriage, and while we still face challenges, we handle them much better. Our relationship is built on a foundation of Islamic values, mutual respect, and genuine friendship.

I pray that Allah blesses all marriages and helps couples find peace and tranquility in their relationships. Remember, marriage is half of our deen, and with Allah's guidance, any challenge can be overcome.

May Allah grant you all happy and blessed marriages. Ameen.

---

*If you have questions or would like to share your own experiences, please feel free to reach out through the community forum.*`,
  author: "Anonymous Sister",
  readTime: "5 min read",
  category: "Challenges Overcome",
  tags: ["Communication", "First Year", "Patience", "Islamic Guidance"],
  likes: 24,
  bookmarks: 12,
  publishedAt: "2 days ago",
  comments: 8,
}

const relatedStories = [
  {
    id: 2,
    title: "Building Trust in Marriage",
    author: "Brother Yusuf",
    readTime: "4 min read",
    category: "Relationship Building",
  },
  {
    id: 3,
    title: "The Importance of Patience in Marriage",
    author: "Sister Aisha",
    readTime: "6 min read",
    category: "Islamic Values",
  },
  {
    id: 4,
    title: "Communication Tips for Newlyweds",
    author: "Imam Abdullah",
    readTime: "7 min read",
    category: "Practical Advice",
  },
]

export default function StoryDetailPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Navigation */}
      <div className="flex items-center gap-2">
        <Link href="/dashboard/stories">
          <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Stories
          </Button>
        </Link>
      </div>

      {/* Story Header */}
      <div className="space-y-4">
        <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">{story.category}</Badge>

        <h1 className="text-3xl font-bold text-gray-900 leading-tight">{story.title}</h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{story.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{story.readTime}</span>
            </div>
            <span>{story.publishedAt}</span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
              <Heart className="h-4 w-4 mr-1" />
              {story.likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-emerald-600">
              <BookmarkPlus className="h-4 w-4 mr-1" />
              {story.bookmarks}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {story.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      {/* Story Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">{story.content}</div>
      </div>

      <Separator />

      {/* Comments Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">Comments ({story.comments})</h3>
        </div>

        <Card>
          <CardContent className="p-4">
            <Textarea
              placeholder="Share your thoughts or experiences... (Remember to be respectful and follow Islamic guidelines)"
              className="min-h-[100px] mb-3"
            />
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500">Comments are moderated to ensure respectful discussion</p>
              <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                Post Comment
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Sample Comments */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Sister Fatima</span>
                    <span className="text-sm text-gray-500">1 day ago</span>
                  </div>
                  <p className="text-gray-700">
                    JazakAllahu khair for sharing this beautiful story. My husband and I are going through similar
                    challenges, and your advice about weekly meetings is something we'll definitely try. May Allah bless
                    your marriage.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-gray-900">Brother Ahmed</span>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>
                  <p className="text-gray-700">
                    This resonates so much with our experience. The first year was definitely the hardest, but
                    Alhamdulillah, we learned to communicate better through Islamic guidance. Thank you for the reminder
                    about patience and dua.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Related Stories */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Related Stories</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedStories.map((relatedStory) => (
            <Card key={relatedStory.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                  {relatedStory.category}
                </Badge>
                <CardTitle className="text-base leading-tight">
                  <Link
                    href={`/dashboard/stories/${relatedStory.id}`}
                    className="hover:text-emerald-700 transition-colors"
                  >
                    {relatedStory.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    <span>{relatedStory.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{relatedStory.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
