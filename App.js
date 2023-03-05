import { View } from "react-native";
import MenuBarComponent from "./src/components/menuBarComponent/MenuBarComponent";
import MenuBarItemComponent from "./src/components/menuBarItemComponent/MenuBarItemComponent";
import styles from "./src/styles/styles";

export default function App() {
  return (
    <View style={styles.app}>
      <MenuBarComponent title={"titulo"}>
        <MenuBarItemComponent />
      </MenuBarComponent>
    </View>
  );
}
