
let heroCards = document.querySelectorAll(".heroCards .heroCard")
const order = ["heroLeft", "heroCenter", "heroRight", "heroBack"]
function setOrder(order) {
  heroCards.forEach((heroCard) => {
    heroCard.classList.remove("heroLeft", "heroCenter", "heroRight", "heroBack")
  })
  heroCards.forEach((heroCard, cardIndex) => {
    heroCard.classList.add(order[cardIndex])
  })
}
setOrder(order)
let smCards = document.querySelectorAll(".smHeadCard")
let smHeadContents = document.querySelectorAll(".smHeadCardContent")
smCards.forEach((card, cardIndex) => {
  card.addEventListener("click", () => {
    card.classList.toggle("active")
    smHeadContents.forEach((cardCont, cardContIndex) => {
      if (cardIndex == cardContIndex) {
        cardCont.classList.toggle("active")
      }
    })
    smHeadContents.forEach((cardCont, cardContIndex) => {
      if (cardIndex != cardContIndex) {
        cardCont.classList.remove("active")
      }
    })
    smCards.forEach(i => {
      if (i != card) {
        i.classList.remove("active")
      }
    })
  })
})
let open = document.querySelector(".open")
let close = document.querySelector(".close")
let smNavContent = document.querySelector(".smallScreenNav .navContent")
smNavContent.style.display = "none"
open.style.display = "block"
close.style.display = "none"
open.addEventListener("click", () => {
  close.style.display = "block"
  open.style.display = "none"
  smNavContent.style.display = "block"
})
close.addEventListener("click", () => {
  open.style.display = "block"
  close.style.display = "none"
  smNavContent.style.display = "none"
})
let prev = document.querySelector(".heroPrev")
let next = document.querySelector(".heroNext")
next.addEventListener("click", () => {
  order.unshift(order.pop());
  setOrder(order);
})
prev.addEventListener("click", () => {
  order.push(order.shift());
  setOrder(order);
})
setInterval(() => {
  order.unshift(order.pop());
  setOrder(order);
}, 5000)

let items = document.querySelectorAll(".accordionItem")
items.forEach(item => {
  let accordionTital = item.querySelector(".accordionTital")
  let accordionNumber = item.querySelector(".accordionNumber")
  accordionTital.addEventListener("click", () => {
    items.forEach(i => {
      if (i == item) {
        i.classList.toggle("active")
      } else {
        i.classList.remove("active")
      }
    })
  })
  accordionNumber.addEventListener("click", () => {
    items.forEach(i => {
      if (i == item) {
        i.classList.toggle("active")
      } else {
        i.classList.remove("active")
      }
    })
  })
})
let infoButton = document.querySelectorAll(".infoButton button")
infoButton.forEach((button, btnIndex) => {
  button.addEventListener("click", () => {
    infoButton.forEach((btn) => {
      btn.classList.remove("infoBtnActive", "infoBtnDeactivate")
      let bluetop = btn.querySelector(".blueTop")
      let buttomRemove = btn.querySelector(".buttomRemove")
      if (bluetop) bluetop.remove();
      if (buttomRemove) buttomRemove.remove();
    })
    button.classList.add("infoBtnActive")
    button.prepend(Object.assign(document.createElement("div"), { className: "blueTop" }));
    button.append(Object.assign(document.createElement("div"), { className: "buttomRemove" }));

    // let blueTop=document.createElement("div")
    // let buttomRemove=document.createElement("div")
    // blueTop.className="blueTop"
    // buttomRemove.className="buttomRemove"
    // button.prepend(blueTop)
    // button.append(buttomRemove)

    let imgsection = document.querySelectorAll(".imageSection")
    imgsection.forEach((imagesCard) => {
      let card = imagesCard.querySelectorAll("ul li")
      card.forEach((cd) => {
        cd.classList.remove("imgactive")
        cd.classList.remove("imginactive")
        for (let i = 0; i < card.length; i++) {
          if (i == btnIndex) {
            card[i].classList.add("imgactive")
          }
          else {
            card[i].classList.add("imginactive")
          }
        }
      })
    })
  })
})
