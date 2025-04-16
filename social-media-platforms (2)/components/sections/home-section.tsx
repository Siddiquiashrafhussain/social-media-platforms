"use client"

import { useState } from "react"
import { Activity, ImageIcon, Link, MessageSquare, Smile, ThumbsUp, Users, Video } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function HomeSection() {
  const [postText, setPostText] = useState("")
  const [activities, setActivities] = useState([
    {
      id: 1,
      user: {
        name: "Sarah Johnson",
        avatar: "https://i.pravatar.cc/150?img=5",
        handle: "@sarahjohnson",
      },
      type: "post",
      content: "Just finished my latest design project! Check it out and let me know what you think.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbiUyMHByb2plY3R8ZW58MHx8MHx8fDA%3D",
      time: "2h ago",
      likes: 24,
      comments: 8,
      liked: false,
    },
    {
      id: 2,
      user: {
        name: "Tech Talk Room",
        avatar:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaCUyMGxvZ298ZW58MHx8MHx8fDA%3D",
        handle: "Voice Room",
      },
      type: "voice",
      content: "The Future of AI and Machine Learning",
      participants: 128,
      time: "Live now",
    },
    {
      id: 3,
      user: {
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/150?img=3",
        handle: "@michaelchen",
      },
      type: "video",
      content: "Check out this amazing sunset timelapse I captured yesterday! #sunset #timelapse #nature",
      video:
        "https://player.vimeo.com/external/368763065.sd.mp4?s=13ac3e9d4b4b4c27d4a8c8fcfb0136a4ab7b1d28&profile_id=139&oauth2_token_id=57447761",
      thumbnail:
        "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D",
      time: "4h ago",
      likes: 156,
      comments: 32,
      liked: false,
    },
    {
      id: 4,
      user: {
        name: "Programming Forum",
        avatar:
          "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
        handle: "Forum",
      },
      type: "forum",
      content: "What's your favorite programming language and why?",
      time: "1d ago",
      replies: 47,
      upvotes: 128,
    },
    {
      id: 5,
      user: {
        name: "TechCorp Inc.",
        avatar:
          "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D",
        handle: "Company",
      },
      type: "job",
      content: "Senior Frontend Developer",
      location: "San Francisco, CA (Remote)",
      salary: "$120,000 - $150,000",
      time: "2d ago",
    },
  ])

  const suggestions = [
    {
      id: 1,
      name: "Emma Wilson",
      avatar: "https://i.pravatar.cc/150?img=1",
      title: "UX Designer at DesignHub",
    },
    {
      id: 2,
      name: "David Kim",
      avatar: "https://i.pravatar.cc/150?img=4",
      title: "Software Engineer at TechCorp",
    },
    {
      id: 3,
      name: "Book Club",
      avatar:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
      title: "Voice Room • Starting in 30m",
    },
  ]

  const handleLike = (id: number) => {
    setActivities(
      activities.map((activity) => {
        if (activity.id === id && (activity.type === "post" || activity.type === "video")) {
          return {
            ...activity,
            likes: activity.liked ? activity.likes - 1 : activity.likes + 1,
            liked: !activity.liked,
          }
        }
        return activity
      }),
    )
  }

  const handlePost = () => {
    if (!postText.trim()) return

    const newPost = {
      id: Date.now(),
      user: {
        name: "John Doe",
        avatar: "https://i.pravatar.cc/150?img=8",
        handle: "@johndoe",
      },
      type: "post",
      content: postText,
      time: "Just now",
      likes: 0,
      comments: 0,
      liked: false,
    }

    setActivities([newPost, ...activities])
    setPostText("")
  }

  return (
    <div className="container py-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card className="border-2 border-primary/10 shadow-md transition-all hover:border-primary/20 overflow-hidden">
            <CardHeader className="pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Input
                    placeholder="What's on your mind, John?"
                    className="border-none bg-transparent shadow-none focus-visible:ring-0"
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-between border-t pt-3">
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-gray-800"
                >
                  <ImageIcon className="mr-2 h-4 w-4" />
                  Photo
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-gray-800"
                >
                  <Video className="mr-2 h-4 w-4" />
                  Video
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="rounded-full text-purple-600 hover:bg-purple-50 hover:text-purple-700 dark:hover:bg-gray-800"
                >
                  <Smile className="mr-2 h-4 w-4" />
                  Feeling
                </Button>
              </div>
              <Button
                size="sm"
                className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700"
                onClick={handlePost}
                disabled={!postText.trim()}
              >
                Post
              </Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="foryou">
            <TabsList className="w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm">
              <TabsTrigger
                value="foryou"
                className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                For You
              </TabsTrigger>
              <TabsTrigger
                value="following"
                className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                Following
              </TabsTrigger>
              <TabsTrigger
                value="trending"
                className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                Trending
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <ScrollArea className="h-[calc(100vh-300px)]">
            <div className="space-y-4 pr-4">
              {activities.map((activity) => (
                <Card key={activity.id} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={activity.user.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{activity.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{activity.user.name}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <span>{activity.user.handle}</span>
                          <span>•</span>
                          <span>{activity.time}</span>
                          {activity.type === "voice" && (
                            <span className="ml-1 inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-200 animate-pulse">
                              Live
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{activity.content}</p>

                    {activity.type === "post" && activity.image && (
                      <div className="mt-3 rounded-md overflow-hidden">
                        <img
                          src={activity.image || "/placeholder.svg"}
                          alt="Post image"
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                    )}

                    {activity.type === "video" && (
                      <div className="mt-3 aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden relative group">
                        <img
                          src={activity.thumbnail || "/placeholder.svg"}
                          alt="Video thumbnail"
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button
                            variant="default"
                            size="icon"
                            className="h-12 w-12 rounded-full bg-primary/80 text-white hover:bg-primary"
                            onClick={() => {
                              // This would normally open the video player
                              alert("Video player would open here")
                            }}
                          >
                            <Video className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {activity.type === "job" && (
                      <div className="mt-2 text-sm">
                        <div className="text-muted-foreground">{activity.location}</div>
                        <div className="font-medium text-green-600">{activity.salary}</div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="border-t pt-3">
                    {(activity.type === "post" || activity.type === "video") && (
                      <div className="flex w-full justify-between">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={`rounded-full ${activity.liked ? "text-red-500 hover:text-red-600 hover:bg-red-50" : "hover:text-blue-600 hover:bg-blue-50"}`}
                          onClick={() => handleLike(activity.id)}
                        >
                          <ThumbsUp className={`mr-1 h-4 w-4 ${activity.liked ? "fill-current" : ""}`} />
                          Like ({activity.likes})
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800"
                        >
                          <MessageSquare className="mr-1 h-4 w-4" />
                          Comment ({activity.comments})
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full hover:text-purple-600 hover:bg-purple-50 dark:hover:bg-gray-800"
                        >
                          <Link className="mr-1 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    )}

                    {activity.type === "voice" && (
                      <div className="flex w-full justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="mr-1 h-4 w-4" />
                          <span>{activity.participants} participants</span>
                        </div>
                        <Button
                          size="sm"
                          className="rounded-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700"
                        >
                          Join Room
                        </Button>
                      </div>
                    )}

                    {activity.type === "forum" && (
                      <div className="flex w-full justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <ThumbsUp className="mr-1 h-4 w-4" />
                          <span>{activity.upvotes} upvotes</span>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 dark:hover:bg-gray-800"
                        >
                          <MessageSquare className="mr-1 h-4 w-4" />
                          View Discussion ({activity.replies})
                        </Button>
                      </div>
                    )}

                    {activity.type === "job" && (
                      <div className="flex w-full justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-gray-800"
                        >
                          Save
                        </Button>
                        <Button
                          size="sm"
                          className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                        >
                          Apply
                        </Button>
                      </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="space-y-6">
          <Card className="border-2 border-primary/10 shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700">
              <CardTitle>Your Activity</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">12 new notifications</div>
                    <div className="text-xs text-muted-foreground">2 messages, 10 interactions</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">3 unread messages</div>
                    <div className="text-xs text-muted-foreground">From Sarah, Michael, and Emma</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-600 text-white">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">5 connection requests</div>
                    <div className="text-xs text-muted-foreground">View and respond</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
              <CardTitle>Suggested for You</CardTitle>
              <CardDescription>People and rooms you might be interested in</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-4">
                {suggestions.map((suggestion) => (
                  <div key={suggestion.id} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={suggestion.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{suggestion.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{suggestion.name}</div>
                      <div className="text-xs text-muted-foreground truncate">{suggestion.title}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 dark:hover:bg-gray-800"
                    >
                      {suggestion.title.includes("Voice Room") ? "Remind" : "Connect"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700">
              <CardTitle>Trending Topics</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-2">
                <div className="rounded-md bg-gradient-to-r from-blue-50 to-indigo-50 p-3 hover:from-blue-100 hover:to-indigo-100 cursor-pointer transition-colors dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600">
                  <div className="font-medium">#TechInnovation</div>
                  <div className="text-xs text-muted-foreground">1,245 posts</div>
                </div>
                <div className="rounded-md bg-gradient-to-r from-indigo-50 to-purple-50 p-3 hover:from-indigo-100 hover:to-purple-100 cursor-pointer transition-colors dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600">
                  <div className="font-medium">#RemoteWork</div>
                  <div className="text-xs text-muted-foreground">892 posts</div>
                </div>
                <div className="rounded-md bg-gradient-to-r from-purple-50 to-pink-50 p-3 hover:from-purple-100 hover:to-pink-100 cursor-pointer transition-colors dark:from-gray-800 dark:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600">
                  <div className="font-medium">#AIFuture</div>
                  <div className="text-xs text-muted-foreground">756 posts</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
