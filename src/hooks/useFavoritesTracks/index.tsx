import * as React from 'react';

import {Context} from '~/providers/FavoritesTracksProvider'

export const useFavoritesTracks = () => {
    return React.useContext(Context)
}