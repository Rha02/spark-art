package handlers

import "github.com/rha02/spark-art/backend/src/config"

type Repository struct {
	config *config.AppConfig
}

var Repo *Repository

func NewRepository(config *config.AppConfig) *Repository {
	return &Repository{config: config}
}

func NewHandlers(r *Repository) {
	Repo = r
}
