import "./Rodape.css";

const Rodape = () => {
  return (
    <footer>
      <div>
        <img className="icons" src="imagens/fb.png" alt="Logo do Facebook." />
        <img className="icons" src="imagens/tw.png" alt="Logo do Twitter." />
        <img className="icons" src="imagens/ig.png" alt="Logo do Instagram." />
      </div>
      <div className="logo">
        <img src="imagens/logo.png" alt="Logo da Organo" />
      </div>
      <p className="par">Desenvolvido por Alura.</p>
    </footer>
  );
};

export default Rodape;
