document.getElementById("btnConfirmar").onclick=function(){
    let frmChk=document.getElementById('frmCheckbox').elements;

    for(i =0;i<frmChk.length;i++){
        if(frmChk[i].checked){
            console.log(frmChk[i])
        }
    }
    return false
}