"use client"

import { useEffect, useState } from "react"
import {
  BellDot,
  BriefcaseBusiness,
  ChevronDown,
  Compass,
  FileText,
  Home,
  LogOut,
  MessageSquare,
  Mic,
  PanelLeft,
  Plus,
  Search,
  Settings,
  ThumbsUp,
  TrendingUpIcon as Trending,
  User,
  Video,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ForumSection } from "@/components/sections/forum-section"
import { HomeSection } from "@/components/sections/home-section"
import { MessagingSection } from "@/components/sections/messaging-section"
import { ProfessionalSection } from "@/components/sections/professional-section"
import { VideoSection } from "@/components/sections/video-section"
import { VoiceSection } from "@/components/sections/voice-section"

export function MainDashboard() {
  const [activeSection, setActiveSection] = useState<string>("home")
  const [notifications, setNotifications] = useState(5)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const renderSection = () => {
    switch (activeSection) {
      case "messaging":
        return <MessagingSection />
      case "video":
        return <VideoSection />
      case "forum":
        return <ForumSection />
      case "voice":
        return <VoiceSection />
      case "professional":
        return <ProfessionalSection />
      case "home":
      default:
        return <HomeSection />
    }
  }

  const handleNotificationClick = () => {
    setNotifications(0)
  }

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <PanelLeft className="h-8 w-8 animate-pulse" />
          </div>
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            UniSocial
          </div>
          <div className="text-sm text-muted-foreground">Loading your social world...</div>
          <div className="mt-4 flex space-x-2">
            <div className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:0.2s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-indigo-600 [animation-delay:0.4s]"></div>
            <div className="h-2 w-2 animate-bounce rounded-full bg-violet-600 [animation-delay:0.6s]"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
                <PanelLeft className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                UniSocial
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "home"}
                  onClick={() => setActiveSection("home")}
                  tooltip="Home"
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "messaging"}
                  onClick={() => setActiveSection("messaging")}
                  tooltip="Messaging"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Messaging</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "video"}
                  onClick={() => setActiveSection("video")}
                  tooltip="Videos"
                >
                  <Video className="h-5 w-5" />
                  <span>Videos</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "forum"}
                  onClick={() => setActiveSection("forum")}
                  tooltip="Forums"
                >
                  <FileText className="h-5 w-5" />
                  <span>Forums</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "voice"}
                  onClick={() => setActiveSection("voice")}
                  tooltip="Voice Rooms"
                >
                  <Mic className="h-5 w-5" />
                  <span>Voice Rooms</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "professional"}
                  onClick={() => setActiveSection("professional")}
                  tooltip="Professional"
                >
                  <BriefcaseBusiness className="h-5 w-5" />
                  <span>Professional</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>

            <Separator className="my-4" />

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Explore">
                  <Compass className="h-5 w-5" />
                  <span>Explore</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Trending">
                  <Trending className="h-5 w-5" />
                  <span>Trending</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Settings">
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton tooltip="Profile">
                      <Avatar className="h-5 w-5 mr-2">
                        <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="flex h-16 items-center gap-4 border-b bg-white/80 backdrop-blur-sm px-4 lg:px-6 dark:bg-gray-900/80">
            <SidebarTrigger />
            <div className="w-full flex-1">
              <div className="relative hidden md:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search across all sections..."
                  className="w-full max-w-md appearance-none bg-background pl-8 shadow-none"
                />
              </div>
              <Button variant="outline" size="sm" className="md:hidden" onClick={() => setIsSearchOpen(true)}>
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="relative" onClick={handleNotificationClick}>
                      <BellDot className="h-5 w-5" />
                      {notifications > 0 && (
                        <Badge
                          className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center"
                          variant="destructive"
                        >
                          {notifications}
                        </Badge>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Create New</SheetTitle>
                    <SheetDescription>Choose what you want to create</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <Button
                      variant="outline"
                      className="flex h-20 w-full flex-col items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800"
                      onClick={() => {
                        setActiveSection("messaging")
                      }}
                    >
                      <MessageSquare className="h-6 w-6" />
                      <span>New Message</span>
                    </Button>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        variant="outline"
                        className="flex h-20 w-full flex-col items-center justify-center gap-2 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-gray-800"
                        onClick={() => {
                          setActiveSection("video")
                        }}
                      >
                        <Video className="h-6 w-6" />
                        <span>New Video</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex h-20 w-full flex-col items-center justify-center gap-2 hover:bg-violet-50 hover:text-violet-600 dark:hover:bg-gray-800"
                        onClick={() => {
                          setActiveSection("forum")
                        }}
                      >
                        <FileText className="h-6 w-6" />
                        <span>New Thread</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex h-20 w-full flex-col items-center justify-center gap-2 hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-gray-800"
                        onClick={() => {
                          setActiveSection("voice")
                        }}
                      >
                        <Mic className="h-6 w-6" />
                        <span>New Room</span>
                      </Button>
                      <Button
                        variant="outline"
                        className="flex h-20 w-full flex-col items-center justify-center gap-2 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-gray-800"
                        onClick={() => {
                          setActiveSection("home")
                        }}
                      >
                        <ThumbsUp className="h-6 w-6" />
                        <span>New Post</span>
                      </Button>
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button>Close</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline-block">John Doe</span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-white/40 backdrop-blur-sm dark:bg-gray-900/40">
            {renderSection()}
          </main>

          {/* Mobile Navigation */}
          <div className="flex h-16 items-center justify-around border-t bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 md:hidden">
            <Button
              variant={activeSection === "home" ? "default" : "ghost"}
              size="icon"
              className={`h-12 w-12 rounded-full ${
                activeSection === "home" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : ""
              }`}
              onClick={() => setActiveSection("home")}
            >
              <Home className="h-5 w-5" />
            </Button>
            <Button
              variant={activeSection === "messaging" ? "default" : "ghost"}
              size="icon"
              className={`h-12 w-12 rounded-full ${
                activeSection === "messaging" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : ""
              }`}
              onClick={() => setActiveSection("messaging")}
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button
              variant={activeSection === "video" ? "default" : "ghost"}
              size="icon"
              className={`h-12 w-12 rounded-full ${
                activeSection === "video" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : ""
              }`}
              onClick={() => setActiveSection("video")}
            >
              <Video className="h-5 w-5" />
            </Button>
            <Button
              variant={activeSection === "forum" ? "default" : "ghost"}
              size="icon"
              className={`h-12 w-12 rounded-full ${
                activeSection === "forum" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : ""
              }`}
              onClick={() => setActiveSection("forum")}
            >
              <FileText className="h-5 w-5" />
            </Button>
            <Button
              variant={activeSection === "voice" ? "default" : "ghost"}
              size="icon"
              className={`h-12 w-12 rounded-full ${
                activeSection === "voice" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : ""
              }`}
              onClick={() => setActiveSection("voice")}
            >
              <Mic className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Sheet */}
        <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
          <SheetContent side="top" className="h-auto">
            <SheetHeader className="mb-4">
              <SheetTitle>Search</SheetTitle>
            </SheetHeader>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search across all sections..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
                autoFocus
              />
            </div>
            <div className="mt-4">
              <h3 className="mb-2 text-sm font-medium">Recent Searches</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  design inspiration
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  tech news
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  job opportunities
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </SidebarProvider>
  )
}
