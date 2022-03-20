import { actionTypes } from './actionTypes.js';
import { isValidEmail } from 'React/common/utilities.js';
import api from 'React/common/api.js';

/*---------------------------
| Actions (Action Creators)
---------------------------*/
export const addField = (fieldObject, state) => {

    let newState = { ...state };

    // Make sure field does not exist already
    const fieldExists = newState.fields.find((field) => field.id === fieldObject.id);

    if (!fieldExists) {
        newState.fields.push({
            isValid: true,
            messages: [],
            ...fieldObject,
        });
    }

    return {
        type: actionTypes.UF_ADD_FIELD,
        newState: newState,
    };
}

export const updateField = (id, value, state) => {

    let newState = { ...state };

    const updatedFields = newState.fields.map((field) => {
        if (field.id === id) {
            field.value =  value;
        }
        return field;
    });

    newState = {
        ...newState,
        fields: updatedFields,
    }

    return {
        type: actionTypes.UF_UPDATE_FIELD,
        newState: newState,
    };
}

export const submitForm = async (state, dispatch) => {

    // 1. Clone existing state
    let newState = { ...state };

    // 2. Validate
    newState = validateForm(newState);

    // 3. Post Data to server
    if (!newState.feedback.show) {
        return serverRequest(newState, dispatch);
    }

    // 4. Update State
    dispatch({
        type: actionTypes.UF_SUBMIT_FORM,
        newState: newState,
    });
}

const validateForm = (newState) => {

    // Reset Form Messaging
    newState.feedback.show = false;
    newState.feedback.type = 'pending';
    newState.feedback.message = '';

    newState.fields = newState.fields.map((field) => {

        // Reset field evaluations
        field.isValid = true;
        field.messages = [];

        // Validate against all rules provided
        field.rules.forEach((rule) => {

            const [ruleName, ruleOption] = rule.split(":");

            switch(ruleName) {
                case 'required':
                    if (field.value.length === 0) {
                        newState.feedback.show = true;
                        field.isValid = false;
                        field.messages.push('This field is required.');
                    }
                    break;
                case 'email':
                    if (!isValidEmail(field.value)) {
                        newState.feedback.show = true;
                        field.isValid = false;
                        field.messages.push('This field does not appear to be a valid email.');
                    }
                    break;
                case 'match':
                    const fieldToMatch = newState.fields.find((f) => {
                        return f.id === ruleOption
                    });

                    if (fieldToMatch.value !== field.value) {
                        newState.feedback.show = true;
                        field.isValid = false;
                        field.messages.push(`This field does not appear to match ${fieldToMatch.label}`);
                    }
                    break;
                default:
                    // do nothing;
                    break;
            }
        });

        return field;
    });

    if (newState.feedback.show) {
        newState.feedback.type = 'error';
        newState.feedback.message = 'There was an error in processing your request. Please check the form and try again.';
    }

    return newState;
}

const serverRequest = (newState, dispatch) => {

    let requestObject = {};

    newState.fields.forEach((field) => {
        requestObject[field.id] = field.value;
    });

    // 1. Make API call to server...
    api[newState.method](newState.apiUrl, requestObject).then((resp) => {

        // Create sample API payload
        const payload = resp.data;

        // Expose results to UF Consumer
        newState.onSubmit({
            fields: newState.fields,
            request: requestObject,
            response: payload,
        });

        newState.payload = payload;

        newState.feedback.show = true;
        newState.feedback.type = payload.success ? 'success':'error';
        newState.feedback.message = payload.message;

        dispatch({
            type: actionTypes.UF_SUBMIT_FORM,
            newState: newState,
        });

    });
}