import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, History, Award, Globe, Heart } from "lucide-react"

export default function AboutSection() {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Excellence",
      description: "Striving for the highest standards in education and character development",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Compassion",
      description: "Fostering empathy, kindness, and understanding in our school community",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective",
      description: "Preparing students to be responsible global citizens",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Innovation",
      description: "Embracing modern teaching methods and technology",
    },
  ]

  const achievements = [
    "Top 10 Schools in Bihar (2023-2024)",
    "100% Board Exam Pass Rate",
    "State Level Science Fair Winners",
    "Best Infrastructure Award",
    "Excellence in Sports Achievement",
    "Digital Learning Pioneer",
  ]

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            About Our School
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Nurturing Excellence Since 1999
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Located in the heart of Sitamarhi, Bihar, we have been committed to providing quality education and shaping
            young minds for over two decades.
          </p>
        </div>

        {/* History, Mission, Vision Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* History */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <History className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our History</h3>
              <p className="text-muted-foreground leading-relaxed">
                Established in 1999 with a vision to provide quality education in rural Bihar, our school has grown from
                a small institution with 50 students to a premier educational center serving over 1000 students. We have
                consistently maintained high academic standards while preserving our cultural values.
              </p>
            </CardContent>
          </Card>

          {/* Mission */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide holistic education that nurtures intellectual curiosity, moral values, and social
                responsibility. We strive to create an environment where every student can discover their potential and
                develop into confident, compassionate, and capable individuals.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-accent/50 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a leading educational institution that empowers students to become innovative
                thinkers, ethical leaders, and global citizens who contribute positively to society and make a
                meaningful difference in the world.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <div className="text-primary">{value.icon}</div>
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Achievements</h3>
            <p className="text-muted-foreground">Recognition and awards that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 bg-background rounded-lg p-4">
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
