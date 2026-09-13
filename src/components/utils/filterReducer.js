export default function filterReducer(filter, action) {
  switch (action.type) {
    case 'value': {
      return { ...filter, value: action.value };
    }
    case 'specialization': {
      return { ...filter, specialization: action.specialization };
    }
    case 'skill': {
      return { ...filter, skills: action.skill };
    }
    case 'complexity': {
      return { ...filter, complexities: action.complexity };
    }
    case 'rate': {
      return { ...filter, rates: action.rate };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
