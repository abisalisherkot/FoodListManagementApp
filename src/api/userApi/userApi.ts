import { User } from "../../common/types"
import { post } from "../../helper/api"
import { IResponse } from "../common-types"

export const addUser = async (payload: User): Promise<IResponse> => {
    try {
        const res = await post('Add', payload);
        return { success: true, data: res.data };
    } catch (e) {
        throw e;
    }
};