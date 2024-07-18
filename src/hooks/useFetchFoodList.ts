import { useEffect, useState } from "react";
import { AddFoodListDto, FoodListDto } from "../common/types";
import { getFoodList, searchFoodListbyListCode } from "../api/FoodListApi/FoodListApi";

export const useFetchFoodList = (url:string) => {
    const [foodListData, setFoodListData] = useState<FoodListDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const getData = async () => {
        try {
            const { success, data } = await getFoodList(url);
            if (success) {
                setFoodListData(data);
            } else {
                setError('Failed to fetch data');
            }
        } catch (err) {
       
        } finally {
            setLoading(false);
        }
    };
    const searchFoodList = async (ListCode:string) => {
        try {
            const { success, data } =  await searchFoodListbyListCode(ListCode);
            if (success) {
                setFoodListData(data);
            } else {
                setError('Failed to fetch data');
            }
        } catch (err) {
       
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
      
        getData();
    }, [url]); 

    return { foodListData, loading, error,searchFoodList };
};
