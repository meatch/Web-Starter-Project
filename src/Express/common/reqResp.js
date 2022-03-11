const reqResp = (callback) => {

    const respond = (expRes, reqBody, reqParams) => {
        return (payload, message='Successful Request Response', success=true) => {
            return expRes.json({
                success: success,
                message: message,

                // Enable for troubleshooting
                // reqBody: reqBody,
                // reqParams: reqParams,

                payload: payload,
            });
        }
    }

    const handleError = (handleResponse) => {
        return (err) => {
            return handleResponse(err, 'There was an error in processing your request', false);
        }
    }


    return (expReq,expRes) => {
        const reqBody = expReq.body;
        const reqParams = expReq.params;

        const handleResponse = respond(expRes, reqBody, reqParams);

        callback({
            handleResponse: handleResponse,
            handleError: handleError(handleResponse),
            reqBody,
            reqParams,
        });
    }
}

module.exports = reqResp;
