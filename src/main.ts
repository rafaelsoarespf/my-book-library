import { initBookForm } from "./components/book-form.js";
import { initBookList } from "./components/book-list.js";

// init functions ====================================================
document.addEventListener("DOMContentLoaded", init);

function init(): void {
  initBookForm();
  initBookList();
}
