import { Layer } from '../Layer/index.js';
import './style.css';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
  console.log(layers);
  console.log(layers.color);

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
  
  <div class="drink__product">
    <div class="drink__cup">
      <img src=${image} />
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      
      <div class="layergroup"></div>
      
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">Objednat</button>
  </div>
  `;

  const layerElm = element.querySelector('.layergroup');
  //layerElm.append(Layer({ color: layers.color, label: layers.label }));
  layerElm.append(...layers.map((layer) => Layer(layer)));
  return element;
};
