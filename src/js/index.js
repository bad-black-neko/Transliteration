const translitBtn = document.querySelector(".translit-text-btn");
const translitTextInput = document.querySelector(".text-to-translit-input");
const textToTranslitBox = document.querySelector(".text-to-translit-container");
const translitedTextBox = document.querySelector(".translited-text-container");

const letters = {
    'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
    'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
    'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
    'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
    'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
    'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
    'э': 'e',    'ю': 'yu',   'я': 'ya', ' ': ' ',
    'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
    'Е': 'E',    'Ё': 'E',    'Ж': 'ZH',   'З': 'Z',    'И': 'I',
    'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
    'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
    'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'CH',
    'Ш': 'SH',   'Щ': 'SCH',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
    'Э': 'E',    'Ю': 'YU',   'Я': 'YA', 
};

const transliteTextFunc = () => {
  const textToTranslitContainer = document.createElement("div");
  textToTranslitContainer.classList.add("text");

  const translitedTextContainer = document.createElement("div");
  translitedTextContainer.classList.add("text");

  const textToTranslit = translitTextInput.value;

  if (textToTranslit.match(/[a-zA-Z0-9]/)) {
    alert("Only Cyrillic symbols are allowded");
  } else {
    textToTranslitBox.append(textToTranslitContainer);
    translitedTextBox.append(translitedTextContainer);
    textToTranslitContainer.innerText = textToTranslit;

    const translitedText = textToTranslit
      .split("")
      .map((elem) => {
        for (let key in letters) {
          if (elem === key) {
            return (elem = letters[key]);
          }
        }
      })
      .join("");
    translitedTextContainer.innerText = translitedText;
  }
};

translitBtn.addEventListener("click", transliteTextFunc);

const clearBtn = document.querySelector(".translit-text-clear-btn");

const clearTextFunc = () => {
  const translitedTextToRemove = document.querySelectorAll(".text");
  translitedTextToRemove.forEach((elem) => {
    elem.remove();
  });
};

clearBtn.addEventListener("click", clearTextFunc);
