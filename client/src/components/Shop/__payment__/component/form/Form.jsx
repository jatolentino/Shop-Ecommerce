import React, { useEffect, useState, useRef } from "react";

const currentYear = new Date().getFullYear();
const monthsArr = Array.from({ length: 12 }, (x, i) => {
  const month = i + 1;
  return month <= 9 ? "0" + month : month;
});
const yearsArr = Array.from({ length: 9 }, (_x, i) => currentYear + i);

export default function Form({
  cardMonth,
  cardYear,
  onUpdateState,
  cardNumberRef,
  cardHolderRef,
  cardZipRef,
  cardDateRef,
  onCardInputFocus,
  onCardInputBlur,
  cardCvv,
  children,
  theName,
  setTheName,
  theZip,
  setTheZip,
  shippingChecked,
}) {
  const [cardNumber, setCardNumber] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setTheName(theName);
    onUpdateState(name, value);
  };

  useEffect(() => {
    setTheName(theName);
    setTheZip(theZip);
  },[theName])

  // Improve the regex check with a smother approach, check card component.
  const onCardNumberChange = (event) => {
    let { value, name } = event.target;
    let cardNumber = value;
    value = value.replace(/\D/g, "");
    if (/^3[47]\d{0,13}$/.test(value)) {
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(value)) {
      // diner's club, 14 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{6})/, "$1 $2 ");
    } else if (/^\d{0,16}$/.test(value)) {
      // regular cc number, 16 digits
      cardNumber = value
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
    }

    setCardNumber(cardNumber.trimRight());
    onUpdateState(name, cardNumber);
  };

  const onCvvFocus = (event) => {
    onUpdateState("isCardFlipped", true);
  };

  const onCvvBlur = (event) => {
    onUpdateState("isCardFlipped", false);
  };

  return (
    <div className="card-form">
      <div className="card-list">{children}</div>
      <div className="card-form__inner">
        <div className="flex flex-row ">
          <div className="card-input w-100">
            <label htmlFor="cardNumber" className="card-input__label">
              Card Number
            </label>
            <input
              type="tel"
              name="cardNumber"
              className="card-input__input"
              autoComplete="off"
              onChange={onCardNumberChange}
              maxLength="19"
              ref={cardNumberRef}
              onFocus={(e) => onCardInputFocus(e, "cardNumber")}
              onBlur={onCardInputBlur}
              value={cardNumber}
            />
          </div>

          <div className="card-input ml-10">
            <label htmlFor="cardZip" className="card-input__label">
              ZIP Code
            </label>
            <input
              type="tel"
              className="card-input__input"
              autoComplete="off"
              name="cardZip"
              onChange={handleFormChange}
              ref={cardZipRef}
              onFocus={(e) => onCardInputFocus(e, "cardZip")}
              onBlur={onCardInputBlur}
              defaultValue={theZip}
            />
          </div>
        </div>

        <div className="card-input">
          <label htmlFor="cardHolder" className="card-input__label">
            Card Holder
          </label>
          <input
            type="text"
            className="card-input__input"
            autoComplete="off"
            name="cardHolder"
            onChange= {shippingChecked ? null : handleFormChange }
            ref={shippingChecked ? null : cardHolderRef}
            onFocus= {shippingChecked ? null : (e) => onCardInputFocus(e, "cardHolder") }
            onBlur={onCardInputBlur}
            {...(shippingChecked ? {defaultValue: ( theName !== " ") ? JSON.stringify(theName).replace(/\"/g,"") : "" } : {defaultValue:""})} 
            disabled={shippingChecked}
          />
        </div>
        

          
        <div className="card-form__row">
          <div className="card-form__col">
            <div className="card-form__group">
              <label htmlFor="cardMonth" className="card-input__label">
                Expiration Date
              </label>
              <select
                className="card-input__input -select"
                value={cardMonth}
                name="cardMonth"
                onChange={handleFormChange}
                ref={cardDateRef}
                onFocus={(e) => onCardInputFocus(e, "cardDate")}
                onBlur={onCardInputBlur}
                style={{ WebkitAppearance: "none" }}
              >
                <option value="" disabled>
                  Month
                </option>

                {monthsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>

              <select
                name="cardYear"
                className="card-input__input -select"
                value={cardYear}
                onChange={handleFormChange}
                onFocus={(e) => onCardInputFocus(e, "cardDate")}
                onBlur={onCardInputBlur}
                style={{ WebkitAppearance: "none" }}
              >
                <option value="" disabled>
                  Year
                </option>

                {yearsArr.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="card-form__col -cvv">
            <div className="card-input">
              <label htmlFor="cardCvv" className="card-input__label">
                CVV
              </label>
              <input
                type="tel"
                className="card-input__input"
                maxLength="4"
                autoComplete="off"
                name="cardCvv"
                onChange={handleFormChange}
                onFocus={onCvvFocus}
                onBlur={onCvvBlur}
                ref={cardCvv}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
