import Link from "next/link"
import { ArrowLeft, Heart, MessageCircle, MoreVertical, Music, Plus, Search, Share2, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserFlowDiagram } from "./user-flow"
import { FeatureList } from "./feature-list"

export default function VideoApp() {
  return (
    <div className="container py-10">
      <div className="mb-10">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-4xl font-bold tracking-tight">Video-Sharing Platform</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A fun and fast-paced app emphasizing creative, looping videos.
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
            <div className="flex flex-col h-[600px] md:flex-row">
              {/* Mobile Video Feed */}
              <div className="flex-1 relative border-r">
                <div className="absolute inset-0 bg-black">
                  <div className="relative h-full w-full flex flex-col">
                    {/* Video Content */}
                    <div className="flex-1 relative">
                      <img
                        src="/placeholder.svg?height=600&width=360"
                        alt="Video content"
                        className="absolute inset-0 h-full w-full object-cover"
                      />

                      {/* Top Overlay */}
                      <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
                        <Button variant="ghost" size="icon" className="text-white">
                          <Search className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="text-white">
                          <User className="h-5 w-5" />
                        </Button>
                      </div>

                      {/* Right Side Actions */}
                      <div className="absolute right-4 bottom-20 flex flex-col gap-6 items-center">
                        <div className="flex flex-col items-center gap-1">
                          <Button variant="ghost" size="icon" className="text-white h-12 w-12 rounded-full bg-black/20">
                            <Heart className="h-7 w-7" />
                          </Button>
                          <span className="text-xs text-white">127K</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <Button variant="ghost" size="icon" className="text-white h-12 w-12 rounded-full bg-black/20">
                            <MessageCircle className="h-7 w-7" />
                          </Button>
                          <span className="text-xs text-white">2,541</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <Button variant="ghost" size="icon" className="text-white h-12 w-12 rounded-full bg-black/20">
                            <Share2 className="h-7 w-7" />
                          </Button>
                          <span className="text-xs text-white">Share</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <Button variant="ghost" size="icon" className="text-white h-12 w-12 rounded-full bg-black/20">
                            <MoreVertical className="h-7 w-7" />
                          </Button>
                          <span className="text-xs text-white">More</span>
                        </div>
                      </div>

                      {/* Creator Info */}
                      <div className="absolute left-4 bottom-20 max-w-[70%]">
                        <div className="flex items-center gap-3 mb-2">
                          <Avatar className="h-10 w-10 border-2 border-white">
                            <AvatarImage src="/placeholder.svg?height=40&width=40" />
                            <AvatarFallback>CR</AvatarFallback>
                          </Avatar>
                          <div className="text-white">
                            <div className="font-medium">@creativecreator</div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 mt-1 text-xs bg-transparent text-white border-white"
                            >
                              Follow
                            </Button>
                          </div>
                        </div>
                        <p className="text-white text-sm mb-2">
                          Check out this amazing sunset timelapse I captured yesterday! #sunset #timelapse #nature
                        </p>
                        <div className="flex items-center gap-2 text-white">
                          <Music className="h-4 w-4" />
                          <span className="text-xs">Original Sound - Creative Creator</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Navigation */}
                    <div className="h-16 bg-black flex items-center justify-around px-4 border-t border-white/10">
                      <Button variant="ghost" className="text-white flex-1 flex flex-col items-center h-14">
                        <span className="text-xs">Home</span>
                      </Button>
                      <Button variant="ghost" className="text-white flex-1 flex flex-col items-center h-14">
                        <span className="text-xs">Discover</span>
                      </Button>
                      <div className="flex-1 flex justify-center">
                        <Button size="icon" className="h-12 w-12 rounded-md bg-primary text-primary-foreground">
                          <Plus className="h-6 w-6" />
                        </Button>
                      </div>
                      <Button variant="ghost" className="text-white flex-1 flex flex-col items-center h-14">
                        <span className="text-xs">Inbox</span>
                      </Button>
                      <Button variant="ghost" className="text-white flex-1 flex flex-col items-center h-14">
                        <span className="text-xs">Profile</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Creation Interface */}
              <div className="hidden md:block w-[360px] border-l">
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b">
                    <h3 className="font-medium">Create New Video</h3>
                  </div>

                  <div className="flex-1 p-4 overflow-auto">
                    <div className="aspect-[9/16] bg-muted rounded-lg mb-4 flex items-center justify-center">
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Record Video
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Caption</label>
                        <textarea
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                          placeholder="Add a caption..."
                          rows={3}
                        ></textarea>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Music</label>
                        <div className="mt-1 flex items-center gap-2 p-2 rounded-md border">
                          <Music className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Add sound</span>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Effects</label>
                        <div className="mt-1 grid grid-cols-4 gap-2">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="aspect-square rounded-md bg-muted flex items-center justify-center">
                              <span className="text-xs text-muted-foreground">FX{i}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium">Privacy</label>
                        <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                          <option>Public</option>
                          <option>Friends</option>
                          <option>Private</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t">
                    <Button className="w-full">Post Video</Button>
                  </div>
                </div>
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
