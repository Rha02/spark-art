package config

import "github.com/rha02/spark-art/backend/src/dbrepo"

type AppConfig struct {
	DB dbrepo.DatabaseReposisotry
}
