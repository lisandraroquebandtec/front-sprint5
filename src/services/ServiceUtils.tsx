const ServiceUtils = {
    handleResponse(req:any) {
        return req.then((resp:any) => {
            if (resp.ok) {
                return resp.json();
            } else {
                throw new Error(resp.json());
            }
        })
    }
}

export default ServiceUtils;