// types.ts

import { NativeStackNavigationProp, NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { UserStatus, UserType } from "./enum";

export interface User {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    password?: string;
    gender?: string;
    dateOfBirth?: Date;
    status?: UserStatus;
    userType?: UserType;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    salutation?: string;
    age?: number;
}




export interface UserCardProps {
    user: User;
    onDelete: () => void;
}
export type RootStackParamList = {
    HomeTabs: undefined;
    Detail: { user: User }
    User: undefined;
    Add: undefined;
};
export type HomeTabsParamList = {
    Home: undefined;
    User: undefined;
    Add: undefined;
};
export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeTabs' | 'Detail' | 'Add' | "User">;