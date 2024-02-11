const rangeInputs = document.querySelectorAll('input[type="range"]')
const check = document.querySelector('input[type="checkbox"')
const div_moth = document.querySelector('.value_m')
const value = document.querySelector('.value_money')

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
  if(!check.checked){
    
  document.querySelector('.value_money').innerHTML = `${val}.00`
  }else{
    document.querySelector('.value_money').innerHTML = `${val*2}.00`
  }
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})
