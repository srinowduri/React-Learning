module.exports = {
   
    get: (url) => {
        if (url == 'http://localhost:2000/api/expenses'){
            return Promise.resolve({
                data: [
                    { date: '1', store: 'A', price: 11, comments: 'll'},
                    { date: '2', store: 'B', price: 22, comments: 'kk'},
                    { date: '3', store: 'C', price: 33, comments: 'mm'}
                ]
            });
        }
        else {
            return Promise.resolve({
                data: { date: '1', store: 'A', price: 11, comments: 'll'}
            })
        }
    },

    post: (url) => {
        return Promise.resolve({
            text: "Successfully Added"
        });
    },

    
    put: (url) => {
        return Promise.resolve({
            text: "Successfully Updated"
        });
    },

    delete: (url) => {
        return Promise.resolve({
            text: "Successfully Deleted"
        });
    }
}
