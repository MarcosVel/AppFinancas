import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingReq, setLoadingReq] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("Auth_user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  // cadastrar usuário
  async function signUp(email, password, nome) {
    setLoadingReq(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            saldo: 0,
            nome: nome,
          })
          .then(() => {
            let data = {
              uid: uid,
              nome: nome,
              email: value.user.email,
            };

            setUser(data);
            storageUser(data); // não ficar deslogando após entrar
            setLoadingReq(false);
          });
      })
      .catch(error => {
        setLoadingReq(false);
        alert(error.code);
      });
  }

  // login
  async function signIn(email, password) {
    setLoadingReq(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async value => {
        let uid = value.user.uid;
        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then(snapshot => {
            let data = {
              uid: uid,
              nome: snapshot.val().nome,
              email: value.user.email,
            };

            setUser(data);
            storageUser(data); // não ficar deslogando após entrar
            setLoadingReq(false);
          });
      })
      .catch(error => {
        setLoadingReq(false);
        ToastAndroid.show(error.code, ToastAndroid.SHORT);
      });
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("Auth_user", JSON.stringify(data)); // não pode passar objeto, só string, então transforma o data
  }

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    // !!user converte o null em boolean, se não tiver usuário = false, se tiver = true
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signUp,
        signIn,
        loading,
        signOut,
        loadingReq,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
