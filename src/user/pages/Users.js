import React from 'react'

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [ 
        {
            id: 'u1',
            name: "Sam Flatulence",
            image: "https://randomuser.me/api/portraits/men/42.jpg",
            places: 5
        },
        {
            id: 'u89',
            name: "Bobby Hammertoes",
            image: "https://randomuser.me/api/portraits/men/50.jpg",
            places: 437
        },
        {
            id: 'u6fkl;jdfsjkl;adfskjl;',
            name: "Samantha ButtCrack",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            places: 437
        },
        {
            id: 'u6fkl;bfddfgldrkl;gdk;adfskjl;',
            name: "Victoria von Hemorrhoids",
            image: "https://randomuser.me/api/portraits/women/58.jpg",
            places: 437
        }
        
    ];

    return <UsersList items={USERS} />

};

export default Users
