import type { Categoria } from "./Category";

export interface Produto {
  id: number;
  nome: string;
  detalhes: string;
  preco: number;
  foto: string;
  categoria: Categoria | null;
}