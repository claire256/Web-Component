const progress = document.createElement('progress-bar')
 console.log('progress', progress)
 function handleClick(){
     progress.setAttribute('percent', 30)
 }

const checkbox = document.createElement('check-box')
 checkbox.addEventListener('click', handleClick)


