function Curso(NomeCurso, NotaAprov, FaltaMax,ListEstudante) {
    this.NomeCurso = NomeCurso;
    this.NotaAprov = NotaAprov;
    this.FaltaMax = FaltaMax;
    this.ListEstudante = ListEstudante;
  }
  
  let curso1 = new Curso('curso 1', 6, 5,[]);
  let curso2 = new Curso('curso 2', 7, 10,[]);
  
  let listaCurso = [curso1, curso2];
  console.log(listaCurso);
  