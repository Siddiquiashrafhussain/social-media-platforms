import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UserFlowDiagram() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Flow Diagram</CardTitle>
          <CardDescription>The flow of user interactions in the Video-Sharing Platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <svg width="100%" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Nodes */}
                <rect x="50" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="110" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Signup / Login
                </text>

                <rect x="250" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Browse Feed
                </text>

                <rect x="450" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Record Video
                </text>

                <rect x="450" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Explore Page
                </text>

                <rect x="450" y="300" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="335" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  User Profile
                </text>

                <rect x="650" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Add Music/Effects
                </text>

                <rect x="650" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Post Video
                </text>

                {/* Arrows */}
                <path d="M170 230 L250 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M310 200 L310 130 L450 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 230 L450 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M310 260 L310 330 L450 330" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M570 130 L650 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M710 160 L710 200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M650 230 L570 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

                {/* Arrowhead marker */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
                  </marker>
                </defs>
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Flow Description</CardTitle>
          <CardDescription>Detailed explanation of the user journey</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4 list-decimal list-inside">
            <li className="font-medium">
              Signup / Login
              <p className="mt-1 text-muted-foreground pl-5">
                User creates an account or logs in with email, phone, or social media accounts. First-time users set up
                a basic profile.
              </p>
            </li>
            <li className="font-medium">
              Browse Feed
              <p className="mt-1 text-muted-foreground pl-5">
                User views a personalized feed of short, looping videos. They can interact with videos by liking,
                commenting, or sharing.
              </p>
            </li>
            <li className="font-medium">
              Record Video
              <p className="mt-1 text-muted-foreground pl-5">
                User taps the create button to record a new video (up to 15 seconds). They can use the camera to record
                in segments or upload from their gallery.
              </p>
            </li>
            <li className="font-medium">
              Add Music/Effects
              <p className="mt-1 text-muted-foreground pl-5">
                User enhances their video with music tracks, filters, effects, text overlays, and speed adjustments.
              </p>
            </li>
            <li className="font-medium">
              Post Video
              <p className="mt-1 text-muted-foreground pl-5">
                User adds a caption, hashtags, mentions, and privacy settings before publishing their video to the
                platform.
              </p>
            </li>
            <li className="font-medium">
              Explore Page
              <p className="mt-1 text-muted-foreground pl-5">
                User discovers trending content, challenges, and videos organized by categories and hashtags.
              </p>
            </li>
            <li className="font-medium">
              User Profile
              <p className="mt-1 text-muted-foreground pl-5">
                User views and edits their profile, sees their posted videos, and manages followers/following
                relationships.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
