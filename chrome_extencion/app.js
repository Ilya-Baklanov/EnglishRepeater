const buttonsList = document.querySelector("#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.hgbeOc.EjH7wc > nav");
const openRequest = indexedDB.open('testName', 2);

openRequest.onsuccess = (e) => {
    const database = e.target.result;
    const DB_NAME = 'wordsList'

    database.createObjectStore(DB_NAME, {keyPath: 'id'});

    const transaction = database.transaction(DB_NAME, "readwrite");

    const wordsList = transaction.objectStore(DB_NAME);

    const word = {
        id: '1',
        word: 'newWord',
        translate: 'перевод',
    };

    const request = wordsList.add(word);

    request.onsuccess = function() {
        console.log("Слово добавлено в хранилище", request.result);
    };

    request.onerror = function() {
        console.log("Ошибка", request.error);
    };
}

buttonsList.insertAdjacentHTML("beforeend", `
<button id="addButton">
    Добавить слово
</button>
`);

buttonsList.insertAdjacentHTML("beforeend", `
<button id="rememberWord">
    Вспомнить рандомное слово
</button>
`);

buttonsList.insertAdjacentHTML("beforeend", `
<button id="addApplication">
    Application
</button>
`);

const addButton = document.getElementById('addButton');
addButton.addEventListener("click", () => {
    const WORDS_LIST_KEY = 'wordsList';
    const englishText = document.querySelector("#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div > div.AxqVh > div.OPPzxe > c-wiz.rm1UF.UnxENd.dHeVVb > span > span > div > div.A3dMNc > span").innerHTML;
    const translatedText = document.querySelector("#yDmH0d > c-wiz > div > div.ToWKne > c-wiz > div.OlSOob > c-wiz > div > div.AxqVh > div.OPPzxe > c-wiz.sciAJc > div.QcsUad.BDJ8fb.sMVRZe.wneUed > div.usGWQd > div > div.lRu31 > span.HwtZe > span > span").innerHTML;

    const currentWordsList = JSON.parse(localStorage.getItem(WORDS_LIST_KEY) || '[]');
    localStorage.setItem(WORDS_LIST_KEY, JSON.stringify([
        ...currentWordsList,
        {
            word: englishText,
            translate: translatedText,
        }
    ]))
})

const rememberWord = document.getElementById('rememberWord');
rememberWord.addEventListener("click", () => {
    const response = prompt("Переведи слово: ");

    alert(response)
})

const addApplication = document.getElementById('addApplication');
addApplication.addEventListener("click", () => {
    const body = document.querySelector("#yDmH0d");
    body.insertAdjacentHTML("beforeend", `
    <div id="root"></div>
    <iframe src="https://main--friendly-lolly-1d88f9.netlify.app/" ></iframe>
    `);
})

