import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavbarIfood extends Component {
  constructor() {
    super();
    this.state = {
      theme: "brand"
    };
  }

  render() {
    return (
      <>
<header className="responsive-header"><div className="responsive-header__container"><div className="responsive-header__logo"><a className="btn-icon btn-icon--primary btn-icon--size-m btn-icon--transparent" role="link" aria-label="Ir para Home" aria-hidden="false" rel="" href="/lista-restaurantes"><span className="icon-marmita icon-marmita--logo-ifood-plain"><svg width="80" height="43" viewBox="0 0 80 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 24.258h6.09L9.498 7.472h-6.09L0 24.258zM3.947 4.836h6.087L11.016 0H4.922l-.975 4.836zM8.498 28.985h6.09l3.695-18.167h4.444l.7-3.346h-4.482l.154-.776c.286-1.431.751-3.096 3.047-3.096 1.361 0 2.665.148 3.93.68L26.77.744A13.22 13.22 0 0 0 22.381 0c-4.894 0-8.265 2.914-9.499 7.472h-2.114l-.662 3.346h2.084L8.498 28.985z"></path><path d="M27.79 24.633c7.19 0 12.18-6.569 12.18-11.927 0-3.902-3.688-5.608-7.195-5.608-7.89 0-12.183 7.063-12.183 11.927 0 3.902 3.726 5.608 7.198 5.608zM47 24.633c7.192 0 12.181-6.569 12.181-11.927 0-3.902-3.696-5.608-7.199-5.608-7.886 0-12.186 7.063-12.186 11.927 0 3.902 3.73 5.608 7.202 5.608M69.082 24.258h6.055L80 .374h-6.09l-1.451 7.097a12.51 12.51 0 0 0-2.46-.281c-5.966 0-11.391 7.588-11.391 13.011 0 2.231 1.45 4.43 3.912 4.43 3.5 0 5.921-1.712 6.932-3.317h.378l-.748 2.944zM50.322 36.91c-4.454 3.792-10.408 5.739-16.879 5.337-8.16-.502-13.816-6.82-14.954-13.227h.387c1.836 4.091 6.304 7.869 11.911 8.49 5.475.604 12.184-1.87 15.866-5.402l-4.13-3.124 12.263.036-2.639 12.983-1.825-5.093z"></path></svg></span></a></div><div className="search-input"><form className="search-input__form"><div className="search-input__field-wrapper"><span className="icon-marmita icon-marmita--search search-input__icon-search"><svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="#3F3E3E" fillRule="evenodd"><path d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z" fillRule="nonzero"></path><rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5"></rect></g></svg></span><input data-test-id="search-input-field" tabIndex="0" role="search" type="text" name="q" autoComplete="off" aria-label="Busque por item ou loja" className="search-input__field" placeholder="Busque por item ou loja" value="" readOnly></input></div></form></div><div className="delivery-input-wrapper"><span className="delivery-input-wrapper__title">Entregar em</span><button className="delivery-input"><span className="delivery-input__icon-map"><span className="icon-marmita icon-marmita--cup"><svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="#3F3E3E" fillRule="evenodd"><path d="M8 8v27a5 5 0 0 0 5 5h17a5 5 0 0 0 5-5V8H8zM5 5h33v30a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V5z" id="Rectangle-23" fillRule="nonzero"></path><path d="M38 12h-3v3h3v-3zm0 18a5 5 0 0 0 5-5v-5a5 5 0 0 0-5-5v15zm-3-18h3a8 8 0 0 1 8 8v5a8 8 0 0 1-8 8h-3V12z" id="Rectangle-24" fillRule="nonzero"></path><rect id="Rectangle-25" x="13" y="12" width="3" height="21" rx="1.5"></rect></g></svg></span></span><div className="delivery-input__item"><span className="delivery-input__address"><div >Av. Edmeia Matos Lazzarotti,</div><span className="delivery-input__address-number">1441</span></span><span className="delivery-input__icon-arrow"><span className="icon-marmita icon-marmita--arrow-down"><svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-386 -165)" fill="#3F3E3E" fillRule="nonzero"><g id="icon_seta_restaurantes" transform="translate(386 165)"><path d="M17.414 18.548a2.099 2.099 0 0 0-2.828 0 1.787 1.787 0 0 0 0 2.646L24 30l9.414-8.806a1.787 1.787 0 0 0 0-2.646 2.099 2.099 0 0 0-2.828 0L24 24.708l-6.586-6.16z" id="Path-5-Copy-3"></path></g></g></svg></span></span></div></button></div><div className="responsive-header__wrapper-links"><a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="button" aria-label="Promoções" target="" rel="" tabIndex="0" href="/delivery/descobrir/promocoes-perto-de-voce/d965f7e7-836c-48a7-be71-300f235545e6"><span className="icon-marmita icon-marmita--promotion btn__icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M22.404 12.31a.703.703 0 0 1 0-.62l.895-1.832a2.083 2.083 0 0 0-.899-2.767l-1.8-.955a.703.703 0 0 1-.366-.503l-.352-2.007a2.084 2.084 0 0 0-2.353-1.71L15.51 2.2a.703.703 0 0 1-.591-.192L13.454.592a2.083 2.083 0 0 0-2.91 0L9.082 2.009a.704.704 0 0 1-.592.192l-2.018-.285a2.083 2.083 0 0 0-2.353 1.71l-.352 2.007a.703.703 0 0 1-.366.503l-1.8.955a2.083 2.083 0 0 0-.9 2.767l.896 1.831a.703.703 0 0 1 0 .622L.7 14.142A2.083 2.083 0 0 0 1.6 16.91l1.8.955a.703.703 0 0 1 .366.503l.352 2.008a2.082 2.082 0 0 0 2.353 1.71l2.018-.286c.218-.03.434.04.592.192l1.465 1.417a2.085 2.085 0 0 0 2.909 0l1.464-1.417a.704.704 0 0 1 .592-.192l2.018.286a2.083 2.083 0 0 0 2.353-1.71l.352-2.008a.703.703 0 0 1 .366-.503l1.8-.955a2.083 2.083 0 0 0 .9-2.767l-.896-1.831zm-.652 3.376l-1.8.955a2.078 2.078 0 0 0-1.08 1.487l-.353 2.007a.705.705 0 0 1-.796.579l-2.018-.285a2.078 2.078 0 0 0-1.748.567l-1.465 1.417a.705.705 0 0 1-.984 0l-1.465-1.417a2.076 2.076 0 0 0-1.748-.568l-2.018.286a.705.705 0 0 1-.796-.579l-.352-2.007a2.078 2.078 0 0 0-1.08-1.487l-1.8-.955a.705.705 0 0 1-.305-.936l.895-1.831a2.079 2.079 0 0 0 0-1.838l-.895-1.83a.705.705 0 0 1 .304-.937l1.8-.955a2.079 2.079 0 0 0 1.08-1.487l.353-2.007a.705.705 0 0 1 .796-.579l2.018.286a2.079 2.079 0 0 0 1.748-.568l1.465-1.417a.705.705 0 0 1 .984 0l1.465 1.417a2.078 2.078 0 0 0 1.747.568l2.019-.286c.38-.054.73.2.796.579l.352 2.007c.112.64.506 1.182 1.08 1.487l1.8.955c.34.18.473.591.305.936l-.896 1.831a2.08 2.08 0 0 0 0 1.838l.896 1.83a.705.705 0 0 1-.305.937z"></path><path d="M17.057 6.943a.692.692 0 0 0-.979 0l-9.135 9.135a.692.692 0 0 0 .979.98l9.135-9.136a.692.692 0 0 0 0-.98zM9.232 5.771a2.54 2.54 0 0 0-2.538 2.538 2.54 2.54 0 0 0 2.538 2.538 2.54 2.54 0 0 0 2.537-2.538A2.54 2.54 0 0 0 9.232 5.77zm0 3.691A1.155 1.155 0 0 1 8.078 8.31a1.155 1.155 0 0 1 2.307 0c0 .636-.517 1.153-1.153 1.153zM14.768 13.153a2.54 2.54 0 0 0-2.537 2.538 2.54 2.54 0 0 0 2.537 2.538 2.54 2.54 0 0 0 2.538-2.538 2.54 2.54 0 0 0-2.538-2.538zm0 3.692a1.155 1.155 0 0 1-1.153-1.154c0-.636.517-1.153 1.153-1.153s1.154.517 1.154 1.153-.518 1.154-1.154 1.154z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg></span><span className="btn__label">Promoções</span></a><a className="btn btn--link btn--size-m btn--iconize responsive-header__button" role="button" aria-label="Entrar" target="" rel="" tabIndex="0" href="/entrar"><span className="icon-marmita icon-marmita--sign-in btn__icon"><svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g transform="translate(-528 -528)" fill="none" fillRule="evenodd"><g id="Entrar" transform="translate(528 528)"><path d="M9.5 23h18a1.5 1.5 0 0 1 0 3h-18a1.5 1.5 0 0 1 0-3zm8-20H19a1.5 1.5 0 0 1 0 3h-1.5a1.5 1.5 0 0 1 0-3zm0 39H19a1.5 1.5 0 0 1 0 3h-1.5a1.5 1.5 0 0 1 0-3z" id="Shape" fill="#3F3E3E" fillRule="nonzero"></path><path d="M18.5 43.5h14.96a6.5 6.5 0 0 0 6.5-6.5V11a6.5 6.5 0 0 0-6.5-6.5H18.492" id="Shape" stroke="#3F3E3E" strokeWidth="3"></path><path id="Shape" stroke="#3F3E3E" strokeWidth="3" strokeLinecap="round" d="M22 16l7 8.5-7 8.5"></path></g></g></svg></span><span className="btn__label">Entrar</span></a><div className="floating-box"><button className="floating-box__button responsive-header__bag" aria-label="Sacola"><div className="floating-box__label"><div className="header-cart"><div className="header-cart__icon"><span className="icon-marmita icon-marmita--bag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 23"><path className="st0" d="M8.7.2c-1.1 0-2 .3-2.6.9-.6.6-1 1.4-1.2 2.2-.2.6-.3 1.1-.3 1.7H2C.9 5 0 5.9 0 7l.1 13c0 1.7 1.3 3 3 3H15c1.7 0 3-1.3 3-3V7c0-1.1-.9-2-2-2h-3.2c-.1-.6-.1-1.1-.3-1.6-.2-.8-.6-1.7-1.2-2.2-.7-.6-1.5-1-2.6-1zm2.7 6.3v2.6c0 .4.3.7.8.7.4 0 .7-.3.7-.8v-.8-1.8H16c.3 0 .5.2.5.5l-.1 13c0 .8-.7 1.5-1.5 1.5H3.1c-.8 0-1.5-.7-1.5-1.5L1.5 7c0-.3.2-.5.5-.5h2.5v2.6c0 .4.3.8.7.8.4 0 .8-.4.8-.8v-.8-1.8h5.4zM11.3 5c0-.4-.1-.8-.2-1.2-.2-.7-.4-1.2-.8-1.5-.4-.3-.8-.5-1.6-.5s-1.3.2-1.6.5c-.4.3-.6.8-.8 1.5-.1.4-.2.8-.2 1.2h5.2z"></path></svg></span></div><div className="header-cart__label"><div className="header-cart__label--wide">Sacola</div></div></div></div></button><div className="floating-box__wrapper floating-box__wrapper--right"><div className="restaurant-cart" tabIndex="0"><div className="restaurant-cart__empty"><div className="animated-svg"><span className="restaurant-card-empty-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489 590" width="489" height="590"><defs><linearGradient id="grd1" gradientUnits="userSpaceOnUse" x1="255.689" y1="659.422" x2="255.689" y2="141.154"><stop offset="0" stopColor="#fbdde9"></stop><stop offset="1" stopColor="#ffeef5" stopOpacity="0"></stop></linearGradient></defs><path className="svg-empty-cart-variant-2-shp0" d="M49.64 495.81c70.97 85.82 120.22 93.72 212.26 94.18 134.17.65 206.51-55.7 216.77-178.08 42.6-236.15-60.31-337.7-60.31-337.7-53.37-49.04-104.78-111.35-283.92-46.12C29.95 66.14-59.17 364.38 49.64 495.81z"></path><path className="svg-empty-cart-variant-2-shp1" d="M236.5 503c-48.94 0-88.5-9.16-88.5-20.5s39.56-20.5 88.5-20.5 88.5 9.16 88.5 20.5-39.56 20.5-88.5 20.5z"></path><path fillRule="evenodd" className="svg-empty-cart-variant-2-shp2" d="M244.72 335l63.16 33.68c1.37.77 2.59 1.69 3.51 3.06l36.46 46.39-75.06-14.85L244.72 335z"></path><path fillRule="evenodd" className="svg-empty-cart-variant-2-shp3" d="M272.94 380.93l75.06 37.2-47.75 19.6s3.66 4.13-5.04 10.26l4.12 39.19c.31 2.15-1.37 4.14-3.66 4.14l-78.56 1.83-17.39-73.48 28.83-32.16 44.39-6.58z"></path><path fillRule="evenodd" className="svg-empty-cart-variant-2-shp4" d="M166.15 477.23c2.14-3.21 9.31-14.09 10.07-15.31l.15-.15 3.66-11.33v-.31l-2.13-51.29c-.15-4.28 1.68-8.26 4.88-11.02l61.18-52.21c.45-.3 1.06-.3 1.37.16l27.31 44.55c.15.3.15.92-.15 1.07l-28.69 24.5c-.45.3-.45 1.07 0 1.37l3.05 2.3c.46.31.46 1.23 0 1.53l-19.83 11.64c-.3.15-.46.3-.46.61l-9.3 68.74c0 .46-.61.92-1.07.77-5.49-1.23-33.71-7.66-49.73-14.24-.46-.31-.61-.92-.31-1.38z"></path><path className="svg-empty-cart-variant-2-shp5" d="M319.93 451.05c-.61 0-1.37 0-1.98-.15-8.7-.92-13.43-9.04-15.87-15.62-2.44-6.58-3.05-12.86-3.05-13.17v-.46c.15-7.5.15-15.3-.61-21.12-.76-6.59-2.14-8.58-2.9-9.19-.15-.15-.76-.61-2.29-.15-1.83.46-3.81-.77-4.27-2.61-.46-1.83.76-3.82 2.59-4.28 3.97-.92 6.72.31 8.39 1.53 5.5 4.44 6.41 15.46 6.11 35.67.61 6.13 4.12 21.28 12.66 22.2 4.73.46 9.15-1.84 11.59-6.12 1.99-3.37 5.34-13.02-6.1-29.25-1.07-1.53-.76-3.82.92-4.89 1.52-1.08 3.81-.77 4.88.92 9.76 13.77 12.05 27.25 6.41 36.89-3.51 6.28-9.77 9.8-16.48 9.8z"></path><path fillRule="evenodd" className="svg-empty-cart-variant-2-shp2" d="M261.5 455.34c-.15-2.15-3.51-2.15-3.2 0 .3 3.06.3 5.97 0 9.03-.16 1.68-.16 5.36-1.99 6.43-1.83 1.22-3.5-3.37-3.96-4.59-.92-2.76-1.22-5.67-1.07-8.58.15-2.14-3.05-2.14-3.2 0-.31 3.68.3 7.51 1.67 11.03 1.22 2.75 3.36 6.43 6.87 5.51 2.9-.77 3.96-3.98 4.42-6.59.77-3.97.92-8.11.46-12.24zM279.2 458.55c0-2.14-3.36-2.14-3.21 0 0 2.3-.15 4.59-.76 6.89-.46 1.53-1.07 3.98-2.74 4.9-1.68.92-2.75-2.29-3.06-3.52-.45-1.99-.45-3.98.46-5.82.92-1.83-1.98-3.52-2.9-1.68-1.22 2.75-1.52 5.82-.61 8.88.76 2.6 2.6 5.82 5.65 5.66 2.9-.15 4.57-2.91 5.49-5.2 1.22-3.22 1.68-6.59 1.68-10.11zM255.09 491.47c-5.03.3-10.22.77-15.4 1.07-.31 0-.46-.15-.62-.15-1.22.61-3.05-.31-2.28-1.84 2.13-4.29 6.25-7.19 10.98-7.5 4.27-.31 9.15 2.14 9.15 6.89 0 .92-.91 1.38-1.83 1.53zm-2.44-3.98c0 .31-.15.61-.3.76h.91c-.15-.3-.3-.45-.61-.76z"></path><path className="svg-empty-cart-variant-2-shp5" d="M272.18 343.11c-.92-.76-1.98-1.07-3.05-1.07-.31-.3-.76-.46-1.22-.61-3.36-1.07-5.34 2.3-6.26 4.9-.15.46-.15.92.16 1.22.15 2 1.83 3.83 3.81 4.14.92.15 1.83.15 2.75-.31.76.31 1.83-.15 2.13-1.07 0-.15.15-.31.15-.46.31.31.61.46.92.46.61.31 1.37-.15 1.68-.76 1.22-2 .91-4.91-1.07-6.44zM299.33 359.19c-.61-1.53-1.98-2.45-3.66-2.6-1.67-.16-3.2.92-3.66 2.45-.61 1.83.46 3.52 1.68 4.59.15.15.31.31.46.31.3.76.91 1.53 1.83 1.68 1.37.31 2.74-.46 3.2-1.84.46-1.38.76-3.06.15-4.59z"></path><path className="z-2 svg-empty-cart-variant-2-shp6" d="M175.25 336.44c2.06 1.34 4.02 2.71 6.19 3.81-.52.19-1.1.34-1.41.5-1.14.5-2.22 1.05-3.32 1.61-2.07 1.06-4.16 2.23-6.36 2.97-1.28.44-1.2 1.94-.31 2.54 3.4 2.27 7.27 3.73 10.88 5.63 1.49.79 2.82-1.71 1.34-2.5-2.8-1.47-5.75-2.66-8.52-4.2 1.58-.74 3.11-1.58 4.62-2.35 1.14-.56 2.27-1.13 3.43-1.57 1.37-.55 2.81-.93 3.5-2.41.31-.66.19-1.56-.51-1.82-3.03-1.17-5.53-2.97-8.2-4.71-1.41-.91-2.72 1.57-1.33 2.5z"></path><path className="svg-empty-cart-variant-2-shp7" d="M216 313c-14.67 0-14.67 22 0 22s14.67-22 0-22zM171.5 253c-23.33 0-23.33 37 0 37s23.33-37 0-37z"></path><path fillRule="evenodd" className="svg-empty-cart-variant-2-shp7" d="M374.97 176.48c.7 15.61-10.79 29.46-25.05 34.19-2.44 16.65-18.61 29.98-35.32 29.98-2.95 0-5.91-.53-8.69-1.23-6.44 10.52-18.44 17.7-30.8 17.7-13.04 0-23.83-6.83-30.09-17.18-6.44 10.7-18.44 18.06-30.97 18.06-20 0-34.79-16.48-35.66-35.94-.17-4.91.7-9.64 2.61-14.02-2.26.52-4.87.87-7.31.87-20 0-34.79-16.47-35.66-35.93-.87-19.46 17.05-35.94 35.66-35.94 11.14 0 20.53 5.09 26.97 12.97-.35-1.92-.52-3.85-.7-5.96-.87-19.46 17.05-35.93 35.67-35.93 10.95 0 20.17 4.9 26.61 12.44C267.98 107.94 281.38 99 295.12 99c20.01 0 34.79 16.48 35.66 35.94 0 2.45-.17 4.73-.52 7.01 3.13-.88 6.26-1.4 9.39-1.4 20.01 0 34.8 16.48 35.32 35.93zm-164.92-8.06c-.35-.53-.87-.88-1.22-1.4.18.87.18 1.57.35 2.28.35-.18.52-.53.87-.88z"></path><path className="svg-empty-cart-variant-2-shp6" d="M116.43 323.95c3.6-.57 7.11-1.01 10.58-1.96-.38.71-.87 1.42-1.06 1.89-.74 1.62-1.38 3.24-2.03 4.89-1.22 3.1-2.34 6.34-4.02 9.24-.96 1.68.61 3.2 2.19 2.97 5.98-.88 11.68-3.07 17.54-4.56 2.41-.6 1.38-4.51-1.04-3.91-4.53 1.15-8.94 2.73-13.51 3.78 1-2.29 1.84-4.65 2.74-6.91.67-1.69 1.35-3.38 2.18-4.96.97-1.89 2.16-3.67 1.45-5.9-.32-.98-1.35-1.82-2.38-1.42-4.47 1.69-9.01 2.2-13.67 2.94-2.45.4-1.42 4.28 1.03 3.91z"></path><path className="svg-empty-cart-variant-2-shp8" d="M167.99 373.3c-.21-1.8-1.37-2.58-3.07-2.9-1.97-.35-3.97-.59-5.96-.81-3.89-.43-7.8-.61-11.71-.59-2.59.03-2.62 4.06 0 4.03 3.05-.03 6.07.08 9.12.35 1.48.13 2.94.27 4.39.45.06 0 .11.03.16.03-3.31 2.07-6.44 4.43-9.57 6.71-2.05 1.51-4.1 3.01-6.15 4.51-.7.51-1.38 1-2.08 1.48-.21.13-.43.27-.65.43-.02.03-.08.05-.1.08-1.87.54-1.81 3.36.08 3.87 6.71 1.77 13.35 4.59 19.5 7.81 2.29 1.21 4.34-2.28 2.05-3.49-5.15-2.71-10.68-5.15-16.32-6.98 1.83-1.32 3.64-2.66 5.45-4 4.45-3.25 8.93-6.69 13.86-9.21.57-.32 1.08-1.13 1-1.77z"></path><path className="svg-empty-cart-variant-2-shp1" d="M259 236c-38.71 0-70-8.49-70-19s31.29-19 70-19 70 8.49 70 19-31.29 19-70 19z"></path><path className="svg-empty-cart-variant-2-shp4" d="M239.08 101.08l2.41-7.23 43.34-.8 4.17 6.27c1.77 2.57 1.61 5.94-.16 8.35l-4.17 5.63-2.57 4.34 17.5 13.02 3.53 16.88 1.12 64.78-34.67 11.57-28.89 6.43-7.87-101.27 7.87-24.91-1.61-3.06z"></path><path className="svg-empty-cart-variant-2-shp9" d="M210.35 208.14c1.29-5.31 1.61-10.77 1.29-16.24-.65-9-1.29-23.63-1.29-23.63s-2.25-37.13.32-41.47c2.25-3.69 20.23-24.43 26.97-30.54 1.44-1.28 3.21-2.09 5.3-2.09 2.4 0 5.13.32 5.94 2.57l2.88 9.49c.97 3.21-.48 6.75-3.69 8.36L243.1 117c-2.57 1.28-4.18 3.86-3.85 6.75v.32l4.81 5.46c1.12 1.29 1.93 3.06 1.93 4.83l.8 69.6c0 2.73-.48 5.62-1.45 8.2l-4.49 18-30.5-22.02z"></path><path className="svg-empty-cart-variant-2-shp5" d="M341.35 113.61c-2.09-5.78-8.19-5.62-13.49-3.37 1.61-4.18-1.12-9-3.69-10.29-4.98-2.57-17.01.32-13.96 13.18.96 5.15 3.05 12.7 4.33 16.24.16.48.64.8 1.12.64.16.16.48.16.65.16 5.94-.96 11.87-2.09 18.3-4.98 4.65-2.09 9.31-4.82 6.74-11.58zM201.6 83.25c-6.26-.48-8.35 5.31-8.35 11.09-3.05-3.05-8.67-2.57-10.91-.8-4.34 3.53-6.42 15.75 6.42 18.16 4.97 1.29 12.84 2.25 16.53 2.57.48 0 .96-.32 1.12-.8.16-.16.33-.32.33-.48 1.6-5.95 2.88-11.74 2.72-18.81 0-5.14-.64-10.45-7.86-10.93z"></path><path className="svg-empty-cart-variant-2-shp10" d="M295.11 186.66c.32-.16.64 0 .96 0 .81.33 1.29 1.13.97 1.93-.64 1.61-1.45 3.06-2.41 4.5-1.12 1.61-2.57 3.22-4.17 4.34-6.58 4.99-12.84 5.47-15.89 1.45-.49-.64-.49-1.61.32-2.25.64-.48 1.6-.48 2.24.32 2.41 3.06 7.71.81 11.56-2.09 1.29-.96 2.41-2.25 3.53-3.53.8-1.29 1.61-2.58 2.09-3.86 0-.32.32-.64.8-.81zM283.23 184.74c.16-.97 1.13-1.61 2.25-1.61 3.21 0 2.57 4.5 2.57 4.98 0 .8-1.29 1.61-2.25 1.61-1.12.16-2.08-.48-2.41-1.45-.32-1.28-.32-2.41-.16-3.53zM275.05 186.5c1.44-2.73 4.17-1.93 4.65-.96 2.09 3.05 1.13 4.98.32 5.95-.8.96-1.76 1.6-3.05.96-1.92-1.29-3.05-4.02-1.92-5.95z"></path></svg></span></div><span className="restaurant-cart__empty--large">Sua sacola está vazia</span><span className="restaurant-cart__empty--small">Adicione itens</span></div></div></div></div></div></div></header>
</>
    );
  }
}

export default NavbarIfood;