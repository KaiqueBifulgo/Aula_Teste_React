// EVENTOS DE CLIQUE
const Events = () => {

    // EVENTOS POR FUNÇÃO
    const EventoPorFuncao = () => {
        alert("Evento disparado por função separada!");
    }

    // FUNÇÃO DE RENDERIZAÇÃO
    const Renderização = (x) => {
        if (x) {
            return <h2>Resultado com True!</h2>
        } else {
            return <h2>Resultado com False</h2>
        }
    }

  return (
    <div>
        <div>
        <button onClick={() => alert("Evento disparado!")}>
            Clique Aqui
        </button>
        </div>
        {/* // DISPARANDO EVENTO POR FUNÇÃO SEPARADA */}
        <div>
            <button onClick={EventoPorFuncao}>
                Evento Por função
            </button>
        </div>
        {Renderização(true)};
        {Renderização(false)};
    </div>
  )
}

export default Events