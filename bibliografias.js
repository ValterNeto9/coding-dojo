function getNome(nome) {
    var arrayNome;
    if(name.indexOf(" ")){
        arrayNome=nome.split(" ");
    }
    return arrayNome[1].toUpperCase() + ", " + arrayNome[0];
} 

module.exports = getNome; 
