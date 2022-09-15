import { useInfiniteQuery } from 'react-query'

type TrackResponseItem = {
  track: Track
}

type TracksResponse = {
  href: string
  items: TrackResponseItem[]
  limit: number
  next?: string
  offset: number
  previous?: string
  total: number
}

export const useTracksInfiniteQuery = (id: string) => {
  return useInfiniteQuery(
    ['tracks', id],
    async ({ pageParam = 0 }) => {
      const response = await fetch(
        `https://afternoon-waters-49321.herokuapp.com/v1/playlists/${id}/tracks?offset=${pageParam}&limit=100`,
      )

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json() as Promise<TracksResponse>
    },
    {
      getNextPageParam: lastPage => {
        if (lastPage.next) {
          return lastPage.offset + 100
        }
        return undefined
      },
      select: data => {
        const tracks: Track[][] = []
        data?.pages
          ? data.pages.forEach(page => {
              const extractedTracks = page.items.map(({ track }) => track)
              tracks.push(extractedTracks)
            })
          : null
        const flatTracks = tracks.flat()
        return {
          pages: flatTracks,
          pageParams: data.pageParams,
        }
      },
    },
  )
}
