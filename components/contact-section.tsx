"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Building,
  Car,
  Bus,
  Navigation,
} from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["Main Road, Near District Collectorate", "Sitamarhi, Bihar - 843302", "India"],
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Numbers",
      details: ["Office: +91 98765 43210", "Principal: +91 98765 43211", "Admission: +91 98765 43212"],
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Addresses",
      details: ["info@yourschool.edu.in", "principal@yourschool.edu.in", "admissions@yourschool.edu.in"],
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 4:00 PM", "Saturday: 8:00 AM - 12:00 PM", "Sunday: Closed"],
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const departments = [
    { name: "General Inquiry", email: "info@yourschool.edu.in", phone: "+91 98765 43210" },
    { name: "Admissions", email: "admissions@yourschool.edu.in", phone: "+91 98765 43212" },
    { name: "Academic Affairs", email: "academics@yourschool.edu.in", phone: "+91 98765 43213" },
    { name: "Finance Office", email: "finance@yourschool.edu.in", phone: "+91 98765 43214" },
    { name: "Transport", email: "transport@yourschool.edu.in", phone: "+91 98765 43215" },
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="section-padding bg-background">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for contacting us. We have received your message and will get back to you within 24 hours.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Get in Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We're here to help! Reach out to us for any questions, concerns, or information about our school.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className={info.color}>{info.icon}</div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-3">{info.title}</h4>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Send us a Message</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admission">Admission Inquiry</SelectItem>
                        <SelectItem value="academic">Academic Information</SelectItem>
                        <SelectItem value="fee">Fee Related</SelectItem>
                        <SelectItem value="transport">Transport</SelectItem>
                        <SelectItem value="complaint">Complaint</SelectItem>
                        <SelectItem value="suggestion">Suggestion</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending Message..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Department Contacts & Map */}
          <div className="space-y-6">
            {/* Department Contacts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="w-5 h-5 text-primary" />
                  <span>Department Contacts</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border-b last:border-b-0 pb-3 last:pb-0">
                      <h5 className="font-semibold text-foreground mb-2">{dept.name}</h5>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-3 h-3" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-3 h-3" />
                          <span>{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Navigation className="w-5 h-5 text-primary" />
                  <span>Find Us on Map</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-muted rounded-b-lg flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.123456789!2d85.1234567!3d26.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSitamarhi%2C%20Bihar!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-b-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Transportation Info */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">How to Reach Us</h3>
            <p className="text-muted-foreground">Multiple transportation options available</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">By Bus</h4>
              <p className="text-sm text-muted-foreground">
                Regular bus services available from Sitamarhi bus stand. School is 2 km from the main bus stand.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">By Car</h4>
              <p className="text-sm text-muted-foreground">
                Ample parking space available. Located on Main Road with easy access from all directions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bus className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">School Transport</h4>
              <p className="text-sm text-muted-foreground">
                School bus service available for students. Contact transport department for route details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
