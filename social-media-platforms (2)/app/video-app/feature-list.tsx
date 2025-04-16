import { Check } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeatureList() {
  return (
    <Tabs defaultValue="core">
      <TabsList className="mb-4">
        <TabsTrigger value="core">Core Features</TabsTrigger>
        <TabsTrigger value="creation">Creation Tools</TabsTrigger>
        <TabsTrigger value="social">Social Elements</TabsTrigger>
      </TabsList>

      <TabsContent value="core">
        <Card>
          <CardHeader>
            <CardTitle>Core Features</CardTitle>
            <CardDescription>Essential functionality that defines the video-sharing experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Short Video Format</h3>
                    <p className="text-sm text-muted-foreground">
                      Create and share videos up to 15 seconds long with automatic looping
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Vertical Video Feed</h3>
                    <p className="text-sm text-muted-foreground">
                      Full-screen, swipeable interface optimized for mobile viewing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">For You Page</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalized algorithm-driven feed of content tailored to user interests
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Explore Page</h3>
                    <p className="text-sm text-muted-foreground">
                      Discover trending content, challenges, and videos by category
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
                    <h3 className="font-medium">In-App Recording</h3>
                    <p className="text-sm text-muted-foreground">
                      Built-in camera with timer, speed controls, and segment recording
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Video Upload</h3>
                    <p className="text-sm text-muted-foreground">
                      Import existing videos from device gallery with trimming options
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
                      Customizable profiles with bio, profile picture, and video collections
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
                      Real-time alerts for likes, comments, follows, and trending content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="creation">
        <Card>
          <CardHeader>
            <CardTitle>Creation Tools</CardTitle>
            <CardDescription>Features that empower users to create engaging video content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Music Library</h3>
                    <p className="text-sm text-muted-foreground">
                      Extensive collection of licensed music tracks and sound effects
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Visual Effects</h3>
                    <p className="text-sm text-muted-foreground">
                      Filters, AR effects, transitions, and visual enhancements for videos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Text Overlays</h3>
                    <p className="text-sm text-muted-foreground">
                      Add customizable text with different fonts, colors, and animations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Speed Controls</h3>
                    <p className="text-sm text-muted-foreground">
                      Adjust video playback speed from slow-motion to time-lapse
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
                    <h3 className="font-medium">Duet & Stitch</h3>
                    <p className="text-sm text-muted-foreground">
                      Create side-by-side videos or incorporate parts of other users' content
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Green Screen</h3>
                    <p className="text-sm text-muted-foreground">
                      Replace video backgrounds with images, videos, or other content
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Voice Effects</h3>
                    <p className="text-sm text-muted-foreground">
                      Modify voice recordings with pitch changes and audio filters
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Templates</h3>
                    <p className="text-sm text-muted-foreground">
                      Pre-designed video formats with timing guides for trending challenges
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
                    <h3 className="font-medium">Likes & Comments</h3>
                    <p className="text-sm text-muted-foreground">
                      React to videos with likes and leave text or video comments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Follow System</h3>
                    <p className="text-sm text-muted-foreground">
                      Subscribe to creators to see their content in your feed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      Share videos across other social platforms or via direct messages
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Hashtags & Challenges</h3>
                    <p className="text-sm text-muted-foreground">
                      Categorize content and participate in trending challenges
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
                    <h3 className="font-medium">Direct Messages</h3>
                    <p className="text-sm text-muted-foreground">
                      Private communication between users with video and text sharing
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Live Streaming</h3>
                    <p className="text-sm text-muted-foreground">
                      Broadcast real-time video to followers with interactive comments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Creator Monetization</h3>
                    <p className="text-sm text-muted-foreground">
                      Virtual gifts, creator fund, and brand partnership opportunities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Collaborative Creation</h3>
                    <p className="text-sm text-muted-foreground">
                      Tools for multiple creators to work together on content
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
