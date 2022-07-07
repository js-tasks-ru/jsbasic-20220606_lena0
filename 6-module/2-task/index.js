import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  constructor(product) {
    this.product = product;
    this.template();
    this.onClick();
    this.btn = this.elem.querySelector('.card__button');
    this.btn.addEventListener('click', (event) => {
      if (event.target.closest('.card__button')) {
        let myEvent = new CustomEvent('product-add', { // имя события должно быть именно "product-add"
          detail: this.product.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        this.btn.dispatchEvent(myEvent);
      }
    });
  }

  template() {
    let card = createElement(`<div class="card">
    <div class="card__top">
        <img src="/assets/images/products/${this.product.image}" class="card__image" alt="product">
        <span class="card__price">€${this.product.price.toFixed(2)}</span>
    </div>
    <div class="card__body">
        <div class="card__title">${this.product.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
  </div>`);

    this.elem = card;
  }

  onClick(event) {
    this.elem.addEventListener('product-add', (event) => {
      return event.detail;
    });
  }
}
