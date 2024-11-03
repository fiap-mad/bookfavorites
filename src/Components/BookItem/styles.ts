import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  bookImage: {
    width: 80,
    height: 120,
    marginRight: 16,
    borderRadius: 8,
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bookAuthor: {
    marginTop: 8,
  },
});

export { styles };
