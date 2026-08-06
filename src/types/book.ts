import type { BookStatus } from "./book-status";

export type Book = {
   id: number;
   name: string;
   author: string;
   status: BookStatus;
   genres: string[];
   pages: number;
   currentPage: number;
   rating: number;
   image: string;
   file: string;
   notes: string;
};