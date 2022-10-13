import "./App.css";
import Components from "./components/Components";

function App() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  };
  return (
    <div className="App textWrap">
      <Components data={comment} />
    </div>
  );
}

export default App;
