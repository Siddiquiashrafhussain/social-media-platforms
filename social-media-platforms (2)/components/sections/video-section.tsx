import { Heart, MessageCircle, MoreVertical, Music, Plus, Search, Share2, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VideoSection() {
  const videos = [
    {
      id: 1,
      creator: {
        name: "@creativecreator",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      caption: "Check out this amazing sunset timelapse I captured yesterday! #sunset #timelapse #nature",
      music: "Original Sound - Creative Creator",
      likes: 127000,
      comments: 2541,
      thumbnail: "/placeholder.svg?height=600&width=360",
    },
    {
      id: 2,
      creator: {
        name: "@techguru",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      caption: "Quick tutorial on how to improve your code efficiency #coding #programming #tips",
      music: "Lofi Beats - Coding Session",
      likes: 45600,
      comments: 1243,
      thumbnail: "/placeholder.svg?height=600&width=360",
    },
    {
      id: 3,
      creator: {
        name: "@travelbug",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      caption: "Exploring hidden gems in Tokyo! Full travel guide coming soon #tokyo #travel #japan",
      music: "Tokyo Drift - Travel Tunes",
      likes: 89300,
      comments: 3210,
      thumbnail: "/placeholder.svg?height=600&width=360",
    },
  ]

  return (
    <div className="flex h-full">
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <Tabs defaultValue="foryou">
            <TabsList className="w-full max-w-md mx-auto">
              <TabsTrigger value="foryou" className="flex-1">
                For You
              </TabsTrigger>
              <TabsTrigger value="following" className="flex-1">
                Following
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex-1">
                Trending
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="flex-1 relative">
          <ScrollArea className="h-full snap-y snap-mandatory">
            {videos.map((video) => (
              <div key={video.id} className="h-full snap-start relative">
                <div className="absolute inset-0 bg-black">
                  <div className="relative h-full w-full flex flex-col">
                    {/* Video Content */}
                    <div className="flex-1 relative">
                      <img
                        src={video.thumbnail || "/placeholder.svg"}
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
                          <span className="text-xs text-white">{(video.likes / 1000).toFixed(1)}K</span>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                          <Button variant="ghost" size="icon" className="text-white h-12 w-12 rounded-full bg-black/20">
                            <MessageCircle className="h-7 w-7" />
                          </Button>
                          <span className="text-xs text-white">{video.comments.toLocaleString()}</span>
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
                            <AvatarImage src={video.creator.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{video.creator.name[1]}</AvatarFallback>
                          </Avatar>
                          <div className="text-white">
                            <div className="font-medium">{video.creator.name}</div>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-7 mt-1 text-xs bg-transparent text-white border-white"
                            >
                              Follow
                            </Button>
                          </div>
                        </div>
                        <p className="text-white text-sm mb-2">{video.caption}</p>
                        <div className="flex items-center gap-2 text-white">
                          <Music className="h-4 w-4" />
                          <span className="text-xs">{video.music}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/50 backdrop-blur-sm flex items-center justify-around px-4 border-t border-white/10">
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

      {/* Video Creation Interface - Hidden on Mobile */}
      <div className="hidden lg:block w-[360px] border-l">
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
  )
}
