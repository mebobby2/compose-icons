import React, { Component } from 'react';
import Icon from './Icon';
import { connect } from 'react-redux';
import { addIcon } from './actions';

const widgetMap = { Icon };
let nextWidgetId = 3;

class App extends Component {
  onDownload = () => {
    const widgetIds = Object.keys(this.props.widgets);
    widgetIds.forEach((widgetId) => {
      const widget = this.props.widgets[widgetId];
      console.log(`id = ${widget.id}, name = ${widget.name}, value = ${widget.value}`);
    });
  }

  addIcon = () => {
    this.props.addIcon(nextWidgetId);
    nextWidgetId += 1;
  };

  render() {
    const widgets = Object.keys(this.props.widgets).map((widgetId) => {
      const widgetName = this.props.widgets[widgetId].name;
      const Component = widgetMap[widgetName];
      return <Component key={widgetId} widgetId={widgetId} />;
    });

    return (
      <div className="App">
        {widgets}
        <button onClick={this.addIcon}>Add</button>
        <button onClick={this.onDownload}>Download</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  widgets: state.widgets
});

export default connect(mapStateToProps, { addIcon })(App);
