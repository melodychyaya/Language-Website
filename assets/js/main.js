/* img active 明暗切換 */ 
const img = document.querySelectorAll('.img')

function activeImg(){
  if(img){
    img.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
  }
}

img.forEach(l => l.addEventListener('click', activeImg))


/* group__card active-border 文字底線顏色切換 */ 
const groupCard = document.querySelectorAll('.group__card')

function activeCard(){
  if(groupCard){
    groupCard.forEach(l => l.classList.remove('active-border'))
    this.classList.add('active-border')
  }
}

groupCard.forEach(l => l.addEventListener('click', activeCard))


/*==================== GROUP ====================*/
const oneTab = document.querySelector('.one')
const twoTab =  document.querySelector('.two')
const threeTab =  document.querySelector('.three')
const fourTab =  document.querySelector('.four')
const fiveTab =  document.querySelector('.five')

const allFilteredDivs = document.querySelectorAll('.filtered-div')

// Turns node list into an array
const allFilteredDivsArray = Array.from(allFilteredDivs)

// one
oneTab.addEventListener('click', showOne)
function showOne() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.one) {
      div.classList.add('remove')
    }
  })
}

// two
twoTab.addEventListener('click', showTwo)
function showTwo() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.two) {
      div.classList.add('remove')
    }
  })
}

// three
threeTab.addEventListener('click', showThree)
function showThree() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.three) {
      div.classList.add('remove')
    }
  })
}

// three
fourTab.addEventListener('click', showFour)
function showFour() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.four) {
      div.classList.add('remove')
    }
  })
}

// five
fiveTab.addEventListener('click', showFive)
function showFive() {
  allFilteredDivsArray.forEach(div => {
    div.classList.remove('remove')

    if (!div.dataset.five) {
      div.classList.add('remove')
    }
  })
}



