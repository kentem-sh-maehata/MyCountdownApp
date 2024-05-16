{
  const btn = document.getElementById('btn')
  const p = document.querySelector('p')

  btn?.addEventListener('click',()=>{
    if(p?.textContent) p.textContent = "00:03"
    btn.disabled = true
    btn.classList.add('enabled')
    const endTime:number = new Date().getTime() + 3000
    
    const setinterval = setInterval(()=>{
      var remain = endTime - new Date().getTime()
      console.log(remain)
      if(remain < 2000 && p?.textContent){
        if(p?.textContent) p.textContent = "00:02"
      }
      if (remain < 1000){
        if(p?.textContent) p.textContent = "00:01"
      }
      if(remain < 0){
        if(p?.textContent) p.textContent = "00:00"
        clearInterval(setinterval)
        btn.classList.remove('enabled')
        btn.disabled = false
      }
    },100)
  })
}