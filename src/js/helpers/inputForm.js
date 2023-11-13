// Получаем элемент input
const input = document.querySelector(".form__input");

function sortLangInput() {
  // Добавляем обработчик события ввода текста
  input.addEventListener("input", function (event) {
    // Получаем значение введенного текста
    const inputValue = input.value;

    // Фильтруем русские буквы, оставляем только латинские символы и цифры
    const filteredValue = inputValue.replace(/[^A-Za-z0-9]/g, "");

    // Устанавливаем отфильтрованное значение обратно в input
    input.value = filteredValue;
  });
}
export default sortLangInput;
