import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UserFlowDiagram() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Flow Diagram</CardTitle>
          <CardDescription>The flow of user interactions in the Voice-Based Social App</CardDescription>
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
                  Browse Live Rooms
                </text>

                <rect x="450" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Create Room
                </text>

                <rect x="450" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Join Room
                </text>

                <rect x="450" y="300" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="335" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Schedule Room
                </text>

                <rect x="650" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Request to Speak
                </text>

                <rect x="650" y="300" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="335" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Moderate Room
                </text>

                {/* Arrows */}
                <path d="M170 230 L250 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M310 200 L310 130 L450 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 230 L450 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M310 260 L310 330 L450 330" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M570 230 L650 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M510 160 L510 200" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M510 260 L510 300" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M570 330 L650 330" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />

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
                User authenticates with email/password or social login. New users create a profile with name, photo, and
                bio.
              </p>
            </li>
            <li className="font-medium">
              Browse Live Rooms
              <p className="mt-1 text-muted-foreground pl-5">
                User views currently active voice rooms, filtered by topics of interest, popularity, or connections.
              </p>
            </li>
            <li className="font-medium">
              Create Room
              <p className="mt-1 text-muted-foreground pl-5">
                User starts a new voice room by setting a title, description, topic categories, and privacy settings.
              </p>
            </li>
            <li className="font-medium">
              Join Room
              <p className="mt-1 text-muted-foreground pl-5">
                User enters an active room as a listener, seeing speakers and other participants in the interface.
              </p>
            </li>
            <li className="font-medium">
              Request to Speak
              <p className="mt-1 text-muted-foreground pl-5">
                Listener raises hand to request speaking privileges, which can be granted by room moderators.
              </p>
            </li>
            <li className="font-medium">
              Schedule Room
              <p className="mt-1 text-muted-foreground pl-5">
                User creates a future room event with date, time, title, description, and invited speakers.
              </p>
            </li>
            <li className="font-medium">
              Moderate Room
              <p className="mt-1 text-muted-foreground pl-5">
                Room creators and designated moderators manage speakers, approve requests, and maintain discussion
                quality.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
