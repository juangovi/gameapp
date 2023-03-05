import { View, Text } from "react-native";
import styles from "../../styles/styles";

export default MenuBarComponent = ({children, title}) => {
  return (
    <View style={styles.menubar}>
      <View
        style={{ flex: 10, justifyContent: "center", alignItems: "flex-start" }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
          {title.toUpperCase()}
        </Text>
      </View>
      {children}
    </View>
  );
};
