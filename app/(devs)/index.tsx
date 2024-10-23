import { View } from 'react-native'
import React from 'react'
import { Button, H2, H5, ScrollView, Text, YStack } from "tamagui";
import { LoginSheet } from '../../components/loginsheet';
import { DevsCards } from 'components/DevsCards';

const home = () => {
  const [open, setOpen] = React.useState(false)

    return (
    <>
        <ScrollView
        maxHeight="100%"
        width="100%"
        backgroundColor="$background"
        padding="$4"
        borderRadius="$4"
        >
            <DevsCards />
            <DevsCards />
            <DevsCards />
            <DevsCards />
            <DevsCards />
            <DevsCards />
            <DevsCards />
        </ScrollView>
    </>
    )
}

export default home;