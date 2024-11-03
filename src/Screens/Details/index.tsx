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
        <Image
          style={styles.image}
          source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
        />
        <Text variant="headlineLarge" style={styles.text}>
          Título
        </Text>
        <Text variant="titleMedium">{book.volumeInfo.title}</Text>
        <Text variant="headlineLarge" style={styles.text}>
          Sub Título
        </Text>
        <Text variant="titleMedium">{book.volumeInfo.subtitle}</Text>
        <Text variant="headlineLarge" style={styles.text}>
          Descrição
        </Text>
        <Text variant="labelMedium">{book.volumeInfo.description}</Text>
      </View>
    </ScrollView>
  );
};

export default Details;
