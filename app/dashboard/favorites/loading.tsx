import { Card, CardContent } from "@/components/ui/card"

export default function FavoritesLoading() {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="h-4 w-64 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Search and Filters Skeleton */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="h-10 flex-1 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-10 w-[140px] bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-[120px] bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Tabs Skeleton */}
      <div className="space-y-6">
        <div className="grid w-full grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-10 bg-gray-200 rounded animate-pulse" />
          ))}
        </div>

        {/* Content Cards Skeleton */}
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>

                <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-3" />

                <div className="space-y-2 mb-3">
                  <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="flex gap-2 mb-3">
                  <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                  <div className="h-5 w-14 bg-gray-200 rounded animate-pulse" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                  <div className="flex gap-2">
                    <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Skeleton */}
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="p-6">
          <div className="grid gap-4 md:grid-cols-4 text-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse mx-auto mb-2" />
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mx-auto" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
