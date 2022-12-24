import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export const LoginScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Log in</Text>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            {/* <Button style={styles.button}></Button> */}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        backgroundColor: '#F6F6F6',
        borderType: 'solid',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        padding: 16,
        width: 343,
        marginBottom: 16,
        fontSize: 16,
        color: '#BDBDBD',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 33,
    },
});