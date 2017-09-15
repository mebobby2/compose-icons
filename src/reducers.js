import { combineReducers } from 'redux';
import { UPDATE_ICON_VALUE, ADD_ICON } from './actions';

const icon = { id: 1, name: 'Icon', value: 'Enter text' };
const icon2 = { id: 2, name: 'Icon', value: 'Enter text' };

export default combineReducers({
  widgets: (state = { [icon.id]: icon, [icon2.id]: icon2 }, action) => {
    switch (action.type) {
      case UPDATE_ICON_VALUE:
        const widget = { ...state[action.widgetId] };
        widget.value = action.value;
        state[action.widgetId] = widget;
        return { ...state, [action.widgetId]: widget };
      case ADD_ICON:
        const newIcon = { id: action.widgetId, name: 'Icon', value: 'Enter text' };
        return { ...state, [newIcon.id]: newIcon };
      default:
        return state;
    }
  }
});
