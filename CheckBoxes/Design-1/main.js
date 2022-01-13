const days = document.querySelectorAll("input[type='checkbox']");
const display = document.querySelector(".display-text")

const selections = [];
days.forEach(function (day) {
  day.addEventListener("click", function (e) {
    setSelectedDays(e.currentTarget.value);
  });
});

const setSelectedDays = (value) => {
  if (!selections.includes(value)) {
    selections.push(value);
  } else {
    for (let i = 0; i < selections.length; i++) {
      if (selections[i] === value) {
        selections.splice(i, 1);
      }
    }
  }
  display.innerText = selections
};


