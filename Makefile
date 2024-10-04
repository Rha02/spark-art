SHELL=cmd.exe

dev_backend:
	@echo "Starting development backend server locally..."
	cd backend && poetry run uvicorn main:app --reload

dev_frontend:
	@echo Starting development frontend server locally...
	cd frontend && npm run start