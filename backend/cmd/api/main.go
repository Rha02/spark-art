package main

import (
	"log"
	"net/http"

	"github.com/joho/godotenv"
	"github.com/rha02/spark-art/backend/src/config"
	"github.com/rha02/spark-art/backend/src/http/handlers"
	"github.com/rha02/spark-art/backend/src/http/router"
)

func main() {
	godotenv.Load()

	// Create app-wide config
	appConfig := &config.AppConfig{}

	// Instantiate HTTP repository and handlers
	handlersRepo := handlers.NewRepository(appConfig)
	handlers.NewHandlers(handlersRepo)

	// Instantiate router
	router := router.NewRouter(appConfig)

	// Instantiate HTTP server
	server := &http.Server{
		Addr:    ":8080",
		Handler: router,
	}

	log.Printf("Server listening on %s", server.Addr)

	// Start the server
	err := server.ListenAndServe()
	if err != nil {
		log.Fatal(err)
	}
}
