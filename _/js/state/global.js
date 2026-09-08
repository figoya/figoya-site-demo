import { addStateModifier } from '../vendor/figoya-state-manager.js';

addStateModifier((customEventName, currentState, data) => {
  switch (customEventName) {
    case "DOM_CONTENT_LOADED":
      return {
        ...currentState,
        mainMenuOpen: false
      };
    default:
      return currentState;
  }
});
