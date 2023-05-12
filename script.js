//Objeto e usuarios
const users ={
    nome: '',
    usuario: '',
    senha: '',
    logado: false
}

//Array de objetos dos usuarios
let usersArray = [];

function startApp() {
    
    let opcao = null

    while (opcao!==0) {
        
    let result;
    switch (opcao) {
        case null:
            alert('você precisa estar logado para acessar o menu principal.\n\n'+
                  'Caso ainda não tenha usuário cadastrado, utilize a opção 2 do menu e faça seu registro')
                  break
        case 1:
            result = login();
            if(result){
                alert('Entrar no menu principal.')
            }else{
                alert('Usuario ou senha incorretos.')
            }
            break
        case 2:
            result = register();
            if(!result){
                alert('Não foi possível fazer o cadastro.')
            }else{
                alert('Usuário cadastrado com secesso.'+
                'Agora é só acessar.👍')
            }
        
            break
        case 3:
            break
        default:
            alert('Opção não encontrada.')
            break
        }

            opcao = Number(prompt(
                'Selecione a opção desejada:\n'+
                '1 - Entrar\n'+
                '2 - Cadastrar\n'+
                '3 - Esqueci minhas credenciais\n'+
                '0 - Sair'
            )
        )

    }
    
}

function validateLogin(user,pass){
    let result =false;
    for(let i = 0; 1 < usersArray.length; i++){
        if(usersArray[i].usuario === user && usersArray[i].senha === pass)
        result = true;
        usersArray[i].logado = true;
    }
    return result
}

function login() {
    let user = prompt('Seu usuário:');
    let pass = prompt('Sua senha:');

    return validateLogin(user,pass)
}


function register() {
    let result = false;

    users.nome      = prompt('Nome: ');
    users.usuario   = prompt('Usuario: ');
    users.senha     = prompt('Senha: ');

    if (users.nome !== '' && users.senha !== ''){
        usersArray.push(users);
        result = true
    }

    return result

}


//Inicia o sistema 
startApp();