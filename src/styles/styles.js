import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  app: {
      backgroundColor: "#3D3838"
  },
  menubar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#00000054",
    height: windowHeight * 0.105,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: 5,
    paddingLeft:15
  },
  lol: () => {}
});

export default styles;