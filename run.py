import uvicorn

if __name__ == "__main__":
    uvicorn.run("backend.main:app", reload=True)