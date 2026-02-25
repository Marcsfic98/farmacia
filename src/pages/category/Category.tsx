import { useEffect, useState } from "react";
import CardCategoria from "../../components/categoria/cardcategoria/CardCategoria";
import ModalCategoria from "../../components/modalcategoria/ModalCategoria";
import type { Categoria } from "../../models/Category";
import { buscar } from "../../service/Service";

function Category() {
  const [categorias, setCategorias] = useState<Categoria[]>([] as Categoria[]);

  useEffect(() => {
    buscar("/categorias", setCategorias);
  }, [categorias]);
  return (
    <div className="container flex flex-col ">
      <div className="self-end mt-5 px-6">
        <ModalCategoria />
      </div>
      <div className="container grid grid-cols-3 p-4">
        {categorias.map((categoria) => (
          <CardCategoria key={categoria.id} categoria={categoria} />
        ))}
      </div>
    </div>
  );
}

export default Category;
