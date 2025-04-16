"use client"

import { useState } from "react"
import { ImageIcon, Mic, MoreHorizontal, Paperclip, Plus, Search, Send, Smile, User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function MessagingSection() {
  const [newMessage, setNewMessage] = useState("")
  const [chats, setChats] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Are we still meeting today?",
      time: "2m ago",
      unread: 2,
      online: true,
      active: true,
    },
    {
      id: 2,
      name: "Design Team",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Alex: I've updated the mockups",
      time: "10m ago",
      unread: 0,
      online: false,
      group: true,
      active: false,
    },
    {
      id: 3,
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Thanks for the feedback!",
      time: "1h ago",
      unread: 0,
      online: true,
      active: false,
    },
    {
      id: 4,
      name: "Project Brainstorm",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Let's schedule a call next week",
      time: "3h ago",
      unread: 0,
      online: false,
      group: true,
      active: false,
    },
    {
      id: 5,
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Did you see the latest update?",
      time: "5h ago",
      unread: 0,
      online: false,
      active: false,
    },
  ])

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Sarah Johnson",
      content: "Hey there! How's your day going?",
      time: "10:32 AM",
      isMe: false,
    },
    {
      id: 2,
      sender: "Me",
      content: "Pretty good, thanks! Just finishing up some work. How about you?",
      time: "10:35 AM",
      isMe: true,
    },
    {
      id: 3,
      sender: "Sarah Johnson",
      content: "I'm doing well! Are we still meeting today for coffee?",
      time: "10:36 AM",
      isMe: false,
    },
    {
      id: 4,
      sender: "Me",
      content: "Yes, definitely! How about 3pm at the usual place?",
      time: "10:40 AM",
      isMe: true,
    },
    {
      id: 5,
      sender: "Sarah Johnson",
      content: "Perfect! See you then 😊",
      time: "10:41 AM",
      isMe: false,
    },
  ])

  const handleChatSelect = (id: number) => {
    setChats(
      chats.map((chat) => ({
        ...chat,
        active: chat.id === id,
        unread: chat.id === id ? 0 : chat.unread,
      })),
    )
  }

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    const newMsg = {
      id: Date.now(),
      sender: "Me",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      isMe: true,
    }

    setMessages([...messages, newMsg])
    setNewMessage("")
  }

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <span className="font-medium">My Chats</span>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search messages..." className="pl-8" />
          </div>
        </div>
        <Tabs defaultValue="chats" className="flex-1 flex flex-col">
          <div className="px-3">
            <TabsList className="w-full">
              <TabsTrigger value="chats" className="flex-1">
                Chats
              </TabsTrigger>
              <TabsTrigger value="groups" className="flex-1">
                Groups
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="chats" className="flex-1 flex flex-col">
            <ScrollArea className="flex-1">
              <div className="p-3 space-y-2">
                {chats
                  .filter((chat) => !chat.group)
                  .map((chat) => (
                    <div
                      key={chat.id}
                      className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                        chat.active ? "bg-accent" : "hover:bg-accent/50"
                      }`}
                      onClick={() => handleChatSelect(chat.id)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {chat.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium truncate">{chat.name}</span>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground truncate">{chat.lastMessage}</span>
                          {chat.unread > 0 && (
                            <Badge variant="default" className="ml-auto">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
            <div className="p-3 border-t">
              <Button className="w-full rounded-full">
                <Plus className="mr-2 h-4 w-4" /> New Chat
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="groups" className="flex-1">
            <ScrollArea className="flex-1">
              <div className="p-3 space-y-2">
                {chats
                  .filter((chat) => chat.group)
                  .map((chat) => (
                    <div
                      key={chat.id}
                      className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                        chat.active ? "bg-accent" : "hover:bg-accent/50"
                      }`}
                      onClick={() => handleChatSelect(chat.id)}
                    >
                      <Avatar>
                        <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium truncate">{chat.name}</span>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground truncate">{chat.lastMessage}</span>
                          {chat.unread > 0 && (
                            <Badge variant="default" className="ml-auto">
                              {chat.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </ScrollArea>
            <div className="p-3 border-t">
              <Button className="w-full rounded-full">
                <Plus className="mr-2 h-4 w-4" /> New Group
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">Sarah Johnson</div>
              <div className="text-xs text-muted-foreground">Online</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    message.isMe ? "bg-primary text-primary-foreground" : "bg-accent"
                  }`}
                >
                  <div className="text-sm">{message.content}</div>
                  <div className="text-xs mt-1 opacity-70">{message.time}</div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-3 border-t">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Paperclip className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ImageIcon className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Mic className="h-5 w-5" />
            </Button>
            <Input
              placeholder="Type a message..."
              className="flex-1 rounded-full"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
            />
            <Button variant="ghost" size="icon" className="rounded-full">
              <Smile className="h-5 w-5" />
            </Button>
            <Button size="icon" className="rounded-full" onClick={handleSendMessage} disabled={!newMessage.trim()}>
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
