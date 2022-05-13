// formData object
let formData = {
    fullname: '',
    email: '',
    description: '',
};
// retrieving the local storage
if (localStorage.getItem('formData') !== null) {
    const data = localStorage.getItem('formData');
    formData = JSON.parse(data);
}
 