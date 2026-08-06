// Imports ===========================================================
import type { Book } from "../types/book.js";
import type { BookStatus } from "../types/book-status.js";
import * as BookService from "../services/book-service.js";

// Variables =========================================================

// Initialization ====================================================
export function initBookForm(): void {
  initEvents();

}

// Events ============================================================
function initEvents(): void {
  //onSubmit
  const form = document.querySelector<HTMLFormElement>("#book-form");
  if (!form) { throw new Error('"#book-form" element not found.');}
  form.addEventListener("submit", onSubmit);
}

// getFormData =======================================================
function getFormData(): Book {
  const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  if (!nameInput) { throw new Error('"#nameInput" element not found.'); }

  const authorInput = document.querySelector<HTMLInputElement>("#authorInput");
  if (!authorInput) { throw new Error('"#authorInput" element not found.'); }

  const statusInput = document.querySelector<HTMLSelectElement>("#statusInput");
  if (!statusInput) { throw new Error('"#statusInput" element not found.'); }

  const genreInput = document.querySelector<HTMLInputElement>("#genreInput");
  if (!genreInput) { throw new Error('"#genreInput" element not found.'); }

  const pagesInput = document.querySelector<HTMLInputElement>("#pagesInput");
  if (!pagesInput) { throw new Error('"#pagesInput" element not found.'); }

  const currentPageInput = document.querySelector<HTMLInputElement>("#currentPageInput");
  if (!currentPageInput) { throw new Error('"#currentPageInput" element not found.'); }

  const ratingInput = document.querySelector<HTMLSelectElement>("#ratingInput");
  if (!ratingInput) { throw new Error('"#ratingInput" element not found.'); }

  const imageInput = document.querySelector<HTMLInputElement>("#imageInput");
  if (!imageInput) { throw new Error('"#imageInput" element not found.'); }

  const fileInput = document.querySelector<HTMLInputElement>("#fileInput");
  if (!fileInput) { throw new Error('"#fileInput" element not found.'); }

  const notesInput = document.querySelector<HTMLTextAreaElement>("#notesInput");
  if (!notesInput) { throw new Error('"#notesInput" element not found.'); }

  return {
    id: 0,
    name: nameInput.value.trim(),
    author: authorInput.value.trim(),
    status: statusInput.value as BookStatus,
    genres: genreInput.value
      .split(",")
      .map(genre => genre.trim())
      .filter(Boolean),
    pages: Number(pagesInput.value),
    currentPage: Number(currentPageInput.value),
    rating: Number(ratingInput.value),
    image: imageInput.value.trim(),
    file: fileInput.value.trim(),
    notes: notesInput.value.trim(),
  };
}

// onSubmit ==========================================================
function onSubmit(event: SubmitEvent): void {
  event.preventDefault();

  const data = getFormData();
  if (!validate(data)) { return; }

  BookService.create(data);
  clearForm();
}

// Validation ========================================================
function validate(data: Book): boolean {
  if (!data.name) { 
    alert("Field is required.");
    return false;
  }
  return true;
}

// clearForm ===========================================================
// Clears all form fields.
function clearForm(): void {
  const form = document.querySelector<HTMLFormElement>("#book-form");
  if (!form) { throw new Error('#book-form element not found.');}

  form.reset();
}

// setFormFieldData ==================================================
// Fills the form fields with data.
export function setFormFieldData(data: Book): void {
  const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  if (!nameInput) { throw new Error('"#nameInput" element not found.'); }

  const authorInput = document.querySelector<HTMLInputElement>("#authorInput");
  if (!authorInput) { throw new Error('"#authorInput" element not found.'); }

  const statusInput = document.querySelector<HTMLSelectElement>("#statusInput");
  if (!statusInput) { throw new Error('"#statusInput" element not found.'); }

  const genreInput = document.querySelector<HTMLInputElement>("#genreInput");
  if (!genreInput) { throw new Error('"#genreInput" element not found.'); }

  const pagesInput = document.querySelector<HTMLInputElement>("#pagesInput");
  if (!pagesInput) { throw new Error('"#pagesInput" element not found.'); }

  const currentPageInput = document.querySelector<HTMLInputElement>("#currentPageInput");
  if (!currentPageInput) { throw new Error('"#currentPageInput" element not found.'); }

  const ratingInput = document.querySelector<HTMLSelectElement>("#ratingInput");
  if (!ratingInput) { throw new Error('"#ratingInput" element not found.'); }

  const notesInput = document.querySelector<HTMLTextAreaElement>("#notesInput");
  if (!notesInput) { throw new Error('"#notesInput" element not found.'); }

  nameInput.value = data.name;
  authorInput.value = data.author;
  statusInput.value = data.status;
  genreInput.value = data.genres.join(", ");
  pagesInput.value = String(data.pages);
  currentPageInput.value = String(data.currentPage);
  ratingInput.value = String(data.rating);
  notesInput.value = data.notes;
}