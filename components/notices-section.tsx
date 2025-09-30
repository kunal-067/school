import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download, Bell, AlertCircle, Info, CheckCircle, Users } from "lucide-react"

export default function NoticesSection() {
  const notices = [
    {
      id: 1,
      title: "Winter Vacation Notice",
      content:
        "School will remain closed for winter vacation from December 25, 2024 to January 8, 2025. Classes will resume on January 9, 2025.",
      date: "2024-12-15",
      type: "holiday",
      priority: "high",
      category: "General",
      isNew: true,
    },
    {
      id: 2,
      title: "Annual Examination Schedule",
      content:
        "Annual examinations for classes IX-XII will commence from March 1, 2025. Detailed timetable has been uploaded on the student portal.",
      date: "2024-12-10",
      type: "exam",
      priority: "high",
      category: "Academic",
      isNew: true,
      hasDownload: true,
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting",
      content:
        "Parent-Teacher meeting for all classes will be held on January 15, 2025, from 9:00 AM to 1:00 PM. Parents are requested to attend.",
      date: "2024-12-08",
      type: "meeting",
      priority: "medium",
      category: "General",
      isNew: false,
    },
    {
      id: 4,
      title: "Science Fair 2025",
      content:
        "Annual Science Fair will be organized on February 20-21, 2025. Students interested in participating should register by January 31, 2025.",
      date: "2024-12-05",
      type: "event",
      priority: "medium",
      category: "Events",
      isNew: false,
    },
    {
      id: 5,
      title: "Fee Payment Reminder",
      content:
        "Last date for quarterly fee payment is December 31, 2024. Late fee will be charged after the due date. Pay online through student portal.",
      date: "2024-12-01",
      type: "fee",
      priority: "high",
      category: "Finance",
      isNew: false,
    },
    {
      id: 6,
      title: "Sports Day Celebration",
      content:
        "Annual Sports Day will be celebrated on January 26, 2025. Practice sessions will start from January 10, 2025. All students must participate.",
      date: "2024-11-28",
      type: "event",
      priority: "medium",
      category: "Sports",
      isNew: false,
    },
    {
      id: 7,
      title: "New Library Books",
      content:
        "New collection of books has been added to the school library. Students can check the catalog on the school website or visit the library.",
      date: "2024-11-25",
      type: "info",
      priority: "low",
      category: "Library",
      isNew: false,
    },
    {
      id: 8,
      title: "Uniform Guidelines",
      content:
        "Reminder about school uniform guidelines. All students must wear proper school uniform daily. Casual clothes are not allowed except on designated days.",
      date: "2024-11-20",
      type: "info",
      priority: "medium",
      category: "General",
      isNew: false,
    },
  ]

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case "exam":
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case "holiday":
        return <Calendar className="w-5 h-5 text-green-500" />
      case "meeting":
        return <Users className="w-5 h-5 text-blue-500" />
      case "event":
        return <Bell className="w-5 h-5 text-purple-500" />
      case "fee":
        return <AlertCircle className="w-5 h-5 text-orange-500" />
      default:
        return <Info className="w-5 h-5 text-gray-500" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive"
      case "medium":
        return "secondary"
      default:
        return "outline"
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const categories = ["All", "General", "Academic", "Events", "Sports", "Finance", "Library"]

  return (
    <section id="notices" className="section-padding bg-muted">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Notices & Announcements</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay updated with the latest school news, important announcements, and upcoming events.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Urgent Notices</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">2</div>
              <div className="text-sm text-muted-foreground">Upcoming Events</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">5</div>
              <div className="text-sm text-muted-foreground">This Week</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bell className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-foreground">8</div>
              <div className="text-sm text-muted-foreground">Total Active</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm" className="bg-transparent">
              {category}
            </Button>
          ))}
        </div>

        {/* Notices List */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {notices.map((notice) => (
            <Card key={notice.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {getNoticeIcon(notice.type)}
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <CardTitle className="text-lg leading-tight">{notice.title}</CardTitle>
                        {notice.isNew && (
                          <Badge variant="destructive" className="text-xs px-2 py-0.5">
                            New
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(notice.date)}</span>
                        </div>
                        <Badge variant={getPriorityColor(notice.priority) as any} className="text-xs">
                          {notice.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{notice.content}</p>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {notice.priority.toUpperCase()} PRIORITY
                  </Badge>
                  {notice.hasDownload && (
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-background rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive important notices and updates directly in your email inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
