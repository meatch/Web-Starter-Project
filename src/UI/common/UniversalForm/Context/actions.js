import { actionTypes } from './actionTypes.js';
import { isValidEmail } from 'UI/common/utilities';

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

    // 3. Trigger Consumer onSubmit
    if (!newState.feedback.show) {
        return await consumerSubmit(newState, dispatch);
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

            switch(rule) {
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

const consumerSubmit = async (newState, dispatch) => {

    let requestObject = {};

    newState.fields.forEach((field) => {
        requestObject[field.id] = field.value;
    });

    // Expose data to Consumer could be async?
    const consumerResponse = await newState.onSubmit({
        fields: newState.fields,
        requestObject: requestObject,
    });

    if (consumerResponse) {
        newState.feedback = {
            show: true,
            type: consumerResponse.success ? 'success':'error',
            message: consumerResponse.message,
            payload: consumerResponse.payload,
        }

        return dispatch({
            type: actionTypes.UF_SUBMIT_FORM,
            newState: newState,
        });
    }
}