{
  const btn = document.getElementById('btn')
  const p = document.querySelector('p')

  btn?.addEventListener('click',()=>{
    const endTime:number = new Date().getTime() + 3000
    console.log(new Date().getTime())
    console.log(endTime)
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
      }
    },100)
  })
}