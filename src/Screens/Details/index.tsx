import { BookDetailsScreenProps } from "@/types/navigation";
import { Image, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { styles } from "./styles";

const Details = ({ route }: BookDetailsScreenProps) => {
  const { book } = route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* TODO: Exibir capa, titulo, sub titulo e descrição do livro */}
      </View>
    </ScrollView>
  );
};

export default Details;
