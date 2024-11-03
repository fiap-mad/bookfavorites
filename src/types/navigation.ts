import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { Book } from ".";

type BooksNavigation = {
  List: undefined;
  Details: { book: Book };
  Stored: undefined;
};

type BooksNavigationProps = StackNavigationProp<BooksNavigation>;
type BooksScreenProps = StackScreenProps<BooksNavigation>;
type BookDetailsScreenProps = StackScreenProps<BooksNavigation, "Details">;

export {
  BooksNavigation,
  BooksNavigationProps,
  BooksScreenProps,
  BookDetailsScreenProps,
};
