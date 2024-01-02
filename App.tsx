import { NavigationContainer } from "@react-navigation/native"
import { RootStackNavigator } from "./src/@types/navigation/RootStackNavigator"

const App = () => {
  return(
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  )
}

export default App