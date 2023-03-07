const litematica = {name : document.getElementById("litematicaa").textContent.toLowerCase(), div : document.getElementById("litematica"), type : document.getElementById('li').textContent, form : document.getElementById('lit').textContent}, 
shematica = {name : document.getElementById("shematicaa").textContent.toLowerCase(), div : document.getElementById("shematica"),type : document.getElementById('sh').textContent, form : document.getElementById('she').textContent}, 
meteor = {name : document.getElementById("meteorr").textContent.toLowerCase(), div : document.getElementById("meteor"), type : document.getElementById('me').textContent, form : document.getElementById('met').textContent},
wurst = {name : document.getElementById("wurstt").textContent.toLowerCase(), div : document.getElementById("wurst"), type : document.getElementById('wu').textContent, form : document.getElementById('wur').textContent},
xray = {name : document.getElementById("xrayy").textContent.toLowerCase(), div : document.getElementById("xray"), type : document.getElementById('xr').textContent, form : document.getElementById('xra').textContent};

/* list of all object*/
let items = [litematica , shematica , meteor , wurst, xray];
let input;
//auto search //
document.getElementById('sb').addEventListener('keyup', e =>{
    refreshAll();
    getInput();
    filtre();
    src();
    search();
}
)

function search(){
    for(let i in items){
        let nameNoAccent = basic(items[i].name);
        if(nameNoAccent.includes(input)){                          
        }else{
            items[i].div.style.display = "none";                    
        }
    }
}

function basic(c){
    let lst = ["~", "`", '!', "@", '#', '$','%',"^","&",'*',"(",')',",","-","_",
    "+","=","{","}","[","]","|","/",' ',":",";",'"',"'","<",">",".","?"];
    let a = noAccent(c);
    let d = '%';
    for(let i in a ){
        if(verify(a.charAt(i), lst) == true){
        }else{
            d += a.charAt(i);
        }
    }
    return d.substring(1);
}

function verify(a, b){
    for(let i in b){
        if(b[i] == a){
            return true
        }else{
            continue;
        }
    }
    return false
}

function noAccent(a){
    let b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ",
      c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY",
      d="";
  for(let i = 0, j = a.length; i < j; i++) {
    let e = a.substr(i, 1);
    d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
  }
  return d;
}

function getInput(){
    input = basic(document.getElementById('sb').value.toLowerCase());
}

// new spcrit but use list here 

function filtre(){
    let ty = document.getElementById('catego').value;
    if(ty === 'all'){
        refreshAll()
        
        return;
    }else if(ty === 'bluid'){
        
        showBluid();
    }else if(ty === 'pvp'){
        
        showPvp();
    }else{
        
        showFarm();
    }
    
}

function refreshAll(){
    for(let i in items){items[i].div.style.display = '';}
}

function showBluid(){
    for(let i in items){
        if(items[i].type === 'bluid'){items[i].div.style.display = ''}
        else if (items[i].type ==='j' | items[i].type ==='k'){items[i].div.style.display = ''}
        else{
            items[i].div.style.display = 'none';
        }
    }
}

function showPvp(){
    for(let i in items){
        if(items[i].type === 'pvp'){items[i].div.style.display = ''}
        else if(items[i].type === 'g' | items[i].type === 'j'){items[i].div.style.display = ''}
        else{
            items[i].div.style.display = 'none';
        }
    }
}

function showFarm(){
    for(let i in items){
        if(items[i].type === 'farm'){items[i].div.style.display = ''}
        else if(items[i].type === 'g' | items[i].type === 'k'){items[i].div.style.display = ''}
        else{
            items[i].div.style.display = 'none';
        }
    }
}

function src(){
    let ty = document.getElementById('type').value

    if(ty == 0){
        filtre();
        return
    }else if(ty == 1 ){
        filtre()
        showForge()
    }else{
        filtre()
        showFabric()
    }
}

function showForge(){
    for(let i in items){
        if(items[i].form == 1 | items[i].form == 0){
           // items[i].div.style.display = '' pas actif
        }else{
            items[i].div.style.display ='none'
        }
    }
}

function showFabric(){
    for(let i in items){
        if(items[i].form == 2| items[i].form == 0){

        }else{
            items[i].div.style.display = 'none'
        }
    }
}