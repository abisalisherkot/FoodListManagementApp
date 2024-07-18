
import React from "react";
import { StyleSheet,View,Text, } from "react-native";
interface ListItemProps {
    label: string;
    value: string | undefined;
}
const ListItem: React.FC<ListItemProps> = ({ label, value }) => (
    <View style={styles.infoContainer}>
        <Text style={styles.label}>{label}:</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    value: {
        flex: 1,
    },
    deleteButton: {
        alignSelf: 'flex-end',
    },
});
export default ListItem;