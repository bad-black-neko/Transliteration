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
  const textToTranslit = translitTextInput.value;
  textToTranslitContainer.classList.add("text-to-translit-container__text");
  textToTranslitBox.append(textToTranslitContainer);
  textToTranslitContainer.innerText = textToTranslit;

  const translitedTextContainer = document.createElement("div");
  translitedTextContainer.classList.add("translited-text-container__text");
  translitedTextBox.append(translitedTextContainer);

  let transiltedTextArr = [];
  for (let i = 0; i < textToTranslit.length; i++) {
    for (let key in letters) {
      if (textToTranslit[i] === key) {
        transiltedTextArr.push(letters[key]);
      } else if (textToTranslit[i] === letters[key]) {
        transiltedTextArr.push(key);
      }
    }
  }
  const translitedText = transiltedTextArr.join("");
  translitedTextContainer.innerText = translitedText;
};

translitBtn.addEventListener("click", transliteTextFunc);
