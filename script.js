function getFormValues(form) {
    const formData = new FormData(form);
    const data = {};
    for (const [key, value] of formData) {
        data[key] = value;
    }
    return Object.values(data);
}

var allForms = [
    {
        id: "l3q7",
        func: (ns) => {
            const num1 = Number(ns[0]);
            const operation = ns[1];
            const num2 = Number(ns[2]);
            
            if (operation === "+") {
                return num1 + num2;
            } else if (operation === "-") {
                return num1 - num2;
            } else if (operation === "x") {
                return num1 * num2;
            } else if (operation === "/") {
                return num1 / num2;
            }
        }
    }
]

allForms.forEach(form => {
    const { id, func } = form;

    const formEl = document.getElementById(id);
    const outputEl = formEl.querySelector('.output');
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const values = getFormValues(formEl);
        const result = func(values);
        outputEl.innerHTML = result;
        outputEl.classList.add("an-z-out-in");
        setTimeout(() => {
            outputEl.classList.remove("an-z-out-in");
        }, 1000);
    })
})