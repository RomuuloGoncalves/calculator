/*Lógica calculadora*/
var result = document.querySelector("#result")

function input(num) {
    let number = result.value
    result.value = number + num
}

function calc() {
    if (result.value != "") {
        let aux = result.value
        result.value = eval(aux)
    } else {
        alert("Tá vazio vacilão")
    }
}

function reset() {
    result.value = ""
}

function del() {
    let aux = result.value
    result.value = aux.substring(0, aux.length - 1)
}

/*Troca de tema*/
/*Temas*/
var root = document.querySelector(":root")
const theme = {
    default() {
        root.style.setProperty('--background', 'hsl(221, 27%, 31%)');
        root.style.setProperty('--background-dark', 'hsl(223, 31%, 20%)');
        root.style.setProperty('--background-very-dark', 'hsl(223, 37%, 15%)');

        root.style.setProperty('--key-color-top', 'hsl(0, 0%, 100%)');
        root.style.setProperty('--key-color-bottom', 'hsl(221, 27%, 31%)');
        root.style.setProperty('--key-background', 'hsl(30, 25%, 89%)');
        root.style.setProperty('--key-background-dark', 'hsl(32, 17%, 85%)');
        root.style.setProperty('--key-shadow', 'hsl(29, 16%, 65%)');

        root.style.setProperty('--key-blue-background', 'hsl(225, 21%, 49%)');
        root.style.setProperty('--key-blue-shadow', 'hsl(223, 28%, 35%)');

        root.style.setProperty('--key-red-background', 'hsl(6, 63%, 50%)');
        root.style.setProperty('--key-red-shadow', 'hsl(6, 70%, 34%)');
    },
    light() {
        root.style.setProperty('--background', 'hsl(0,0%,90%)');
        root.style.setProperty('--background-dark', 'hsl(0,6%,82%)');
        root.style.setProperty('--background-very-dark', 'hsl(0,0%,93%)');
        root.style.setProperty('--key-color-top', 'hsl(60,9%,22%)');
        root.style.setProperty('--key-color-bottom', 'hsl(60,9%,22%)');
        root.style.setProperty('--key-background', 'hsl(48,9%,89%)');
        root.style.setProperty('--key-background-dark', 'hsl(32,17%,85%)');
        root.style.setProperty('--key-shadow', 'hsl(29, 16%,65%)');
        root.style.setProperty('--key-blue-background', 'hsl(185,41%,37%)');
        root.style.setProperty('--key-blue-shadow', 'hsl(184,57%,25%)');
        root.style.setProperty('--key-red-background', 'hsl(6,63%,50%)');
        root.style.setProperty('--key-red-shadow', 'hsl(6,70%,34%)');
    },
    dark() {
        root.style.setProperty('--background', 'hsl(268,75%,9%)');
        root.style.setProperty('--background-dark', 'hsl(269,74%,12%)');
        root.style.setProperty('--background-very-dark', 'hsl(269,74%,12%)');
        root.style.setProperty('--key-color-top', 'hsl(52,92%,62%)');
        root.style.setProperty('--key-color-bottom', 'hsl(52,92%,62%)');
        root.style.setProperty('--key-background', 'hsl(281,89%,26%)');
        root.style.setProperty('--key-background-dark', 'hsl(269,48%,20%)');
        root.style.setProperty('--key-shadow', 'hsl(289,70%,36%)');
        root.style.setProperty('--key-blue-background', 'hsl(281,89%,26%)');
        root.style.setProperty('--key-blue-shadow', 'hsl(289,70%,36%)');
        root.style.setProperty('--key-red-background', 'hsl(176,100%,44%)');
        root.style.setProperty('--key-red-shadow', 'hsl(176,100%,44%)');
    }
}

/*Tema app = Tema SO*/
const darkTheme = window.matchMedia("(prefers-color-scheme: dark")
const lightTheme = window.matchMedia("(prefers-color-scheme: light")

/*Lógica de troca dos temas*/
if (darkTheme.matches) {
    document.querySelector("#btnTheme").value = "3"
    theme.dark()
} else if (lightTheme.matches) {
    document.querySelector("#btnTheme").value = "2"
    theme.light()
} else {
    document.querySelector("#btnTheme").value = "1"
    theme.default()
}

function changeTheme(val){
    document.querySelector("#btnTheme").value = val
    if(val == 1){
        theme.default()
    }else if(val == 2){
        theme.light()
    }else if(val == 3){
        theme.dark()
    }
}