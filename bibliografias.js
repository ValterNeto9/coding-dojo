
const lastNames = ['NETO', 'NETA', 'FILHO', 'FILHA', 'SOBRINHO', 'SOBRINHA']
const juncoes = ["da", "de", "do", "das", "dos"]

let getNome = ( nome ) => {
    const arrayNome = nome.split(" ");

    if(arrayNome.length > 1){

        // TODO Aprender:
        //if(arrayNome[arrayNome.length-1].toUpperCase().includes(lastNames))
        if(lastNames.indexOf( arrayNome[arrayNome.length-1].toUpperCase() ) > -1)
        {
            let segundaParte = ""
            arrayNome.slice( 0,arrayNome.length - 2 ).forEach(item => {
                segundaParte += formataNome(item)
                segundaParte += " "
            });
            return arrayNome[arrayNome.length - 2].toUpperCase() + " " + 
            arrayNome[arrayNome.length - 1].toUpperCase() +  ", " + segundaParte.trim();
        }
        else
        {
            let segundaParte = ""
            arrayNome.slice( 0,arrayNome.length - 1 ).forEach(item => {
                segundaParte += formataNome(item)
                segundaParte += " "
            });
            return arrayNome[arrayNome.length - 1].toUpperCase() + ", " + segundaParte.trim();
        }
    }
     else {
        return nome.toUpperCase();
    }
}

let formataNome = ( nome ) => {
    if(juncoes.indexOf(nome.toLowerCase()) > -1) {
        return nome.toLowerCase();
    }
    return nome.substring(0, 1).toUpperCase() + nome.substring(1, nome.length ).toLowerCase();
}

module.exports.getNome = getNome;
module.exports.formataNome = formataNome;