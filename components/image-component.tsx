import React from "react";
import { View, Image, ImageSourcePropType } from "react-native";

interface Props {
  imageSource: ImageSourcePropType[];
  imageIndex: number;
}

export default function ImageComponent(props: Props) {
  const currentImage = props.imageSource[props.imageIndex];

  return (
    <View>
      <Image source={currentImage} style={{ width: 200, height: 200 }} />
    </View>
  );
};


