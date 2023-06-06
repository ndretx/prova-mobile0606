import { View,  Button } from "react-native";

interface Props {
    onPress: () => void;
  }
export default function ButtonComponent(props: Props){
    return(
        <View>
            < Button  
            onPress={props.onPress} 
            title="GO"/>
        </View>
    );
}