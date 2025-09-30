import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users, BookOpen } from "lucide-react"

export default function HeroBanner() {
  return (
    <section className="hero-gradient text-white">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Welcome to Your School Name
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 text-pretty">
                Nurturing Excellence, Building Future Leaders
              </p>
              <p className="text-lg text-blue-200 text-pretty">
                A premier educational institution in Sitamarhi, Bihar, committed to providing quality education and
                holistic development for every student.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Apply for Admission
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Virtual Tour
              </Button>
            </div>
          </div>

          {/* Stats/Features */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <div className="text-2xl font-bold">1000+</div>
              <div className="text-blue-200">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <BookOpen className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <div className="text-2xl font-bold">50+</div>
              <div className="text-blue-200">Teachers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <div className="text-2xl font-bold">25+</div>
              <div className="text-blue-200">Years</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <GraduationCap className="w-8 h-8 mx-auto mb-3 text-blue-200" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
