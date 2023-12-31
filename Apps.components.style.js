import { StyleSheet } from "react-native";
import color from './contains/color'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
      },
      body:{
        flex:1,
        paddingTop: 50,
        paddingHorizontal: 18,
      },
      header:{
        fontSize: 24,
        fontWeight : 'bold',
      },
      item:{
        marginTop: 25,
      },
})

export default styles;