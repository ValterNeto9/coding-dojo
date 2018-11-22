const getNome = require('./bibliografias');
const names = ['joao silva',
                'paulo coelho',
                'celso de araujo'];

test('Retorna o nome Valter', () => {
    expect(getNome('Valter Silva')).toBe('SILVA, Valter');
});


test('Retorna o nome unico maiusculo', () => {
    expect(getNome('Valter')).toBe('VALTER');
});

/*test('Retorna os nomes de autores de obras bibliograficas', () => {
    expect()
});*/
