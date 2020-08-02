import React, { Component, useState } from "react";
import PropTypes from "prop-types";

//
// Navbar Search Component
//

const NavbarSearch = (props) => {

    const savedSuggestions = [];
    const { suggestions } = props;

    const [query, setSearchQuery] = useState('');
    const [searchlist, setSearchList] = useState(suggestions);

    const [searchState, setSearchState] = useState({
        // The active selection's index
        activeSuggestion: 0,
        // The suggestions that match the user's input
        filteredSuggestions: [],
        // Whether or not the suggestion list is shown
        showSuggestions: false,
        // What the user has entered
        userInput: ""
    });

    // Event fired when the input value is changed
    const handleInputChange = e => {
        const userInput = e.currentTarget.value;

        // Filter our suggestions that don't contain the user's input
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        // Update the user input and filtered suggestions, reset the active
        // suggestion and make sure the suggestions are shown
        setSearchState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    // delete later?
    const handleSearchClear = () => {
        setSearchQuery("");
    }

    const handleOnFocusInput = () => {
        setSearchState({
            showSuggestions: true
        });
        setSearchList(JSON.parse(localStorage.getItem("searchSuggestions")));
    }

    const handleOnBlurInput = () => {
        setSearchState({
            showSuggestions: false
        });
    }

    // Update suggestions list on form submit
    const handleSubmit = event => {
        if (query) {
            setSearchList(searchlist.concat(query));
            savedSuggestions.push( localStorage.setItem("searchSuggestions", JSON.stringify(searchlist.concat(query)) ));
        }

        setSearchQuery('');

        event.preventDefault();
    };

    const { showSuggestions } = searchState;

    return (
        <div className="search-input">
            <form className="search-input__form" onSubmit={handleSubmit}>
                <div className="search-input__field-wrapper">
                    <span className="icon-marmita icon-marmita--search search-input__icon-search">
                        <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <g fill="#3F3E3E" fillRule="evenodd">
                                <path
                                    d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z"
                                    fillRule="nonzero" />
                                <rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5" />
                            </g>
                        </svg>
                    </span>

                    <input
                        id="search-all"
                        tabIndex="0"
                        role="search"
                        type="text"
                        name="q"
                        autoComplete="off"
                        aria-label="Buscar prato ou ingrediente"
                        className="search-input__field"
                        placeholder="Busque por item ou loja"
                        onFocus={ () => handleOnFocusInput() }
                        onChange={e => setSearchQuery(e.target.value)}
                        onBlur={ () => handleOnBlurInput() }
                        value={query}
                    />

                    {(query && query.length >= 1) && (
                        <button
                            type="button"
                            tabIndex={0}
                            className="btn-icon btn-icon--gray btn-icon--size-m btn-icon--transparent search-input__erase-button"
                            aria-hidden="false"
                            aria-label="Limpar Campo"
                            onClick={() => setSearchQuery("")}
                        >
                            <span className="icon-marmita icon-marmita--error">
                                <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g transform="translate(-290 -165)" fill="#3F3E3E" fillRule="evenodd">
                                        <g id="Group" transform="translate(290 165)">
                                            <path d="M24 22.586l-4.95-4.95a1 1 0 1 0-1.414 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 1 0 1.414-1.414L25.414 24l4.95-4.95a1 1 0 1 0-1.414-1.414L24 22.586zM24 41c-9.389 0-17-7.611-17-17S14.611 7 24 7s17 7.611 17 17-7.611 17-17 17z" id="Combined-Shape" />
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </button>
                    )}
                </div>
            </form>

            { showSuggestions && searchlist &&
            <div className="search-targeted">
                <p className="search-targeted__title">Buscas recentes</p>
                <ul className="search-targeted__options">
                    { searchlist && searchlist.map((item, index) => (
                        <li className="search-targeted__option" key={index}>
                            <button type="button" role="button" className="btn btn--link btn--size-m btn--targeted-search" variant="btn--targeted-search" theme="link" color="primary">
                                <span className="icon-marmita icon-marmita--search">
                                    <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#3F3E3E" fillRule="evenodd"><path d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z" fillRule="nonzero" /><rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width={3} height={12} rx="1.5" /></g>
                                    </svg>
                                </span>
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            }

        </div>
    );
}

NavbarSearch.propTypes = {
    suggestions: PropTypes.instanceOf(Array)
};

NavbarSearch.defaultProps = {
    suggestions: []
};

export default NavbarSearch;

export class SearchInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
        };
    }

    handleQueryChange = query =>
        this.setState(state => ({ ...state, query: query || "" }));

    handleSearchCancel = () => this.handleQueryChange("");
    handleSearchClear = () => this.handleQueryChange(""); // maybe differentiate between cancel and clear

    render() {
        return (
            <>
                <div className="search-input">
                    <form className="search-input__form">
                        <div className="search-input__field-wrapper">
                            <span className="icon-marmita icon-marmita--search search-input__icon-search">
                                <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="#3F3E3E" fillRule="evenodd">
                                        <path
                                            d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z"
                                            fillRule="nonzero" />
                                        <rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5" />
                                    </g>
                                </svg>
                            </span>
                            <input
                                tabIndex="0"
                                role="search"
                                type="text"
                                name="q"
                                autoComplete="off"
                                aria-label="Buscar prato ou ingrediente"
                                className="search-input__field"
                                placeholder="Busque por item ou loja"
                                onChange={this.handleQueryChange}
                                onClear={this.handleSearchClear}
                                value={this.state.query}
                            />

                            {(this.state.query && this.state.query.length > 3) && (
                                <button type="button" tabIndex={0} className="btn-icon btn-icon--gray btn-icon--size-m btn-icon--transparent search-input__erase-button" aria-hidden="false" aria-label="Limpar Campo">
                                    <span className="icon-marmita icon-marmita--error">
                                        <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <g transform="translate(-290 -165)" fill="#3F3E3E" fillRule="evenodd">
                                                <g id="Group" transform="translate(290 165)">
                                                    <path d="M24 22.586l-4.95-4.95a1 1 0 1 0-1.414 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 1 0 1.414-1.414L25.414 24l4.95-4.95a1 1 0 1 0-1.414-1.414L24 22.586zM24 41c-9.389 0-17-7.611-17-17S14.611 7 24 7s17 7.611 17 17-7.611 17-17 17z" id="Combined-Shape" />
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </>
        );
    }
}