import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
  
  <div class="drink__product">
    <div class="drink__cup">
      <img src=${image} />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      ${layers.color}
      ${Layer({ color: layers.color, label: layers.label })}
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  `;

  return element;
};
