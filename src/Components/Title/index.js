import { Text, Image, View } from "react-native";
import { estilos } from '../Style/index';

import topo from '../../../assets/topo.png'

export default function Title() {
    return (
        <View>
            <Image source={topo} style={estilos.topo}/>
            <Text style={estilos.titulo} >App Leiturista</Text>
        </View>
    );
}
