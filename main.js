window.addEventListener('load', () => {
    const button = document.querySelectorAll('.button');
    const inputBox = document.getElementById('inputBox');
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', () => {
            const text = button[i].innerHTML;
            if (text === '=') {
                inputBox.value = eval(inputBox.value)
            } else if (text === 'C') {
                inputBox.value = '';
            } else {
                const val = inputBox.value;
                if (text === '+' || text === '-' || text === '/' || text === '*') {
                    const last = val[val.length - 1];
                    if (last === '+' || last === '-' || last === '/' || last === '*') {
                        return;
                    }
                }
                inputBox.value += text
            }
        })

    }
})