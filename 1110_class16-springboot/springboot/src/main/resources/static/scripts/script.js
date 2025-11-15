// const vars
const backendUrl = 'http://localhost:8080';
const UserForm = document.getElementById('UserForm');      //add users form
const getAllUsersBtn = document.getElementById('getAllUsersBtn');//get all users button
const usersTableBody = document.querySelector('#usersTable tbody');   //where users are inserted
const userIdField = document.getElementById('userIdField');
const saveBtn = document.getElementById('saveBtn');


// form event listener
UserForm.addEventListener('submit', function(event) {

    event.preventDefault(); // prevent blank/default

    // get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userId = userIdField.value; // if in edit mode

    // if user already exists, update
    // else, adds user
    if (userId) {
        updateUser(userId, name, email);
    } else {
        addUser(name, email);
    }

});

// get all users listener
getAllUsersBtn.addEventListener('click', fetchUsers);



/// ADDS USER TO TABLE
function addUser(name, email) {

    // add user POST request
    fetch(`${backendUrl}/demo/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`, })
    .then(response => response.text())
    .then(data => {
        alert(data);          // user added message
        UserForm.reset();     // clears form
        fetchUsers()          // updates user list
    }).catch(error => { console.error('Erro:', error); });
}

/// UPDATES EXISTING USER
function updateUser(userId, name, email) {
    fetch(`${backendUrl}/demo/update/${userId}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`, {
        method: 'PUT',
    })
        .then(response => response.text())
        .then(data => {
            alert(data);            // user updated message
            UserForm.reset();       // clears form
            userIdField.value = ''; // clears user IDLimpa o ID do usuário no campo oculto
            fetchUsers();           // updates user list
        }).catch(error => console.error('Erro:', error));
}

/// DELETES USER FROM TABLE
function deleteUser(id) {
    fetch(`${backendUrl}/demo/delete/${id}`, { method: 'DELETE', })
    .then(response => response.text())
    .then(data => {
        alert(data);            // user deleted message
        fetchUsers();           // updates user list
    }).catch(error => console.error('Erro:', error));
}


// FETCH USERS FROM TABLE
function fetchUsers() {
    // get all users GET request
    fetch(`${backendUrl}/demo/all`)
    .then(response => response.json()).then(users => {
        // clean table
        usersTableBody.innerHTML = '';

        // adds each user
        users.forEach(user => {
            const row = document.createElement('tr');

            // create cells for ID, NAME and E-MAIL
            const idCell = document.createElement('td');
            idCell.textContent = user.id;

            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;

            // create action cells "EDIT" and "DELETE"
            const actionCell = document.createElement('td');

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => {
                userIdField.value = user.id; // defines id in hidden field
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
                saveBtn.textContent = 'Alter User';
            };

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                if (confirm(`Are you sure you want to delete user ${user.id}?`)) { deleteUser(user.id); }
            };

            // adds EDIT and DELETE button to cell
            actionCell.appendChild(editButton);
            actionCell.appendChild(deleteButton);

            // appends cell to row
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(emailCell);

            // appends row to table
            usersTableBody.appendChild(row);
        });
    }).catch(error => {console.error('Erro:', error);});
}
