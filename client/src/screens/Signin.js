import { View, StyleSheet } from 'react-native'
import { Text, Input, Button } from '@rneui/themed'
import { useState } from 'react'

const Signin = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <View style={styles.container}>
      <Text h2>Sign in</Text>
      <Input onChangeText={(value) => onFormChange('email', value)} label="Email" />
      <Input onChangeText={(value) => onFormChange('password', value)} label="Password" />
      <Text>{formData.email}</Text>
      <Text>{formData.password}</Text>
      <Button title="Sign in" />
      <Button title="Don't have an account? Sign up now!" onPress={() => navigation.navigate('Signup')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 200,
  }
})

export default Signin
