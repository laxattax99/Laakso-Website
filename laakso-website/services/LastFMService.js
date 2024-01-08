export async function getRecentlyPlayed() {
  const lastfmUsername = process.env.NEXT_PUBLIC_LAST_FM_USERNAME;
  const lastfmAPIKey = process.env.NEXT_PUBLIC_LAST_FM_API_KEY;
  
  const url = `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfmUsername}&api_key=${lastfmAPIKey}&format=json&limit=1`;
  
  try {
    const response = await fetch(url);
    console.log(response)
    const lastFMResponse = await response.json();

    const responseData = {
      TrackName: "",
      ArtistName: "",
      ImageUrl: "",
    };

    if (lastFMResponse.recenttracks.track.length > 0) {
      const track = lastFMResponse.recenttracks.track[0];
      responseData.TrackName = track.name;
      responseData.ArtistName = track.artist["#text"];
      responseData.ImageUrl = getLargeImageURL(track.image);
    } else {
      console.log("No recent tracks found.");
    }

    return responseData;
  } catch (error) {
    console.error("Error fetching data from Last.fm API:", error);
  }
}

function getLargeImageURL(images) {
  const largeImage = images.find((image) => image.size === "extralarge");
  return largeImage ? largeImage["#text"] : "";
}
