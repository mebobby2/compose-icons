export const UPDATE_ICON_VALUE = 'UPDATE_ICON_VALUE';
export const ADD_ICON = 'ADD_ICON';

export const updateIconValue = (widgetId, value) => ({
  type: UPDATE_ICON_VALUE, widgetId, value,
});

export const addIcon = (widgetId) => ({
  type: ADD_ICON, widgetId,
});
