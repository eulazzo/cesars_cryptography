 <h1>Cesars Cryptography</h1>
 
Escrever programa, em qualquer linguagem de programação, que faça uma requisição HTTP para a url abaixo:
https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=SEU_TOKEN 

 O resultado da requisição vai ser um JSON.O primeiro passo é você salvar o conteúdo do JSON em um arquivo com o nome answer.json, que irá usar no restante do desafio.

Você deve usar o número de casas para decifrar o texto e atualizar o arquivo JSON, no campo decifrado. O próximo passo é gerar um resumo criptográfico do texto decifrado usando o algoritmo sha1 e atualizar novamente o arquivo JSON. OBS: você pode usar qualquer biblioteca de criptografia da sua linguagem de programação favorita para gerar o resumo sha1 do texto decifrado.
Seu programa deve submeter o arquivo atualizado para correção via POST para a API:

https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=SEU_TOKEN

OBS: a API espera um arquivo sendo enviado como multipart/form-data, como se fosse enviado por um formulário HTML, com um campo do tipo file com o nome answer. Considere isso ao enviar o arquivo.

 Regras

    As mensagens serão convertidas para minúsculas tanto para a criptografia quanto para descriptografia.
    No nosso caso os números e pontos serão mantidos, ou seja:

Normal: 1a.a

Cifrado: 1d.d

Por exemplo, considerando o número de casas = 3:

Normal: a ligeira raposa marrom saltou sobre o cachorro cansado

Cifrado: d oljhlud udsrvd pduurp vdowrx vreuh r fdfkruur fdqvdgr
