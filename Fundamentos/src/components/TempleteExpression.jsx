// TEMPLETE EXPRESSION

function TempleteExpression() {
    const name = "Kaique";

    const test = {
        date: "02/11/2024",
        day: "Sabado"
    }

  return (
    <div>
        <p>A soma de 2 + 2 é: {2 + 2}</p>
        <h3>Bem vindo {name}!</h3>
        <p>Hoje é {test.day} dia {test.date}</p>
    </div>
  )
}

export default TempleteExpression