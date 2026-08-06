import { BookStatus } from "./BookStatus";

export type Book = {
   id: number;
   name: string;
   author: string;
   Status: BookStatus;
   genre: string[];
   pages: number;
   currentPage: number;
   rating: number;
   image: string;
   file: string;
   notes: string;
};