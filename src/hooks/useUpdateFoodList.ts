import { useForm } from 'react-hook-form';
import { AddFoodListDto } from '../common/types';
import { updateFoodList } from '../api/FoodListApi/FoodListApi';


const useUpdateFoodListForm = (action: string) => {
    const { control, handleSubmit, formState: { errors }, setValue } = useForm<AddFoodListDto>();

    const onSubmit = (data: AddFoodListDto) => {
       
       updateFoodList(data,data.ListCode!!)
      
    };

    return {
        control,
        handleSubmit,
        errors,
        onSubmit,
        setValue,
    };
};

export default useUpdateFoodListForm;
