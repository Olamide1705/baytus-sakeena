import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function MentorshipLoading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Search and Filters Skeleton */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="h-10 flex-1 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-10 w-[180px] bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-[140px] bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-[120px] bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Featured Mentors Skeleton */}
      <div>
        <div className="h-6 w-36 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="border-l-4 border-l-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex gap-2">
                  <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-14 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="flex justify-between">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="flex gap-2">
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Mentors Skeleton */}
      <div>
        <div className="h-6 w-24 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 bg-gray-200 rounded-full animate-pulse" />
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
                        <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="flex gap-6">
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                      <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                      <div className="h-5 w-18 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
                        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="h-8 w-28 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
