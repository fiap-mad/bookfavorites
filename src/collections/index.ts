import { collection } from "firebase/firestore";
import { firestore } from "firebaseConfig";

const books = collection(firestore, "books");

export { books };
