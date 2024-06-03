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
        id: "l1q1",
        func: (ns) => {
            const arr = ns[0].split(",");
            const reverseArr = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                reverseArr.push(arr[i]);
            }
            return reverseArr.join(",");
        }
    },
    {
        id: "l1q2",
        func: (ns) => {
            const num1 = Number(ns[0]);
            let arr = [];
            for (let i = 0; i < 10; i++) {
                arr.push(num1 + i);
            }
            return arr;
        }
    },
    {
        id: "l1q3",
        func: (ns) => {
            const num1 = Number(ns[0]);
            let arr = [];
            while (arr.length < 10) {
                arr.push(num1 + arr.length);
            }
            return arr;
        }
    },
    {
        id: "l1q4",
        func: (ns) => {
            const arr = ns[0].split(",");
            let printText = "";
            for (let i = 0; i < arr.length; i++) {
                printText += arr[i] + "<br\>";
            }
            return printText;
        }
    },
    {
        id: "l2q1",
        func: (ns) => {
            const arr = ns[0].split(",");
            let printText = "";
            for (let i = arr.length - 1; i >= 0; i--) {
                printText += arr[i] + "<br\>";
            }
            return printText;
        }
    },
    {
        id: "l2q2",
        func: (ns) => {
            const arr = ns[0].split(",");
            let arrCopy = [];
            for (let i = 0; i < arr.length; i++) {
                arrCopy.push(arr[i]);
            }
            return "Original: " + arr + "<br\>Copy: " + arrCopy;
        }
    },
    {
        id: "l2q3",
        func: (ns) => {
            const arr = ns[0].split(",");
            const findEle = ns[1];
            let occur = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === findEle) {
                    occur++;
                }
            }
            return "Element: " + findEle + "<br\>Occurence: " + occur;
        }
    },
    {
        id: "l2q4",
        func: (ns) => {
            const arr = ns[0].split(",");
            let printText = "";
            for (let i = 0; i < arr.length; i++) {
                if (Number(arr[i]) < 0) {
                    printText += arr[i] + "<br\>";
                }
            }
            return printText;
        }
    },
    {
        id: "l2q5",
        func: (ns) => {
            const arr = ns[0].split(",");
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                const num = Number(arr[i]);
                if (!isNaN(num) && arr[i] !== "") {
                    sum += num;
                }
            }
            return sum;
        }
    },
    {
        id: "l2q6",
        func: (ns) => {
            const arr = ns[0].split(",");
            let min = arr[0];
            let max = arr[0];
            for (let i = 0; i < arr.length; i++) {
                const num = Number(arr[i]);
                if (!isNaN(num) && arr[i] !== "") {
                    if (num < min) {
                        min = num;
                    }
                    if (num > max) {
                        max = num;
                    }
                }
            }
            return "Min: " + min + "<br\>Max: " + max;
        }
    },
    {
        id: "l2q7",
        func: (ns) => {
            const arr = ns[0].split(",");
            if (arr.length < 2) {
                return "Invalid Input";
            }
            let max = arr[0];
            let secondMax = arr[0];
            for (let i = 0; i < arr.length; i++) {
                const num = Number(arr[i]);
                if (!isNaN(num) && arr[i] !== "") {
                    if (num > max) {
                        secondMax = max;
                        max = num;
                    } else if (num > secondMax && num < max) {
                        secondMax = num;
                    }
                }
            }
            if (secondMax === max) {
                return "Invalid Input";
            }
            return secondMax;
        }
    },
    {
        id: "l2q8",
        func: (ns) => {
            const arr = ns[0].split(",");
            let even = 0;
            let odd = 0;
            for (let i = 0; i < arr.length; i++) {
                const num = Number(arr[i]);
                if (!isNaN(num) && arr[i] !== "") {
                    if (num % 2 === 0) {
                        even++;
                    } else {
                        odd++;
                    }
                }
            }
            return "Even: " + even + "<br\>Odd: " + odd;
        }
    },
    {
        id: "l2q9",
        func: (ns) => {
            const arr = ns[0].split(",");
            let negative = 0;
            for (let i = 0; i < arr.length; i++) {
                const num = Number(arr[i]);
                if (!isNaN(num) && arr[i] !== "") {
                    if (num < 0) {
                        negative++;
                    }
                }
            }
            return "Negative: " + negative;
        }
    },
    {
        id: "l3q1",
        func: (ns) => {
            let arr = ns[0].split(",");
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (Number(arr[i]) % 2 !== 0 && Number(arr[j]) % 2 === 0) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        }
    },
    {
        id: "l3q2",
        func: (ns) => {
            let arr = ns[0].split(",");
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if (Number(arr[i]) > Number(arr[j])) {
                        let temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                }
            }
            return arr;
        }
    },
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