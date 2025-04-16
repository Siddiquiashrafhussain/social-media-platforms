import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UserFlowDiagram() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Flow Diagram</CardTitle>
          <CardDescription>The flow of user interactions in the Text-Based Forum</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <svg width="100%" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Nodes */}
                <rect x="50" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="110" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Home
                </text>

                <rect x="250" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Browse Categories
                </text>

                <rect x="250" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  View Thread
                </text>

                <rect x="250" y="300" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="335" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Create Post
                </text>

                <rect x="450" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Category Threads
                </text>

                <rect x="450" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Reply or Upvote
                </text>

                <rect x="650" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  User Profile
                </text>

                {/* Arrows */}
                <path d="M170 200 L250 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M170 230 L250 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M170 260 L250 300" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 130 L450 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M510 160 L510 200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 230 L450 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M570 230 L650 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 300 L510 260" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

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
              Home
              <p className="mt-1 text-muted-foreground pl-5">
                User lands on the home page where they can see trending threads, recent activity, and navigation
                options.
              </p>
            </li>
            <li className="font-medium">
              Browse Categories
              <p className="mt-1 text-muted-foreground pl-5">
                User explores different topic categories like Technology, Science, Books, etc. to find discussions of
                interest.
              </p>
            </li>
            <li className="font-medium">
              Category Threads
              <p className="mt-1 text-muted-foreground pl-5">
                User views a list of threads within a selected category, sorted by popularity, recency, or other
                criteria.
              </p>
            </li>
            <li className="font-medium">
              View Thread
              <p className="mt-1 text-muted-foreground pl-5">
                User reads a specific discussion thread with the original post and all comments/replies.
              </p>
            </li>
            <li className="font-medium">
              Reply or Upvote
              <p className="mt-1 text-muted-foreground pl-5">
                User engages with content by upvoting/downvoting posts or adding their own comments to the discussion.
              </p>
            </li>
            <li className="font-medium">
              Create Post
              <p className="mt-1 text-muted-foreground pl-5">
                User starts a new discussion thread by creating a post with title, content, and category selection.
              </p>
            </li>
            <li className="font-medium">
              User Profile
              <p className="mt-1 text-muted-foreground pl-5">
                User views their own or other users' profiles, including post history, karma/reputation, and account
                settings.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
