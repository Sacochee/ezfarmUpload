// non utilisé

let un = {div : document.getElementById('un')}, 
deux = {div : document.getElementById('deux')}, 
trois = {div : document.getElementById('trois')},
quatres = {div : document.getElementById('quatres')}
let item = [un, deux, trois, quatres]

let cinq = {div : document.getElementById('cinq')},
six = { div : document.getElementById('six')},
sept = {div : document.getElementById('sept')}
let items = [cinq, six, sept];

let huit = {div : document.getElementById('huit')},
neuf = {div : document.getElementById('neuf')}
let itemss = [huit, neuf];

let dix = {div : document.getElementById('dix')},
onze = {div : document.getElementById('onze')};
douze = {div : document.getElementById('douze')},
treize = {div : document.getElementById('treize')},
quatorze = {div : document.getElementById('quatorze')},
quinze = {div : document.getElementById('quinze')}
let itemsss = [dix, onze, douze, treize, quinze, quatorze]

let seize = {div : document.getElementById('seize')};
dixsept = {div : document.getElementById('dixsept')},
dixhuit = {div : document.getElementById('dixhuit')}
let itemssss = [seize, dixsept, dixhuit]
let click = true;
let a ;
function show(j, nb){
    allClose();
    if(nb != a){
        click = true;
    }
    print(click, j);
    
}

function print(a, items){
    if(a == true){
        for(let i in items){
            items[i].div.style.display = '';
        }
    }else{
        for(let i in items){
            items[i].div.style.display = 'none';
        }
    }
}

function allClose(){
    let lst = [un, deux , trois, quatres, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize, dixsept, dixhuit];
    for(let i in lst){
        lst[i].div.style.display = 'none';
    }
}
allClose();