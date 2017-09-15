import React, { Component } from 'react';
import { updateIconValue } from './actions';
import { connect } from 'react-redux';

class Icon extends Component {
  onChange = (event) => {
    this.props.updateIconValue(this.props.widgetId, event.target.value);
  }

  render() {
    console.log('render from ICON '+this.props.widgetId);
    return (
      <div>
        <input value={this.props.widgets[this.props.widgetId].value} onChange={this.onChange} />
      </div>
    );
  }
}

const mapDispatchToProps = { updateIconValue };

const mapStateToProps = (state, ownProps) => ({
  widgets: state.widgets,
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
