import  React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector} from 'react-redux';

const ProductsOverviewScreen = () =>{
  const products = useSelector(state => state.products.availableProducts);
  return<FlatList  children={} data={products} keyExtractor={item=>item.id} renderItem={
    itemData => <Text>{itemData.item.title}</Text>
  }/>
};
export default ProductsOverviewScreen;
