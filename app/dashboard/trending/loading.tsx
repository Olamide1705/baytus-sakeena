import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TrendingLoading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-10 w-[140px] bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Community Highlights Skeleton */}
      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-l-4 border-l-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Skeleton */}
      <div className="space-y-6">
        <div className="grid w-full grid-cols-5 gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>

        {/* Content Cards Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse" />
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between">
                      <div className="flex gap-2">
                        <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                        <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                    </div>
                    <div className="flex justify-between">
                      <div className="flex gap-4">
                        <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                      </div>
                      <div className="flex gap-4">
                        <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-8 bg-gray-200 rounded animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Weekly Summary Skeleton */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="h-8 w-12 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mx-auto" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
