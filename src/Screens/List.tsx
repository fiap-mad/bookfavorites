import { Book } from "@/types";
import { useContext, useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { BooksScreenProps } from "@/types/navigation";
import BookItem from "@/Components/BookItem";
import { BookContext } from "@/Context/BookContext";
import IconBadge from "@/Components/IconBadge";

const List = ({ navigation }: BooksScreenProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [searchQuery, setSearchQuery] = useState("React Native");
  const { storedBooks } = useContext(BookContext);

  const fetchBooks = async (query: string) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=10`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ width: 350 }}>
          <Searchbar
            placeholder="Procurar livros..."
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
        </View>
      ),
      headerRight: () => (
        <IconBadge
          icon="bookshelf"
          count={storedBooks?.length.toString()}
          onPress={() => navigation.navigate("Stored")}
        />
      ),
    });
  }, [navigation, searchQuery, storedBooks]);

  return (
    <FlatList
      data={books}
      keyExtractor={(item) => item.id || item.etag}
      renderItem={({ item }) => (
        <BookItem book={item} navigation={navigation} />
      )}
    />
  );
};

export default List;
