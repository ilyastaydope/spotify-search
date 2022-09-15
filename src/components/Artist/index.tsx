import * as React from 'react'

import { Color } from '~/constants/Colors'
import { Typography } from '~/components/Typography'

type Props = {
  readonly artists: Artist[]
  readonly color?: Color
}

export const Artist = (props: Props) => {
  const { artists, color } = props

  return (
    <Typography color={color} lines={1}>
      {artists.map(({ name }) => name).join(', ')}
    </Typography>
  )
}
