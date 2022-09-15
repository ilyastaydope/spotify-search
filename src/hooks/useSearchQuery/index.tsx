import React from 'react';

export const useSearchQuery = (searchQuery: string, data?: Track[]) => {
    const resultData = data?.filter(trackInfo => {
        const { name, artists } = trackInfo;
        const isArtistsIncludes = artists.filter(artist => artist?.name.toLowerCase().includes(searchQuery)).length > 0;
        const isNameMatching = name.toLowerCase().includes(searchQuery);

        if ( isNameMatching || isArtistsIncludes) {
            return true;
        }

    });

    return {resultData}
}