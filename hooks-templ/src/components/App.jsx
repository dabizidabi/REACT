import useInput from "../hooks/useImput";

const App = () => {
  const login = useInput("", "text");
  const password = useInput("", "password");
  return (
    <div className="App">
      <input {...login} placeholder="login" />
      <input {...password} placeholder="password" />
      <button onClick={() => console.log(login.value, password.value)}>
        Show input
      </button>
    </div>
  );
};

export default App;
