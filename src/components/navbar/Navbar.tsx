import { FaCartShopping, FaUser } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="container flex w-full  items-center gap-1">
        <div className="w-1/3  flex justify-center">
          <img
            src="/img/logo.png"
            alt="Logo da Farmácia"
            className="w-32 h-20 object-contain "
          />
        </div>

        <div className="w-1/3">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full p-2 border-2 border-blue-700  rounded-4xl bg-white"
            placeholder="Buscar produtos..."
          />
        </div>

        <button className="bg-blue-700 cursor-pointer text-white px-4 py-2 rounded-3xl hover:bg-blue-800">
          Buscar
        </button>

        <div className="flex gap-8 w-1/3 justify-center items-center flex-row">
          <FaCartShopping
            className="text-2xl cursor-pointer text-blue-700"
            size={25}
          />
          <FaUser className="text-2xl cursor-pointer text-blue-700" size={25} />
        </div>
      </div>

      <div className="w-full bg-blue-700 flex p-2 items-center justify-center">
        <ul className="flex text-white justify-center gap-8">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#produtos">Produtos</a>
          </li>
          <li>
            <a href="#servicos">Categorias</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
