package handlers

import (
	"net/http"
	"path/filepath"

	"github.com/rha02/spark-art/backend/src/models"
	"github.com/rha02/spark-art/backend/src/utils"
)

var allowedFormats = []string{".png", ".jpg", ".jpeg", ".webp"}

func (repo *Repository) Login(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"message": "You are logged in."}`))
}

func (repo *Repository) Register(w http.ResponseWriter, r *http.Request) {
	// Get profile picture from request
	file, fileHeader, err := r.FormFile("file")
	if err != nil {
		http.Error(w, "Error getting file from request", http.StatusBadRequest)
		return
	}
	defer file.Close()

	extension := filepath.Ext(fileHeader.Filename)
	if !utils.Contains(allowedFormats, extension) {
		http.Error(w, "File must be of PNG format", http.StatusBadRequest)
		return
	}

	// Get form data from request
	err = r.ParseMultipartForm(10 << 20)
	if err != nil {
		http.Error(w, "Error parsing form", http.StatusBadRequest)
		return
	}

	// Get form data from request
	username := r.FormValue("username")
	email := r.FormValue("email")
	password := r.FormValue("password")

	// Check if user exists
	_, err = repo.config.DB.GetUserByEmail(email)
	if err == nil {
		http.Error(w, "User with email already exists", http.StatusBadRequest)
		return
	}

	// Create user
	user := &models.User{
		Username: username,
		Email:    email,
		Password: password,
	}

	// Error creating a user
	err = repo.config.DB.CreateUser(user)
	if err != nil {
		http.Error(w, "Error creating user", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write([]byte(`{"message": "You are registered."}`))
}
