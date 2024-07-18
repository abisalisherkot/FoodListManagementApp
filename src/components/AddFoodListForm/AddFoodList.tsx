import React from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import styles from './AddFoodListForm.styles';
import useAddFoodListForm from '../../hooks/useAddFoodList';

const AddFoodListForm: React.FC = () => {
    const{control,errors,handleSubmit,onSubmit,setValue,}=useAddFoodListForm('AddFoodList')

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Add Food List</Text>

                <Controller
                    control={control}
                    name="ListName"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="List Name"
                        />
                    )}
                />
                {errors.ListName && <Text style={styles.error}>List Name is required.</Text>}

                <Controller
                    control={control}
                    name="ListCode"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="List Code"
                        />
                    )}
                />
                {errors.ListCode && <Text style={styles.error}>List Code is required.</Text>}

                <Controller
                    control={control}
                    name="ListValue"
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="List Value"
                        />
                    )}
                />
                {errors.ListValue && <Text style={styles.error}>List Value is required.</Text>}

                <Controller
                    control={control}
                    name="Description"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Description"
                        />
                    )}
                />

               

                <Controller
                    control={control}
                    name="AddedBy"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Added By"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name="UpdatedBy"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder="Updated By"
                        />
                    )}
                />
 <TouchableOpacity  onPress={handleSubmit(onSubmit)} style={{marginTop:30}}>
                <Text style={{  backgroundColor: '#007BFF',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,}}>Add</Text>
            </TouchableOpacity>            
            </View>
        </ScrollView>
    );
};

export default AddFoodListForm;
