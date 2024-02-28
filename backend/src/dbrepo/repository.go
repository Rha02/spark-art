package dbrepo

import "github.com/rha02/spark-art/backend/src/models"

type DatabaseReposisotry interface {
	GetUserByID(id int) (*models.User, error)
	CreateUser(user *models.User) error
}
