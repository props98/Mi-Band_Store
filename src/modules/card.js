import { getData } from "./api";
import { openModal, closeModal } from "./modals";

export const cartFunc = () => {
  const cartModal = document.querySelector('#cart-modal');
  const openCardBtn = document.getElementById('open-cart-btn');
  const closeBtns = cartModal.querySelectorAll('.close-btn');
  const container = document.getElementById('cart-container');

  const render = (data) => {
    container.innerHTML = '';

    data.forEach((item) => {
      container.insertAdjacentHTML('beforeend', `
        <div class="row border-bottom pb-3 pt-3">
          <div class="col col-12 col-md-6 mb-3 mb-md-0 fs-4">
              ${item.name}
          </div>
          <div
              class="col col-12 col-md-6 fs-4 d-flex align-items-center justify-content-end flex-wrap">
              <h4 class="me-3 d-flex align-itemns-center">${item.price * item.count} ₽</h4>
              <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"
                  id="control-dec">
                  -
              </button>
              <h6 class="cart-item-count me-3 ms-3">1</h6>
              <button type="button" class="btn btn-outline-dark btn-sm cart-item-controls"
                  id="control-inc">
                  +
              </button>
          </div>
        </div>
      `)
    })
  }

    openCardBtn.addEventListener('click', () => {
      getData('/cart')
      .then((data) => {
        render(data);
        openModal(cartModal);
        })
        .catch((error) => {
          console.error('Произошла ошибка!');
        })
    })

    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        closeModal(cartModal);
      })
    });
}
