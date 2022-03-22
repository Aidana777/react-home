const root = document.getElementById("root");

/*
1. Надо показывать/скрывать текст по клику на кнопку
*/
const ToggleText = () => {
  const clickMe=()=>{
hastext(true)
  }
  return (
    <div>
      <button onClick={clickMe}>Показать / Скрыть</button>
      <span style={{ marginLeft: 10 }} hastext>Привет</span>
    </div>
  );
};

/*
2. По клику на соотвествующую кнопку надо менять
textAlign тега p на left, center или right.
*/
const AlignText = () => {
  return (
    <div>
      <p style={{ textAlign: "left" }}>Выровни меня</p>
      <button>Слева</button>
      <button>По центру</button>
      <button>Справа</button>
    </div>
  );
};

/*
3. C каждым кликом на кнопки: fontSize тега span должен
увеличиваться/уменьшаться на 4
*/
const ChangeFontSize = () => {
  return (
    <div>
      <button>Увеличить</button>
      <span style={{ fontSize: 16 }}>Текст</span>
      <button>Уменьшить</button>
    </div>
  );
};

/*
4. При вводе на input текст должен отображаться и в теге p
*/
const TextInput = () => {
  return (
    <div>
      <p>...</p>
      <input type="text" />
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
  return (
    <div>
      <input type="text" />
      <button>Проверить</button>
      {false && <p>Неверно</p>}
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
