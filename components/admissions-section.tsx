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
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, FileText, Users, Clock, CheckCircle, AlertCircle, Download, Phone, Mail, MapPin } from "lucide-react"

export default function AdmissionsSection() {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    fatherName: "",
    motherName: "",
    guardianPhone: "",
    guardianEmail: "",
    address: "",
    previousSchool: "",
    classApplying: "",
    category: "",
    hasDisability: false,
    medicalConditions: "",
    emergencyContact: "",
    emergencyPhone: "",
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const admissionProcess = [
    {
      step: "1",
      title: "Online Application",
      description: "Fill out the online application form with required documents",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      step: "2",
      title: "Document Verification",
      description: "Submit original documents for verification at school office",
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      step: "3",
      title: "Interaction Session",
      description: "Student and parent interaction with school administration",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "4",
      title: "Admission Confirmation",
      description: "Fee payment and admission confirmation within 7 days",
      icon: <Calendar className="w-6 h-6" />,
    },
  ]

  const requirements = [
    "Birth Certificate (Original + Photocopy)",
    "Transfer Certificate from Previous School",
    "Academic Records/Report Cards",
    "Passport Size Photographs (4 copies)",
    "Aadhar Card of Student and Parents",
    "Caste Certificate (if applicable)",
    "Income Certificate (for fee concession)",
    "Medical Certificate",
  ]

  const feeStructure = [
    { class: "Pre-Primary (Nursery-UKG)", admission: "₹2,000", monthly: "₹1,500", annual: "₹5,000" },
    { class: "Primary (I-V)", admission: "₹3,000", monthly: "₹2,000", annual: "₹7,500" },
    { class: "Middle (VI-VIII)", admission: "₹4,000", monthly: "₹2,500", annual: "₹10,000" },
    { class: "Secondary (IX-X)", admission: "₹5,000", monthly: "₹3,000", annual: "₹12,500" },
    { class: "Senior Secondary (XI-XII)", admission: "₹6,000", monthly: "₹3,500", annual: "₹15,000" },
  ]

  const handleInputChange = (field: string, value: string | boolean) => {
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
      <section id="admissions" className="section-padding bg-background">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Application Submitted Successfully!</h2>
            <p className="text-muted-foreground mb-6">
              Thank you for your application. We have received your details and will contact you within 2-3 working days
              for the next steps.
            </p>
            <div className="bg-muted rounded-lg p-6 mb-6">
              <p className="text-sm text-muted-foreground mb-2">Application Reference Number:</p>
              <p className="text-lg font-mono font-bold text-primary">ADM2025{Math.floor(Math.random() * 10000)}</p>
            </div>
            <Button onClick={() => setSubmitted(false)} variant="outline">
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="admissions" className="section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            Admissions Open
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Join Our School Family</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            We welcome students who are eager to learn, grow, and contribute to our vibrant school community.
            Applications are now open for the 2025-26 academic year.
          </p>
        </div>

        {/* Important Dates */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Important Dates</h3>
            <p className="text-muted-foreground">Mark your calendar for admission deadlines</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Application Start</h4>
              <p className="text-muted-foreground">January 15, 2025</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Last Date</h4>
              <p className="text-muted-foreground">March 31, 2025</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">Session Starts</h4>
              <p className="text-muted-foreground">April 15, 2025</p>
            </div>
          </div>
        </div>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((process, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{process.icon}</div>
                  </div>
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{process.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Required Documents */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-primary" />
                <span>Required Documents</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{requirement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t">
                <Button variant="outline" className="w-full flex items-center justify-center space-x-2 bg-transparent">
                  <Download className="w-4 h-4" />
                  <span>Download Document Checklist</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fee Structure (Annual)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {feeStructure.map((fee, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h5 className="font-semibold text-foreground mb-2">{fee.class}</h5>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Admission</p>
                        <p className="font-semibold">{fee.admission}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Monthly</p>
                        <p className="font-semibold">{fee.monthly}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Annual</p>
                        <p className="font-semibold">{fee.annual}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Fee concessions available for economically weaker sections. Contact office for details.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Online Application Form */}
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Online Application Form</CardTitle>
            <p className="text-center text-muted-foreground">Fill out all required fields to submit your application</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground border-b pb-2">Student Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Name *</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange("studentName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="classApplying">Class Applying For *</Label>
                    <Select
                      value={formData.classApplying}
                      onValueChange={(value) => handleInputChange("classApplying", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        <SelectItem value="1">Class I</SelectItem>
                        <SelectItem value="2">Class II</SelectItem>
                        <SelectItem value="3">Class III</SelectItem>
                        <SelectItem value="4">Class IV</SelectItem>
                        <SelectItem value="5">Class V</SelectItem>
                        <SelectItem value="6">Class VI</SelectItem>
                        <SelectItem value="7">Class VII</SelectItem>
                        <SelectItem value="8">Class VIII</SelectItem>
                        <SelectItem value="9">Class IX</SelectItem>
                        <SelectItem value="10">Class X</SelectItem>
                        <SelectItem value="11">Class XI</SelectItem>
                        <SelectItem value="12">Class XII</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Parent/Guardian Information */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground border-b pb-2">Parent/Guardian Information</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Father's Name *</Label>
                    <Input
                      id="fatherName"
                      value={formData.fatherName}
                      onChange={(e) => handleInputChange("fatherName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherName">Mother's Name *</Label>
                    <Input
                      id="motherName"
                      value={formData.motherName}
                      onChange={(e) => handleInputChange("motherName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guardianPhone">Contact Number *</Label>
                    <Input
                      id="guardianPhone"
                      type="tel"
                      value={formData.guardianPhone}
                      onChange={(e) => handleInputChange("guardianPhone", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guardianEmail">Email Address *</Label>
                    <Input
                      id="guardianEmail"
                      type="email"
                      value={formData.guardianEmail}
                      onChange={(e) => handleInputChange("guardianEmail", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Address and Other Details */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground border-b pb-2">Additional Information</h4>
                <div className="space-y-2">
                  <Label htmlFor="address">Complete Address *</Label>
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="previousSchool">Previous School (if any)</Label>
                    <Input
                      id="previousSchool"
                      value={formData.previousSchool}
                      onChange={(e) => handleInputChange("previousSchool", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General</SelectItem>
                        <SelectItem value="obc">OBC</SelectItem>
                        <SelectItem value="sc">SC</SelectItem>
                        <SelectItem value="st">ST</SelectItem>
                        <SelectItem value="ews">EWS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medicalConditions">Medical Conditions (if any)</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    placeholder="Please mention any medical conditions, allergies, or special needs"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground border-b pb-2">Emergency Contact</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Number *</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="agreeTerms"
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                  />
                  <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                    I agree to the terms and conditions of the school and confirm that all information provided is
                    accurate and complete. I understand that providing false information may result in rejection of the
                    application.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button type="submit" size="lg" className="w-full" disabled={!formData.agreeTerms || isSubmitting}>
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="mt-16 bg-muted rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Need Help with Admission?</h3>
            <p className="text-muted-foreground">Contact our admission office for assistance</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center space-y-2">
              <Phone className="w-6 h-6 text-primary" />
              <p className="font-semibold text-foreground">Call Us</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Mail className="w-6 h-6 text-primary" />
              <p className="font-semibold text-foreground">Email Us</p>
              <p className="text-muted-foreground">admissions@yourschool.edu.in</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MapPin className="w-6 h-6 text-primary" />
              <p className="font-semibold text-foreground">Visit Us</p>
              <p className="text-muted-foreground">Mon-Fri, 9 AM - 4 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
