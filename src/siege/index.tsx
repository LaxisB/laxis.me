import "@babel/polyfill";
import { render } from "inferno";
import { Home } from "./components/Home";
import "./siege.scss";

render(<Home />, document.getElementById("mount"));
