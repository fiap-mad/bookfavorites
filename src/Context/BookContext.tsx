import { Book } from "@/types";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import * as firestore from "firebase/firestore";
import { books } from "@/collections";

type BooksContextProps = {
  storedBooks?: Book[];
  storeBook: (book: Book) => void;
  removeBook: (book: Book) => void;
};

const BookContext = createContext<BooksContextProps>({} as BooksContextProps);

const BookProvider = ({ children }: PropsWithChildren) => {
  const [storedBooks, setStoredBooks] = useState<Book[]>();

  const storeBook = async (book: Book) => {
    const doc = firestore.doc(books, book.id);
    await firestore.setDoc(doc, { ...book });
  };

  const removeBook = async (book: Book) => {
    const doc = firestore.doc(books, book.id);
    await firestore.deleteDoc(doc);
  };

  useEffect(() => {
    const subscriber = firestore.onSnapshot(books, (snapshot) => {
      setStoredBooks(snapshot.docs.map((item) => item.data() as Book));
    });
    return subscriber;
  }, []);

  return (
    <BookContext.Provider value={{ storedBooks, storeBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };
