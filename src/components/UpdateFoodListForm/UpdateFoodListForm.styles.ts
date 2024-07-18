import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    innerContainer: {
        padding: 26,
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    input: {
        borderRadius: 12,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        padding: 10,
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
});

export default styles;
