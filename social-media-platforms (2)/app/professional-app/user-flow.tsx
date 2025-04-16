import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UserFlowDiagram() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>User Flow Diagram</CardTitle>
          <CardDescription>The flow of user interactions in the Professional Networking App</CardDescription>
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

                <rect x="250" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Build Profile
                </text>

                <rect x="250" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Home Feed
                </text>

                <rect x="250" y="300" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="310" y="335" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Network
                </text>

                <rect x="450" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Explore Jobs
                </text>

                <rect x="450" y="200" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="235" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Post Content
                </text>

                <rect x="450" y="300" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="510" y="335" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Connect
                </text>

                <rect x="650" y="100" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="135" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Apply for Job
                </text>

                <rect x="650" y="300" width="120" height="60" rx="8" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="2" />
                <text x="710" y="335" textAnchor="middle" fill="#334155" fontSize="14" fontWeight="500">
                  Message
                </text>

                {/* Arrows */}
                <path d="M170 200 L250 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M170 230 L250 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M170 260 L250 300" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 130 L450 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 230 L450 230" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M370 330 L450 330" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
                <path d="M570 130 L650 130" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)" />
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
              Signup / Login
              <p className="mt-1 text-muted-foreground pl-5">
                User creates an account or logs in with email, social media, or professional credentials.
              </p>
            </li>
            <li className="font-medium">
              Build Profile
              <p className="mt-1 text-muted-foreground pl-5">
                User creates a professional profile with work history, education, skills, and accomplishments. They can
                upload a profile photo and add a headline.
              </p>
            </li>
            <li className="font-medium">
              Home Feed
              <p className="mt-1 text-muted-foreground pl-5">
                User views a personalized feed of content from connections, companies, and topics they follow. They can
                interact with posts through likes, comments, and shares.
              </p>
            </li>
            <li className="font-medium">
              Network
              <p className="mt-1 text-muted-foreground pl-5">
                User manages their professional connections, views suggested contacts, and explores their extended
                network.
              </p>
            </li>
            <li className="font-medium">
              Explore Jobs
              <p className="mt-1 text-muted-foreground pl-5">
                User browses job listings filtered by location, industry, experience level, and other criteria. They can
                save interesting positions.
              </p>
            </li>
            <li className="font-medium">
              Post Content
              <p className="mt-1 text-muted-foreground pl-5">
                User shares updates, articles, achievements, or other professional content with their network.
              </p>
            </li>
            <li className="font-medium">
              Connect
              <p className="mt-1 text-muted-foreground pl-5">
                User sends connection requests to other professionals, with optional personalized messages.
              </p>
            </li>
            <li className="font-medium">
              Apply for Job
              <p className="mt-1 text-muted-foreground pl-5">
                User submits applications for positions, attaching their profile, resume, and cover letter.
              </p>
            </li>
            <li className="font-medium">
              Message
              <p className="mt-1 text-muted-foreground pl-5">
                User engages in private conversations with connections for networking, mentorship, or job opportunities.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}
