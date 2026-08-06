// Imports ===========================================================
import type { Book } from "../types/book.js";
import * as BookService from "../services/book-service.js";

// Variables =========================================================

// Initialization ====================================================
export function initComponentName(): void {
  initEvents();

}

// Events ============================================================
function initEvents(): void {
  //onSubmit
  const form = document.querySelector<HTMLFormElement>("#form");
  if (!form) { throw new Error('"#form" element not found.');}
 
  form.addEventListener("submit", onSubmit);
}

// getFormData =======================================================
function getFormData(): Book {
  const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  if (!nameInput) { throw new Error('"#nameInput" element not found.');}
  const numberInput = document.querySelector<HTMLInputElement>("#numberInput");
  if (!numberInput) {throw new Error('"#numberInput" element not found.');}

  return {
    id: 0,
    name: nameInput.value.trim(),
    author: authorInput.value.trim(),
    status: statusInput.value,
    genres: genreInput.value.split(","),
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
  if (!validate(data)) {return;}

  serviceName.create(data);
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
  const form = document.querySelector<HTMLFormElement>("#form");
  if (!form) { throw new Error('#form element not found.');}

  form.reset();
}

// setFormFieldData =====================================================
// Fills the form fields with data.
export function setFormFieldData(data: Book): void {
  const nameInput = document.querySelector<HTMLInputElement>("#nameInput");
  const numberInput = document.querySelector<HTMLInputElement>("#numberInput");
  if (!nameInput || !numberInput) { throw new Error("Form fields not found.");}
  nameInput.value = data.name;
  numberInput.value = String(data.number);
}