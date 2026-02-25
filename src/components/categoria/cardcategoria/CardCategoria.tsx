import { Link } from "react-router-dom";
import type { Categoria } from "../../../models/Category";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      key={categoria.id}
      className="flex flex-col items-center justify-center border rounded-lg  m-2 shadow-md hover:shadow-lg transition-shadow duration-300 "
    >
      <h3 className="text-lg font-semibold bg-blue-700 w-full p-2 rounded-tl-lg rounded-tr-lg text-white text-center">
        categoria
      </h3>
      <p className="text-lg p-4">{categoria.descricao}</p>

      <div className="flex w-full">
        <Link
          className="flex-1 cursor-pointer text-center bg-blue-500 text-white py-2 m-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          to={`/editarcategoria/${categoria.id}`}
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="flex-1 cursor-pointer text-center bg-red-500 text-white py-2 m-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          <button>Excluir</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
