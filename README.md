# Ambient Light Experiments

Esse repositório é destinado a alguns exemplos que complementam a palestra sobre evetnos de luz do ambiente.

### Conteúdo do Slide:

Com os eventos de luz do ambiente conseguimos de maneira prática fazer uma página web ou um aplicativo reconhecer qualquer mudança na intensidade da luz.
E isso nos permite reagir a essas mudanças, por exemplo, alterando o contraste de cores da interface do usuário (UI) ou alterando a exposição necessária para tirar uma foto.

Quando o sensor de luz de um dispositivo detecta uma mudança no nível de luz, ele notifica o navegador dessa mudança, logo o navegador dispara um evento DeviceLightEvent que fornece informações sobre a intensidade da luz exata do ambiente.
Este evento pode ser capturado no objeto window usando o método addEventListener (passando o nome do evento devicelight) ou com window.ondevicelight.
Então você pode acessar a intensidade da luz expressa em “lux” através da propriedade DeviceLightEvent.value.

```javascript
window.addEventListener('devicelight', function(event) {
  var html = document.getElementsByTagName('html')[0];
  if (event.value < 50) {
html.classList.add('darklight'); html.classList.remove('brightlight');
  } else {
html.classList.add('brightlight'); html.classList.remove('darklight');
  }
});
```