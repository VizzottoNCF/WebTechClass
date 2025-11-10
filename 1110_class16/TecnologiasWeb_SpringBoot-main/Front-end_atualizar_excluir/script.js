// Define a URL base do backend
const backendUrl = 'http://localhost:8080';

// Seleciona elementos do DOM
const userForm = document.getElementById('userForm');
const getAllUsersBtn = document.getElementById('getAllUsersBtn');
const usersTableBody = document.querySelector('#usersTable tbody');
const userIdField = document.getElementById('userId');
const saveBtn = document.getElementById('saveBtn');

// Listener para enviar o formulário e adicionar ou atualizar um usuário
userForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Obtém os valores do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const userId = userIdField.value; // ID do usuário (se estiver em modo de edição)

    if (userId) {
        // Atualiza o usuário se o campo userId estiver preenchido
        updateUser(userId, name, email);
    } else {
        // Adiciona um novo usuário
        addUser(name, email);
    }
});

// Função para adicionar um novo usuário
function addUser(name, email) {
    fetch(`${backendUrl}/demo/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`,
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Exibe uma mensagem de sucesso
        userForm.reset(); // Limpa o formulário
        fetchUsers(); // Atualiza a lista de usuários
    })
    .catch(error => console.error('Erro:', error));
}

// Função para atualizar um usuário existente
function updateUser(id, name, email) {
    fetch(`${backendUrl}/demo/update/${id}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`, {
        method: 'PUT',
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Exibe uma mensagem de sucesso
        userForm.reset(); // Limpa o formulário
        userIdField.value = ''; // Limpa o ID do usuário no campo oculto
        fetchUsers(); // Atualiza a lista de usuários
    })
    .catch(error => console.error('Erro:', error));
}

// Função para deletar um usuário
function deleteUser(id) {
    fetch(`${backendUrl}/demo/delete/${id}`, {
        method: 'DELETE',
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Exibe uma mensagem de sucesso
        fetchUsers(); // Atualiza a lista de usuários
    })
    .catch(error => console.error('Erro:', error));
}

// Função para buscar e exibir todos os usuários
function fetchUsers() {
    fetch(`${backendUrl}/demo/all`)
    .then(response => response.json())
    .then(users => {
        usersTableBody.innerHTML = ''; // Limpa a tabela antes de atualizar

        users.forEach(user => {
            const row = document.createElement('tr'); // Cria uma nova linha na tabela

            // Cria células para ID, Nome e E-mail do usuário
            const idCell = document.createElement('td');
            idCell.textContent = user.id;

            const nameCell = document.createElement('td');
            nameCell.textContent = user.name;

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;

            // Cria a célula de ações com botões "Editar" e "Excluir"
            const actionsCell = document.createElement('td');

            // Botão "Editar"
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = () => {
                userIdField.value = user.id; // Define o ID do usuário no campo oculto
                document.getElementById('name').value = user.name;
                document.getElementById('email').value = user.email;
                saveBtn.textContent = 'Atualizar Usuário'; // Altera o texto do botão para "Atualizar"
            };

            // Botão "Excluir"
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Excluir';
            deleteButton.onclick = () => {
                if (confirm(`Tem certeza de que deseja excluir o usuário ${user.name}?`)) {
                    deleteUser(user.id);
                }
            };

            // Adiciona os botões "Editar" e "Excluir" na célula de ações
            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);

            // Adiciona as células à linha
            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(emailCell);
            row.appendChild(actionsCell);

            // Adiciona a linha completa ao corpo da tabela de usuários
            usersTableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Erro:', error));
}

// Listener para o botão de obter todos os usuários
getAllUsersBtn.addEventListener('click', fetchUsers);
