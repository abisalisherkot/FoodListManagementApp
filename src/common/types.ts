// types.ts

import { NativeStackNavigationProp, NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";







export type RootStackParamList = {
    HomeTabs: undefined;
    UpdateFoodList: { FoodList: FoodListDto }
   
    Add: undefined;
};
export type HomeTabsParamList = {
    Home: undefined;
    User: undefined;
    Add: undefined;
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeTabs' | 'UpdateFoodList' | 'Add' >;


export type AddFoodListDto={
    ListName?: string;
    ListCode?: string;
  ListValue?: string;
  Description?: string;
  DateAdded?: Date;
  DateUpdated?: Date;
  UpdatedBy?: string;
  AddedBy?: string;
}
export type FoodListDto={

    addedBy: string;
    dateAdded: string;
    dateUpdated: string;
    description: string;
    listCode: string;
    listID: number;
    listName: string;
    listValue: string;
    updatedBy: string;
}