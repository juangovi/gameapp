import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default MenuBarItemComponent = () => {
  return (
    <TouchableOpacity
      style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
    >
      <Feather name="menu" size={30} color="#E7D4D4" />
    </TouchableOpacity>
  );
};
