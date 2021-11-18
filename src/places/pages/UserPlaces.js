import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        description: "One of the most famous skyscrapers in the world.",
        imageUrl: "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/2_features_left/public/2020-01/BuildingModel_6.jpg?itok=kbhN1S9d",
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: "Empire State Building",
        description: "One of the most famous skyscrapers in the world.",
        imageUrl: "https://marvel-b1-cdn.bc0a.com/f00000000179470/www.esbnyc.com/sites/default/files/styles/2_features_left/public/2020-01/BuildingModel_6.jpg?itok=kbhN1S9d",
        address: "20 W 34th St, New York, NY 10001",
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={ loadedPlaces } />
}

export default UserPlaces;
