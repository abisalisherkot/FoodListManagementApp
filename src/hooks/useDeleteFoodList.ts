import { deleteFoodList } from "../api/FoodListApi/FoodListApi"

export const useDeleteFoodList=(url:string)=>{
    const onDelete=(id:string)=>{
        deleteFoodList(url,id)
    }

    return{

        onDelete
    }
}