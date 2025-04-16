import { Check } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeatureList() {
  return (
    <Tabs defaultValue="core">
      <TabsList className="mb-4">
        <TabsTrigger value="core">Core Features</TabsTrigger>
        <TabsTrigger value="content">Content Management</TabsTrigger>
        <TabsTrigger value="community">Community Tools</TabsTrigger>
      </TabsList>

      <TabsContent value="core">
        <Card>
          <CardHeader>
            <CardTitle>Core Features</CardTitle>
            <CardDescription>Essential functionality that defines the forum experience</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Categorized Threads</h3>
                    <p className="text-sm text-muted-foreground">
                      Organize discussions into topic-based categories for easy navigation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Thread Creation</h3>
                    <p className="text-sm text-muted-foreground">
                      Start new discussions with rich text formatting, links, and media
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Nested Comments</h3>
                    <p className="text-sm text-muted-foreground">
                      Threaded replies that maintain context and conversation flow
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Upvote/Downvote System</h3>
                    <p className="text-sm text-muted-foreground">
                      Community-driven content ranking to highlight quality contributions
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
                    <h3 className="font-medium">User Profiles</h3>
                    <p className="text-sm text-muted-foreground">
                      Personalized pages showing post history, reputation, and activity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Search Functionality</h3>
                    <p className="text-sm text-muted-foreground">
                      Find specific content with advanced filtering and sorting options
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
                      Alerts for replies, mentions, and activity on followed threads
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Karma/Reputation System</h3>
                    <p className="text-sm text-muted-foreground">
                      Points-based recognition for positive contributions to the community
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="content">
        <Card>
          <CardHeader>
            <CardTitle>Content Management</CardTitle>
            <CardDescription>Features for creating and organizing forum content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Rich Text Editor</h3>
                    <p className="text-sm text-muted-foreground">
                      Format text with headings, lists, code blocks, and emphasis
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Media Embedding</h3>
                    <p className="text-sm text-muted-foreground">
                      Include images, videos, and other media in posts and comments
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Thread Pinning</h3>
                    <p className="text-sm text-muted-foreground">
                      Highlight important discussions at the top of category listings
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Tagging System</h3>
                    <p className="text-sm text-muted-foreground">
                      Add keywords to threads for improved searchability and filtering
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
                    <h3 className="font-medium">Drafts</h3>
                    <p className="text-sm text-muted-foreground">Save unfinished posts to complete and publish later</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Post Editing</h3>
                    <p className="text-sm text-muted-foreground">Modify content with edit history for transparency</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Content Filtering</h3>
                    <p className="text-sm text-muted-foreground">
                      Sort and filter threads by popularity, recency, or activity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Bookmarks</h3>
                    <p className="text-sm text-muted-foreground">
                      Save threads for later reference in a personal collection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="community">
        <Card>
          <CardHeader>
            <CardTitle>Community Tools</CardTitle>
            <CardDescription>Features that facilitate community engagement and moderation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">User Mentions</h3>
                    <p className="text-sm text-muted-foreground">
                      Tag other users in posts and comments to bring them into discussions
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Moderation Tools</h3>
                    <p className="text-sm text-muted-foreground">
                      Report, flag, and moderate content to maintain community standards
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">User Roles</h3>
                    <p className="text-sm text-muted-foreground">
                      Hierarchical permissions for members, moderators, and administrators
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Following System</h3>
                    <p className="text-sm text-muted-foreground">
                      Subscribe to users or topics to see their content in your feed
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
                    <h3 className="font-medium">Awards & Badges</h3>
                    <p className="text-sm text-muted-foreground">
                      Recognize contributions and achievements with visual indicators
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Private Messaging</h3>
                    <p className="text-sm text-muted-foreground">
                      Direct communication between users outside of public threads
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
                      Personalized stream of content based on interests and connections
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Community Guidelines</h3>
                    <p className="text-sm text-muted-foreground">
                      Clear rules and expectations for participation and content
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
