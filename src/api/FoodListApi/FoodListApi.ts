import { AddFoodListDto } from "../../common/types"
import axiosApi, { post} from "../../helper/api"
import { BaseUrl } from "../../helper/baseurl";
import { IResponse } from "../common-types"

export const addFoodList = async (payload: AddFoodListDto,url:string): Promise<IResponse> => {
try{
        const res = await  axiosApi.post('AddFoodList', payload);

        console.log(res);
        return { success: true,data:null};
}catch(e)
{
        console.log(BaseUrl,'Error')
        throw e;
}
        
    
};
export const getFoodList = async (url:string): Promise<IResponse> => {
    try{
            const res = await  axiosApi.get(url);
    
            console.log(res.data.foodList);
            return { success: true,data:res.data.foodList};
    }catch(e)
    {
            console.log(BaseUrl, 'Error')
            throw e;
    }
    
    
    };
    export const deleteFoodList=async(url:string,ListCode:string):Promise<IResponse>=>{
        try{
                const res=await axiosApi.delete(`DeleteFoodList?ListCode=${ListCode}`)
                return{success:true,data:null}
        }
        catch(e)
        {
                throw e;
        }
    }
    export const updateFoodList=async(data:AddFoodListDto,ListCode:string):Promise<IResponse>=>{
        try{
                const res=await axiosApi.put(`UpdateFoodList?ListCode=${ ListCode}`,data);
                return{success:true,data:null}

        }catch(e)
        {
                throw e;
        }
    }
    export const searchFoodListbyListCode = async (ListCode:string): Promise<IResponse> => {
        try{
                const res = await  axiosApi.get(`SearchFoodList?ListCode=${ListCode}`);
        
                console.log(res.data.foodList);
                return { success: true,data:res.data.foodList};
        }catch(e)
        {
                console.log(BaseUrl, 'Error')
                throw e;
        }
        
        
        };