import * as React from 'react'

import { Context } from '~/providers/CurrentTrackProvider'

export const useCurrentTrack = () => {
  return React.useContext(Context)
}
