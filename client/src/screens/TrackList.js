import { View, Text } from 'react-native'
import { Button } from '@rneui/themed'

const TrackList = ({navigation}) => {
  return (
    <View>
      <Text>Track list screen</Text>
      <Button title='View details' onPress={() => navigation.navigate('TrackDetails')} />
    </View>
  )
}

export default TrackList