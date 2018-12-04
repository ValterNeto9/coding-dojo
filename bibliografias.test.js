const getNome = require('./bibliografias').getNome;
const formataNome = require('./bibliografias').formataNome;
const names = ['joao silva',
                'paulo coelho',
                'celso de araujo'];

test('Retorna o nome unico maiusculo', () => {
    expect(getNome('Valter')).toBe('VALTER');
});

test('Retorna com dois nomes', () => {
    expect(getNome('Valter Silva')).toBe('SILVA, Valter');
});

test('Retorna com dois tres nomes', () => {
    expect(getNome('Valter Jose Silva')).toBe('SILVA, Valter Jose');
});

test('Retorna com tres nomes', () => {
    expect(getNome('Valter Jose Silva')).toBe('SILVA, Valter Jose');
});

test('Retorna nomes tratando NETO/FILHO/ETC', () => {
    expect(getNome('Valter Jose Neto')).toBe('JOSE NETO, Valter');
});

test('Retorna nomes tratando de/da/do/ETC', () => {
    expect(getNome('Valter da Silva')).toBe('SILVA, Valter da');
});

test('Trata formatação', () => {
    expect(getNome('valter silva')).toBe('SILVA, Valter');
});

test('Formata Nome', () => {
    expect(formataNome('valter')).toBe('Valter');
});


/*test('Retorna os nomes de autores de obras bibliograficas', () => {
    expect()
});*/
