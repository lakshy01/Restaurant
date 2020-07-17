
import React from 'react';

class MenuItem extends React.Component {

    state = { count: 0 };

    increment = () => {
        this.props.onOrderChange(this.state.count + 1, this.props.item.id);
        this.setState({ count: this.state.count + 1 });
    }

    decrement = () => {
        if (this.state.count === 0) {
            return;
        }
        this.props.onOrderChange(this.state.count - 1, this.props.item.id);
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        const { amount, title, description, source } = this.props.item;
        return (
            <div className="card" style={{ margin: '40px' }}>
                <div className="image">
                    <img src={source} />
                </div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta">
                        <a>{amount}</a>
                    </div>
                    <div className="description">
                        {description}
                    </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        <div className="ui icon button" data-tooltip="Click To Add" onClick={this.increment}>
                            <i className="add icon" style={{ color: 'green' }}></i>
                        </div>
                    </span>
                    <span>
                        <div className="ui icon button" data-tooltip="Click To Deduct" onClick={this.decrement}>
                            <i className="minus icon" style={{ color: 'red' }}></i>
                        </div>
                    </span>
                    <span>
                        <div className="ui icon button" style={{ marginLeft: '70px' }}>
                            <div>{this.state.count}</div>
                        </div>
                    </span>
                </div>
            </div>
        )
    }
}

export default MenuItem;