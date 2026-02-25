import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Category";
import { atualizar, buscar, cadastar } from "../../../service/Service";
import { ToastAlert } from "../../../utils/ToastAlert";

function FormTema() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      buscar(`/categorias/${id}`, setCategoria);
    } catch (error) {
      console.error("Erro ao buscar o tema por ID:", error);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);

        ToastAlert("Categoria atualizada com sucesso!", "sucesso");
        retornar();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        ToastAlert(
          "Erro ao atualizar a categoria! Por favor, tente novamente.",
          "erro"
        );
      }
    } else {
      try {
        await cadastar(`/categorias`, categoria, setCategoria);
        ToastAlert("Categoria cadastrada com sucesso!", "sucesso");
        retornar();
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        ToastAlert(
          "Erro ao cadastrar a categoria! Por favor, tente novamente.",
          "erro"
        );
      }
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Atualizar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name="descricao"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
        >
          {isLoading ? (
            <ClipLoader color="white" size={20} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormTema;
