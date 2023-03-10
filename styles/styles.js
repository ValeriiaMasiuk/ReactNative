import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    passwordBox: {
        position: 'relative',
    },
    showPass: {
        bottom: 38,
        left: 280,
        position: 'absolute',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'right',
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
    },
    loginText: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#1B4371',
        fontFamily: 'Roboto-Regular',
    },
    registerText: {
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Roboto-Regular',
    },
    button: {
        marginBottom: 16,
        marginTop: 27,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 32,
        paddingRight: 32,
        height: 51,
        width: 343,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
        fontFamily: 'Roboto-Regular',
    },
    addBtn: {
        position: 'absolute',
        width: 25,
        height: 25,
    },
    imgBox: {
        position: 'relative',
        textAlign: 'center',
        alignItems: 'center',
        zIndex: 5,
    },
    form: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 263,
        height: 549,
        borderRadius: 25,
        paddingTop: 92,
        paddingLeft: 16,
        paddingRight: 16,
    },
    image: {
        position: 'relative',
        width: 400,
        height: 812,
    },
    registerImg: {
        position: 'absolute',
        borderRadius: 16,
        top: 203,
    },
    input: {
        borderWidth: 1,
        fontFamily: 'Roboto-Regular',
        backgroundColor: '#F6F6F6',
        borderType: 'solid',
        borderRadius: 8,
        borderColor: '#E8E8E8',
        padding: 16,
        width: 343,
        marginBottom: 16,
        fontSize: 16,
        color: '#212121',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 33,
        fontFamily: 'Roboto-Medium',
    },
});