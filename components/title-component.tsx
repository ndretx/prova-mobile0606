import { View, Text } from "react-native";

interface Props {
    title: string;
  }
  

export default function TitleComponent(props:Props){
    return(
        <View>
            < Text >
            {props.title}
            </Text>
        </View>
    );
}