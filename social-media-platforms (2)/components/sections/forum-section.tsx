import {
  ArrowUp,
  ArrowUpDown,
  BookmarkPlus,
  MessageSquare,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  User,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ForumSection() {
  const categories = [
    { name: "Technology", count: 1243, active: true },
    { name: "Science", count: 856 },
    { name: "Books", count: 721 },
    { name: "Gaming", count: 1892 },
    { name: "Movies & TV", count: 1105 },
    { name: "Music", count: 643 },
    { name: "Art & Design", count: 512 },
    { name: "Sports", count: 892 },
    { name: "Food", count: 723 },
    { name: "Travel", count: 489 },
    { name: "Finance", count: 367 },
    { name: "Health", count: 612 },
  ]

  const threads = [
    {
      id: 1,
      title: "What's your favorite programming language and why?",
      author: "techguru42",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      time: "2h ago",
      upvotes: 128,
      comments: 47,
      category: "Technology",
      pinned: true,
    },
    {
      id: 2,
      title: "The future of AI: beneficial or dangerous?",
      author: "futurist99",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      time: "5h ago",
      upvotes: 95,
      comments: 63,
      category: "Technology",
    },
    {
      id: 3,
      title: "Best resources for learning web development in 2023",
      author: "codelearner",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      time: "8h ago",
      upvotes: 82,
      comments: 31,
      category: "Technology",
    },
    {
      id: 4,
      title: "How do you stay productive while working from home?",
      author: "remoteworker",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      time: "12h ago",
      upvotes: 67,
      comments: 42,
      category: "Technology",
    },
    {
      id: 5,
      title: "Mechanical keyboards: worth the hype?",
      author: "keyboardenthusiast",
      authorAvatar: "/placeholder.svg?height=40&width=40",
      time: "1d ago",
      upvotes: 54,
      comments: 38,
      category: "Technology",
    },
  ]

  const comments = [
    {
      id: 1,
      author: "devexpert",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      content:
        "Python has been my go-to language for years. The readability and vast ecosystem of libraries make it perfect for everything from data science to web development.",
      time: "1h ago",
      upvotes: 42,
      replies: 5,
      level: 0,
    },
    {
      id: 2,
      author: "javascriptfan",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      content:
        "JavaScript for me. Being able to use the same language for frontend and backend (Node.js) is a huge productivity boost.",
      time: "1h ago",
      upvotes: 38,
      replies: 3,
      level: 0,
    },
    {
      id: 3,
      author: "rustlover",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      content:
        "I've been using Rust lately and I'm impressed with its performance and safety features. The learning curve is steep but worth it.",
      time: "2h ago",
      upvotes: 27,
      replies: 2,
      level: 0,
    },
    {
      id: 4,
      author: "webdev123",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      content:
        "I agree! The async/await syntax makes handling asynchronous operations so much cleaner compared to callback hell.",
      time: "45m ago",
      upvotes: 15,
      replies: 1,
      level: 1,
      parentId: 2,
    },
    {
      id: 5,
      author: "pythonista",
      authorAvatar: "/placeholder.svg?height=32&width=32",
      content:
        "Have you tried the new features in Python 3.10? The pattern matching is a game-changer for certain types of code.",
      time: "30m ago",
      upvotes: 8,
      replies: 0,
      level: 1,
      parentId: 1,
    },
  ]

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 mb-4">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">username123</div>
              <div className="text-xs text-muted-foreground">Karma: 1,245</div>
            </div>
          </div>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" /> New Thread
          </Button>
        </div>
        <div className="p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
        </div>
        <ScrollArea className="flex-1">
          <div className="p-3">
            <h3 className="font-medium mb-2">Categories</h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className={`flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer ${
                    category.active ? "bg-accent" : "hover:bg-accent/50"
                  }`}
                >
                  <span className={category.active ? "font-medium" : ""}>{category.name}</span>
                  <Badge variant="secondary" className="ml-auto">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div>
            <h2 className="font-medium">Technology</h2>
            <p className="text-sm text-muted-foreground">Discussions about programming, gadgets, and tech news</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort
            </Button>
            <Button variant="outline" size="sm">
              <User className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="divide-y">
            {threads.map((thread) => (
              <div key={thread.id} className="p-4 hover:bg-accent/50">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowUp className="h-5 w-5" />
                    </Button>
                    <span className="font-medium text-sm">{thread.upvotes}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ArrowUp className="h-5 w-5 rotate-180" />
                    </Button>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {thread.pinned && (
                        <Badge variant="outline" className="text-xs">
                          Pinned
                        </Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {thread.category}
                      </Badge>
                    </div>
                    <h3 className="font-medium text-lg mb-2">{thread.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Avatar className="h-5 w-5">
                          <AvatarImage src={thread.authorAvatar || "/placeholder.svg"} />
                          <AvatarFallback>{thread.author[0]}</AvatarFallback>
                        </Avatar>
                        <span>{thread.author}</span>
                      </div>
                      <span>{thread.time}</span>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{thread.comments} comments</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-1">
                    <Button variant="ghost" size="icon">
                      <BookmarkPlus className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Thread View - Hidden on Mobile */}
      <div className="hidden lg:flex lg:flex-col w-[450px] border-l">
        <div className="p-4 border-b">
          <h2 className="font-medium text-lg">What's your favorite programming language and why?</h2>
          <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Avatar className="h-5 w-5">
                <AvatarImage src="/placeholder.svg?height=20&width=20" />
                <AvatarFallback>T</AvatarFallback>
              </Avatar>
              <span>techguru42</span>
            </div>
            <span>2h ago</span>
          </div>
          <p className="mt-3 text-sm">
            I'm curious to hear what programming languages everyone prefers and the reasons behind your choice. Is it
            because of the syntax, the community, job opportunities, or something else?
          </p>
          <div className="flex items-center gap-3 mt-4">
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm">
                <ArrowUp className="mr-1 h-4 w-4" />
                Upvote (128)
              </Button>
            </div>
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-1 h-4 w-4" />
              Reply
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-1 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="relative" style={{ marginLeft: `${comment.level * 24}px` }}>
                {comment.level > 0 && <div className="absolute left-[-16px] top-0 bottom-0 w-[2px] bg-border" />}
                <div className="p-3 rounded-md border">
                  <div className="flex items-center gap-2 mb-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={comment.authorAvatar || "/placeholder.svg"} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-sm">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">{comment.time}</span>
                  </div>
                  <p className="text-sm mb-3">{comment.content}</p>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ArrowUp className="h-3.5 w-3.5 mr-1" />
                        {comment.upvotes}
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      Reply
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <Share2 className="h-3.5 w-3.5 mr-1" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>ME</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">Add a comment</span>
          </div>
          <textarea
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[100px]"
            placeholder="What are your thoughts?"
          ></textarea>
          <div className="flex justify-end mt-2">
            <Button>Post Comment</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
