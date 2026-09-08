import { addStateModifier } from '../vendor/figoya-state-manager.js';

// State for the stock contact-form component (lib/components/contact-form.js).
addStateModifier((customEventName, currentState, data) => {
  switch (customEventName) {
    case "CONTACT_FORM_SENT":
      return {
        ...currentState,
        contactFormSending: true,
      };
    case "CONTACT_FORM_SUCCEEDED":
      return {
        ...currentState,
        contactFormSending: false,
      };
    case "CONTACT_FORM_FAILED":
      return {
        ...currentState,
        contactFormSending: false,
        contactFormErrorMessage: data.message
      };
    default:
      return currentState;
  }
});
