// Modal.js
import React from "react";

const baseUrl = "https://gamepress.gg";
export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    displayTalents = talentObject => {
        if (talentObject.length === 0) return "None";
        return (
            <React.Fragment>
                {talentObject.map((talent) => {
                    return (
                        <p>{talent.name}<br />{talent.desc}</p>
                    )
                })}
            </React.Fragment>
        )
    }


    render() {
        if (!this.props.show) return null;
        return (
            <div className="modal">
                <div className="modal-content wrapper flex">
                    <div className="profile">

                        <img src={baseUrl + this.props.op.icon} alt={this.props.op.name} className={`modal-icon rarity-${this.props.op.stats.rarity}`} />

                        <p>{this.props.op.name}<br />
                            Type: {this.props.op.stats.type}<br />
                            Rarity: {this.props.op.stats.rarity}&#x2606;</p>
                        <p>Stats (at Max)</p>
                        <p>HP: {this.props.op.stats.hp}<br />
                        ATK: {this.props.op.stats.atk}<br />
                        DEF: {this.props.op.stats.def}<br />
                        RES: {this.props.op.stats.res}<br />
                        Cost: {this.props.op.stats.cost}<br />
                        Block: {this.props.op.stats.block}<br /></p>

                    </div>
                    <div className="description">
                        <p>Traits: {this.props.op.traits}</p>
                        <p>Talents: {this.displayTalents(this.props.op.talents)}</p>
                    </div>
                </div>
                <button className="modal-close" onClick={this.onClose}>X</button>
            </div>
        );
    }
}