function changeMode (size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size.toString() + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
  }
}

function main () {
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const para = document.createElement("p");
  const node = document.createTextNode("Welcome Holberton!");
  para.appendChild(node);
  document.body.appendChild(para);

  const buttons = {
    spookyButton: document.createElement('button'),
    darkButton: document.createElement('button'),
    screamButton: document.createElement('button')
  };

  buttons.spookyButton.textContent = 'Spooky';
  buttons.darkButton.textContent = 'Dark mode';
  buttons.screamButton.textContent = 'Scream mode';

  for (const button in buttons) {
    document.body.appendChild(buttons[button]);
  }

  buttons.spookyButton.addEventListener('click', spooky);
  buttons.darkButton.addEventListener('click', darkMode);
  buttons.screamButton.addEventListener('click', screamMode);
}

main();
