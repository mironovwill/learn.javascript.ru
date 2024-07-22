/*
Задача 1: Фокус на инпуте
Создай компонент с текстовым полем и кнопкой. При нажатии на кнопку текстовое поле должно получать фокус.
Подсказка: Используй useRef для создания ссылки на текстовое поле и метод focus() для установки фокуса.
*/

import { useRef, useEffect } from 'react'

export function App() {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return <input ref={inputRef} />
}

/*
Задача 2: Сохранение предыдущего значения
Создай компонент с текстовым полем, который отображает текущее и предыдущее значения этого поля.
Подсказка: Используй useRef для хранения предыдущего значения и обновляй его при каждом изменении значения в текстовом поле.
*/

export function App() {
    const [value, setValue] = useState('Current value')
    const prevValue = useRef('Prev value')
    const inputRef = useRef()

    function handleSubmit() {
        prevValue.current = value
        setValue(inputRef.current.value)
    }

    return (
        <>
            <p>Prev value: {prevValue.current}</p>
            <p>Current value: {value}</p>

            <input ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

/*
Задача 3: Счетчик рендеров
Создай компонент, который отображает счетчик рендеров (количество раз, когда компонент был отрендерен).
Подсказка: Используй useRef для хранения значения, которое не будет изменяться при каждом рендере компонента, и увеличивай его в функции рендера.
*/

export function App() {
    const [_, setValue] = useState(0)
    const updatesRef = useRef(0)

    useEffect(() => {
        updatesRef.current += 1
    })

    return (
        <>
            <p>Total updates: {updatesRef.current}</p>
            <button onClick={() => setValue((prev) => prev + 1)}>Update</button>
        </>
    )
}

/*
Задача 4: Управление прокруткой
Создайте компонент с длинным списком элементов и кнопкой. При нажатии на кнопку, компонент должен прокрутиться вниз до последнего элемента списка.
Подсказка: Используйте useRef для создания ссылки на контейнер списка и метод scrollIntoView() для прокрутки.
*/

const testData = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
]

function App() {
    const ulRef = useRef()

    function scrollToLast() {
        ulRef.current.lastChild.scrollIntoView()
    }

    return (
        <>
            <button onClick={scrollToLast}>Scroll to last</button>
            <ul ref={ulRef}>
                {testData.map((el) => (
                    <li key={el.id}>{el.name}</li>
                ))}
            </ul>
        </>
    )
}

export default App
