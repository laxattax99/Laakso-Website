package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}

	router := mux.NewRouter()

	router.HandleFunc("/recently-played", getRecentlyPlayed)

	http.Handle("/", router)
	fmt.Println("Server is running on port 3001")
	http.ListenAndServe("127.0.0.1:3001", nil)
}

func getRecentlyPlayed(w http.ResponseWriter, r *http.Request) {

	lastfmUsername := os.Getenv("LAST_FM_USERNAME")
	lastfmAPIKey := os.Getenv("LAST_FM_API_KEY")

	url := fmt.Sprintf("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=%s&api_key=%s&format=json&limit=1", lastfmUsername, lastfmAPIKey)

	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	client := http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		http.Error(w, "Failed to fetch data from Spotify API", http.StatusInternalServerError)
		return
	}

	var response struct {
		RecentTracks struct {
			Track []struct {
				Name   string `json:"name"`
				Artist struct {
					Name string `json:"#text"`
				} `json:"artist"`
				Date struct {
					UTC string `json:"#text"`
				} `json:"date"`
				Image []struct {
					URL  string `json:"#text"`
					Size string `json:"size"`
				} `json:"image"`
			} `json:"track"`
		} `json:"recenttracks"`
	}

	err = json.NewDecoder(resp.Body).Decode(&response)
	if err != nil {
		log.Fatal(err)
	}

	if len(response.RecentTracks.Track) > 0 {
		// Get the most recent track
		track := response.RecentTracks.Track[0]
		trackName := track.Name
		artistName := track.Artist.Name
		imageUrl := getLargeImageURL(track.Image)
		// playDate := track.Date.UTC

		// // Convert UTC date to local time
		// // playTime, err := time.Parse(time.RFC3339, playDate)
		// if err != nil {
		// 	log.Fatal(err)
		// }
		// localPlayTime := playTime.Local()

		fmt.Printf("Recently Played Track: %s by %s (%s)\n", trackName, artistName, imageUrl)
	} else {
		fmt.Println("No recent tracks found.")
	}

	// Convert data to JSON
	// responseJSON, err := json.Marshal(recentTracks)
	// if err != nil {
	// 	http.Error(w, err.Error(), http.StatusInternalServerError)
	// 	return
	// }

	// w.Header().Set("Content-Type", "application/json")
	// w.WriteHeader(http.StatusOK)
	// w.Write(responseJSON)
}

func getLargeImageURL(images []struct {
	URL  string `json:"#text"`
	Size string `json:"size"`
}) string {
	for _, image := range images {
		if image.Size == "extralarge" {
			return image.URL
		}
	}
	return ""
}
