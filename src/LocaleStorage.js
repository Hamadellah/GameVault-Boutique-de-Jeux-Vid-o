import { games } from "./data.js";

if (!localStorage.getItem("games")) {
  localStorage.setItem("games", JSON.stringify(games));
}
