
document.getElementById("btnConfirmar").onclick=function(){
    let frmChk=document.getElementById('frmCheckbox').elements;
    let sabor

    for(i =0;i<frmChk.length;i++){
        if(frmChk[i].checked){
            console.log(frmChk[i].value)
            if(frmChk[i].value==1){
                sabor = "morango"
            }else if(frmChk[i].value==2){
                sabor = "chocolate"
            }else{
                sabor = "creme"
            }
            adicionarCarrinho(sabor, 20)

        }
    }
    return false
}

function adicionarCarrinho(produto,valor){
    localStorage.setItem("produto", produto)
    localStorage.setItem("valor", valor)
    mostrarCarrinho()


}
function mostrarCarrinho(){
    for(var i in localStorage) {
       // console.log(i + ' = ' + localStorage[i]);
        document.getElementById("textoCarrinho").innerHTML+=localStorage.getItem("produto")
        console.log(localStorage.key(0))
    }
}

