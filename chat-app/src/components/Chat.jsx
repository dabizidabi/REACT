import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import { Context } from "../App";
import Loader from "./Loader/Loader";
import { Container, Grid, TextField, Button, Avatar } from "@mui/material";
import { useRef } from "react";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const q = query(collection(firestore, "messages"), orderBy("createdAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
      );
    });
    setLoading(false);
    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    const { uid, displayName, photoURL } = user;
    try {
      await addDoc(collection(firestore, "messages"), {
        uid: uid,
        displayName: displayName,
        photoUrl: photoURL,
        text: value,
        createdAt: serverTimestamp(),
      });
      setValue("");
    } catch (e) {
      console.log("Error adding message: ", e);
    }
  };

  const chatBootomRef = useRef();

  useEffect(() => {
    chatBootomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: "10px" }}
        justifyContent={"center"}
      >
        <div
          style={{
            width: "80%",
            height: "70vh",
            border: "1px solid black",
            overflow: "auto",
          }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                margin: "10px",
                padding: "5px",
                border:
                  user.uid === message.uid
                    ? "1px dashed tomato"
                    : "1px solid blue",
                borderRadius: "5px",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
              }}
            >
              <Grid container>
                <Avatar src={message.photoUrl} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={chatBootomRef} />
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%", marginTop: "5px" }}
        >
          <TextField
            variant={"outlined"}
            fullWidth
            maxRows={3}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></TextField>
          <Button
            onClick={sendMessage}
            variant={"outlined"}
            style={{ marginTop: "5px" }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
