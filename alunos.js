function Aluno(nome, qtfaltas, notas) {
    this.nome = nome;
    this.qtfaltas = qtfaltas;
    this.notas = notas;
  }
  
  let Aluno1 = new Aluno('Jose Silva', 0, [0, 10, 20]);
  let Aluno2 = new Aluno('Paulo Santos', 5, [0, 1, 2, 5, 6, 10]);
  let Aluno3 = new Aluno('Jose Santos', 10, [0, 5, 8]);
  let Aluno4 = new Aluno('Antonio Silva', 4, [0, 7, 9]);
  let Aluno5 = new Aluno('Maria dos santos', 6, [0, 3, 4]);
  let listaAlunos = [Aluno1, Aluno2, Aluno3, Aluno4, Aluno5];
  
  // para cada aluno, retorne um objeto com o nome e a média
  const calcularMedia = listaAlunos.map(function (aluno) {
    let soma = 0;
    for (const nota of aluno.notas) {
      soma += nota;
    }
    return { nome: aluno.nome, faltas: aluno.qtfaltas ,media: soma / aluno.notas.length };
  });
  
  console.log(calcularMedia);
  
  const faltas = listaAlunos.map(function (aluno) {
   let soma = 0;
    for (const nota of aluno.notas) {
      soma += nota;
    }
    return { nome: aluno.nome, faltas: aluno.qtfaltas + 1 ,media: soma / aluno.notas.length };
  });
  
  console.log(faltas);
  