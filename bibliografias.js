const lastNames = ['NETO', 'NETA', 'FILHO', 'FILHA', 'SOBRINHO', 'SOBRINHA']
const juncoes = ["da", "de", "do", "das", "dos"]

const getNome = ( nome ) => {
    const arrayNome = nome.split(" ");
    const lastName = arrayNome[ arrayNome.length-1 ]

    if(arrayNome.length > 1){
        return hasLastName( lastName ) 
            ? `${ arrayNome[arrayNome.length - 2].toUpperCase() } ${ arrayNome[arrayNome.length - 1].toUpperCase() }, ${ montarNome(arrayNome, 2) }`
            : arrayNome[arrayNome.length - 1].toUpperCase() + ", " + montarNome(arrayNome, 1)
    } 
    
    return nome.toUpperCase();
}

const formataNome = ( nome ) => {
    if( juncoes.includes( nome.toLowerCase() ) ) {
        return nome.toLowerCase();
    }
    return toCapitalizeFirst( nome );
}

const toCapitalizeFirst = ( _nome ) => {
    return _nome.substring(0, 1).toUpperCase() + _nome.substring(1, _nome.length ).toLowerCase()
}

const hasLastName = ( _name ) => {
    return lastNames.includes( _name.toUpperCase() )
}

const montarNome = ( arrayNome, qtdeNomes ) => {

    console.log('arraynome: qtde:', arrayNome, qtdeNomes)

    let segundaParte = "";
    arrayNome.slice(0, arrayNome.length - qtdeNomes).forEach(item => {
        segundaParte += formataNome(item);
        segundaParte += " ";
    });

    console.log('segundo', segundaParte)
    return segundaParte.trim();
}

module.exports.getNome = getNome;
module.exports.formataNome = formataNome;
module.exports.toCapitalizeFirst = toCapitalizeFirst;
module.exports.hasLastName = hasLastName;
module.exports.montarNome = montarNome;

