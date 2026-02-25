import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Category";
import { buscar, deletar } from "../../../service/Service";
import { ToastAlert } from "../../../utils/ToastAlert";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      ToastAlert("Categoria não encontrada.", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);

      ToastAlert("Categoria deletado com sucesso!", "successo");
      navigate("/categorias");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    } catch (error: any) {
      ToastAlert("Erro ao deletar categoria, tente novamente.", "erro");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza que deseja deletar este categoria?
      </p>
      <div className="border flex flex-col rounderd-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Categoria
        </header>
        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria.descricao}
        </p>
        <div className="flex">
          <button
            onClick={retornar}
            className="cursor-pointer text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
          >
            Não
          </button>

          <button
            onClick={deletarCategoria}
            className=" cursor-pointer w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center py-2"
          >
            {isLoading ? (
              <ClipLoader size={20} color="#ffffff" />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
