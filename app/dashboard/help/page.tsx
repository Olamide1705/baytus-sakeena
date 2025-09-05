import { HelpCircle, MessageCircle, Book, Shield, Mail, Phone, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I create an account on Baytus-Sakeenah?",
        answer:
          "Click the 'Sign Up' button on the homepage and fill in your basic information. You'll need to verify your email address to complete the registration process. All information is kept confidential according to our privacy policy.",
      },
      {
        question: "Is Baytus-Sakeenah really free to use?",
        answer:
          "Yes! Baytus-Sakeenah is completely free for all community members. Our mentorship sessions, articles, Q&A forum, and community features are all provided as a service to the Muslim community.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Go to Settings > Account to update your personal information, marital status, and bio. You can also adjust your privacy settings to control what information is visible to other community members.",
      },
    ],
  },
  {
    category: "Mentorship",
    questions: [
      {
        question: "How do I book a session with a mentor?",
        answer:
          "Browse our verified mentors in the Mentorship section, view their profiles, and click 'Book Session'. You can choose from available time slots and select the type of session that best fits your needs.",
      },
      {
        question: "Are mentorship sessions really confidential?",
        answer:
          "Absolutely. All mentorship sessions are completely confidential. Our mentors follow strict privacy guidelines and Islamic principles of discretion. Nothing discussed in sessions is shared with anyone else.",
      },
      {
        question: "Can I become a mentor?",
        answer:
          "Yes! If you have experience in marriage and would like to help other couples, you can apply to become a mentor. Go to Settings > Community and enable 'Available as Mentor', then fill out your specialties and experience.",
      },
    ],
  },
  {
    category: "Privacy & Safety",
    questions: [
      {
        question: "How is my privacy protected?",
        answer:
          "We take privacy very seriously. You can post anonymously in Q&A and stories, control your profile visibility, and all personal information is encrypted. We never share your data with third parties.",
      },
      {
        question: "What if I encounter inappropriate content or behavior?",
        answer:
          "Please report any inappropriate content or behavior immediately using the report button or contact our support team. We have zero tolerance for content that violates Islamic principles or community guidelines.",
      },
      {
        question: "Can I delete my account and data?",
        answer:
          "Yes, you can permanently delete your account and all associated data from Settings > Advanced > Delete Account. This action cannot be undone, so please consider carefully.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "The website is not loading properly. What should I do?",
        answer:
          "Try refreshing the page, clearing your browser cache, or using a different browser. If the problem persists, please contact our technical support team with details about your browser and device.",
      },
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the sign-in page and enter your email address. You'll receive a password reset link. If you don't receive the email, check your spam folder or contact support.",
      },
      {
        question: "Can I use Baytus-Sakeenah on my mobile device?",
        answer:
          "Yes! Our website is fully responsive and works on all mobile devices. We're also working on dedicated mobile apps that will be available soon.",
      },
    ],
  },
]

const guides = [
  {
    title: "Getting Started Guide",
    description: "Complete walkthrough for new community members",
    topics: ["Creating your profile", "Finding mentors", "Posting questions", "Community guidelines"],
  },
  {
    title: "Mentorship Guide",
    description: "How to make the most of mentorship sessions",
    topics: ["Choosing the right mentor", "Preparing for sessions", "Follow-up actions", "Becoming a mentor"],
  },
  {
    title: "Privacy & Safety Guide",
    description: "Protecting your privacy and staying safe online",
    topics: ["Privacy settings", "Anonymous posting", "Reporting issues", "Data protection"],
  },
  {
    title: "Community Guidelines",
    description: "Rules and expectations for community participation",
    topics: ["Islamic principles", "Respectful communication", "Content policies", "Consequences"],
  },
]

export default function HelpPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Help & Support</h1>
        <p className="text-gray-600">Find answers to your questions and get the help you need</p>
      </div>

      {/* Quick Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <HelpCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input placeholder="Search for help articles, FAQs, or guides..." className="pl-12 text-lg h-12" />
          </div>
        </CardContent>
      </Card>

      {/* Help Content */}
      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="space-y-6">
          {faqs.map((category) => (
            <Card key={category.category}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-emerald-600" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.questions.map((faq, index) => (
                  <Collapsible key={index}>
                    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 text-gray-700 leading-relaxed">{faq.answer}</CollapsibleContent>
                  </Collapsible>
                ))}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Guides Tab */}
        <TabsContent value="guides" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {guides.map((guide) => (
              <Card key={guide.title} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="h-5 w-5 text-emerald-600" />
                    {guide.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{guide.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Topics covered:</p>
                    <ul className="space-y-1">
                      {guide.topics.map((topic) => (
                        <li key={topic} className="text-sm text-gray-600 flex items-center gap-2">
                          <div className="w-1 h-1 bg-emerald-600 rounded-full" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Contact Tab */}
        <TabsContent value="contact" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <p className="text-gray-600">Choose the best way to reach our support team</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-gray-600">support@baytus-sakeenah.com</p>
                    <p className="text-xs text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Live Chat</p>
                    <p className="text-sm text-gray-600">Available 9 AM - 6 PM EST</p>
                    <p className="text-xs text-gray-500">Monday - Friday</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-medium">Emergency Support</p>
                    <p className="text-sm text-gray-600">For urgent safety concerns</p>
                    <p className="text-xs text-gray-500">Available 24/7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-gray-600">We'll get back to you as soon as possible</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="What can we help you with?" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Technical Issue</option>
                    <option>Account Problem</option>
                    <option>Privacy Concern</option>
                    <option>Content Report</option>
                    <option>Feature Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea
                    placeholder="Please describe your issue or question in detail..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
                  Send Message
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Your message will be handled confidentially according to our privacy policy
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-emerald-600" />
                  Policies & Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Community Guidelines
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Terms of Service
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Safety Guidelines
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-emerald-600" />
                  Educational Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Islamic Marriage Resources
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Communication Guides
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Financial Planning Tools
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Parenting Resources
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Crisis Resources</CardTitle>
                <p className="text-gray-600 text-sm">If you're in immediate danger or crisis</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-medium text-red-800">Emergency Services</p>
                  <p className="text-sm text-red-700">Call 911 (US) or your local emergency number</p>
                </div>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm font-medium text-blue-800">National Domestic Violence Hotline</p>
                  <p className="text-sm text-blue-700">1-800-799-7233 (24/7 confidential support)</p>
                </div>
                <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Crisis Text Line</p>
                  <p className="text-sm text-green-700">Text HOME to 741741</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Status</CardTitle>
                <p className="text-gray-600 text-sm">Current system status and updates</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">All systems operational</span>
                </div>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Status Page
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Recent Updates
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Still Need Help */}
      <Card className="bg-emerald-50 border-emerald-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold text-emerald-800 mb-2">Still need help?</h3>
          <p className="text-emerald-700 mb-4">
            Our support team is here to help you with any questions or concerns you may have.
          </p>
          <Button className="bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700">
            <MessageCircle className="h-4 w-4 mr-2" />
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
