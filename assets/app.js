const toggle=document.querySelector('.mobile-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}

function demoAlert(msg){alert(msg);}
function demoSubmit(e,msg){e.preventDefault(); alert(msg); return false;}

const params = new URLSearchParams(location.search);
if(location.pathname.endsWith('quote.html') && params.get('type')){
  const map={printing:'옵셋인쇄',lamination:'라미네이팅',foil:'금박/은박',diecut:'톰슨/도무송',binding:'제본/접착',packing:'검수/포장'};
  const target=map[params.get('type')];
  if(target){
    document.querySelectorAll('.check-grid label').forEach(label=>{
      if(label.textContent.trim().includes(target.split('/')[0])){
        const input=label.querySelector('input'); if(input) input.checked=true;
      }
    });
  }
}