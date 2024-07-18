'use client'
import React, { useState, useRef, useEffect } from 'react';
import MaskedInput from 'react-text-mask';

import './CreditCardForm.css';  // Переносим стили сюда

const NewAddressForm = () => {
  //   const [currentCardBackground, setCurrentCardBackground] = useState(Math.floor(Math.random() * 25 + 1));
  const [cardName, setCardName] = useState('');
  const [prevCardName, setPrevCardName] = useState('');

  const [cardNumber, setCardNumber] = useState('');
  const [prevCardNumber, setPrevCardNumber] = useState('');

  const [cardType, setCardType] = useState('');
  const [prevCardType, setPrevCardType] = useState('');

  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');

  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const [cardCvv, setCardCvv] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [focusElementStyle, setFocusElementStyle] = useState(null);
  const [isInputFocused, setIsInputFocused] = useState(true);

  const minCardYear = new Date().getFullYear();
  const amexCardMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/];
  const otherCardMask = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

  const imgRef = useRef(null);

  const cardNumberRef = useRef(null);
  const cardNumberItemRef = useRef([]);

  const cardNameRef = useRef([]);
  const cardNameMainRef = useRef(null);

  const cardDateRef = useRef(null);
  const focusElementRef = useRef(null);
  const focusElementStartedRef = useRef(null);

  const getCardType = () => {
    const number = cardNumber;
    if (/^4/.test(number)) return 'visa';
    if (/^(34|37)/.test(number)) return 'amex';
    if (/^5[1-5]/.test(number)) return 'mastercard';
    if (/^6011/.test(number)) return 'discover';
    if (/^9792/.test(number)) return 'troy';
    return 'visa'; // default type
  };

  useEffect(() => {
    const newCardType = getCardType();
    if (newCardType !== cardType) {
      setPrevCardType(cardType);
      setCardType(newCardType);
    }
  }, [cardNumber, cardType, getCardType]);
  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('card-item__typeImg-enter');
      setTimeout(() => {
        imgRef.current.classList.remove('card-item__typeImg-enter');
        imgRef.current.classList.add('card-item__typeImg-enter-active');
      }, 50);

      setTimeout(() => {
        imgRef.current.classList.remove('card-item__typeImg-enter-active');
      }, 300);
    }
  }, [cardType]);
  const generateCardNumberMask = getCardType() === 'amex' ? amexCardMask : otherCardMask;



  useEffect(() => {
    const minCardMonth = () => {
      return cardYear === minCardYear ? new Date().getMonth() + 1 : 1;
    };
    if (cardMonth < minCardMonth()) {
      setCardMonth('');
    }
  }, [cardYear, cardMonth]);

  useEffect(() => {
    if (monthRef.current) {
      monthRef.current.classList.add('card-item__dateItem-enter');
      setTimeout(() => {
        monthRef.current.classList.remove('card-item__dateItem-enter');
        monthRef.current.classList.add('card-item__dateItem-enter-active');
      }, 50);

      setTimeout(() => {
        monthRef.current.classList.remove('card-item__dateItem-enter-active');
      }, 300);
    }
  }, [cardMonth]);

  useEffect(() => {
    if (yearRef.current) {
      yearRef.current.classList.add('card-item__dateItem-enter');
      setTimeout(() => {
        yearRef.current.classList.remove('card-item__dateItem-enter');
        yearRef.current.classList.add('card-item__dateItem-enter-active');
      }, 50);

      setTimeout(() => {
        yearRef.current.classList.remove('card-item__dateItem-enter-active');
      }, 300);
    }
  }, [cardYear]);

  useEffect(() => {
    const prevLength = prevCardName.length;
    const currLength = cardName.length;

    // Add animation for the last character if a character was added
    if (currLength > prevLength) {
      const lastSpan = cardNameRef.current[currLength - 1];
      if (lastSpan) {
        lastSpan.classList.add('card-item__nameItem-enter');
        setTimeout(() => {
          lastSpan.classList.remove('card-item__nameItem-enter');
        }, 500);
      }
    }

    // Add animation for the last character if a character was removed
    if (currLength < prevLength) {
      const lastSpan = cardNameRef.current[prevLength - 1];
      if (lastSpan) {
        lastSpan.classList.add('card-item__nameItem-leave');
        setTimeout(() => {
          lastSpan.classList.remove('card-item__nameItem-leave');
        }, 500);
      }
    }

    // Update previous card name
    setPrevCardName(cardName);
  }, [cardName]);


  const focusInput = (e) => {
    setIsInputFocused(true);
    const targetRef = e?.target?.dataset.ref;
    const target = {
      cardNumber: cardNumberRef,
      cardName: cardNameMainRef,
      cardDate: cardDateRef
    }[targetRef]?.current;

    setFocusElementStyle({
      width: `${target?.offsetWidth}px`,
      height: `${target?.offsetHeight}px`,
      transform: `translateX(${target?.offsetLeft}px) translateY(${target?.offsetTop}px)`
    });
  };

  const blurInput = () => {
    setTimeout(() => {
      if (!isInputFocused) {
        setFocusElementStyle(null);
      }
    }, 300);
    setIsInputFocused(false);
  };

  useEffect(() => {
    const prevLength = prevCardNumber.length;
    const currLength = cardNumber.length;

    // Add animation for the last character if a character was added
    if (currLength > prevLength) {
      const lastSpan = cardNumberItemRef.current[currLength - 1];
      if (lastSpan) {
        lastSpan.classList.add('card-item__numberItem-enter');
        setTimeout(() => {
          lastSpan.classList.remove('card-item__numberItem-enter');
        }, 500);
      }
    }

    // Add animation for the last character if a character was removed
    if (currLength < prevLength) {
      const lastSpan = cardNumberItemRef.current[prevLength - 1];
      if (lastSpan) {
        lastSpan.classList.add('card-item__numberItem-leave');
        setTimeout(() => {
          lastSpan.classList.remove('card-item__numberItem-leave');
        }, 500);
      }
    }

    setPrevCardNumber(cardNumber);
  }, [cardNumber]);

  const renderCardNumber = () => {
    const mask = generateCardNumberMask.map((item) => {
      if (typeof item === 'object') {
        return '_';
      }
      return item;
    });

    return (
      <>
        {mask.map((item, index) => (

          <span key={index}>
            <div key={index}
              className={`card-item__numberItem flex items-end text-center leading-none ${index > 4 && index < 15 && cardNumber[index] ? 'align-[-40%]' : ''}`}
              ref={(el) => (cardNumberItemRef.current[index] = el)}
            >
              {index < cardNumber.length ? (index > 4 && index < 14 && index != 9 ? '*' : cardNumber[index]) : item}
            </div>
          </span>

        ))}
      </>
    );
  };

  return (
      <div className="card-form">
        <div className="card-list">
          <div className={`card-item ${isCardFlipped ? '-active' : ''}`}>
            <div className="card-item__side -front">
              <div
                className={`card-item__focus ${focusElementStyle ? '-active' : ''}`}
                style={focusElementStyle}
                ref={focusElementRef}
              ></div>
              <div className="card-item__cover">
                <img
                  src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/5.jpeg`}
                  className="card-item__bg"
                  alt="card background"
                />
              </div>

              <div className="card-item__wrapper">
                <div className="card-item__top">
                  <img
                    src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                    className="card-item__chip"
                    alt="chip"
                  />
                  <div className="card-item__type">
                    <img
                      src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${cardType}.png`}
                      alt="Card type"
                      className="card-item__typeImg"
                      key={cardType}
                      ref={imgRef}
                    />
                  </div>
                </div>
                <label className="card-item__number" ref={cardNumberRef}>
                  {renderCardNumber()}
                </label>
                <div className="card-item__content">
                  <label className="card-item__info" ref={cardNameMainRef} htmlFor='cardName'>
                    <div className="card-item__holder">Card Holder</div>
                    <div className="card-item__name">
                      {cardName.length ? (
                        cardName.split('').map((n, i) => (
                          <span
                            className="card-item__nameItem"
                            key={i}
                            ref={(el) => (cardNameRef.current[i] = el)}
                          >
                            {n}
                          </span>
                        ))
                      ) : (
                        'Full Name'
                      )}
                    </div>
                  </label>
                  <div className="card-item__date" ref={cardDateRef}>
                    <label className="card-item__dateTitle" htmlFor='cardMonth'>Expires</label>
                    <label className="card-item__dateItem cursor-pointer" htmlFor='cardMonth' ref={monthRef}>
                      {cardMonth || 'MM'}
                    </label>
                    /
                    <label className="card-item__dateItem cursor-pointer" htmlFor='cardYear' ref={yearRef}>
                      {cardYear ? String(cardYear).slice(2, 4) : 'YY'}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-item__side -back">
              <div className="card-item__cover">
                <img
                  src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/5.jpeg`}
                  className="card-item__bg"
                  alt="card background"
                />
              </div>
              <div className="card-item__band"></div>
              <div className="card-item__cvv">
                <div className="card-item__cvvTitle">CVV</div>
                <div className="card-item__cvvBand">
                  {Array.from({ length: cardCvv.length }, (_, i) => (
                    <span key={i}>*</span>
                  ))}
                </div>
                <div className="card-item__type">
                  <img
                    src={`https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/${getCardType()}.png`}
                    alt={getCardType()}
                    className="card-item__typeImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-form__inner">
          <div className="card-input">
            <label className="card-input__label">Card Number</label>
            <MaskedInput
              mask={generateCardNumberMask}
              guide={false}
              // value={cardNumber}
              ref={focusElementStartedRef}
              onChange={(e) => setCardNumber(e.target.value)}
              onFocus={focusInput}
              onBlur={blurInput}
              data-ref="cardNumber"
              id='cardNumber'
              autoFocus
              render={(ref, props) => (
                <input ref={ref} {...props} type="text" className="card-input__input" autoComplete="off" />
              )}
            />
          </div>
          <div className="card-input">
            <label className="card-input__label">Card Holders</label>
            <input
              type="text"
              className="card-input__input"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              onFocus={focusInput}
              onBlur={blurInput}
              data-ref="cardName"
              autoComplete="off"
              id='cardName'
            />
          </div>
          <div className="card-form__row">
            <div className="card-form__col">
              <div className="card-form__group">
                <label className="card-input__label">Expiration Date</label>
                <select
                  className="card-input__input -select"
                  value={cardMonth}
                  onChange={(e) => setCardMonth(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  data-ref="cardDate"
                  id='cardMonth'

                >
                  <option value="" disabled>Month</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month < 10 ? `0${month}` : month}>{month < 10 ? `0${month}` : month}</option>
                  ))}
                </select>
                <select
                  className="card-input__input -select"
                  value={cardYear}
                  onChange={(e) => setCardYear(e.target.value)}
                  onFocus={focusInput}
                  onBlur={blurInput}
                  data-ref="cardDate"
                  id='cardYear'
                >
                  <option value="" disabled>Year</option>
                  {Array.from({ length: 12 }, (_, i) => minCardYear + i).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="card-form__col -cvv">
              <div className="card-input">
                <label className="card-input__label">CVV</label>
                <input
                  type="text"
                  className="card-input__input"
                  value={cardCvv}
                  onChange={(e) => setCardCvv(e.target.value)}
                  onFocus={() => { setIsCardFlipped(true); focusInput(); }}
                  onBlur={() => { setIsCardFlipped(false); blurInput(); }}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
          <button className="card-form__button">Submit</button>
        </div>
      </div>

  );
};

export default NewAddressForm;
