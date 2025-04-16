import { Check } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FeatureList() {
  return (
    <Tabs defaultValue="core">
      <TabsList className="mb-4">
        <TabsTrigger value="core">Core Features</TabsTrigger>
        <TabsTrigger value="profile">Profile & Networking</TabsTrigger>
        <TabsTrigger value="jobs">Job Search</TabsTrigger>
      </TabsList>

      <TabsContent value="core">
        <Card>
          <CardHeader>
            <CardTitle>Core Features</CardTitle>
            <CardDescription>Essential functionality for professional networking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Professional Profiles</h3>
                    <p className="text-sm text-muted-foreground">Showcase your work history, skills, and education</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Connection Management</h3>
                    <p className="text-sm text-muted-foreground">Build and maintain your professional network</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Job Search</h3>
                    <p className="text-sm text-muted-foreground">Find relevant job opportunities and apply with ease</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Content Sharing</h3>
                    <p className="text-sm text-muted-foreground">
                      Share updates, articles, and insights with your network
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Messaging</h3>
                    <p className="text-sm text-muted-foreground">Communicate directly with your connections</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile & Networking</CardTitle>
            <CardDescription>Features for building your brand and connecting with others</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Customizable Profiles</h3>
                    <p className="text-sm text-muted-foreground">Showcase your skills, experience, and education</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Connection Suggestions</h3>
                    <p className="text-sm text-muted-foreground">Discover relevant professionals to connect with</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Endorsements</h3>
                    <p className="text-sm text-muted-foreground">Get recognized for your skills by your connections</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Profile Visibility</h3>
                    <p className="text-sm text-muted-foreground">Control who can see your profile information</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Activity Feed</h3>
                    <p className="text-sm text-muted-foreground">Stay up-to-date with your network's activities</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="jobs">
        <Card>
          <CardHeader>
            <CardTitle>Job Search</CardTitle>
            <CardDescription>Features for finding your next career opportunity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Advanced Search Filters</h3>
                    <p className="text-sm text-muted-foreground">Find jobs based on location, industry, and more</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Saved Jobs</h3>
                    <p className="text-sm text-muted-foreground">Save interesting job postings for later</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Job Alerts</h3>
                    <p className="text-sm text-muted-foreground">Get notified when new jobs match your criteria</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Easy Apply</h3>
                    <p className="text-sm text-muted-foreground">Apply for jobs directly through the platform</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="mt-0.5 bg-primary/10 text-primary p-1 rounded-full">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">Company Profiles</h3>
                    <p className="text-sm text-muted-foreground">Learn more about potential employers</p>
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
