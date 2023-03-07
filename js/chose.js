let forge = id("Forge"),
fabric = id("Fabric"), fa = id("fa"), fo = id("fo"), fab = id("fab"), sku = id("ji");
showFabric()
console.log(sku)
function showForge(){
    forge.style.backgroundColor = "rgb(112, 109, 109)";
    fo.style.display = '';
    fabric.style.backgroundColor = "rgb(70, 70, 70)";
    fa.style.display = 'none';
    fab.style.display = '';
    sku.style.display = 'none';
}

function showFabric(){
    fabric.style.backgroundColor = "rgb(112, 109, 109)";
    fa.style.display = '';
    forge.style.backgroundColor = 'rgb(70, 70, 70)';
    fo.style.display = 'none';
    fab.style.display = 'none';
    sku.style.display = '';
}




function id(a){
    return document.getElementById(a);
}
