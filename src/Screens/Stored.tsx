import { useContext } from "react";
import { FlatList } from "react-native";
import BookItem from "@/Components/BookItem";
import { BookContext } from "@/Context/BookContext";
import { BooksScreenProps } from "@/types/navigation";

const Stored = ({ navigation }: BooksScreenProps) => {
  const { storedBooks } = useContext(BookContext);
  return (
    <FlatList
      data={storedBooks}
      keyExtractor={(item) => item.id || item.etag}
      renderItem={({ item }) => (
        <BookItem book={item} navigation={navigation} />
      )}
    />
  );
};

export default Stored;
