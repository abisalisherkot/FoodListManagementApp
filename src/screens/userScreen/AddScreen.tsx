import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { User } from '../../common/types';
import { Picker } from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { UserStatus, UserType } from '../../common/enum';
import { RadioButton } from 'react-native-paper';




const AddUserScreen: React.FC = () => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<User>();
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [userType, setUserType] = useState<{ label: string, value: string }[]>([])

    const onSubmit = (data: User) => {
        data.userType = UserType.worker;
        data.status == UserStatus.Active
        console.log(data);

    };

    const onChange = (event: any, selectedDate?: Date) => {
        setShowDatePicker(Platform.OS === 'ios');
        if (selectedDate) {
            setDate(selectedDate);
            setValue('dateOfBirth', selectedDate);
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.title}>Add User</Text>

                <Controller
                    control={control}
                    name="firstName"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="First Name"
                        />
                    )}
                />
                {errors.firstName && <Text style={styles.error}>First Name is required.</Text>}

                <Controller
                    control={control}
                    name="lastName"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Last Name"
                        />
                    )}
                />
                {errors.lastName && <Text style={styles.error}>Last Name is required.</Text>}

                <Controller
                    control={control}
                    name="email"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Email"
                            keyboardType="email-address"
                        />
                    )}
                />
                {errors.email && <Text style={styles.error}>Email is required.</Text>}

                <Controller
                    control={control}
                    name="phoneNumber"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Phone Number"
                            keyboardType="phone-pad"
                        />
                    )}
                />
                {errors.phoneNumber && <Text style={styles.error}>Phone Number is required.</Text>}

                <Controller
                    control={control}
                    name="password"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Password"
                            secureTextEntry
                        />
                    )}
                />
                {errors.password && <Text style={styles.error}>Password is required.</Text>}
                <View>
                    <Text style={styles.title}>Select Gender</Text>
                    <Controller
                        control={control}
                        name="gender"
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <View style={styles.radioContainer}>
                                <RadioButton.Item
                                    label="Male"
                                    value="male"
                                    status={value === 'male' ? 'checked' : 'unchecked'}
                                    onPress={() => onChange('male')}
                                />
                                <RadioButton.Item
                                    label="Female"
                                    value="female"
                                    status={value === 'female' ? 'checked' : 'unchecked'}
                                    onPress={() => onChange('female')}
                                />
                            </View>
                        )}
                    />
                </View>
                {errors.gender && <Text style={styles.error}>Gender is required.</Text>}




                <View>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <TextInput
                            style={styles.input}
                            placeholder="Date of Birth"
                            value={date ? format(date, 'yyyy-MM-dd') : ''}
                            editable={false}
                        />
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date || new Date()}
                            mode="date"
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
                {errors.dateOfBirth && <Text style={styles.error}>Date of Birth is required.</Text>}

                <Controller
                    control={control}
                    name="address1"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Address 1"
                        />
                    )}
                />
                {errors.address1 && <Text style={styles.error}>Address 1 is required.</Text>}

                <Controller
                    control={control}
                    name="address2"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Address 2"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="city"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="City"
                        />
                    )}
                />
                {errors.city && <Text style={styles.error}>City is required.</Text>}

                <Controller
                    control={control}
                    name="state"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="State"
                        />
                    )}
                />
                {errors.state && <Text style={styles.error}>State is required.</Text>}

                <Controller
                    control={control}
                    name="zip"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Zip"
                            keyboardType="numeric"
                        />
                    )}
                />
                {errors.zip && <Text style={styles.error}>Zip is required.</Text>}

                <Controller
                    control={control}
                    name="country"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Country"
                        />
                    )}
                />
                {errors.country && <Text style={styles.error}>Country is required.</Text>}




                <Button title="Add" onPress={handleSubmit(onSubmit)} />
            </View>
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    innercontainer: {
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
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    error: {
        color: 'red',
        marginBottom: 12,
    },
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
        overflow: 'hidden',
    },
    picker: {
        height: 50,
    },
});

export default AddUserScreen;
