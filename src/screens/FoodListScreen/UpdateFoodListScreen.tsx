import React from 'react';

import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../common/types';

import UpdateFoodListForm from '../../components/UpdateFoodListForm/UpdateFoodListForm';


type UpdateFoodListScreenRouteProp = RouteProp<RootStackParamList, 'UpdateFoodList'>;


type DetailScreenProps = {
    route: UpdateFoodListScreenRouteProp;
};

const UpdateFoodListScreen: React.FC<DetailScreenProps> = ({ route }) => {
  
    const { FoodList } = route.params;

    return (
       <UpdateFoodListForm foodListDto={FoodList} />
    );
};

export default UpdateFoodListScreen;
