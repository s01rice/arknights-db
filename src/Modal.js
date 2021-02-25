import React from "react";

const baseUrl = "https://gamepress.gg";
export default class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {
        if (!this.props.show) return null;
        return (
            <div className="modal">
                <div className="modal-content wrapper">
                    <img src={baseUrl + this.props.op.icon} alt={this.props.op.name} className={`modal-icon rarity-${this.props.op.stats.rarity}`} />
                    <div>{this.props.op.name}</div>
                    <button onClick={this.onClose}>X</button>
                </div>
            </div>
        );
    }
}