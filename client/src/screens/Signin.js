import { View } from 'react-native'
import { Text, Input, Button } from '@rneui/themed'

const Signin = ({ navigation }) => {
  return (
    <View>
      <Text h2>Sign in</Text>
      <Input label="Email" />
      <Input label="Password" />
      <Button title="Sign in" />
      <Button title="Don't have an account? Sign up now!" onPress={() => navigation.navigate('Signup')} />
    </View>
  )
}

export default Signin
