# Back-Connect-Heroes

Este é um projeto que consiste em um backend Django e um frontend React para o Back-Connect-Heroes.

## Backend (Django)

O backend deste projeto foi desenvolvido em Django. Siga as etapas abaixo para configurar e executar o backend:

### Instalação
``````
1.Clone o repositório:

   ```
   git clone https://github.com/cHIsIMun/connect-heroes.git
   ```
2.Acesse o diretório do projeto:

  ```
  cd back-connect-heroes
  ```
3.Crie e ative um ambiente virtual (opcional, mas recomendado):

  ```
  python -m venv env
  source env/bin/activate  # no Windows: env\Scripts\activate
  ```
4.Instale as dependências do Python a partir do arquivo requirements.txt:

  ```
  pip install -r requirements.txt
  ```
5.Execute as migrações do Django para configurar o banco de dados:
  
  ```
  python manage.py migrate
  ```
## Execução (Django)

1.Inicie o servidor de desenvolvimento do Django:
  
  ```
  python manage.py runserver
  ```
2.O servidor estará em execução em http://localhost:8000/.

## Frontend (React)

### Instalação

1.Acesse o diretório do front:

  ```
  cd front-connect-heroes
  ```
2.Instale as dependências do Node.js:
  
  ```
  npm install
  ```
## Execução (React)

1.Inicie o servidor de desenvolvimento do React:
  
  ```
  npm run start
  ```
2.O servidor de desenvolvimento estará em execução em http://localhost:3000/.



