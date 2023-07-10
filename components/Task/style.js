import { StyleSheet } from "react-native";
import color from '../../contains/color'

const styles = StyleSheet.create({
      items:{
        flexDirection: 'row',
        backgroundColor: color.white,
        marginBottom: 15,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      square:{
        width: 48,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      even:{
        backgroundColor: color.primary,
      },
      odd:{
        backgroundColor: "#FEC8D8",
      },
      number:{
        fontSize: 16,
        fontWeight: 700,
      },
      content:{
        width: '80%',
        fontSize: 16,
      }
})


export default styles;