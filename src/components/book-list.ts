// Imports ===========================================================
import * as BookCard from "./book-card.js";
import * as BookService from "../services/book-service.js";

// Variables =========================================================

// Initialization ====================================================
export function initBookList(): void {
  initEvents();
  renderList();
}

// Events =============================================================
function initEvents(): void {

}

// render ============================================================
export function renderList(): void {
  const container = document.querySelector<HTMLElement>("#book-list");
  if (!container) { throw new Error('"#book-list" element not found.'); }

  container.replaceChildren();

  const books = BookService.getAll();

  books.forEach(book => { container.append(BookCard.create(book));});
}