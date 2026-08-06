// Imports ===========================================================
import type { Book } from "../types/book.js";

// Variables =========================================================
const books: Book[] = [];

// create ============================================================
export function create(data: Book): Book {
  const newBook: Book = {...data,id: generateNextId(),};
  books.push(newBook);
  return newBook;
}

// generateNextId ====================================================
function generateNextId(): number {
    if (books.length === 0) { return 1;}
    return Math.max(...books.map(book => book.id)) + 1;
}

// getAll ============================================================
export function getAll(): Book[] {
  return [...books];
}

// getById ===========================================================
export function getById(id: number): Book | undefined {
  return books.find(book => book.id === id);
}

// update ============================================================
export function update(data: Book): Book {
  const index = books.findIndex(book => book.id === data.id);
  if (index === -1) { throw new Error("Book not found."); }
  
  books[index] = data;
  return data;
}

// remove ============================================================
export function remove(id: number): void {
  const index = books.findIndex(book => book.id === id);
  if (index === -1) { throw new Error("Book not found."); }
  books.splice(index, 1);
}