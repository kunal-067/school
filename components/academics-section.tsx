import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Users,
  Clock,
  Award,
  Download,
  Calendar,
  GraduationCap,
  Microscope,
  Calculator,
  Globe,
  Palette,
  Music,
} from "lucide-react"

export default function AcademicsSection() {
  const classes = [
    {
      grade: "Pre-Primary",
      range: "Nursery - UKG",
      students: "120",
      subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Art & Craft", "Physical Education"],
      features: ["Play-based Learning", "Activity-based Teaching", "Individual Attention"],
    },
    {
      grade: "Primary",
      range: "Class I - V",
      students: "300",
      subjects: ["English", "Hindi", "Mathematics", "Environmental Studies", "Computer Science", "Art & Music"],
      features: ["NCERT Curriculum", "Smart Classrooms", "Regular Assessments"],
    },
    {
      grade: "Middle School",
      range: "Class VI - VIII",
      students: "280",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Science", "Sanskrit"],
      features: ["Laboratory Sessions", "Project-based Learning", "Career Guidance"],
    },
    {
      grade: "Secondary",
      range: "Class IX - X",
      students: "200",
      subjects: ["English", "Hindi", "Mathematics", "Science", "Social Studies", "Computer Applications"],
      features: ["Board Exam Preparation", "Extra Classes", "Mock Tests"],
    },
    {
      grade: "Senior Secondary",
      range: "Class XI - XII",
      students: "150",
      subjects: ["Science Stream", "Commerce Stream", "Arts Stream"],
      features: ["Stream Selection", "Competitive Exam Prep", "Career Counseling"],
    },
  ]

  const facilities = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Science Laboratories",
      description: "Well-equipped Physics, Chemistry, and Biology labs with modern instruments",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Mathematics Lab",
      description: "Interactive learning environment for mathematical concepts and problem-solving",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Computer Lab",
      description: "Modern computers with high-speed internet and latest software",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Art & Craft Room",
      description: "Creative space for artistic expression and skill development",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Room",
      description: "Instruments and equipment for music education and cultural activities",
    },
  ]

  const curriculum = [
    {
      title: "NCERT Curriculum",
      description: "Following the National Council of Educational Research and Training guidelines",
    },
    {
      title: "CBSE Affiliation",
      description: "Affiliated with Central Board of Secondary Education",
    },
    {
      title: "Skill Development",
      description: "Focus on 21st-century skills including critical thinking and creativity",
    },
    {
      title: "Language Proficiency",
      description: "Emphasis on English, Hindi, and regional language development",
    },
  ]

  return (
    <section id="academics" className="section-padding bg-muted">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive Education Program
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our curriculum is designed to provide holistic education that prepares students for academic success and
            life beyond school.
          </p>
        </div>

        {/* Curriculum Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Our Curriculum</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {curriculum.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Class Details */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Class Structure</h3>
          <div className="space-y-6">
            {classes.map((classInfo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-foreground">{classInfo.grade}</CardTitle>
                      <p className="text-muted-foreground">{classInfo.range}</p>
                    </div>
                    <div className="flex items-center space-x-4 mt-4 md:mt-0">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{classInfo.students} Students</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Subjects Offered</h5>
                      <div className="flex flex-wrap gap-2">
                        {classInfo.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Features</h5>
                      <ul className="space-y-1">
                        {classInfo.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Facilities */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Academic Facilities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">{facility.icon}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{facility.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Academic Resources */}
        <div className="bg-background rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Academic Resources</h3>
            <p className="text-muted-foreground">Download important academic documents and schedules</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="flex items-center justify-center space-x-2 h-auto py-4 bg-transparent">
              <Download className="w-4 h-4" />
              <span>Syllabus</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 h-auto py-4 bg-transparent">
              <Calendar className="w-4 h-4" />
              <span>Timetable</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 h-auto py-4 bg-transparent">
              <Award className="w-4 h-4" />
              <span>Results</span>
            </Button>
            <Button variant="outline" className="flex items-center justify-center space-x-2 h-auto py-4 bg-transparent">
              <Clock className="w-4 h-4" />
              <span>Academic Calendar</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
