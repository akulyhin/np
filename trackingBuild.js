import refs from './refs.js';

function trackingBuild (element) {
    refs.trackingResult.classList.remove('is-hidden');
    refs.trackingResult.innerHTML = `
  <p><b>Город получателя:</b> ${element.CityRecipient}</p>
  <p><b>Номер отделения:</b> ${element.WarehouseRecipient}</p>
  <p><b>Статус посылки:</b> ${element.Status}</p>
  <p><b>Ориентировочная дата доставки:</b> ${element.ScheduledDeliveryDate}</p>
  <p><b>Получатель:</b> ${element.RecipientFullNameEW}</p>
  <p><b>Телефон получателя:</b> <a href="tel:${element.PhoneRecipient}">${element.PhoneRecipient}</a></p>
  <p><b>Наложенный платеж (+комиссия):</b> ${element.ExpressWaybillAmountToPay} грн.</p>
  <p><b>Стоимость доставки:</b> ${element.DocumentCost} грн.</p>`
}

export default trackingBuild;