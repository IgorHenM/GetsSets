function create(){
    let classname = document.getElementById("classname").value;
    let atrs = document.getElementById("varname").value;
    let tipo = document.getElementById("type").value;
    let res = document.getElementById("resultado");
    var msg = document.getElementById("msg");

    if(classname == "" || atrs == "" || tipo == ""){
        alert("Adicione todos os valores corretamente.");
    }else{
        var param1 = "";
        var param2 = "";
    
        var atrvet = atrs.split(" ");
        var tipovet = tipo.split(" ");
        for(let m = 0; m < atrvet.length; m++){
            if(tipovet[m] == "byte"|| tipovet[m] == "short" || tipovet[m] == "int" || tipovet[m] == "long" || tipovet[i] == "float" || tipovet[i] == "double"){
                if(m == atrvet.length -1){
                    param1 += "0";
                }else{
                    param1 += "0,";
                }
            }else if(tipovet[i] == "String" || tipovet[i] == "char"){
                if(m == atrvet.length -1){
                    param1 += "null";
                }else{
                    param1 += "null,";
                }
            }else if(tipovet[m] == "boolean"){
                if(m == atrvet.length -1){
                    param1 += "true";
                }else{
                    param1 += "true,";
                }
            }
        }
    for(let l = 0; l < atrvet.length; l++){
        if(l == atrvet.length - 1){
            param2 += `${tipovet[l]} ${atrvet[l]}`
        }else{
            param2 += `${tipovet[l]} ${atrvet[l]},`
        }
    }

    let content = 
`public class ${classname}{<br>`

    if(tipovet.length < atrvet.length){
        alert("Digite o número correto de atributos!");
    }else if(tipovet.length > atrvet.length){
        alert("Digite o número correto de atributos!");
    }else{
    for(let i = 0; i < atrvet.length; i++){
        content +=
    `private ${tipovet[i]} ${atrvet[i]};<br>`;
    }
    content += 
    `public ${classname}(){<br>
        this(${param1});<br>
    }<br>
    public ${classname}(${param2}){<br>`;
    for(let k = 0; k < atrvet.length; k++){
        if(k == atrvet.length - 1){
            content += 
            `   this.${atrvet[k]} = ${atrvet[k]};<br>
        }<br>`
        }else{
            content +=
            `   this.${atrvet[k]} = ${atrvet[k]};<br>`
        }
    }
    for(let j = 0; j < atrvet.length; j++){
        if(j == atrvet.length - 1){
            content += 
    `public void set${atrvet[j]}(${tipovet[j]} ${atrvet[j]}){<br>
        this.${atrvet[j]} = ${atrvet[j]};<br>
    }<br>
    public ${tipovet[j]} get${atrvet[j]}(){<br>
        return ${atrvet[j]};<br>
    }<br>
}`
        }else{
            content += 
    `public void set${atrvet[j]}(${tipovet[j]} ${atrvet[j]}){<br>
        this.${atrvet[j]} = ${atrvet[j]};<br>
    }<br>
    public ${tipovet[j]} get${atrvet[j]}(){<br>
        return ${atrvet[j]};<br>
    }<br>`
        }
    }
    res.innerHTML = content;
    navigator.clipboard.writeText(res.innerText);
    
    Mensag();
    function Mensag(){
       msg.style.display = "block";
       msg.style.transition = "1s ease";
       msg.style.top = "2px";

       setTimeout(retorno, 3000);

       function retorno(){
            msg.style.transition = "1s ease";
            msg.style.top = "-46px";
       }
    }
    }
    }
}