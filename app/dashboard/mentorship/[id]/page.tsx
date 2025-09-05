import { ArrowLeft, Star, MessageCircle, Calendar, Clock, Heart, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

// Mock data for mentor profile
const mentor = {
  id: 1,
  name: "Ustadh Ahmad & Sister Khadijah",
  title: "Marriage Counselors",
  experience: "15 years married",
  specialties: ["Communication", "Conflict Resolution", "Islamic Marriage Principles", "Financial Planning"],
  rating: 4.9,
  reviews: 47,
  sessions: 156,
  languages: ["English", "Arabic"],
  availability: "Available",
  bio: `Assalamu alaikum! We are Ahmad and Khadijah, and we've been blessed with a strong marriage for over 15 years. Through our journey, we've learned valuable lessons about communication, patience, and building a relationship based on Islamic principles.

We both hold certifications in Islamic counseling and have been helping couples in our community for the past 8 years. Our approach combines traditional Islamic wisdom with practical modern techniques to help couples build stronger, more fulfilling marriages.

We believe that every marriage can thrive with the right guidance, patience, and commitment to Islamic values. We're here to support you on your journey.`,
  image: "/muslim-mentor-couple.png",
  verified: true,
  responseTime: "Usually responds within 2 hours",
  sessionTypes: [
    { type: "Individual Consultation", duration: "60 minutes", price: "Free" },
    { type: "Couple Session", duration: "90 minutes", price: "Free" },
    { type: "Follow-up Session", duration: "45 minutes", price: "Free" },
  ],
  availableSlots: ["Today 3:00 PM", "Today 7:00 PM", "Tomorrow 10:00 AM", "Tomorrow 2:00 PM", "Tomorrow 6:00 PM"],
}

const reviews = [
  {
    id: 1,
    author: "Anonymous Sister",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "Ustadh Ahmad and Sister Khadijah were incredibly helpful during a difficult time in our marriage. Their Islamic guidance and practical advice helped us communicate better and strengthen our bond. JazakAllahu khair!",
  },
  {
    id: 2,
    author: "Brother Yusuf",
    rating: 5,
    date: "1 month ago",
    comment:
      "As newlyweds, we were struggling with financial planning and setting boundaries with family. Their session gave us clear Islamic guidelines and practical steps. Highly recommend!",
  },
  {
    id: 3,
    author: "Sister Maryam",
    rating: 4,
    date: "2 months ago",
    comment:
      "Very knowledgeable and compassionate mentors. They helped us work through communication issues with patience and understanding. The Islamic perspective they provided was exactly what we needed.",
  },
]

export default function MentorProfilePage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Back Navigation */}
      <div className="flex items-center gap-2">
        <Link href="/dashboard/mentorship">
          <Button variant="ghost" size="sm" className="text-emerald-700 hover:text-emerald-800">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Mentors
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Profile */}
        <div className="lg:col-span-2 space-y-6">
          {/* Mentor Header */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 text-xl">
                    {mentor.name.split(" ")[0][0]}
                    {mentor.name.split(" ")[1] ? mentor.name.split(" ")[1][0] : ""}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold text-gray-900">{mentor.name}</h1>
                        {mentor.verified && (
                          <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200">
                            <Shield className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg text-gray-600">{mentor.title}</p>
                      <p className="text-sm text-gray-500">{mentor.experience}</p>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="text-lg font-semibold">{mentor.rating}</span>
                        <span className="text-gray-500">({mentor.reviews})</span>
                      </div>
                      <p className="text-sm text-gray-500">{mentor.sessions} sessions completed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{mentor.languages.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{mentor.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>{mentor.availability}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {mentor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">{mentor.bio}</p>
              </div>
            </CardContent>
          </Card>

          {/* Session Types */}
          <Card>
            <CardHeader>
              <CardTitle>Session Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {mentor.sessionTypes.map((session, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{session.type}</h4>
                    <p className="text-sm text-gray-600">{session.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-emerald-700">{session.price}</p>
                    <p className="text-xs text-gray-500">Community service</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader>
              <CardTitle>Reviews ({mentor.reviews})</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        <span className="text-emerald-700 text-sm font-medium">{review.author.split(" ")[0][0]}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{review.author}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full bg-transparent">
                View All Reviews
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Booking Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Connect with Mentor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                <Calendar className="h-4 w-4 mr-2" />
                Book Session
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <MessageCircle className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Heart className="h-4 w-4 mr-2" />
                Add to Favorites
              </Button>
            </CardContent>
          </Card>

          {/* Available Slots */}
          <Card>
            <CardHeader>
              <CardTitle>Available Times</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {mentor.availableSlots.map((slot, index) => (
                <Button key={index} variant="outline" className="w-full justify-start text-left bg-transparent">
                  <Clock className="h-4 w-4 mr-2" />
                  {slot}
                </Button>
              ))}
              <Button variant="ghost" className="w-full text-emerald-700">
                View More Times
              </Button>
            </CardContent>
          </Card>

          {/* Quick Message */}
          <Card>
            <CardHeader>
              <CardTitle>Send Quick Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select topic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">General Question</SelectItem>
                  <SelectItem value="communication">Communication Issues</SelectItem>
                  <SelectItem value="conflict">Conflict Resolution</SelectItem>
                  <SelectItem value="financial">Financial Planning</SelectItem>
                  <SelectItem value="family">Family Relations</SelectItem>
                </SelectContent>
              </Select>
              <Textarea placeholder="Briefly describe your situation or question..." className="min-h-[80px]" />
              <Button className="w-full bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                Send Message
              </Button>
              <p className="text-xs text-gray-500 text-center">Messages are private and follow Islamic guidelines</p>
            </CardContent>
          </Card>

          {/* Guidelines */}
          <Card className="bg-emerald-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-800">Mentorship Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-emerald-700">
              <p>• All sessions follow Islamic principles</p>
              <p>• Confidentiality is strictly maintained</p>
              <p>• Both spouses should participate when possible</p>
              <p>• Sessions are conducted with respect and dignity</p>
              <p>• Emergency support is available 24/7</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
