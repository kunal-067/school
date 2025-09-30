"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Calendar,
  CreditCard,
  Download,
  Bell,
  GraduationCap,
  FileText,
  Award,
  Clock,
  CheckCircle,
  Home,
  LogOut,
} from "lucide-react"
import Link from "next/link"

export default function StudentPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [loginData, setLoginData] = useState({
    studentId: "",
    password: "",
  })

  // Mock student data
  const studentData = {
    name: "Rahul Kumar",
    class: "Class X-A",
    rollNumber: "2024001",
    fatherName: "Mr. Suresh Kumar",
    admissionNumber: "ADM2024001",
    session: "2024-25",
    profileImage: "/placeholder.svg?height=100&width=100",
  }

  const feeDetails = [
    { month: "April 2024", amount: 3000, status: "Paid", date: "2024-04-05", receipt: "RCP001" },
    { month: "May 2024", amount: 3000, status: "Paid", date: "2024-05-03", receipt: "RCP002" },
    { month: "June 2024", amount: 3000, status: "Paid", date: "2024-06-02", receipt: "RCP003" },
    { month: "July 2024", amount: 3000, status: "Pending", date: "", receipt: "" },
    { month: "August 2024", amount: 3000, status: "Pending", date: "", receipt: "" },
  ]

  const examResults = [
    { exam: "First Term", subject: "Mathematics", marks: "85/100", grade: "A", status: "Pass" },
    { exam: "First Term", subject: "Science", marks: "78/100", grade: "B+", status: "Pass" },
    { exam: "First Term", subject: "English", marks: "82/100", grade: "A-", status: "Pass" },
    { exam: "First Term", subject: "Hindi", marks: "88/100", grade: "A", status: "Pass" },
    { exam: "First Term", subject: "Social Studies", marks: "75/100", grade: "B", status: "Pass" },
  ]

  const attendance = {
    totalDays: 180,
    presentDays: 165,
    absentDays: 15,
    percentage: 91.7,
  }

  const assignments = [
    { subject: "Mathematics", title: "Algebra Problems", dueDate: "2024-12-25", status: "Pending" },
    { subject: "Science", title: "Physics Lab Report", dueDate: "2024-12-28", status: "Submitted" },
    { subject: "English", title: "Essay Writing", dueDate: "2024-12-30", status: "Pending" },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock login validation
    if (loginData.studentId && loginData.password) {
      setIsLoggedIn(true)
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginData({ studentId: "", password: "" })
    setActiveTab("dashboard")
  }

  const handleFeePayment = (month: string) => {
    alert(`Redirecting to payment gateway for ${month}`)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80">
              <Home className="w-5 h-5" />
              <span>Back to Website</span>
            </Link>
          </div>

          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Student Portal</CardTitle>
              <p className="text-muted-foreground">Login to access your academic information</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID / Admission Number</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="studentId"
                      type="text"
                      placeholder="Enter your student ID"
                      className="pl-10"
                      value={loginData.studentId}
                      onChange={(e) => setLoginData({ ...loginData, studentId: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Login to Portal
                </Button>

                <div className="text-center space-y-2 text-sm">
                  <Link href="#" className="text-primary hover:underline">
                    Forgot Password?
                  </Link>
                  <p className="text-muted-foreground">
                    Need help? Contact{" "}
                    <Link href="#contact" className="text-primary hover:underline">
                      school office
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>Demo Credentials:</p>
            <p>Student ID: 2024001 | Password: student123</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80">
                <Home className="w-5 h-5" />
                <span>School Website</span>
              </Link>
              <div className="h-6 w-px bg-border"></div>
              <h1 className="text-xl font-semibold text-foreground">Student Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-foreground">{studentData.name}</p>
                <p className="text-xs text-muted-foreground">{studentData.class}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-max py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={studentData.profileImage || "/placeholder.svg"}
                    alt="Student"
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                  />
                  <h3 className="font-semibold text-foreground">{studentData.name}</h3>
                  <p className="text-sm text-muted-foreground">{studentData.class}</p>
                  <Badge variant="secondary" className="mt-2">
                    Roll No: {studentData.rollNumber}
                  </Badge>
                </div>

                <nav className="space-y-2">
                  {[
                    { id: "dashboard", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
                    { id: "profile", label: "Profile", icon: <User className="w-4 h-4" /> },
                    { id: "attendance", label: "Attendance", icon: <Clock className="w-4 h-4" /> },
                    { id: "results", label: "Results", icon: <Award className="w-4 h-4" /> },
                    { id: "assignments", label: "Assignments", icon: <FileText className="w-4 h-4" /> },
                    { id: "fees", label: "Fee Payment", icon: <CreditCard className="w-4 h-4" /> },
                    { id: "timetable", label: "Timetable", icon: <Calendar className="w-4 h-4" /> },
                  ].map((item) => (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.icon}
                      <span className="ml-2">{item.label}</span>
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Dashboard</h2>
                  <p className="text-muted-foreground">Welcome back, {studentData.name}!</p>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">{attendance.percentage}%</div>
                      <div className="text-sm text-muted-foreground">Attendance</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Award className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">A-</div>
                      <div className="text-sm text-muted-foreground">Average Grade</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <FileText className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">2</div>
                      <div className="text-sm text-muted-foreground">Pending Tasks</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <CreditCard className="w-8 h-8 text-red-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground">₹6,000</div>
                      <div className="text-sm text-muted-foreground">Pending Fees</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activities */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Bell className="w-5 h-5" />
                        <span>Recent Notices</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="border-l-4 border-red-500 pl-3">
                          <p className="font-medium text-sm">Winter Vacation Notice</p>
                          <p className="text-xs text-muted-foreground">Dec 15, 2024</p>
                        </div>
                        <div className="border-l-4 border-blue-500 pl-3">
                          <p className="font-medium text-sm">Parent-Teacher Meeting</p>
                          <p className="text-xs text-muted-foreground">Dec 8, 2024</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>Upcoming Events</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-sm">Science Fair</p>
                            <p className="text-xs text-muted-foreground">Feb 20, 2025</p>
                          </div>
                          <Badge variant="outline">Event</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-sm">Sports Day</p>
                            <p className="text-xs text-muted-foreground">Jan 26, 2025</p>
                          </div>
                          <Badge variant="outline">Sports</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "fees" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Fee Payment</h2>
                  <p className="text-muted-foreground">Manage your fee payments and download receipts</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Fee Details - Session {studentData.session}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {feeDetails.map((fee, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                fee.status === "Paid" ? "bg-green-500" : "bg-red-500"
                              }`}
                            ></div>
                            <div>
                              <p className="font-medium text-foreground">{fee.month}</p>
                              <p className="text-sm text-muted-foreground">Amount: ₹{fee.amount}</p>
                              {fee.date && <p className="text-xs text-muted-foreground">Paid on: {fee.date}</p>}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={fee.status === "Paid" ? "default" : "destructive"}>{fee.status}</Badge>
                            {fee.status === "Paid" ? (
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4 mr-1" />
                                Receipt
                              </Button>
                            ) : (
                              <Button size="sm" onClick={() => handleFeePayment(fee.month)}>
                                <CreditCard className="w-4 h-4 mr-1" />
                                Pay Now
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "results" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Examination Results</h2>
                  <p className="text-muted-foreground">View your academic performance and grades</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>First Term Results - 2024</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Subject</th>
                            <th className="text-left p-2">Marks</th>
                            <th className="text-left p-2">Grade</th>
                            <th className="text-left p-2">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {examResults.map((result, index) => (
                            <tr key={index} className="border-b">
                              <td className="p-2 font-medium">{result.subject}</td>
                              <td className="p-2">{result.marks}</td>
                              <td className="p-2">
                                <Badge variant="secondary">{result.grade}</Badge>
                              </td>
                              <td className="p-2">
                                <div className="flex items-center space-x-1">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span className="text-green-600">{result.status}</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "attendance" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Attendance Record</h2>
                  <p className="text-muted-foreground">Track your attendance and leave records</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{attendance.presentDays}</div>
                      <div className="text-sm text-muted-foreground">Present Days</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">{attendance.absentDays}</div>
                      <div className="text-sm text-muted-foreground">Absent Days</div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{attendance.percentage}%</div>
                      <div className="text-sm text-muted-foreground">Attendance Rate</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Student Profile</h2>
                  <p className="text-muted-foreground">Your personal and academic information</p>
                </div>

                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Student Name</Label>
                          <p className="text-foreground">{studentData.name}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Class</Label>
                          <p className="text-foreground">{studentData.class}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Roll Number</Label>
                          <p className="text-foreground">{studentData.rollNumber}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Father's Name</Label>
                          <p className="text-foreground">{studentData.fatherName}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Admission Number</Label>
                          <p className="text-foreground">{studentData.admissionNumber}</p>
                        </div>
                        <div>
                          <Label className="text-sm font-medium text-muted-foreground">Academic Session</Label>
                          <p className="text-foreground">{studentData.session}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
