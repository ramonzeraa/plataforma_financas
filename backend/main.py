from fastapi import FastAPI
from .routes.auth import router as auth_router
from .routes.auth import router as auth_router


app = FastAPI()

app.include_router(auth_router, prefix="/auth", tags=["auth"])
app.include_router(auth_router, prefix="/users", tags=["users"])



@app.get("/")
def read_root():
    return {"message": "Bem-vindo à Plataforma de Gestão de Finanças Pessoais!"}                            

@app.get("/usuarios")  # Endpoint que o front-end está tentando acessar
def listar_usuarios():
    return {"message": "Lista de usuários"}