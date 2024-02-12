const rangeInputs = document.querySelectorAll('input[type="range"]')
const check = document.querySelector('input[type="checkbox"')
const div_moth = document.querySelector('.value_m')
const value = document.querySelector('.value_money')
const view = document.querySelector('.card-title h2 span')

check.addEventListener('click',()=>{
    if(check.checked){
        div_moth.innerHTML = '/ yearly'
        value.innerHTML = value.innerHTML*2 + '.00'

    }else{
        div_moth.innerHTML = '/ month'
        value.innerHTML = value.innerHTML/2 + '.00'
    }

})



function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value

  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'

  pageView(val)

  if(!check.checked){ 
  document.querySelector('.value_money').innerHTML = `${val}.00`
  }else{
    document.querySelector('.value_money').innerHTML = `${val*2}.00`
  }
}


function pageView(val){
  let res
  switch(val){
    case '0':
      res = '0'
      break;
    case '8' || '16':
      res = 10
      break;
    case '16' || '32':
     res = 50
    break;

    case '24' || '48':
      res = 100
    break;

     case '32' || '64':
      res = 500
  }

  view.innerHTML = res + 'k'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
