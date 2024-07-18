import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AddFoodListDto } from '../common/types';
import { addFoodList } from '../api/FoodListApi/FoodListApi';

const useAddFoodListForm = (url:string) => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<AddFoodListDto>();
    const [dateAdded, setDateAdded] = useState<Date | undefined>(undefined);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const onSubmit = (data: AddFoodListDto) => {
       data.DateAdded =new Date();
       data.DateUpdated=new Date();
      addFoodList(data,url);
       
    };

    // const onChangeDate = (event: any, selectedDate?: Date) => {
    //     setShowDatePicker(Platform.OS === 'ios');
    //     if (selectedDate) {
    //         setDateAdded(selectedDate);
    //         setValue('dateAdded', selectedDate);
    //     }
    // };

    return {
        control,
        handleSubmit,
        errors,
        setValue,
     
      
       

        onSubmit,
    };
};

export default useAddFoodListForm;
