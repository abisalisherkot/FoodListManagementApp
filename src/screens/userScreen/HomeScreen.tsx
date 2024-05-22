import React from 'react'
import { View, Text, FlatList } from 'react-native'
import UserCard from '../../components/UserCard'

export default function HomeScreen() {
    const user = [
        {
            firstName: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            firstName: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            firstName: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            firstName: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            firstName: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            firstName: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },
        {
            firstName: 'John Doe',
            email: 'john.doe@example.com',
            avatar: 'https://example.com/avatar.jpg',
        },

    ]
    return (
        <View>
            <FlatList
                data={user}
                renderItem={({ item }) => (
                    <View style={{ marginTop: 5 }}>
                        <UserCard user={item} onDelete={() => { }} />
                    </View>
                )}
            />
        </View>
    )
}
