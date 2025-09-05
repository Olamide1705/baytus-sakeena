import { Search, Star, Users, MessageCircle, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const mentors = [
  {
    id: 1,
    name: "Ustadh Ahmad & Sister Khadijah",
    title: "Marriage Counselors",
    experience: "15 years married",
    specialties: ["Communication", "Conflict Resolution", "Islamic Marriage Principles"],
    rating: 4.9,
    reviews: 47,
    sessions: 156,
    languages: ["English", "Arabic"],
    availability: "Available",
    bio: "We've been blessed with a strong marriage for 15 years and have helped many couples navigate their challenges through Islamic guidance.",
    image: "/muslim-mentor-couple.png",
    verified: true,
    featured: true,
  },
  {
    id: 2,
    name: "Sister Aisha Rahman",
    title: "Family Life Coach",
    experience: "12 years married",
    specialties: ["Work-Life Balance", "Motherhood", "Career & Family"],
    rating: 4.8,
    reviews: 32,
    sessions: 89,
    languages: ["English", "Urdu"],
    availability: "Available",
    bio: "As a working mother of three, I understand the challenges of balancing career and family life in an Islamic framework.",
    image: "/muslim-mentor-sister.png",
    verified: true,
    featured: true,
  },
  {
    id: 3,
    name: "Brother Yusuf & Sister Maryam",
    title: "Newlywed Specialists",
    experience: "8 years married",
    specialties: ["First Year Challenges", "Financial Planning", "In-Law Relations"],
    rating: 4.7,
    reviews: 28,
    sessions: 67,
    languages: ["English", "French"],
    availability: "Limited",
    bio: "We specialize in helping newlyweds navigate their first years of marriage with practical Islamic guidance.",
    image: "/muslim-mentor-couple.png",
    verified: true,
    featured: false,
  },
  {
    id: 4,
    name: "Imam Abdullah Hassan",
    title: "Islamic Marriage Scholar",
    experience: "25 years married",
    specialties: ["Islamic Jurisprudence", "Spiritual Growth", "Religious Differences"],
    rating: 5.0,
    reviews: 63,
    sessions: 201,
    languages: ["English", "Arabic", "Malay"],
    availability: "Busy",
    bio: "With deep knowledge of Islamic marriage principles and decades of counseling experience, I help couples strengthen their spiritual bond.",
    image: "/imam-mentor.png",
    verified: true,
    featured: true,
  },
  {
    id: 5,
    name: "Sister Fatima & Brother Omar",
    title: "Interfaith Marriage Experts",
    experience: "10 years married",
    specialties: ["Interfaith Relations", "Cultural Differences", "Family Integration"],
    rating: 4.6,
    reviews: 19,
    sessions: 45,
    languages: ["English", "Spanish"],
    availability: "Available",
    bio: "Having navigated interfaith marriage ourselves, we help couples bridge cultural and religious differences.",
    image: "/muslim-mentor-couple.png",
    verified: true,
    featured: false,
  },
]

const specialties = [
  "All Specialties",
  "Communication",
  "Conflict Resolution",
  "Financial Planning",
  "Work-Life Balance",
  "In-Law Relations",
  "First Year Challenges",
  "Islamic Principles",
  "Interfaith Relations",
  "Spiritual Growth",
]

export default function MentorshipPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Find a Mentor</h1>
          <p className="text-gray-600 mt-1">Connect with experienced couples for guidance and support</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent">
            Become a Mentor
          </Button>
          <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
            My Sessions
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search mentors by name or specialty..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              {specialties.map((specialty) => (
                <SelectItem key={specialty} value={specialty.toLowerCase().replace(/\s+/g, "-")}>
                  {specialty}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Availability" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="available">Available</SelectItem>
              <SelectItem value="limited">Limited</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="rating">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Top Rated</SelectItem>
              <SelectItem value="experience">Most Experienced</SelectItem>
              <SelectItem value="sessions">Most Sessions</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Featured Mentors */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Featured Mentors</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mentors
            .filter((mentor) => mentor.featured)
            .map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-emerald-600">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-700">
                        {mentor.name.split(" ")[0][0]}
                        {mentor.name.split(" ")[1] ? mentor.name.split(" ")[1][0] : ""}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                        {mentor.verified && (
                          <Badge
                            variant="secondary"
                            className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs"
                          >
                            Verified
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{mentor.title}</p>
                      <p className="text-xs text-gray-500">{mentor.experience}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{mentor.rating}</span>
                      <span className="text-gray-500">({mentor.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{mentor.sessions} sessions</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {mentor.specialties.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">{mentor.bio}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          mentor.availability === "Available"
                            ? "bg-green-500"
                            : mentor.availability === "Limited"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                      />
                      <span className="text-sm text-gray-600">{mentor.availability}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700"
                        disabled={mentor.availability === "Busy"}
                      >
                        Book Session
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* All Mentors */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">All Mentors</h2>
        <div className="space-y-4">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={mentor.image || "/placeholder.svg"} alt={mentor.name} />
                    <AvatarFallback className="bg-emerald-100 text-emerald-700 text-lg">
                      {mentor.name.split(" ")[0][0]}
                      {mentor.name.split(" ")[1] ? mentor.name.split(" ")[1][0] : ""}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                          {mentor.verified && (
                            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600">{mentor.title}</p>
                        <p className="text-sm text-gray-500">{mentor.experience}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            mentor.availability === "Available"
                              ? "bg-green-500"
                              : mentor.availability === "Limited"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        />
                        <span className="text-sm text-gray-600">{mentor.availability}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{mentor.rating}</span>
                        <span className="text-gray-500">({mentor.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{mentor.sessions} sessions completed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{mentor.languages.join(", ")}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {mentor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-sm">
                          {specialty}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed">{mentor.bio}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <MessageCircle className="h-4 w-4 mr-1" />
                          Message
                        </Button>
                        <Button variant="outline" size="sm">
                          View Profile
                        </Button>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700"
                        disabled={mentor.availability === "Busy"}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Book Session
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <Card className="bg-emerald-50 border-emerald-200">
        <CardHeader>
          <CardTitle className="text-emerald-800">How Mentorship Works</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                1
              </div>
              <h4 className="font-medium text-emerald-800 mb-1">Choose a Mentor</h4>
              <p className="text-sm text-emerald-700">Browse verified mentors and find one that matches your needs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                2
              </div>
              <h4 className="font-medium text-emerald-800 mb-1">Book a Session</h4>
              <p className="text-sm text-emerald-700">Schedule a convenient time for your mentorship session</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                3
              </div>
              <h4 className="font-medium text-emerald-800 mb-1">Get Guidance</h4>
              <p className="text-sm text-emerald-700">Receive personalized Islamic guidance for your marriage</p>
            </div>
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-emerald-700 mb-3">
              All mentors are verified community members who follow Islamic principles and guidelines.
            </p>
            <Button
              variant="outline"
              className="border-emerald-300 text-emerald-700 hover:bg-emerald-100 bg-transparent"
            >
              Learn More About Our Guidelines
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
