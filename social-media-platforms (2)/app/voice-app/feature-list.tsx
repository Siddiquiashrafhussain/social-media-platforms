import { Check } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeatureList() {
  return (
    <Tabs defaultValue="core">
      <TabsList className="mb-4">
        <TabsTrigger value="core">Core Features</TabsTrigger>
        <TabsTrigger value="room">Room Management</TabsTrigger>
        <TabsTrigger value="social">Social Elements</TabsTrigger>
      </TabsList>

      <TabsContent value="core">
        <Card>
          <CardHeader>
            <CardTitle>Core Features</CardTitle>
            <CardDescription>Essential functionality that defines the voice-based social experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Voice Rooms</h3>
                    <p className="text-sm text-muted-foreground">
                      Real-time audio conversations with multiple participants in topic-based rooms
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Speaker/Listener Roles</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear distinction between active speakers and passive listeners with visual indicators
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Room Discovery</h3>
                    <p className="text-sm text-muted-foreground">
                      Browse active and upcoming rooms by topic, popularity, or connections
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hand Raising</h3>
                    <p className="text-sm text-muted-foreground">
                      Request speaking privileges with a simple gesture visible to moderators
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
                    <h3 className="font-medium">Audio Controls</h3>
                    <p className="text-sm text-muted-foreground">
                      Mute/unmute functionality with visual feedback and noise cancellation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">User Profiles</h3>
                    <p className="text-sm text-muted-foreground">
                      Customizable profiles with bio, interests, and speaking history
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
                      Alerts for room invites, followed speakers going live, and scheduled events
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Room Categories</h3>
                    <p className="text-sm text-muted-foreground">
                      Organize conversations by topics like Technology, Music, Business, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="room">
        <Card>
          <CardHeader>
            <CardTitle>Room Management</CardTitle>
            <CardDescription>Features for creating and moderating voice rooms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Room Creation</h3>
                    <p className="text-sm text-muted-foreground">
                      Start rooms with customizable titles, descriptions, and topic tags
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Moderator Controls</h3>
                    <p className="text-sm text-muted-foreground">
                      Manage speakers, approve hand raises, and remove disruptive participants
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Co-Host Assignment</h3>
                    <p className="text-sm text-muted-foreground">
                      Designate trusted users as co-hosts with moderation privileges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Room Scheduling</h3>
                    <p className="text-sm text-muted-foreground">
                      Plan future rooms with date/time settings and guest speaker invitations
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
                    <h3 className="font-medium">Privacy Settings</h3>
                    <p className="text-sm text-muted-foreground">
                      Control room visibility as public, social circle only, or invite-only
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Speaker Management</h3>
                    <p className="text-sm text-muted-foreground">
                      Promote listeners to speakers and demote speakers to listeners
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Room Analytics</h3>
                    <p className="text-sm text-muted-foreground">
                      View metrics on room attendance, engagement, and speaker participation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Recording Options</h3>
                    <p className="text-sm text-muted-foreground">
                      Optional room recording with participant consent for later playback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="social">
        <Card>
          <CardHeader>
            <CardTitle>Social Elements</CardTitle>
            <CardDescription>Features that facilitate community engagement and interaction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Follow System</h3>
                    <p className="text-sm text-muted-foreground">
                      Subscribe to users to receive notifications when they host rooms
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Emoji Reactions</h3>
                    <p className="text-sm text-muted-foreground">
                      Express reactions to speakers without interrupting the conversation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Text Chat</h3>
                    <p className="text-sm text-muted-foreground">
                      Complementary text-based chat for sharing links and comments during rooms
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Social Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      Share room invites across other platforms and via direct messages
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
                    <h3 className="font-medium">Clubs & Communities</h3>
                    <p className="text-sm text-muted-foreground">
                      Create and join interest-based groups that regularly host themed rooms
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Direct Messages</h3>
                    <p className="text-sm text-muted-foreground">
                      Private communication between users to continue conversations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Activity Feed</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalized timeline of rooms, scheduled events, and connections
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">User Reputation</h3>
                    <p className="text-sm text-muted-foreground">
                      Recognition system for quality contributions and hosting experience
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
