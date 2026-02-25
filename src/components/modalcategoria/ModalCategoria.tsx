import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import FormCategoria from "../categoria/formcategoria/FormCategoria";

function ModalCategoria() {
  return (
    <>
      <Popup
        trigger={
          <button className=" bg-blue-400 text-white cursor-pointer py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300  flex items-center justify-center">
            Adicionar Categoria
          </button>
        }
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <FormCategoria />
      </Popup>
    </>
  );
}

export default ModalCategoria;
