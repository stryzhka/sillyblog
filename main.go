package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/", root)
	log.Println("Starting server...")
	err := http.ListenAndServe(":8000", mux)
	log.Fatal(err)
}

func root(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	resp := make(map[string]string)
	resp["msg"] = "hii :3"
	jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Json error")
	}
	w.Write(jsonResp)
}
