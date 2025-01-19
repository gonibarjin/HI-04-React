import "./App.css";
import "./MyComponent";
import MyComponent from "./MyComponent";
import ChildComponent from "./ChildComponent";

function App() {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };

  return (
    <div>
      <header>
        <h1>This is React everybody!</h1>
      </header>
      <MyComponent />
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      <ChildComponent person={person} />
    </div>
  );
}

export default App;
