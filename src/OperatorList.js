// OperatorList.js

import React from "react"
import operators from './Operators.js';

const baseUrl = "https://gamepress.gg"
export default class OperatorList extends React.Component {

    onClick = op => {
        this.props.opClick(op);
    }

    filterCollect = () => {
        const filterTags = {
            type: [],
            rarity: []
        };
        const { type, rarity } = this.props.filters;
        for (let typeKey in type) {
            if (type[typeKey]) filterTags.type.push(typeKey);
        }
        for (let rarityKey in rarity) {
            if (rarity[rarityKey]) filterTags.rarity.push(rarityKey);
        }
        return filterTags;
    }

    filterOps = (operators, filters) => {
        const filterKeys = Object.keys(filters);
        return operators.filter(operator => {
            return filterKeys.every(key => {
                if (!filters[key].length) return true;

                return filters[key].includes(operator.stats[key].toString());
            })
        })
    }

    render() {
        const filters = this.filterCollect();
        const filteredOps = this.filterOps(operators, filters);
        console.log(filters);

        return (
            <ul className="operator-list">
                {filteredOps.map((operator) => {

                    return (
                        <li className="op-list-element" key={operator.name} onClick={() => { this.onClick(operator); }}>
                            <img src={baseUrl + operator.icon} alt={operator.name} className={`icon rarity-${operator.stats.rarity}`} />
                            <div className="overlay"></div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}