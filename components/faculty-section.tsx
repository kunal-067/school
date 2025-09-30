import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, GraduationCap, Award, BookOpen, Users } from "lucide-react"

export default function FacultySection() {
  const facultyMembers = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Principal",
      qualification: "Ph.D. in Education, M.Ed.",
      experience: "25 years",
      subjects: ["Educational Administration"],
      email: "principal@yourschool.edu.in",
      phone: "+91 98765 43210",
      image: "/professional-indian-male-principal-in-formal-attir.jpg",
      specialization: "Educational Leadership & School Management",
    },
    {
      name: "Mrs. Priya Sharma",
      position: "Vice Principal",
      qualification: "M.A. English, B.Ed.",
      experience: "20 years",
      subjects: ["English Literature", "Communication Skills"],
      email: "vp@yourschool.edu.in",
      phone: "+91 98765 43211",
      image: "/professional-indian-female-teacher-in-saree.jpg",
      specialization: "English Language & Literature",
    },
    {
      name: "Mr. Amit Singh",
      position: "Head of Science Department",
      qualification: "M.Sc. Physics, B.Ed.",
      experience: "18 years",
      subjects: ["Physics", "Mathematics"],
      email: "amit.singh@yourschool.edu.in",
      phone: "+91 98765 43212",
      image: "/professional-indian-male-science-teacher-with-glas.jpg",
      specialization: "Physics & Applied Mathematics",
    },
    {
      name: "Mrs. Sunita Devi",
      position: "Primary Section Head",
      qualification: "M.A. Hindi, B.Ed.",
      experience: "15 years",
      subjects: ["Hindi", "Social Studies"],
      email: "sunita.devi@yourschool.edu.in",
      phone: "+91 98765 43213",
      image: "/professional-indian-female-primary-teacher-smiling.jpg",
      specialization: "Primary Education & Hindi Literature",
    },
    {
      name: "Mr. Ravi Prakash",
      position: "Mathematics Teacher",
      qualification: "M.Sc. Mathematics, B.Ed.",
      experience: "12 years",
      subjects: ["Mathematics", "Computer Science"],
      email: "ravi.prakash@yourschool.edu.in",
      phone: "+91 98765 43214",
      image: "/professional-indian-male-math-teacher-with-calcula.jpg",
      specialization: "Advanced Mathematics & Programming",
    },
    {
      name: "Mrs. Kavita Jha",
      position: "Science Teacher",
      qualification: "M.Sc. Chemistry, B.Ed.",
      experience: "14 years",
      subjects: ["Chemistry", "Biology"],
      email: "kavita.jha@yourschool.edu.in",
      phone: "+91 98765 43215",
      image: "/professional-indian-female-chemistry-teacher-in-la.jpg",
      specialization: "Chemistry & Environmental Science",
    },
    {
      name: "Mr. Deepak Kumar",
      position: "Physical Education Teacher",
      qualification: "M.P.Ed., B.P.Ed.",
      experience: "10 years",
      subjects: ["Physical Education", "Sports"],
      email: "deepak.kumar@yourschool.edu.in",
      phone: "+91 98765 43216",
      image: "/professional-indian-male-sports-teacher-in-tracksu.jpg",
      specialization: "Sports Training & Physical Fitness",
    },
    {
      name: "Mrs. Meera Gupta",
      position: "Art & Music Teacher",
      qualification: "M.A. Fine Arts, Diploma in Music",
      experience: "8 years",
      subjects: ["Fine Arts", "Music", "Dance"],
      email: "meera.gupta@yourschool.edu.in",
      phone: "+91 98765 43217",
      image: "/professional-indian-female-art-teacher-with-paintb.jpg",
      specialization: "Visual Arts & Classical Music",
    },
  ]

  const departments = [
    {
      name: "Science Department",
      teachers: 8,
      subjects: ["Physics", "Chemistry", "Biology", "Mathematics"],
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      name: "Languages Department",
      teachers: 6,
      subjects: ["English", "Hindi", "Sanskrit"],
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      name: "Social Studies Department",
      teachers: 4,
      subjects: ["History", "Geography", "Civics", "Economics"],
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Arts & Sports Department",
      teachers: 5,
      subjects: ["Fine Arts", "Music", "Dance", "Physical Education"],
      icon: <Award className="w-6 h-6" />,
    },
  ]

  return (
    <section id="faculty" className="section-padding bg-muted">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Our Faculty
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Meet Our Dedicated Teachers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our experienced and qualified faculty members are committed to providing quality education and nurturing
            every student's potential.
          </p>
        </div>

        {/* Department Overview */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">Our Departments</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{dept.icon}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{dept.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{dept.teachers} Teachers</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {dept.subjects.map((subject, subIndex) => (
                      <Badge key={subIndex} variant="outline" className="text-xs">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Faculty Profiles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Faculty Profiles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-lg font-semibold text-foreground mb-1">{faculty.name}</h4>
                    <p className="text-primary font-medium text-sm mb-2">{faculty.position}</p>
                    <Badge variant="secondary" className="text-xs">
                      {faculty.experience} Experience
                    </Badge>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-foreground mb-1">Qualification:</p>
                      <p className="text-muted-foreground">{faculty.qualification}</p>
                    </div>

                    <div>
                      <p className="font-medium text-foreground mb-1">Specialization:</p>
                      <p className="text-muted-foreground">{faculty.specialization}</p>
                    </div>

                    <div>
                      <p className="font-medium text-foreground mb-1">Subjects:</p>
                      <div className="flex flex-wrap gap-1">
                        {faculty.subjects.map((subject, subIndex) => (
                          <Badge key={subIndex} variant="outline" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t space-y-2">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Mail className="w-3 h-3" />
                      <span className="truncate">{faculty.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Phone className="w-3 h-3" />
                      <span>{faculty.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-background rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Join Our Teaching Team</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We are always looking for passionate and qualified educators to join our team. If you are committed to
            excellence in education and want to make a difference in students' lives, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">View Open Positions</Button>
            <Button size="lg" variant="outline" className="bg-transparent">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
