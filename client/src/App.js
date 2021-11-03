import { ApolloProvider } from "@apollo/client";
import { client, Chat } from "./Chat";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Real-Time Chat App 💭</h2>
        <Chat />
      </div>
    </ApolloProvider>
  );
}

export default App;
