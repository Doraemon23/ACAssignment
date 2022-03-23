import React from "react";
import { Button } from "react-native";

export default function CButton(props) {
  return <Button color={props.color} onPress={props.action} title={props.title} />;
}