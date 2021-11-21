document.getElementById("btnConfirmar").onclick=function(){
    let frmChk=document.getElementById('frmCheckbox').elements;
    let resultado='';

    for(i =0;i<frm.Chk.length;i++){
        if(frmChk[i].checked){
            resultado = resultado+frmChk[i].value+" ";
        }
        console.log(resultado)
    }
}