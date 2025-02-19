from fastapi import APIRouter, Depends
from ..services.auth import get_current_user
from sqlalchemy.orm import Session
from ..db.database import Usuario
from ..routes.dependencies import get_db

router = APIRouter()


@router.get("/usuarios/me")
def read_users_me(current_user: Usuario = Depends(get_current_user)):
    return current_user


@router.post("/usuarios/")
def criar_usuario(nome: str, email: str, senha: str, db: Session = Depends(get_db)):
    db_usuario = Usuario(nome=nome, email=email, senha_hash=senha)  # Hash da senha deve ser implementado
    db.add(db_usuario)
    db.commit()
    db.refresh(db_usuario)
    return db_usuario