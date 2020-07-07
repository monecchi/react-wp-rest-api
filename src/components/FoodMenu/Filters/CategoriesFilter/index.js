import React, { Component, useEffect, useState } from "react";

const FoodMenuFilters = () => {
  return (
    <div data-test-id="filters-restaurant-list">
      <div className="desktop-filters"id="desktop-filters">
        <div className="desktop-filters__header">
          <p className="desktop-filters__label">Filtre por</p>
          <div className="filter-dropdown" id="Entrega-section-id">
            <button
              type="button"
              role="button"
              className="btn btn--filter btn--size-m filter-dropdown__btn"
              tabIndex={0}
              label="Entrega"
              theme="filter"
              variant="filter-dropdown__btn"
              color="primary"
              target
              rel
            >
              <canvas
                height={0}
                width={0}
                style={{
                  borderRadius: "inherit",
                  height: "100%",
                  left: 0,
                  position: "absolute",
                  top: 0,
                  width: "100%"
                }}
              />
              <span className="btn__label">Entrega</span>
            </button>
            
            <div className="filter-dropdown__floating-box">
              <form action="#" className="delivery-filter">
                <label
                  className="delivery-filter__label"
                  htmlFor="free-delivery-fee"
                  id="free-delivery-fee__label"
                >
                  <span className="delivery-filter__label-text">
                    Entrega grátis
                  </span>
                  <span className="marmita-checkbox  marmita-checkbox--small marmita-checkbox--primary">
                    <span className="icon-marmita icon-marmita--confirm marmita-checkbox__icon">
                      <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(-193 -165)"
                          fill="#3F3E3E"
                          fillRule="evenodd"
                        >
                          <g
                            id="Check-confirmação"
                            transform="translate(193 165)"
                          >
                            <path
                              d="M15.884 23.358a1.5 1.5 0 1 0-2.106 2.137l7.748 7.637 15.552-16.09a1.5 1.5 0 0 0-2.156-2.085L21.474 28.868l-5.59-5.51z"
                              id="Path-6"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                    <input
                      name="free-delivery-fee"
                      id="free-delivery-fee"
                      type="checkbox"
                      className="marmita-checkbox__input"
                      aria-labelledby="free-delivery-fee__label"
                      defaultValue
                    />
                  </span>
                </label>
                <div className="slider">
                  <p className="slider__title" tabIndex={0}>
                    Taxa de entrega
                  </p>
                  <div>
                    <p
                      className="slider__label"
                      tabIndex={0}
                      id="slider__deliveryFeeTo"
                    >
                      Até R$ 25,00
                    </p>
                  </div>
                  <input
                    className="slider-input"
                    type="range"
                    min={0}
                    max={25}
                    tabIndex={0}
                    aria-valuemin={0}
                    aria-valuenow={25}
                    aria-valuemax={25}
                    arialabelledby="slider__deliveryFeeTo"
                    defaultValue={25}
                  />
                  <div
                    className="slider-input__fill"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="slider">
                  <p className="slider__title" tabIndex={0}>
                    Tempo de entrega
                  </p>
                  <div>
                    <p
                      className="slider__label"
                      tabIndex={0}
                      id="slider__deliveryTimeTo"
                    >
                      Até 240 minutos
                    </p>
                  </div>
                  <input
                    className="slider-input"
                    type="range"
                    min={20}
                    max={240}
                    tabIndex={0}
                    aria-valuemin={20}
                    aria-valuenow={240}
                    aria-valuemax={240}
                    arialabelledby="slider__deliveryTimeTo"
                    defaultValue={240}
                  />
                  <div
                    className="slider-input__fill"
                    style={{ width: "100%" }}
                  />
                </div>
              </form>

              <div className="filter-dropdown__footer">
                <button
                  type="button"
                  role="button"
                  className="btn btn--link btn--size-m filter-dropdown__clear-button"
                  label="Limpar"
                  variant="filter-dropdown__clear-button"
                  theme="link"
                  data-test-id="filter-dropdown__clear-button"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="btn__label">Limpar</span>
                </button>
                <button
                  type="button"
                  role="button"
                  className="btn btn--link btn--size-m"
                  label="Filtrar"
                  theme="link"
                  data-test-id="filter-dropdown__submit-button"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="btn__label">Filtrar</span>
                </button>
              </div>
            </div>
            <div className="overlay" />
          </div>
          <div className="filter-dropdown" id="Cozinhas-section-id">
            <button
              type="button"
              role="button"
              className="btn btn--filter btn--size-m filter-dropdown__btn"
              tabIndex={0}
              label="Cozinhas"
              theme="filter"
              variant="filter-dropdown__btn"
              color="primary"
              target
              rel
            >
              <canvas
                height={0}
                width={0}
                style={{
                  borderRadius: "inherit",
                  height: "100%",
                  left: 0,
                  position: "absolute",
                  top: 0,
                  width: "100%"
                }}
              />
              <span className="btn__label">Cozinhas</span>
            </button>
            <div className="filter-dropdown__floating-box">
              <form action="#" className="categories-list__form">
                <div className="restaurant-menu-search">
                  <span className="icon-marmita icon-marmita--search">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#3F3E3E" fillRule="evenodd">
                        <path
                          d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z"
                          fillRule="nonzero"
                        />
                        <rect
                          transform="rotate(-45 37.793 38.293)"
                          x="36.293"
                          y="32.293"
                          width={3}
                          height={12}
                          rx="1.5"
                        />
                      </g>
                    </svg>
                  </span>
                  <input
                    role="search"
                    className="restaurant-menu-search__field"
                    placeholder="Buscar cozinha"
                  />
                </div>
                <div className="categories-list__content">
                  <div className="category-filter__name">
                    <input
                      name="AC1"
                      className="category-tag__input"
                      id="AC1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="AC1-filter" className="category-tag__label">
                      <span>Açaí</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="BEB"
                      className="category-tag__input"
                      id="BEB-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="BEB-filter" className="category-tag__label">
                      <span>Bebidas</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="BRA"
                      className="category-tag__input"
                      id="BRA-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="BRA-filter" className="category-tag__label">
                      <span>Comida Brasileira</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="BUR"
                      className="category-tag__input"
                      id="BUR-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="BUR-filter" className="category-tag__label">
                      <span>Hambúrguer</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="CA1"
                      className="category-tag__input"
                      id="CA1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="CA1-filter" className="category-tag__label">
                      <span>Cafeteria</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="CAR"
                      className="category-tag__input"
                      id="CAR-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="CAR-filter" className="category-tag__label">
                      <span>Carnes</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="CHI"
                      className="category-tag__input"
                      id="CHI-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="CHI-filter" className="category-tag__label">
                      <span>Comida Chinesa</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="CN1"
                      className="category-tag__input"
                      id="CN1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="CN1-filter" className="category-tag__label">
                      <span>Congelados</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="CRP"
                      className="category-tag__input"
                      id="CRP-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="CRP-filter" className="category-tag__label">
                      <span>Cozinha Rápida</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="CS1"
                      className="category-tag__input"
                      id="CS1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="CS1-filter" className="category-tag__label">
                      <span>Casa de Sucos</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="CV1"
                      className="category-tag__input"
                      id="CV1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="CV1-filter" className="category-tag__label">
                      <span>Conveniência</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="DCE"
                      className="category-tag__input"
                      id="DCE-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="DCE-filter" className="category-tag__label">
                      <span>Doces e Bolos</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="FRA"
                      className="category-tag__input"
                      id="FRA-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="FRA-filter" className="category-tag__label">
                      <span>Comida Francesa</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="FRU"
                      className="category-tag__input"
                      id="FRU-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="FRU-filter" className="category-tag__label">
                      <span>Frutos do Mar</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="ITA"
                      className="category-tag__input"
                      id="ITA-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="ITA-filter" className="category-tag__label">
                      <span>Comida Italiana</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="JAP"
                      className="category-tag__input"
                      id="JAP-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="JAP-filter" className="category-tag__label">
                      <span>Comida Japonesa</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="LCH"
                      className="category-tag__input"
                      id="LCH-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="LCH-filter" className="category-tag__label">
                      <span>Lanches</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="MA1"
                      className="category-tag__input"
                      id="MA1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="MA1-filter" className="category-tag__label">
                      <span>Marmita</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="MER"
                      className="category-tag__input"
                      id="MER-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="MER-filter" className="category-tag__label">
                      <span>Mercado</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="MI1"
                      className="category-tag__input"
                      id="MI1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="MI1-filter" className="category-tag__label">
                      <span>Mineira</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="NO1"
                      className="category-tag__input"
                      id="NO1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="NO1-filter" className="category-tag__label">
                      <span>Nordestina</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="PA1"
                      className="category-tag__input"
                      id="PA1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="PA1-filter" className="category-tag__label">
                      <span>Padaria</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="PAS"
                      className="category-tag__input"
                      id="PAS-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="PAS-filter" className="category-tag__label">
                      <span>Pastel</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="PIZ"
                      className="category-tag__input"
                      id="PIZ-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="PIZ-filter" className="category-tag__label">
                      <span>Pizza</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="PX1"
                      className="category-tag__input"
                      id="PX1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="PX1-filter" className="category-tag__label">
                      <span>Peixes</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="SAG"
                      className="category-tag__input"
                      id="SAG-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="SAG-filter" className="category-tag__label">
                      <span>Salgados</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="SAU"
                      className="category-tag__input"
                      id="SAU-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="SAU-filter" className="category-tag__label">
                      <span>Comida Saudável</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="SOR"
                      className="category-tag__input"
                      id="SOR-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="SOR-filter" className="category-tag__label">
                      <span>Sorvetes</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="SP1"
                      className="category-tag__input"
                      id="SP1-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="SP1-filter" className="category-tag__label">
                      <span>Sopas &amp; Caldos</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="VAR"
                      className="category-tag__input"
                      id="VAR-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="VAR-filter" className="category-tag__label">
                      <span>Comida Variada</span>
                    </label>
                  </div>
                  <div className="category-filter__name">
                    <input
                      name="VEG"
                      className="category-tag__input"
                      id="VEG-filter"
                      type="checkbox"
                      defaultValue
                    />
                    <label htmlFor="VEG-filter" className="category-tag__label">
                      <span>Comida Vegetariana</span>
                    </label>
                  </div>
                </div>
              </form>
              <div className="filter-dropdown__footer">
                <button
                  type="button"
                  role="button"
                  className="btn btn--link btn--size-m filter-dropdown__clear-button"
                  label="Limpar"
                  variant="filter-dropdown__clear-button"
                  theme="link"
                  data-test-id="filter-dropdown__clear-button"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="btn__label">Limpar</span>
                </button>
                <button
                  type="button"
                  role="button"
                  className="btn btn--link btn--size-m"
                  label="Filtrar"
                  theme="link"
                  data-test-id="filter-dropdown__submit-button"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="btn__label">Filtrar</span>
                </button>
              </div>
            </div>
            <div className="overlay" />
          </div>
          <div className="filter-dropdown" id="Pagamento-section-id">
            <button
              type="button"
              role="button"
              className="btn btn--filter btn--size-m filter-dropdown__btn"
              tabIndex={0}
              label="Pagamento"
              theme="filter"
              variant="filter-dropdown__btn"
              color="primary"
              target
              rel
            >
              <canvas
                height={0}
                width={0}
                style={{
                  borderRadius: "inherit",
                  height: "100%",
                  left: 0,
                  position: "absolute",
                  top: 0,
                  width: "100%"
                }}
              />
              <span className="btn__label">Pagamento</span>
            </button>
            <div className="filter-dropdown__floating-box">
              <form action="#" className="payment-options">
                <div className="payment-options__main-list payment-options__main-list--visible">
                  <button
                    className="payment-options__button"
                    type="button"
                    tabIndex={0}
                  >
                    <span>Pagamento pelo site</span>
                    <span className="icon-marmita icon-marmita--arrow-right-thin">
                      <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(-97 -69)"
                          stroke="#3F3E3E"
                          strokeWidth={3}
                          fill="none"
                          fillRule="evenodd"
                          strokeLinecap="round"
                        >
                          <g id="Seta-voltar" transform="translate(97 69)">
                            <path
                              id="Path-6"
                              transform="rotate(-90 23.5 23.5)"
                              d="M6 16l17.5 15L41 16"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                  <button
                    className="payment-options__button"
                    type="button"
                    tabIndex={0}
                  >
                    <span>Pagamento na entrega</span>
                    <span className="icon-marmita icon-marmita--arrow-right-thin">
                      <svg
                        width={48}
                        height={48}
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          transform="translate(-97 -69)"
                          stroke="#3F3E3E"
                          strokeWidth={3}
                          fill="none"
                          fillRule="evenodd"
                          strokeLinecap="round"
                        >
                          <g id="Seta-voltar" transform="translate(97 69)">
                            <path
                              id="Path-6"
                              transform="rotate(-90 23.5 23.5)"
                              d="M6 16l17.5 15L41 16"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="payment-options__sub-options" />
              </form>
              <div className="filter-dropdown__footer">
                <button
                  type="button"
                  role="button"
                  className="btn btn--link btn--size-m filter-dropdown__clear-button"
                  label="Limpar"
                  variant="filter-dropdown__clear-button"
                  theme="link"
                  data-test-id="filter-dropdown__clear-button"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="btn__label">Limpar</span>
                </button>
                <button
                  type="button"
                  role="button"
                  className="btn btn--link btn--size-m"
                  label="Filtrar"
                  theme="link"
                  data-test-id="filter-dropdown__submit-button"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="btn__label">Filtrar</span>
                </button>
              </div>
            </div>
            <div className="overlay" />
          </div>
        </div>
        <div className="sortable-dropdown">
          <span className="sortable-dropdown__title">Ordenar por</span>
          <div className="marmita-dropdown-menu">
            <div className="marmita-dropdown-menu__button">
              <button
                type="button"
                role="button"
                className="btn btn--link btn--size-m btn--iconize btn--full-width btn--iconize-right"
                icon="arrow-down"
                label="Relevância"
                theme="link"
                color="primary"
                target
                rel
              >
                <canvas
                  height={0}
                  width={0}
                  style={{
                    borderRadius: "inherit",
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%"
                  }}
                />
                <span className="icon-marmita icon-marmita--arrow-down btn__icon">
                  <svg
                    width={48}
                    height={48}
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      transform="translate(-386 -165)"
                      fill="#3F3E3E"
                      fillRule="nonzero"
                    >
                      <g
                        id="icon_seta_restaurantes"
                        transform="translate(386 165)"
                      >
                        <path
                          d="M17.414 18.548a2.099 2.099 0 0 0-2.828 0 1.787 1.787 0 0 0 0 2.646L24 30l9.414-8.806a1.787 1.787 0 0 0 0-2.646 2.099 2.099 0 0 0-2.828 0L24 24.708l-6.586-6.16z"
                          id="Path-5-Copy-3"
                        />
                      </g>
                    </g>
                  </svg>
                </span>
                <span className="btn__label">Relevância</span>
              </button>
            </div>
            <ul role="menu" className="marmita-dropdown-menu__list">
              <li className="marmita-dropdown-menu__item--title">
                <button
                  type="button"
                  role="button"
                  className="btn btn--link btn--size-m btn--full-width"
                  theme="link"
                  label="Ordenar por"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="btn__label">Ordenar por</span>
                </button>
              </li>
              <li
                className="marmita-dropdown-menu__item marmita-dropdown-menu__item--active marmita-dropdown-menu__item--alt"
                role="none"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="btn btn--link btn--size-m btn--iconize btn--full-width"
                  data-test-id="dropdown-item-button"
                  icon="markdown-o"
                  theme="link"
                  label="Relevância"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="icon-marmita icon-marmita--markdown-o btn__icon">
                    <svg
                      width={49}
                      height={48}
                      viewBox="0 0 49 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#3F3E3E" fillRule="nonzero">
                        <path
                          d="M38 12a5 5 0 0 0-5-5H17a5 5 0 0 0-5 5v26l13-9.75L38 38V12zM17 4h16a8 8 0 0 1 8 8v32L25 32 9 44V12a8 8 0 0 1 8-8z"
                          id="Rectangle-4-Copy"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="btn__label">Relevância</span>
                </button>
              </li>
              <li
                className="marmita-dropdown-menu__item marmita-dropdown-menu__item--alt"
                role="none"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="btn btn--link btn--size-m btn--iconize btn--full-width"
                  data-test-id="dropdown-item-button"
                  icon="sort-star"
                  theme="link"
                  label="Mais bem avaliado"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="icon-marmita icon-marmita--sort-star btn__icon">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        transform="translate(-385 -68)"
                        fillRule="nonzero"
                        stroke="#3F3E3E"
                        strokeWidth={3}
                        fill="none"
                      >
                        <g
                          id="Ordenar-por-avaliação"
                          transform="translate(385 68)"
                        >
                          <path
                            d="M25.546 33.5l8.98 7.07a.5.5 0 0 0 .782-.56l-3.979-11.333a2.5 2.5 0 0 1 1.073-2.972L42.6 19.587a.5.5 0 0 0-.251-.93l-12.622-.148a2.5 2.5 0 0 1-2.374-1.811L24.48 6.682a.5.5 0 0 0-.962 0l-2.872 10.016a2.5 2.5 0 0 1-2.374 1.81l-12.622.15a.5.5 0 0 0-.251.929l10.198 6.118a2.5 2.5 0 0 1 1.072 2.972l-3.978 11.334a.5.5 0 0 0 .781.558l8.98-7.07a2.5 2.5 0 0 1 3.093 0z"
                            id="Shape"
                          />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="btn__label">Mais bem avaliado</span>
                </button>
              </li>
              <li
                className="marmita-dropdown-menu__item marmita-dropdown-menu__item--alt"
                role="none"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="btn btn--link btn--size-m btn--iconize btn--full-width"
                  data-test-id="dropdown-item-button"
                  icon="time"
                  theme="link"
                  label="Menor tempo de entrega"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="icon-marmita icon-marmita--time btn__icon">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        transform="translate(-48 -1104)"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g id="Restaurante" transform="translate(47 939)">
                          <g id="Tempo" transform="translate(1 165)">
                            <path
                              d="M9.72 8.33a1.5 1.5 0 0 1 1.877 2.34A17.442 17.442 0 0 0 6 23.501C6 33.165 13.835 41 23.5 41S41 33.165 41 23.5c0-9.08-6.695-16.48-16-17.403V10.5a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.023-1.423V3c.128 0 .255.001.381.003a1.523 1.523 0 0 1 .256.005C35.712 3.33 44 12.748 44 23.5 44 34.822 34.822 44 23.5 44S3 34.822 3 23.5c0-6.015 2.59-11.424 6.716-15.174l.004.005z"
                              id="Combined-Shape"
                              fill="#3F3E3E"
                            />
                            <rect
                              id="Rectangle-12"
                              fill="#3F3E3E"
                              transform="rotate(-45 17.086 17.086)"
                              x="15.586"
                              y="11.586"
                              width={3}
                              height={11}
                              rx="1.5"
                            />
                            <circle
                              id="Oval-8"
                              stroke="#3F3E3E"
                              strokeWidth={3}
                              cx="23.5"
                              cy="23.5"
                              r={4}
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="btn__label">Menor tempo de entrega</span>
                </button>
              </li>
              <li
                className="marmita-dropdown-menu__item marmita-dropdown-menu__item--alt"
                role="none"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="btn btn--link btn--size-m btn--iconize btn--full-width"
                  data-test-id="dropdown-item-button"
                  icon="sort-price"
                  theme="link"
                  label="Menor preço"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="icon-marmita icon-marmita--sort-price btn__icon">
                    <svg
                      width={48}
                      height={48}
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        transform="translate(-528 -1584)"
                        fill="#3F3E3E"
                        fillRule="evenodd"
                      >
                        <g
                          id="Ordenar-por-preço"
                          transform="translate(528 1584)"
                        >
                          <path
                            d="M24.105 11.61c-1.389 0-2.624.26-3.706.784-1.081.522-1.919 1.238-2.513 2.148a5.438 5.438 0 0 0-.892 3.04c0 1.132.3 2.12.902 2.965.602.845 1.454 1.475 2.557 1.89a8.898 8.898 0 0 0 1.708.42c.623.093 1.429.182 2.417.268 1.074.086 1.966.179 2.675.28.709.1 1.407.257 2.095.472 1.847.587 3.283 1.561 4.307 2.922 1.024 1.36 1.536 3.015 1.536 4.963 0 1.862-.447 3.53-1.342 5.006-.896 1.475-2.163 2.631-3.803 3.47-1.64.837-3.541 1.256-5.704 1.256-2.091 0-3.978-.404-5.661-1.214-1.683-.809-3.005-1.94-3.964-3.394-.96-1.454-1.44-3.12-1.44-4.995h3.352c0 1.246.34 2.352 1.02 3.319.68.967 1.612 1.719 2.793 2.256 1.182.537 2.51.805 3.986.805 1.504 0 2.814-.268 3.931-.805 1.118-.537 1.98-1.282 2.59-2.235.608-.952.912-2.037.912-3.254 0-1.232-.315-2.256-.945-3.073-.63-.816-1.504-1.432-2.621-1.847a9.152 9.152 0 0 0-1.87-.473c-.672-.1-1.539-.2-2.599-.3a47.39 47.39 0 0 1-2.524-.302c-.652-.1-1.286-.243-1.902-.43-1.847-.587-3.269-1.564-4.264-2.932-.996-1.368-1.493-2.983-1.493-4.845 0-1.761.44-3.358 1.32-4.79.882-1.433 2.113-2.557 3.696-3.374 1.583-.816 3.398-1.224 5.446-1.224 2.006 0 3.818.386 5.436 1.16 1.619.773 2.89 1.855 3.813 3.244.924 1.39 1.393 2.972 1.408 4.748h-3.438c-.043-1.174-.372-2.21-.988-3.104-.616-.896-1.465-1.59-2.546-2.084-1.081-.495-2.31-.742-3.685-.742z"
                            id="S"
                          />
                          <rect x={23} y={4} width={3} height={7} rx="1.5" />
                          <rect x={23} y={39} width={3} height={6} rx="1.5" />
                        </g>
                      </g>
                    </svg>
                  </span>
                  <span className="btn__label">Menor preço</span>
                </button>
              </li>
              <li
                className="marmita-dropdown-menu__item marmita-dropdown-menu__item--alt"
                role="none"
              >
                <button
                  type="button"
                  role="menuitem"
                  className="btn btn--link btn--size-m btn--iconize btn--full-width"
                  data-test-id="dropdown-item-button"
                  icon="pin-o"
                  theme="link"
                  label="Menor distância"
                  color="primary"
                  target
                  rel
                >
                  <canvas
                    height={0}
                    width={0}
                    style={{
                      borderRadius: "inherit",
                      height: "100%",
                      left: 0,
                      position: "absolute",
                      top: 0,
                      width: "100%"
                    }}
                  />
                  <span className="icon-marmita icon-marmita--pin-o btn__icon">
                    <svg
                      width={49}
                      height={48}
                      viewBox="0 0 49 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="#3F3E3E" fillRule="nonzero">
                        <path d="M40 21c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 6.404 4.88 13.236 15 20.361C35.12 34.236 40 27.404 40 21zM25 45C13 36.96 7 28.96 7 21c0-9.941 8.059-18 18-18s18 8.059 18 18c0 7.96-6 15.96-18 24z" />
                        <path
                          d="M25 26a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 3a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                          id="Oval"
                        />
                      </g>
                    </svg>
                  </span>
                  <span className="btn__label">Menor distância</span>
                </button>
              </li>
            </ul>
            <div className="overlay" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMenuFilters;
