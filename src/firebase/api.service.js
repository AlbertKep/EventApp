import { auth, db } from "./config";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  limit as limitFun,
  query,
} from "firebase/firestore";

//let user = auth.currentUser;

const getCollectionFromServer = () => {
  try {
    const response = [1, 2, 3];
    const user = auth.currentUser;
    return response;

    // ta odpowiedz jest uzywana do mapowania
  } catch (error) {
    console.error(error);
    //notifiError(error)
    return []; // !!! Zwracasz zwrotke metody w kształcie któregy jest oczekiwany!

    // zwrtorka jest stringiem
    // if(data)
  }
};

const signUp = async (name, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, {
      displayName: name,
    });
    return user;
  } catch (error) {
    console.log(error);
  }
  // return createUserWithEmailAndPassword(auth, email, password)
  //   .then((res) => {
  //     if (res.user) {
  //       updateProfile(res.user, {
  //         displayName: name,
  //       });
  //       user = res.user;
  //       return user;
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("Signout successful");
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    const user = response.user;
    return user;
  } catch (error) {
    console.log(error);
  }
};

const getDocsByCollectionId = async (collectionId, { limit = 10 }) => {
  try {
    const eventsRef = collection(db, collectionId);
    const q = query(eventsRef, limitFun(limit));
    const querySnapshot = await getDocs(q);
    const result = [];
    querySnapshot.docs.forEach((doc) => {
      result.push({ id: doc.id, ...doc.data() });
    });
    return result;
    // setFilteredEvents(result);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getSingleCollectionById = async (collectionId) => {
  try {
    const result = await getDoc(doc(db, "events", collectionId));
    const event = result.data();

    return event;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export {
  signUp,
  logout,
  signIn,
  getDocsByCollectionId,
  getSingleCollectionById,
};
