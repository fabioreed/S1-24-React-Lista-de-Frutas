import { useState } from 'react'

export function Frutas() {
    const [fruits, setFruits] = useState([
        { name: "banana", color: "yellow", price: 2 },
        { name: "cherry", color: "red", price: 3 },
        { name: "strawberry", color: "red", price: 4 }
    ])

    function filterRedFruits() {
        setFruits(fruits.filter((fruit) => fruit.color === 'red'))
    }

    const totalPrice = fruits.reduce(function (acumulador, objetoAtual) {
        return acumulador + objetoAtual.price
    }, 0)

    return (
        <>
            <h2>Total: {totalPrice}</h2>

            { fruits.map((fruit, i) => (
                <>
                    <div key={i}>
                        <span>{fruit.name}</span>
                    </div>
                </>
            ))}

            <button onClick={filterRedFruits}>Mostrar Frutas Vermelhas</button>
        </>
    )
}