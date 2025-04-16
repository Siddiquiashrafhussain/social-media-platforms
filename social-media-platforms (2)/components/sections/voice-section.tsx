import { Hand, MessageSquare, Mic, MicOff, MoreHorizontal, Plus, Search, Settings, User, Users } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function VoiceSection() {
  const rooms = [
    {
      id: 1,
      title: "Tech Talk: The Future of AI",
      hosts: [
        { name: "Sarah Johnson", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "Michael Chen", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      participants: 128,
      category: "Technology",
      live: true,
    },
    {
      id: 2,
      title: "Music Production Tips & Tricks",
      hosts: [{ name: "DJ Beats", avatar: "/placeholder.svg?height=40&width=40" }],
      participants: 75,
      category: "Music",
      live: true,
    },
    {
      id: 3,
      title: "Book Club: 'Project Hail Mary' Discussion",
      hosts: [
        { name: "Bookworm42", avatar: "/placeholder.svg?height=40&width=40" },
        { name: "LiteraryFan", avatar: "/placeholder.svg?height=40&width=40" },
      ],
      participants: 42,
      category: "Books",
      live: true,
    },
    {
      id: 4,
      title: "Startup Founder Q&A",
      hosts: [{ name: "EntrepreneurX", avatar: "/placeholder.svg?height=40&width=40" }],
      participants: 93,
      category: "Business",
      scheduled: "Tomorrow, 3:00 PM",
    },
    {
      id: 5,
      title: "Meditation & Mindfulness Practice",
      hosts: [{ name: "ZenMaster", avatar: "/placeholder.svg?height=40&width=40" }],
      participants: 0,
      category: "Wellness",
      scheduled: "Today, 8:00 PM",
    },
  ]

  const speakers = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=64&width=64",
      role: "Host",
      speaking: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=64&width=64",
      role: "Co-host",
      speaking: false,
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=64&width=64",
      role: "Speaker",
      speaking: true,
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=64&width=64",
      role: "Speaker",
      speaking: false,
    },
  ]

  const listeners = [
    {
      id: 5,
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 6,
      name: "Sophia Lee",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 7,
      name: "James Taylor",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 8,
      name: "Olivia Brown",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 9,
      name: "Noah Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 10,
      name: "Isabella Martinez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 11,
      name: "Ethan Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 12,
      name: "Mia Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex h-full">
      {/* Sidebar / Room List */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <span className="font-medium">username123</span>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search rooms..." className="pl-8" />
          </div>
        </div>
        <Tabs defaultValue="live" className="flex-1 flex flex-col">
          <div className="px-3">
            <TabsList className="w-full">
              <TabsTrigger value="live" className="flex-1">
                Live Now
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="flex-1">
                Upcoming
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="live" className="flex-1 flex flex-col">
            <ScrollArea className="flex-1">
              <div className="p-3 space-y-3">
                {rooms
                  .filter((room) => room.live)
                  .map((room) => (
                    <div
                      key={room.id}
                      className={`p-3 rounded-md border cursor-pointer hover:bg-accent/50 ${
                        room.id === 1 ? "bg-accent" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {room.category}
                        </Badge>
                        {room.live && (
                          <Badge variant="default" className="text-xs bg-red-500">
                            LIVE
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-medium mb-2">{room.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {room.hosts.map((host, index) => (
                            <Avatar key={index} className="border-2 border-background h-6 w-6">
                              <AvatarImage src={host.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{host.name[0]}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="h-3.5 w-3.5" />
                          <span>{room.participants}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
            <div className="p-3 border-t">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Start a Room
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="upcoming" className="flex-1 flex flex-col">
            <ScrollArea className="flex-1">
              <div className="p-3 space-y-3">
                {rooms
                  .filter((room) => room.scheduled)
                  .map((room) => (
                    <div key={room.id} className="p-3 rounded-md border cursor-pointer hover:bg-accent/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {room.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {room.scheduled}
                        </Badge>
                      </div>
                      <h3 className="font-medium mb-2">{room.title}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex -space-x-2">
                          {room.hosts.map((host, index) => (
                            <Avatar key={index} className="border-2 border-background h-6 w-6">
                              <AvatarImage src={host.avatar || "/placeholder.svg"} />
                              <AvatarFallback>{host.name[0]}</AvatarFallback>
                            </Avatar>
                          ))}
                        </div>
                        <Button variant="outline" size="sm" className="text-xs h-7">
                          Set Reminder
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
            <div className="p-3 border-t">
              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Schedule a Room
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Room View */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">Technology</Badge>
            <div className="flex items-center gap-2">
              <Badge variant="default" className="bg-red-500">
                LIVE
              </Badge>
              <div className="flex items-center gap-1 text-sm">
                <Users className="h-4 w-4" />
                <span>128</span>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-medium">Tech Talk: The Future of AI</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Join our discussion about the latest advancements in artificial intelligence and what the future holds.
          </p>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Mic className="h-4 w-4" />
                Speakers
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {speakers.map((speaker) => (
                  <div key={speaker.id} className="flex flex-col items-center">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={speaker.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{speaker.name[0]}</AvatarFallback>
                      </Avatar>
                      {speaker.speaking && (
                        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-background"></span>
                      )}
                    </div>
                    <span className="font-medium text-sm mt-2">{speaker.name}</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Badge variant={speaker.role === "Host" ? "default" : "outline"} className="text-xs">
                        {speaker.role}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="font-medium mb-3 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Listeners ({listeners.length})
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {listeners.map((listener) => (
                  <div key={listener.id} className="flex flex-col items-center">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={listener.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{listener.name[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-xs mt-1 text-center truncate w-full">{listener.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex items-center justify-between">
            <Button variant="outline" size="sm">
              <Hand className="mr-2 h-4 w-4" />
              Raise Hand
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
              <Button variant="default" size="icon" className="rounded-full h-10 w-10 bg-red-500 hover:bg-red-600">
                <MicOff className="h-5 w-5" />
              </Button>
            </div>
            <Button variant="destructive" size="sm">
              Leave Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
