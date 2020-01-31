import React from "react";
import Header from "./components/Header";
import Characters from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import { Route } from "react-router-dom";





export default function App() {
  return (
    <main>
      <Header />
       <Route exact path="/Characters" component={Characters}/>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/Search" component={SearchForm}/>
    </main>
  );
}
