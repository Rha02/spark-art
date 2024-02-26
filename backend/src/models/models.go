package models

type User struct {
	ID        int    `json:"id"`
	Email     string `json:"-"`
	Username  string `json:"username"`
	Password  string `json:"-"`
	ImageURL  string `json:"image_url"`
	CreatedAt string `json:"created_at"`
}
