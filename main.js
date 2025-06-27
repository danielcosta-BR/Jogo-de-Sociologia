function selecionar1(event) {
  event.preventDefault();

  const radioButtons1 = document.querySelectorAll('input[name="grupoRadios1"]');
  let opcaoSelecionada1 = null;

  for (const radioButton1 of radioButtons1) {
    if (radioButton1.checked) {
      opcaoSelecionada1 = radioButton1.value;
      break;
    }
  }

  const resultadoCorreto1 = document.getElementById('content-resultV1');
  const resultadoIncorreto1 = document.getElementById('content-resultF1');

  resultadoCorreto1.classList.add('hideV1');
  resultadoIncorreto1.classList.add('hideF1');

  if (opcaoSelecionada1) {
    const respostaCorreta = 'D';
    if (opcaoSelecionada1 === respostaCorreta) {
      resultadoCorreto1.classList.remove('hideV1');
    } else {
      resultadoIncorreto1.classList.remove('hideF1');
    }
  }
}

function selecionar2(event) {
  event.preventDefault();

  const radioButtons2 = document.querySelectorAll('input[name="grupoRadios2"]');
  let opcaoSelecionada2 = null;

  for (const radioButton2 of radioButtons2) {
    if (radioButton2.checked) {
      opcaoSelecionada2 = radioButton2.value;
      break;
    }
  }

  const resultadoCorreto2 = document.getElementById('content-resultV2');
  const resultadoIncorreto2 = document.getElementById('content-resultF2');

  resultadoCorreto2.classList.add('hideV2');
  resultadoIncorreto2.classList.add('hideF2');

  if (opcaoSelecionada2) {
    const respostaCorreta = 'B';
    if (opcaoSelecionada2 === respostaCorreta) {
      resultadoCorreto2.classList.remove('hideV2');
    } else {
      resultadoIncorreto2.classList.remove('hideF2');
    }
  }
}

function selecionar3(event) {
  event.preventDefault();

  const radioButtons3 = document.querySelectorAll('input[name="grupoRadios3"]');
  let opcaoSelecionada3 = null;

  for (const radioButton3 of radioButtons3) {
    if (radioButton3.checked) {
      opcaoSelecionada3 = radioButton3.value;
      break;
    }
  }

  const resultadoCorreto3 = document.getElementById('content-resultV3');
  const resultadoIncorreto3 = document.getElementById('content-resultF3');
  const resultadoInesperado3 = document.getElementById('content-resultI3');

  resultadoCorreto3.classList.add('hideV3');
  resultadoIncorreto3.classList.add('hideF3');
  resultadoInesperado3.classList.add('hideI3')

  if (opcaoSelecionada3) {
    const respostaCorreta = 'A';
    const respostaInesperada  = 'D';
    if (opcaoSelecionada3 === respostaCorreta) {
      resultadoCorreto3.classList.remove('hideV3');
    } else if (opcaoSelecionada3 === respostaInesperada) {
      resultadoInesperado3.classList.remove('hideI3');
    } else {
      resultadoIncorreto3.classList.remove('hideF3');
    }
  }
}

function selecionar4(event) {
  event.preventDefault();

  const radioButtons4 = document.querySelectorAll('input[name="grupoRadios4"]');
  let opcaoSelecionada4 = null;

  for (const radioButton4 of radioButtons4) {
    if (radioButton4.checked) {
      opcaoSelecionada4 = radioButton4.value;
      break;
    }
  }

  const resultadoCorreto4 = document.getElementById('content-resultV4');
  const resultadoIncorreto4 = document.getElementById('content-resultF4');

  resultadoCorreto4.classList.add('hideV4');
  resultadoIncorreto4.classList.add('hideF4');

  if (opcaoSelecionada4) {
    const respostaCorreta = 'B';
    if (opcaoSelecionada4 === respostaCorreta) {
      resultadoCorreto4.classList.remove('hideV4');
    } else {
      resultadoIncorreto4.classList.remove('hideF4');
    }
  }
}

function selecionar5(event) {
  event.preventDefault();

  const radioButtons5 = document.querySelectorAll('input[name="grupoRadios5"]');
  let opcaoSelecionada5 = null;

  for (const radioButton5 of radioButtons5) {
    if (radioButton5.checked) {
      opcaoSelecionada5 = radioButton5.value;
      break;
    }
  }

  const resultadoCorreto5 = document.getElementById('content-resultV5');
  const resultadoIncorreto5 = document.getElementById('content-resultF5');

  resultadoCorreto5.classList.add('hideV5');
  resultadoIncorreto5.classList.add('hideF5');

  if (opcaoSelecionada5) {
    const respostaCorreta = 'C';
    if (opcaoSelecionada5 === respostaCorreta) {
      resultadoCorreto5.classList.remove('hideV5');
    } else {
      resultadoIncorreto5.classList.remove('hideF5');
    }
  }
}

