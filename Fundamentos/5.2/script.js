let h1 = document.createElement("h1")
document.body.appendChild(h1)
h1.classList.add("title")
h1.textContent = "Exercício 5.2 - JavaScript DOM"

let main = document.createElement("main")
document.body.appendChild(main)
main.classList.add("main-content")

let section = document.createElement("section")
main.appendChild(section)
section.style.backgroundColor = "green"

let p = document.createElement("p")
section.appendChild(p)
p.textContent = " Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum"

let section2 = document.createElement("section")
main.appendChild(section2)
section2.classList.add("left-content")
main.removeChild(section2)

let section3 = document.createElement("section")
main.appendChild(section3)
section3.classList.add("right-content")
section3.style.marginRight = "auto"

let img = document.createElement("img")
section2.appendChild(img)
img.setAttribute('src', 'https://picsum.photos/200')
img.classList.add("small-image")

let ul = document.createElement("ul")
section3.appendChild(ul)

let item = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for (let i = 0; i < 8; i += 1) {
    let listItem = item[i]

    let li = document.createElement("li")
    li.textContent = listItem
    ul.appendChild(li)
    



}

function criaH3() {
    let h3 = document.createElement("h3")
    h3.classList.add("description")
    main.appendChild(h3)
}
criaH3()
criaH3()
criaH3()

