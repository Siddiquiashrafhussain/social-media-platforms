import { Check } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeatureList() {
  return (
    <Tabs defaultValue="core">
      <TabsList className="mb-4">
        <TabsTrigger value="core">Core Features</TabsTrigger>
        <TabsTrigger value="ui">UI Elements</TabsTrigger>
        <TabsTrigger value="security">Security & Privacy</TabsTrigger>
      </TabsList>

      <TabsContent value="core">
        <Card>
          <CardHeader>
            <CardTitle>Core Features</CardTitle>
            <CardDescription>Essential functionality that defines the messaging experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">One-on-one Messaging</h3>
                    <p className="text-sm text-muted-foreground">
                      Private conversations between two users with real-time message delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Group Chats</h3>
                    <p className="text-sm text-muted-foreground">
                      Create and manage group conversations with multiple participants
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Media Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      Send and receive images, videos, voice messages, and documents
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Message Status</h3>
                    <p className="text-sm text-muted-foreground">
                      Read receipts and typing indicators to enhance communication awareness
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Contact Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Add, remove, and organize contacts with custom labels and favorites
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Message Search</h3>
                    <p className="text-sm text-muted-foreground">
                      Search through conversations to find specific messages or media
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Notifications</h3>
                    <p className="text-sm text-muted-foreground">
                      Customizable push notifications with sound, vibration, and preview options
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Profile Customization</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalize profile with photo, status message, and display name
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="ui">
        <Card>
          <CardHeader>
            <CardTitle>UI Elements</CardTitle>
            <CardDescription>Design components that create a clean, intuitive user experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dark & Light Modes</h3>
                    <p className="text-sm text-muted-foreground">
                      System-matched or user-selected theme preference with smooth transitions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Chat Bubbles</h3>
                    <p className="text-sm text-muted-foreground">
                      Visually distinct message containers with subtle animations and color coding
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Quick Action Buttons</h3>
                    <p className="text-sm text-muted-foreground">
                      Easily accessible buttons for common actions like attach, send, and emoji selection
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Navigation Tabs</h3>
                    <p className="text-sm text-muted-foreground">
                      Organized sections for Chats, Groups, and Profile with smooth transitions
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Status Indicators</h3>
                    <p className="text-sm text-muted-foreground">
                      Visual cues for online status, message delivery, and read status
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Media Preview</h3>
                    <p className="text-sm text-muted-foreground">
                      Inline thumbnails and previews for shared media with expandable view
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Responsive Layout</h3>
                    <p className="text-sm text-muted-foreground">
                      Adaptive design that works seamlessly across mobile, tablet, and desktop
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Gesture Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Swipe actions for reply, delete, and other common message interactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Security & Privacy</CardTitle>
            <CardDescription>Features that protect user data and communications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">End-to-End Encryption</h3>
                    <p className="text-sm text-muted-foreground">
                      Optional encryption for messages that only sender and recipient can read
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Message Expiration</h3>
                    <p className="text-sm text-muted-foreground">
                      Set messages to automatically delete after a specified time period
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Additional security layer for account access using SMS or authenticator apps
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Privacy Controls</h3>
                    <p className="text-sm text-muted-foreground">
                      Granular settings for read receipts, online status, and profile visibility
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Secure Media Storage</h3>
                    <p className="text-sm text-muted-foreground">
                      Encrypted storage for shared media with access controls
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Block & Report</h3>
                    <p className="text-sm text-muted-foreground">
                      Tools to block unwanted contacts and report inappropriate content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