function selecionar6(event) {
  event.preventDefault();

  const radioButtons6 = document.querySelectorAll('input[name="grupoRadios6"]');
  let opcaoSelecionada6 = null;

  for (const radioButton6 of radioButtons6) {
    if (radioButton6.checked) {
      opcaoSelecionada6 = radioButton6.value;
      break;
    }
  }

  const resultadoCorreto6 = document.getElementById('content-resultV6');
  const resultadoIncorreto6 = document.getElementById('content-resultF6');

  resultadoCorreto6.classList.add('hideV6');
  resultadoIncorreto6.classList.add('hideF6');

  if (opcaoSelecionada6) {
    const respostaCorreta = 'E';
    if (opcaoSelecionada6 === respostaCorreta) {
      resultadoCorreto6.classList.remove('hideV6');
    } else {
      resultadoIncorreto6.classList.remove('hideF6');
    }
  }
}

function selecionar7(event) {
  event.preventDefault();

  const radioButtons7 = document.querySelectorAll('input[name="grupoRadios7"]');
  let opcaoSelecionada7 = null;

  for (const radioButton7 of radioButtons7) {
    if (radioButton7.checked) {
      opcaoSelecionada7 = radioButton7.value;
      break;
    }
  }

  const resultadoCorreto7 = document.getElementById('content-resultV7');
  const resultadoIncorreto7 = document.getElementById('content-resultF7');

  resultadoCorreto7.classList.add('hideV7');
  resultadoIncorreto7.classList.add('hideF7');

  if (opcaoSelecionada7) {
    const respostaCorreta = 'A';
    if (opcaoSelecionada7 === respostaCorreta) {
      resultadoCorreto7.classList.remove('hideV7');
    } else {
      resultadoIncorreto7.classList.remove('hideF7');
    }
  }
}

function selecionar8(event) {
  event.preventDefault();

  const radioButtons8 = document.querySelectorAll('input[name="grupoRadios8"]');
  let opcaoSelecionada8 = null;

  for (const radioButton8 of radioButtons8) {
    if (radioButton8.checked) {
      opcaoSelecionada8 = radioButton8.value;
      break;
    }
  }

  const resultadoCorreto8 = document.getElementById('content-resultV8');
  const resultadoIncorreto8 = document.getElementById('content-resultF8');

  resultadoCorreto8.classList.add('hideV8');
  resultadoIncorreto8.classList.add('hideF8');

  if (opcaoSelecionada8) {
    const respostaCorreta = 'B';
    if (opcaoSelecionada8 === respostaCorreta) {
      resultadoCorreto8.classList.remove('hideV8');
    } else {
      resultadoIncorreto8.classList.remove('hideF8');
    }
  }
}

function selecionar9(event) {
  event.preventDefault();

  const radioButtons9 = document.querySelectorAll('input[name="grupoRadios9"]');
  let opcaoSelecionada9 = null;

  for (const radioButton9 of radioButtons9) {
    if (radioButton9.checked) {
      opcaoSelecionada9 = radioButton9.value;
      break;
    }
  }

  const resultadoCorreto9 = document.getElementById('content-resultV9');
  const resultadoIncorreto9 = document.getElementById('content-resultF9');

  resultadoCorreto9.classList.add('hideV9');
  resultadoIncorreto9.classList.add('hideF9');

  if (opcaoSelecionada9) {
    const respostaCorreta = 'D';
    if (opcaoSelecionada9 === respostaCorreta) {
      resultadoCorreto9.classList.remove('hideV9');
    } else {
      resultadoIncorreto9.classList.remove('hideF9');
    }
  }
}

function selecionar10(event) {
  event.preventDefault();

  const radioButtons10 = document.querySelectorAll('input[name="grupoRadios10"]');
  let opcaoSelecionada10 = null;

  for (const radioButton10 of radioButtons10) {
    if (radioButton10.checked) {
      opcaoSelecionada10 = radioButton10.value;
      break;
    }
  }

  const resultadoCorreto10 = document.getElementById('content-resultV10');
  const resultadoIncorreto10 = document.getElementById('content-resultF10');

  resultadoCorreto10.classList.add('hideV10');
  resultadoIncorreto10.classList.add('hideF10');

  if (opcaoSelecionada10) {
    const respostaCorreta = 'C';
    if (opcaoSelecionada10 === respostaCorreta) {
      resultadoCorreto10.classList.remove('hideV10');
    } else {
      resultadoIncorreto10.classList.remove('hideF10');
    }
  }
}




document.addEventListener('DOMContentLoaded', () => {
  const caixasRadio = document.querySelectorAll('[id^="caixaratio"]'); // Agora seleciona as labels

  caixasRadio.forEach(caixa => {
    caixa.addEventListener('click', () => {
      const radioButton1 = caixa.querySelector('input[type="radio"]');
      if (radioButton1) {
        radioButton1.checked = true;
      }
      const radioButton2 = caixa.querySelector('input[type="radio"]');
      if (radioButton2) {
        radioButton2.checked = true;
      }
    });
  });
  
});