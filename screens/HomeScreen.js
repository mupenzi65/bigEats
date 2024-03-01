import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect,useState, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useFocusEffect } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon ,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"
import Categories from '../components/categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../sanity'



const  HomeScreen=()=> {
  const navigation=useNavigation();
  const [featuredRow,setFeaturedRow]=useState([])

useFocusEffect(
  React.useCallback(()=>{
    navigation.setOptions({
      headerShown:false
    })
  })
)

useEffect(()=>{
  client.fetch(`
  *[_type=="featured"]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->
    }
  }
  
  
  
  `).then((data)=>setFeaturedRow(data))

},[])






  return (
    <SafeAreaView className='bg-white pt-5'>
      
      
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image 
        source={{uri:"https://links.papareact.com/wru"}}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        
        
        />
        <View className='flex-1' >
          <Text className='font-bold text-gray-400 text-xs'>
            Delivered Now
          </Text>
          <Text className='text-xl font-bold'>
            Current Location
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <UserIcon size={35} color='#00CCBB' />
      </View>
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <MagnifyingGlassIcon  color='gray'/>
          <TextInput placeholder='Restaurant ' keyboardType='default' />

        </View>
        <AdjustmentsVerticalIcon color='#00CCBB'   />
      </View>
      <ScrollView>
        <Categories />
        {featuredRow?.map((catecory)=>(
           <FeaturedRow title={catecory.name} description={catecory.short_description} id={catecory._id} key={catecory._id} />
        ))}
        
        
      </ScrollView>
    </SafeAreaView>
  

  )
}

export default HomeScreen