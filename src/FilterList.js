// FilterList.js

import React from "react";

export default class FilterList extends React.Component {

    filterListener = (e, filterType) => {
        this.props.filterListener(e, filterType);
    }

    render() {

        return (
            <React.Fragment>
                { // types of filters
                    Object.entries(this.props.filters).map((filters) => {
                        // console.log(filters[1]);
                        return (
                            <ul className="filter-list" key={filters[0]} data-name={filters[0]}>
                                { // individual filters
                                    Object.entries(filters[1]).map(([key, value]) => {
                                        // console.log(key, value);
                                        return (
                                            <li className="filter-element" key={key} data-name={key} data-selected={value}
                                                onClick={e => this.filterListener(e, filters[0])}>
                                                {key + (filters[0] === 'rarity' ? "\u2606" : "")}
                                                <div className="overlay"></div>
                                            </li>
                                        );
                                    })}
                            </ul>
                        );
                    })
                }
            </React.Fragment>
        )
    }
}