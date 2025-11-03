fetch("toolbar.html")
  .then(r=>r.text())
  .then(h=>{
    document.body.insertAdjacentHTML("beforeend",h);
    const check=setInterval(()=>{
      const c=document.getElementById("fab-toolbar"),
            m=document.getElementById("fab-main");
      if(c&&m){clearInterval(check);
        window.addEventListener("scroll",()=>{
          if(scrollY>250){c.classList.add("goTopMode");m.innerHTML='<i class="fas fa-arrow-up"></i>';}
          else{c.classList.remove("goTopMode");m.innerHTML='<i class="fas fa-tools"></i>';}
        });
        m.addEventListener("click",()=>{if(c.classList.contains("goTopMode"))scrollTo({top:0,behavior:"smooth"});});
      }
    },50);
  });