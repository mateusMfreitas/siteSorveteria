function alertar(){
    alert("Você será redirecionado ao WhatsApp da empresa! Faça seu pedido!");
}//alertar

function soma(){
    var selecionados = document.getElementsByName('OptSorvete');
    for (var i = 0; i < selecionados.length; i++){
        if (selecionados[i].checked) {
            if(selecionados[i].id == "opt-1"){
                document.getElementById("txt").innerHTML= "Pote de Morango";
            }else if (selecionados[i].id == "opt-2") {
                document.getElementById("txt").innerHTML= "Pote de Chocolate";
            }else if (selecionados[i].id == "opt-3") {
                document.getElementById("txt").innerHTML= "Pote de Creme";
            }
            else if (selecionados[i].id == "opt-4") {
                document.getElementById("txt").innerHTML= "Picolé de Morango";
            }
            else if (selecionados[i].id == "opt-5") {
                document.getElementById("txt").innerHTML= "Picolé de Limão";
            }
            else if (selecionados[i].id == "opt-6") {
                document.getElementById("txt").innerHTML= "Picolé de Maracujá";
            }
            else if (selecionados[i].id == "opt-7") {
                document.getElementById("txt").innerHTML= "Zero Lactose de Mirtilo";
            }
            else if (selecionados[i].id == "opt-8") {
                document.getElementById("txt").innerHTML= "Zero Lactose de Maracujá";
            }
            else if (selecionados[i].id == "opt-9") {
                document.getElementById("txt").innerHTML= "Zero Lactose de Amora";
            }
            else if (selecionados[i].id == "opt-10") {
                document.getElementById("txt").innerHTML= "Pote Especial de Frutas Vermelhas";
            }
            else if (selecionados[i].id == "opt-11") {
                document.getElementById("txt").innerHTML= "Pote Especial de Bombom";
            }
            else if (selecionados[i].id == "opt-12") {
                document.getElementById("txt").innerHTML= "Picolé Especial de Uva Suíça";
            }
            else if (selecionados[i].id == "opt-13") {
                document.getElementById("txt").innerHTML= "Picolé Especial de Bombom Recheado";
            }
            else if (selecionados[i].id == "opt-14") {
                document.getElementById("txt").innerHTML= "Zero Lactose Especial de Napolitano";
            }
            else if (selecionados[i].id == "opt-15") {
                document.getElementById("txt").innerHTML= "Zero Lactose Especial de Frutas Vermelhas em Pedaços";
            }
        }
    }
}//soma
