export const actions = {
    save: async({request}) => {
        const data = await request.formData();
        let username = data.get('username');
        console.log(username);
    },
    delete: async({request}) => {
        const data = await request.formData();
        console.log("Deleted", data);
    }
}