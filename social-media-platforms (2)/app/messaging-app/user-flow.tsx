import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UserFlowDiagram() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Flow Diagram</CardTitle>
          <CardDescription>The flow of user interactions in the Minimalist Messaging App</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              <svg width="100%" height="500" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Nodes */}
                <rect x="50" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="110" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Login / Signup
                </text>

                <rect x="250" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Chat List
                </text>

                <rect x="450" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Open Chat
                </text>

                <rect x="650" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Send Message
                </text>

                <rect x="650" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Send Media
                </text>

                <rect x="450" y="350" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="385" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Create Group
                </text>

                <rect x="250" y="350" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="385" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Profile Settings
                </text>

                {/* Arrows */}
                <path d="M170 230 L250 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 230 L450 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M510 200 L510 160 L650 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M510 260 L510 300 L650 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M310 260 L310 350" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 380 L450 380" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

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
              Login / Signup
              <p className="mt-1 text-muted-foreground pl-5">
                User authenticates with email/password or social login. New users complete a simple profile setup.
              </p>
            </li>
            <li className="font-medium">
              Chat List
              <p className="mt-1 text-muted-foreground pl-5">
                User views all their conversations, sorted by recent activity. They can search for specific chats or
                start new ones.
              </p>
            </li>
            <li className="font-medium">
              Open Chat
              <p className="mt-1 text-muted-foreground pl-5">
                User selects a conversation to view the message history and interact with the recipient(s).
              </p>
            </li>
            <li className="font-medium">
              Send Message / Media
              <p className="mt-1 text-muted-foreground pl-5">
                User can type and send text messages or share media files (images, videos, voice messages, documents).
              </p>
            </li>
            <li className="font-medium">
              Create Group
              <p className="mt-1 text-muted-foreground pl-5">
                User can create a new group chat by selecting contacts, setting a group name, and optional group image.
              </p>
            </li>
            <li className="font-medium">
              Profile Settings
              <p className="mt-1 text-muted-foreground pl-5">
                User can update their profile information, privacy settings, and notification preferences.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
