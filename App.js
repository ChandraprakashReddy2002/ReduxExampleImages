import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, View, ActivityIndicator, FlatList } from 'react-native'
import {setData, changePage} from './actions';

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector(state=>state.data);
  const isLoading = useSelector(state => state.loading);
  const page = useSelector(state => state.page);
    
  useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/photos?_limit=8&_page=${page}`)
      .then (res => res.json())
      .then ( data=> dispatch(setData(data)))
      .catch (error => alert(error))
      .finally(()=>{console.log(page)});
  }, [page]) 
 
  return (
    <View>
    {isLoading
    ?(
      <ActivityIndicator size="large" color="#0000ff" />
    )
        : (
      <FlatList
        data={data}
        onEndReachedThreshold= {1}
        onEndReached={({}) => {
          dispatch(changePage(page+1))
        }}
        renderItem={({item}) => (
          <Image source = {{uri: item.url}} style = {{ flex: 1, padding: 5, height: 200 }}/>
        )}
      />
      )}
    </View>
  )
}

export default App