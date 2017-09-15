import React, { Component } from 'react';
import { updateIconValue } from './actions';
import { connect } from 'react-redux';

class Icon extends Component {
  onChange = (event) => {
    this.props.updateIconValue(this.props.widgetId, event.target.value);
  }

  render() {
    return (
      <div>
        <input value={this.props.widget.value} onChange={this.onChange} />
      </div>
    );
  }
}

const mapDispatchToProps = { updateIconValue };

const mapStateToProps = (state, ownProps) => ({
  widget: state.widgets[ownProps.widgetId]
});

export default connect(mapStateToProps, mapDispatchToProps)(Icon);
