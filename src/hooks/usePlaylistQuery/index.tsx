import { useQuery } from 'react-query'

export const usePlaylistQuery = (id: string) => {
  return useQuery(['playlist', id], async () => {
    const response = await fetch(
      `https://afternoon-waters-49321.herokuapp.com/v1/playlists/${id}?fields=description,followers,name,owner,id,images`,
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    return response.json() as Promise<Playlist>
  })
}
