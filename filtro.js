
function filtrar(){
var selecionafiltro = document.querySelector("#filtrar");
        selecionafiltro.addEventListener("input", function () {
            this.value;
            var perguntas = document.querySelectorAll("#iddbuscasection");
            if (this.value.length > 0) {
                for (var i = 0; i < perguntas.length; i++) {
                    var pergunta = perguntas[i];
                    var titulo = pergunta.querySelector(".palavrasquequerfiltrar");
                    var textotitulo = titulo.textContent;
                    var expresao = new RegExp(this.value, "i");
                    if (!expresao.test(textotitulo)) {
                        //pergunta.classList.add("fadeOutRight");
                        pergunta.classList.add("invisivel");
                    } else {
                        pergunta.classList.remove("invisivel");
                    }
                }
            } else {
                for (var i = 0; i < perguntas.length; i++) {
                    var pergunta = perguntas[i];
                    pergunta.classList.remove("invisivel");
                }
            }
        });
    }
