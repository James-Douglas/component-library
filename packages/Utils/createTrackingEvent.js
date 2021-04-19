const createTrackingEvent = (action, object, type, label, value) => ({
  interaction: {
    ixn_action: action,
    ixn_object: object,
    ixn_type: type,
    ixn_label: label,
    ixn_value: value,
  },
});

export default createTrackingEvent;
