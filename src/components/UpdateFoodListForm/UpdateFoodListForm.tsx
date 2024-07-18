import React, { useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Controller } from 'react-hook-form';
; // Custom hook for update form
import styles from './UpdateFoodListForm.styles';
import { AddFoodListDto, FoodListDto } from '../../common/types'; // Make sure to import your DTO type
import useUpdateFoodListForm from '../../hooks/useUpdateFoodList';

interface UpdateFoodListFormProps {
    foodListDto: FoodListDto;
}

const UpdateFoodListForm: React.FC<UpdateFoodListFormProps> = ({ foodListDto }) => {
    const { control, errors, handleSubmit, onSubmit, setValue } = useUpdateFoodListForm('UpdateFoodList');

    useEffect(() => {
        if (foodListDto) {
            setValue('ListName', foodListDto.listName);
            setValue('ListCode', foodListDto.listCode);
            setValue('ListValue', foodListDto.listValue);
            setValue('Description', foodListDto.description);
            setValue('AddedBy', foodListDto.addedBy);
            setValue('UpdatedBy', foodListDto.updatedBy);
        }
    }, [foodListDto, setValue]);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Update Food List</Text>

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

                <TouchableOpacity onPress={handleSubmit(onSubmit)} style={{ marginTop: 30 }}>
                    <Text style={{ 
                        backgroundColor: '#007BFF',
                        color: '#fff',
                        textAlign: 'center',
                        padding: 10,
                        borderRadius: 5,
                    }}>Update</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default UpdateFoodListForm;
