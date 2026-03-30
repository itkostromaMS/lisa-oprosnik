const questions = [
  {
    heading: "1.1. Расшифруйте аббревиатуру CJM",
    type: "radio",
    description:
      "Выберите наиболее точное определение из предложенных вариантов.",
    name: "question-cjm",
    options: [
      "Customer Journey Map — визуализация пути клиента от осознания потребности до покупки и после неё, позволяющая маркетологам анализировать опыт и улучшать взаимодействие",
      "Client Justification Model — модель экономического обоснования клиентских расходов",
      "Corporate Job Management — система управления корпоративными проектами",
      "Consumer Judgement Matrix — матрица потребительских оценок для сегментации рынка"
    ],
    required: true
  },
  {
    heading: "6. Какие инструменты используются для построения CJM?",
    type: "textarea",
    description: "Назовите не менее 3 инструментов.",
    name: "question-cjm-tools",
    required: true
  },
  {
    heading: "9. Что такое VCS и для чего она нужна?",
    type: "textarea",
    description:
      "Чем отличается от обычного хранилища файлов (например, Dropbox)?",
    name: "question-vcs",
    required: true
  },
  {
    heading: "2.4. Что такое merge-конфликт и при каких обстоятельствах он возникает?",
    type: "textarea",
    description:
      "Какие три варианта разрешения конфликта предлагает VCS, когда автоматическое слияние невозможно?",
    name: "question-merge",
    required: true
  },
  {
    heading: "11. В чём разница между командами commit и push?",
    type: "textarea",
    description: "В каких системах они разделены?",
    name: "question-commit",
    required: true
  },
  {
    heading: "14. Чем SVN отличается от Git и Mercurial?",
    type: "textarea",
    name: "question-svn",
    required: true
  },
  {
    heading: "15. Назовите три способа клонировать репозиторий из Git.",
    type: "textarea",
    name: "question-clone",
    required: true
  },
  {
    heading:
      "16. Что происходит, если два разработчика одновременно изменяют один и тот же файл и оба пушат изменения?",
    type: "textarea",
    name: "question-race",
    required: true
  },
  {
    heading: "18. Какие 4 уровня описывает модель TCP/IP?",
    type: "textarea",
    description: "Кратко охарактеризуйте каждый.",
    name: "question-tcp",
    required: true
  },
  {
    heading: "20. Перечислите основные HTTP-методы (не менее 5)",
    type: "textarea",
    description: "Опишите назначение каждого.",
    name: "question-http",
    required: true
  },
  {
    heading: "26. Что такое реляционная база данных?",
    type: "textarea",
    name: "question-relational",
    required: true
  },
  {
    heading: "28. Что такое нормализация?",
    type: "textarea",
    name: "question-normalization",
    required: true
  },
  {
    heading:
      "4.6. Опишите на примере из статьи (заявка на кредит), почему для обработки заявки в мобильном приложении банка предпочтительнее асинхронный подход.",
    type: "textarea",
    description: "Чем этот пример контрастирует с примером открытия вклада?",
    name: "question-async",
    required: true
  },
  {
    heading: "34. Что такое MCP (Model Context Protocol)?",
    type: "textarea",
    name: "question-mcp",
    required: true
  },
  {
    heading:
      "5.5. Статья описывает подход к ручному тестированию с помощью ChatGPT.",
    type: "textarea",
    description:
      "Какие шаги выполняются при создании чек-листов и тест-кейсов на основе документации продукта?",
    name: "question-testing",
    required: true
  },
  {
    heading:
      "38. Что такое roadmap.md, progress.md, context.md в контексте вайб-кодинга?",
    type: "textarea",
    description: "Для чего используются эти файлы?",
    name: "question-roadmap",
    required: true
  },
  {
    heading: "40. Что означают аббревиатуры CI и CD?",
    type: "textarea",
    name: "question-ci",
    required: true
  },
  {
    heading:
      "41. В чём разница между «непрерывной поставкой» (Continuous Delivery) и «непрерывным развёртыванием» (Continuous Deployment)?",
    type: "textarea",
    name: "question-continuous",
    required: true
  },
  {
    heading:
      "6.4. Что такое «непрерывное тестирование» (continuous testing) и чем оно отличается от просто «автоматизации тестирования»?",
    type: "textarea",
    description:
      "Какие виды тестов могут быть частью CI, а какие — CD?",
    name: "question-continuous-testing",
    required: true
  },
  {
    heading: "7.1. Что такое встроенная функция SQL?",
    type: "radio",
    description:
      "Выберите верное утверждение:",
    name: "question-sql-function",
    options: [
      "Реализованный в СУБД код, принимающий аргументы определённого типа и обязательно возвращающий один литерал; может принимать как ноль, так и несколько аргументов",
      "Макрос, который разворачивается в текст SQL перед выполнением запроса",
      "Хранимая процедура, которая может не возвращать значение",
      "Конструкция, работающая исключительно с числовыми типами данных"
    ],
    required: true
  },
  {
    heading:
      "7.5. Особенность работы SQL-функций над значениями полей таблицы: к какой строке будет применена функция `LENGTH(member_name)` — ко всей таблице целиком или к каждой строке отдельно?",
    type: "textarea",
    name: "question-length",
    required: true
  },
  {
    heading: "51. Что делает функция YEAR()? Что вернёт YEAR('2022-06-16')?",
    type: "textarea",
    name: "question-year",
    required: true
  },
  {
    heading:
      "54. Как вычислить длину фамилии, имея строку в формате «имя фамилия»?",
    type: "textarea",
    description: "Какие функции нужно использовать?",
    name: "question-lastname",
    required: true
  }
];

