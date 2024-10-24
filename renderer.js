const addUserBtn = document.getElementById('addUserBtn');
const userForm = document.getElementById('userForm');
const submitUserBtn = document.getElementById('submitUserBtn');
const cancelBtn = document.getElementById('cancelBtn');
const usersTableBody = document.querySelector('#usersTable tbody');

addUserBtn.addEventListener('click', () => {
    userForm.style.display = 'block';
});

submitUserBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const row = usersTableBody.insertRow();
        const cellName = row.insertCell(0);
        const cellAge = row.insertCell(1);
        
        cellName.textContent = name;
        cellAge.textContent = age;

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        userForm.style.display = 'none';
    }
});

cancelBtn.addEventListener('click', () => {
    userForm.style.display = 'none';
});