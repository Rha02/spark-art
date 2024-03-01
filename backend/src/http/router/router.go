package router

import (
	"github.com/go-chi/chi/v5"
	"github.com/rha02/spark-art/backend/src/config"
	"github.com/rha02/spark-art/backend/src/http/handlers"
)

func NewRouter(appConfig *config.AppConfig) *chi.Mux {
	r := chi.NewRouter()

	r.Post("/login", handlers.Repo.Login)
	r.Post("/register", handlers.Repo.Register)

	return r
}
