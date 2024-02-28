package dbrepo

import (
	"errors"

	"github.com/rha02/spark-art/backend/src/models"
)

type testDBRepo struct{}

// NewTestDBRepo creates a new instance of testDBRepo
func NewTestDBRepo() DatabaseReposisotry {
	return &testDBRepo{}
}

// GetUserByID returns a user by ID
func (m *testDBRepo) GetUserByID(id int) (*models.User, error) {
	if id == 1 {
		return &models.User{ID: 1}, nil
	}
	return nil, errors.New("user not found")
}

// CreateUser creates a new user
func (m *testDBRepo) CreateUser(user *models.User) error {
	if user.ID == 1 {
		return errors.New("user exists")
	}
	return nil
}
