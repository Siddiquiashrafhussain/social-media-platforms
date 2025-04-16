import Link from "next/link"
import {
  ArrowLeft,
  Bookmark,
  BookmarkPlus,
  BriefcaseBusiness,
  Building2,
  Calendar,
  ChevronDown,
  Edit,
  Globe,
  MapPin,
  MessageSquare,
  MoreHorizontal,
  Search,
  Share2,
  ThumbsUp,
  User,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserFlowDiagram } from "./user-flow"
import { FeatureList } from "./feature-list"

export default function ProfessionalApp() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      posted: "2 days ago",
      logo: "/placeholder.svg?height=40&width=40",
      saved: true,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "InnovateSoft",
      location: "New York, NY",
      salary: "$110,000 - $140,000",
      posted: "3 days ago",
      logo: "/placeholder.svg?height=40&width=40",
      saved: false,
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "DesignHub",
      location: "Austin, TX (Hybrid)",
      salary: "$90,000 - $120,000",
      posted: "1 week ago",
      logo: "/placeholder.svg?height=40&width=40",
      saved: false,
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "AnalyticsPro",
      location: "Boston, MA (Remote)",
      salary: "$130,000 - $160,000",
      posted: "2 weeks ago",
      logo: "/placeholder.svg?height=40&width=40",
      saved: false,
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "Seattle, WA",
      salary: "$115,000 - $145,000",
      posted: "3 weeks ago",
      logo: "/placeholder.svg?height=40&width=40",
      saved: false,
    },
  ]

  const posts = [
    {
      id: 1,
      author: {
        name: "Sarah Johnson",
        title: "Product Manager at TechCorp",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      content:
        "Excited to announce that we've just launched our new product feature! After months of user research and development, we've created something that will truly enhance the user experience. #ProductManagement #UX #Innovation",
      time: "2h ago",
      likes: 128,
      comments: 24,
    },
    {
      id: 2,
      author: {
        name: "TechCorp Inc.",
        title: "Technology Company",
        avatar: "/placeholder.svg?height=48&width=48",
      },
      content:
        "We're hiring! Looking for talented developers to join our growing team. Remote positions available. Apply now through our careers page. #Hiring #TechJobs #RemoteWork",
      time: "1d ago",
      likes: 87,
      comments: 15,
    },
  ]

  const connections = [
    {
      id: 1,
      name: "Michael Chen",
      title: "Software Engineer at CloudSystems",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualConnections: 12,
    },
    {
      id: 2,
      name: "Emma Wilson",
      title: "UX Designer at DesignHub",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualConnections: 8,
    },
    {
      id: 3,
      name: "David Kim",
      title: "Data Scientist at AnalyticsPro",
      avatar: "/placeholder.svg?height=40&width=40",
      mutualConnections: 5,
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-10">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold tracking-tight">Professional Networking App</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A platform focused on personal branding, job discovery, and networking.
        </p>
      </div>

      <Tabs defaultValue="ui" className="mb-10">
        <TabsList className="mb-4">
          <TabsTrigger value="ui">UI Design</TabsTrigger>
          <TabsTrigger value="flow">User Flow</TabsTrigger>
          <TabsTrigger value="features">Feature List</TabsTrigger>
        </TabsList>
        <TabsContent value="ui">
          <div className="border rounded-lg overflow-hidden bg-background">
            <div className="flex flex-col md:flex-row h-[600px]">
              {/* Left Sidebar */}
              <div className="w-full md:w-64 border-r flex flex-col">
                <div className="p-4 border-b">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-xs text-muted-foreground">Product Designer</div>
                    </div>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User className="h-4 w-4" />
                      <span>Profile views: 142</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MessageSquare className="h-4 w-4" />
                      <span>3 new messages</span>
                    </div>
                  </div>
                </div>
                <ScrollArea className="flex-1">
                  <div className="p-4">
                    <h3 className="font-medium mb-3">My Network</h3>
                    <div className="space-y-3">
                      {connections.map((connection) => (
                        <div key={connection.id} className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src={connection.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{connection.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium truncate">{connection.name}</div>
                            <div className="text-xs text-muted-foreground truncate">{connection.title}</div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {connection.mutualConnections} mutual connections
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" className="w-full mt-2">
                        View All Connections
                      </Button>
                    </div>

                    <Separator className="my-4" />

                    <h3 className="font-medium mb-3">Saved Jobs</h3>
                    <div className="space-y-3">
                      {jobs
                        .filter((job) => job.saved)
                        .map((job) => (
                          <div key={job.id} className="flex items-start gap-3">
                            <Avatar className="mt-0.5">
                              <AvatarImage src={job.logo || "/placeholder.svg"} />
                              <AvatarFallback>{job.company[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium truncate">{job.title}</div>
                              <div className="text-xs text-muted-foreground truncate">{job.company}</div>
                              <div className="text-xs text-muted-foreground mt-1">{job.location}</div>
                            </div>
                          </div>
                        ))}
                      <Button variant="outline" className="w-full mt-2">
                        View All Saved Jobs
                      </Button>
                    </div>
                  </div>
                </ScrollArea>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="relative w-full max-w-md">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search jobs, people, companies..." className="pl-8" />
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <Button variant="ghost" size="icon">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Calendar className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="feed" className="flex-1 flex flex-col">
                  <div className="px-4 pt-4">
                    <TabsList className="w-full">
                      <TabsTrigger value="feed" className="flex-1">
                        Feed
                      </TabsTrigger>
                      <TabsTrigger value="jobs" className="flex-1">
                        Jobs
                      </TabsTrigger>
                      <TabsTrigger value="profile" className="flex-1">
                        My Profile
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="feed" className="flex-1 flex flex-col p-0">
                    <ScrollArea className="flex-1">
                      <div className="p-4 space-y-4">
                        <Card>
                          <CardHeader className="pb-3">
                            <div className="flex gap-3">
                              <Input placeholder="Share an update or article..." className="flex-1" />
                              <Button>Post</Button>
                            </div>
                          </CardHeader>
                        </Card>

                        {posts.map((post) => (
                          <Card key={post.id}>
                            <CardHeader className="pb-3">
                              <div className="flex items-start gap-3">
                                <Avatar>
                                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium">{post.author.name}</div>
                                  <div className="text-xs text-muted-foreground">{post.author.title}</div>
                                  <div className="text-xs text-muted-foreground mt-1">{post.time}</div>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-5 w-5" />
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm">{post.content}</p>
                            </CardContent>
                            <CardFooter className="border-t pt-3 flex justify-between">
                              <Button variant="ghost" size="sm" className="text-xs">
                                <ThumbsUp className="mr-1 h-4 w-4" />
                                Like ({post.likes})
                              </Button>
                              <Button variant="ghost" size="sm" className="text-xs">
                                <MessageSquare className="mr-1 h-4 w-4" />
                                Comment ({post.comments})
                              </Button>
                              <Button variant="ghost" size="sm" className="text-xs">
                                <Share2 className="mr-1 h-4 w-4" />
                                Share
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="jobs" className="flex-1 flex flex-col p-0">
                    <div className="p-4 border-b">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <MapPin className="mr-1 h-4 w-4" />
                          Location
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <BriefcaseBusiness className="mr-1 h-4 w-4" />
                          Job Type
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Building2 className="mr-1 h-4 w-4" />
                          Company
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Globe className="mr-1 h-4 w-4" />
                          Remote
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <ScrollArea className="flex-1">
                      <div className="divide-y">
                        {jobs.map((job) => (
                          <div key={job.id} className="p-4 hover:bg-accent/50">
                            <div className="flex gap-4">
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={job.logo || "/placeholder.svg"} />
                                <AvatarFallback>{job.company[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <h3 className="font-medium">{job.title}</h3>
                                <div className="text-sm text-muted-foreground">{job.company}</div>
                                <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5" />
                                    <span>{job.location}</span>
                                  </div>
                                  <div>{job.salary}</div>
                                </div>
                                <div className="text-xs text-muted-foreground mt-2">Posted {job.posted}</div>
                              </div>
                              <div className="flex flex-col gap-2">
                                <Button variant={job.saved ? "default" : "outline"} size="sm">
                                  {job.saved ? (
                                    <>
                                      <Bookmark className="mr-1 h-4 w-4" />
                                      Saved
                                    </>
                                  ) : (
                                    <>
                                      <BookmarkPlus className="mr-1 h-4 w-4" />
                                      Save
                                    </>
                                  )}
                                </Button>
                                <Button variant="outline" size="sm">
                                  Apply
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </TabsContent>

                  <TabsContent value="profile" className="flex-1 flex flex-col p-0">
                    <ScrollArea className="flex-1">
                      <div className="p-4">
                        <Card>
                          <CardHeader className="relative pb-0">
                            <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/10 rounded-t-lg"></div>
                            <div className="absolute top-24 left-4">
                              <Avatar className="h-20 w-20 border-4 border-background">
                                <AvatarImage src="/placeholder.svg?height=80&width=80" />
                                <AvatarFallback>JD</AvatarFallback>
                              </Avatar>
                            </div>
                            <div className="flex justify-end mt-2">
                              <Button variant="outline" size="sm">
                                <Edit className="mr-1 h-4 w-4" />
                                Edit Profile
                              </Button>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-8">
                            <h2 className="text-xl font-bold">John Doe</h2>
                            <p className="text-muted-foreground">Product Designer at DesignCo</p>
                            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                              <MapPin className="h-3.5 w-3.5" />
                              <span>San Francisco, CA</span>
                            </div>

                            <div className="flex items-center gap-4 mt-4 text-sm">
                              <div>
                                <span className="font-medium">500+</span> connections
                              </div>
                              <div>
                                <span className="font-medium">142</span> profile views
                              </div>
                            </div>

                            <Separator className="my-4" />

                            <div className="space-y-4">
                              <div>
                                <h3 className="font-medium mb-2">About</h3>
                                <p className="text-sm">
                                  Product designer with 5+ years of experience creating user-centered digital
                                  experiences. Passionate about solving complex problems through design thinking and
                                  collaboration.
                                </p>
                              </div>

                              <div>
                                <h3 className="font-medium mb-2">Experience</h3>
                                <div className="space-y-3">
                                  <div className="flex gap-3">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                      <AvatarFallback>DC</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium">Senior Product Designer</div>
                                      <div className="text-sm text-muted-foreground">DesignCo</div>
                                      <div className="text-xs text-muted-foreground">Jan 2021 - Present</div>
                                    </div>
                                  </div>

                                  <div className="flex gap-3">
                                    <Avatar className="h-10 w-10">
                                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                      <AvatarFallback>UI</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <div className="font-medium">UX Designer</div>
                                      <div className="text-sm text-muted-foreground">UI Innovations</div>
                                      <div className="text-xs text-muted-foreground">Mar 2018 - Dec 2020</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="font-medium mb-2">Education</h3>
                                <div className="flex gap-3">
                                  <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                                    <AvatarFallback>SU</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <div className="font-medium">Stanford University</div>
                                    <div className="text-sm text-muted-foreground">Bachelor of Arts, Design</div>
                                    <div className="text-xs text-muted-foreground">2014 - 2018</div>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h3 className="font-medium mb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="secondary">UI Design</Badge>
                                  <Badge variant="secondary">UX Research</Badge>
                                  <Badge variant="secondary">Figma</Badge>
                                  <Badge variant="secondary">Prototyping</Badge>
                                  <Badge variant="secondary">Design Systems</Badge>
                                  <Badge variant="secondary">User Testing</Badge>
                                  <Badge variant="secondary">HTML/CSS</Badge>
                                  <Badge variant="secondary">Design Thinking</Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </ScrollArea>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="flow">
          <UserFlowDiagram />
        </TabsContent>
        <TabsContent value="features">
          <FeatureList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
