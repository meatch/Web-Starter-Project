import sampleData from './sampleData.js';

const sampleFormData = (activate) => {

    // Global envrionment variable
    let enabled = (process.env.REACT_APP_SAMPLE_FORM_DATA) ? process.env.REACT_APP_SAMPLE_FORM_DATA == "true" : false;

    // overide at the component level
    if (typeof(activate) != "undefined") { enabled = activate; }

    // render sample value. or not
    const render = (key, fallback='') => {
        if (!enabled) {
            return fallback;
        }

        const sampleRecord = sampleData.find((sr) => sr.key === key);

        return sampleRecord ? sampleRecord.value : fallback;
    }

    return {
        render: render,
    }
}

export default sampleFormData;