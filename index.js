const root = document.getElementById("root");
  

/*
1. Надо показывать/скрывать текст по клику на кнопку
*/

/*
если false - левая часть возврашается
если true - правая часть возвращается
*/

const ToggleText = () => {
  const [show, setShow] = React.useState(false)

  return (
    <div>
      <button onClick={() => setShow(true)}>
        Показать / Скрыть
      </button>
      {show && <span style={{ marginLeft: 10 }}>Привет</span>}
    </div>
  );
};

/*
2. По клику на соотвествующую кнопку надо менять
textAlign тега p на left, center или right.
*/
const AlignText = () => {
  const [align, setAlign] = React.useState('left')

  return (
    <div>
      <p style={{ textAlign: align }}>Выровни меня</p>
      <button onClick={() => setAlign('left')}>Слева</button>
      <button onClick={() => setAlign('center')}>По центру</button>
      <button onClick={() => setAlign('right')}>Справа</button>
    </div>
  )
};


/*
3. C каждым кликом на кнопки: fontSize тега span должен
увеличиваться/уменьшаться на 4
*/
const ChangeFontSize = () => {
  const [size, setSize] = React.useState(16)

  const increment = () => {
    setSize(size + 4)
  }
  const decrement = () => {
    setSize(size - 4)
  }

  return (
    <div>
      <button onClick={increment}>Увеличить</button>
      <span style={{ fontSize: size }}>Текст</span>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
};

/*
4. При вводе на input текст должен отображаться и в теге p
*/

const TextInput = () => {
  const [text, setText] = React.useState('')
  return (
    <div>
      <p>{text || '...'}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  )
}

/*
5. При клике на кнопку нужно проверить
подходит ли введенный текст под одну из условий:
1. Текст должен быть больше 8 символом
2. Текст заканчивается на "."
3. В тексте есть слово "react"

Если условие совпало: У инпута border должен быть зеленого цвет
Есл нет: тогда показывать тег p с текстом "Неверно"
*/
const CheckInput = () => {
  const [value, setValue] = React.useState('')
  const [isValid, setIsValid] = React.useState(false)

  const checkValue = () => {
    const result = value.length > 8 || value.endsWith('.') || value.includes('react')
    setIsValid(result)
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        style={{border: isValid ? `4px solid green` : ''}}
      />
      <button onClick={checkValue}>Проверить</button>
      {!isValid && <p>Неверно</p>}
    </div>
  )
}



const Section = ({ num, children }) => {
  return (
    <section>
      <h2>Задание {num}</h2>
      {children}
      <hr />
    </section>
  );
};

const App = () => {
  return (
    <div className="container">
      <Section num="1">
        <ToggleText />
      </Section>
      <Section num="2">
        <AlignText />
      </Section>
      <Section num="3">
        <ChangeFontSize />
      </Section>
      <Section num="4">
        <TextInput />
      </Section>
      <Section num="5">
        <CheckInput />
      </Section>
    </div>
  );
};



ReactDOM.render(<App />, root);

