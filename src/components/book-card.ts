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

export function create(data: Book): HTMLElement {
  const card = document.createElement("article");
  card.className = "book-card";

  const image = document.createElement("img");
  image.className = "book-card__image";
  image.src = data.image;
  image.alt = data.name;

  const title = document.createElement("h3");
  title.className = "book-card__title";
  title.textContent = data.name;

  const rating = document.createElement("span");
  rating.className = "book-card__rating";
  rating.textContent = "★".repeat(data.rating);

  const status = document.createElement("span");
  status.className = "book-card__status";
  status.textContent = data.status;

  card.append(image,title,rating,status,);

  return card;
}