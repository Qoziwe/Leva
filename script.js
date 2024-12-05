// alert("sadada");
const cards =[
    {
        title: "Заголовок 1",
        text: "Текст карточки №1",
        link: "Текст ссылки карточки 1"
    },
    {
        title: "Заголовок 2",
        text: "Текст карточки №2",
        link: "Текст ссылки карточки 2"
    },
    {
        title: "Заголовок 2",
        text: "Текст карточки №2",
        link: "Текст ссылки карточки 2"
    },
    {
        title: "Заголовок 2",
        text: "Текст карточки №2",
        link: "Текст ссылки карточки 2"
    },
    {
        title: "Заголовок 2",
        text: "Текст карточки №2",
        link: "Текст ссылки карточки 2"
    },
    {
        title: "Заголовок 2",
        text: "Текст карточки №2",
        link: "Текст ссылки карточки 2"
    },
    
]
const htmlCardInner = (data) => `<div class="C-Card">
<img src="#" alt="">
<h1>${data.title}</h1>
<p>${data.text}</p>
<button><a href="">${data.link}</a></button>
</div>`

for(var i = 0; i<cards.length; i++){
    document.getElementById("Cards").innerHTML += htmlCardInner(cards[i])
}