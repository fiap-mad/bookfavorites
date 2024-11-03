import { Book } from "@/types";
import { Image } from "react-native";
import { List, IconButton } from "react-native-paper";
import { useContext, useEffect, useState } from "react";
import { BookContext } from "@/Context/BookContext";
import { styles } from "./styles";
import { BooksNavigationProps } from "@/types/navigation";

type BookItemProps = {
  book: Book;
  navigation: BooksNavigationProps;
};

const BookItem = ({ navigation, book }: BookItemProps) => {
  const [isStored, setIsStored] = useState(false);
  const { storedBooks, storeBook, removeBook } = useContext(BookContext);

  const handleIconClick = () => {
    if (isStored) {
      removeBook(book);
    } else {
      storeBook(book);
    }
    setIsStored(!isStored);
  };

  useEffect(() => {
    if (!storedBooks) return;
    setIsStored(
      storedBooks.some((item) => {
        return item.id === book.id;
      })
    );
  }, [storedBooks]);

  return (
    <List.Item
      title={book.volumeInfo.title}
      titleStyle={styles.bookTitle}
      description={book.volumeInfo.authors?.join(", ")}
      left={() => (
        <Image
          style={styles.bookImage}
          source={{ uri: book.volumeInfo.imageLinks?.thumbnail }}
        />
      )}
      // TODO: Implementar a navegação para a tela de detalhes
      // onPress={}
      right={() => (
        <IconButton
          icon={isStored ? "bookmark-minus" : "bookmark-plus"}
          size={48}
          onPress={handleIconClick}
        />
      )}
    />
  );
};

export default BookItem;
