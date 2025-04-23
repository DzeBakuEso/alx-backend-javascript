/// <reference path="interface.ts" />

// Import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Declare the functions from crud.js with type declarations
declare module 'crud' {
  export function insertRow(row: RowElement): RowID;
  export function deleteRow(rowId: RowID): void;
  export function updateRow(rowId: RowID, row: RowElement): RowID;
}