const container = document.querySelector("#questions-container");

const createFieldset = ({
  heading,
  description,
  type,
  name,
  options,
  required
}) => {
  const fieldset = document.createElement("fieldset");
  fieldset.className = "fieldset";
  fieldset.innerHTML = `<legend>${heading}</legend>`;

  if (description) {
    const desc = document.createElement("p");
    desc.textContent = description;
    fieldset.appendChild(desc);
  }

  if (type === "radio") {
    const grid = document.createElement("div");
    grid.className = "options-grid";
    options.forEach((option, index) => {
      const label = document.createElement("label");
      label.className = "option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = name;
      input.value = option;
      input.required = required;

      const span = document.createElement("span");
      span.textContent = option;

      label.appendChild(input);
      label.appendChild(span);
      grid.appendChild(label);
    });
    fieldset.appendChild(grid);
  } else {
    const textarea = document.createElement("textarea");
    textarea.name = name;
    textarea.placeholder = "Напишите ваш ответ здесь";
    textarea.required = required;
    fieldset.appendChild(textarea);
  }

  return fieldset;
};

questions.forEach((question) => {
  const fieldset = createFieldset(question);
  container.appendChild(fieldset);
});

const form = document.querySelector("#survey-form");
const status = document.querySelector("#form-status");

const toPlainText = (formData) => {
  let body = "Опросник: результаты по пройденным вопросам";
  body += "\n\n";
  for (const [key, value] of formData.entries()) {
    const question = questions.find((q) => q.name === key);
    body += `${question.heading}\n`;
    body += `${value}\n\n`;
  }
  return body;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  if (Array.from(formData.values()).some((value) => !value.trim())) {
    status.textContent = "Пожалуйста, заполните все поля.";
    status.className = "status status--error";
    return;
  }

  const report = toPlainText(formData);
  const blob = new Blob([report], { type: "text/plain" });
  const filename = `survey-report-${new Date()
    .toISOString()
    .slice(0, 16)
    .replace(/:/g, "-")}.txt`;

  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = filename;
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);

  status.textContent = "Отчёт сформирован. Скачивание началось.";
  status.className = "status status--success";
});
