# Back-Connect-Heroes

Este é um projeto que consiste em um backend Django e um frontend React para o Back-Connect-Heroes.

## Backend (Django)

O backend deste projeto foi desenvolvido em Django. Siga as etapas abaixo para configurar e executar o backend:

### Instalação
``````
1.Clone o repositório:

   ```bash
   git clone https://github.com/cHIsIMun/connect-heroes.git
   ```
2.Acesse o diretório do projeto:

  ```bash
  cd back-connect-heroes
  ```
3.Crie e ative um ambiente virtual (opcional, mas recomendado):

  ```bash
  python -m venv env
  source env/bin/activate  # no Windows: env\Scripts\activate
  ```
4.Instale as dependências do Python a partir do arquivo requirements.txt:

  ```bash
  pip install -r requirements.txt
  ```
5.Execute as migrações do Django para configurar o banco de dados:
  
  ```bash
  python manage.py migrate
  ```
## Execução (Django)

1.Inicie o servidor de desenvolvimento do Django:
  
  ```bash
  python manage.py runserver
  ```
2.O servidor estará em execução em http://localhost:8000/.

## Frontend (React)

### Instalação

1.Acesse o diretório do front:

  ```bash
  cd front-connect-heroes
  ```
2.Instale as dependências do Node.js:
  
  ```bash
  npm install
  ```
## Execução (React)

1.Inicie o servidor de desenvolvimento do React:
  
  ```bash
  npm run start
  ```
2.O servidor de desenvolvimento estará em execução em http://localhost:3000/.



