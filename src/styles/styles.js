import { StyleSheet } from 'react-native';
import Constants from "expo-constants";
import { Dimensions } from 'react-native';


const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  menubar: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#292626",
    height: windowHeight * 0.105
  },
});

export default styles;