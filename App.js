import { View, Text } from "react-native";
import styles from "./src/styles/styles";
import { Feather } from "@expo/vector-icons";

export default function App() {
  const lol = () => {}
  return (
    <View style={styles.app}>
      <View style={styles.menubar}>
        <View style={{ flex: 10, justifyContent: "center" , alignItems: "flex-start"}}>
          <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>game xddd</Text>
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Feather name="menu" size={30} color="#E7D4D4" />
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <Feather name="menu" size={30} color="#E7D4D4" />
        </View>
      </View>
    </View>
  );
}
