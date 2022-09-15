import { useQuery } from 'react-query'

type FeaturedPlaylistsItem = {
  href: string
  items: Playlist[]
  limit: number
  next?: string
  offset: number
  previous?: string
  total: number
}

type FeaturedPlaylistsResponse = {
  playlists: FeaturedPlaylistsItem
}

export const useFeaturedPlaylistsQuery = () => {
  return useQuery('playlists', async () => {
    const response = await fetch(
      'https://afternoon-waters-49321.herokuapp.com/v1/browse/featured-playlists',
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json() as Promise<FeaturedPlaylistsResponse>
  })
}
