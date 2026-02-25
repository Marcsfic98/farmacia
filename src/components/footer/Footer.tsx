import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  ShieldCheck,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-12 pb-6 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-blue-700 font-bold mb-4 uppercase text-sm tracking-wider">
              Institucional
            </h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Nossas Lojas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-blue-700 font-bold mb-4 uppercase text-sm tracking-wider">
              Atendimento
            </h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Entregas e Prazos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition">
                  Como comprar
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-blue-700 font-bold mb-4 uppercase text-sm tracking-wider">
              Fale Conosco
            </h3>
            <div className="flex items-center gap-2 mb-2 text-slate-600 text-sm">
              <Phone size={16} className="text-blue-600" />
              <span>0800 123 4567</span>
            </div>
            <div className="flex items-center gap-2 mb-4 text-slate-600 text-sm">
              <Mail size={16} className="text-blue-600" />
              <span>sac@farmaciadigital.com.br</span>
            </div>
            <div className="flex gap-4">
              <Facebook
                size={20}
                className="text-slate-400 hover:text-blue-600 cursor-pointer"
              />
              <Instagram
                size={20}
                className="text-slate-400 hover:text-pink-600 cursor-pointer"
              />
              <Twitter
                size={20}
                className="text-slate-400 hover:text-blue-400 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h3 className="text-blue-700 font-bold mb-4 uppercase text-sm tracking-wider">
              Segurança
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-1 bg-white p-2 rounded border border-slate-200 shadow-sm">
                <ShieldCheck size={24} className="text-green-600" />
                <span className="text-[10px] leading-tight font-bold text-slate-700">
                  SITE
                  <br />
                  SEGURO
                </span>
              </div>
              <div className="bg-white p-2 rounded border border-slate-200 shadow-sm">
                <span className="text-[10px] font-bold text-slate-700 italic">
                  ANVISA
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-blue-700 font-bold mb-2 uppercase text-xs tracking-wider">
                Pagamento
              </h3>
              <div className="flex gap-2 opacity-70 grayscale hover:grayscale-0 transition">
                <img
                  src="https://img.icons8.com/color/32/visa.png"
                  alt="Visa"
                />
                <img
                  src="https://img.icons8.com/color/32/mastercard.png"
                  alt="Mastercard"
                />
                <img src="https://img.icons8.com/color/32/pix.png" alt="Pix" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-[11px] text-slate-500 leading-relaxed text-center md:text-left">
          <p className="mb-4">
            Farmácia Digital S.A. | CNPJ: 00.000.000/0001-00 | Inscrição
            Estadual: 000.000.000.000 | Endereço: Av. Principal, 1000 -
            Recife/PE - CEP: 50000-000
          </p>
          <p>
            Farmacêutico Responsável: Dr. Exemplo Nome - CRF/PE: 12345 | AFE:
            1.23456.7 | AE: 1.23456.7
          </p>
          <p className="mt-4 text-slate-400">
            © 2026 Farmácia Digital. Todos os direitos reservados. Preços e
            condições exclusivos para o site.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
