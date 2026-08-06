import type { Book } from "../types/book.js";
import * as BookService from "../services/book-service.js";

// Variables ==========================================================

// Initialization =====================================================
export function initBookCard(): void {
   initEvents();
}

// Events =============================================================
function initEvents(): void {

}

export function create(book: Book): HTMLElement {
  const card = document.createElement("article");
  card.className = "book-card";

  const image = document.createElement("img");
  image.className = "book-card__image";
  image.src = book.image;
  image.alt = book.name;

  const title = document.createElement("h3");
  title.textContent = book.name;

  const rating = document.createElement("span");
  rating.textContent = "★".repeat(book.rating);

  const status = document.createElement("span");
  status.textContent = book.status;

  card.append( image,title,rating,status,);
  return card;
}