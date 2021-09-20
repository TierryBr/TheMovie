import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

function Filter() {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={{ marginRight: 10 }}>
      <Icon name='ios-filter' size={25} color='#101010' />
    </TouchableOpacity>
  )
}

export default Filter;