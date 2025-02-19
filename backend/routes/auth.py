from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from ..services.auth import create_access_token, authenticate_user, ACCESS_TOKEN_EXPIRE_MINUTES
from backend.routes.dependencies import get_db
from datetime import timedelta

router = APIRouter()

@router.post("/token")
def login_for_access_token(email: str, password: str, db: Session = Depends(get_db)):
    user = authenticate_user(db, email, password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="EMAIL OU SENHA INCORRETOS",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}