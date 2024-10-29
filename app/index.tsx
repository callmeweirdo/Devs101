import { View } from 'react-native'
import React from 'react'
import { Button, H2, H5, Text, YStack } from "tamagui";
import { LoginSheet } from '../components/loginsheet';
import { toggleStore } from 'stores/toggleStore';

const home = () => {
    const [open, setOpen] = React.useState(false);
    const {login, toggleLogin} = toggleStore((state) => state);

    return (
        <>
            <YStack style={{ display: 'flex', justifyContent: 'center', maxWidth: '100%', marginTop: "10%", marginLeft: '5%' }}>
            <H2>Hello World,</H2>
            <H5>Are you a Developer and need a quick portfolio ?</H5>
            <Text>Ma name is Dave, am a Full Stack Web Developer and i made this for us.</Text>

            <Button onPress={toggleLogin} style={{ marginTop: '20px', width: '200px', minWidth: '30%' }} size="$5" >
                Join Now
            </Button>
            </YStack>

            <LoginSheet open={login} setOpen={toggleLogin} />
        </>
    );
}

export default home;