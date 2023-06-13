export default class SpotifyService {
  static async getToken() {
    console.log("test");
    const client_id = process.env.REACT_APP_CLIENT_ID;
    const client_secret = process.env.REACT_APP_CLIENT_SECRET;
    console.log(client_id);
    console.log(client_secret);
    console.log(btoa(`${client_id}:${client_secret}`));
    console.log(process.env.VITE_CLIENT_ID);
    console.log(process.env.VITE_CLIENT_SECRET);
    console.log(process.env.VITE_REACT_APP_TEST);

    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa(`${client_id}:${client_secret}`),
        },
        body: "grant_type=client_credentials",
      });
      console.log(response);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const token = await response.json();
      return token.access_token;
    } catch (error) {
      return error.message;
    }
  }
  static async getSearch(token, genre, years) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=year%3A${years[0]}-${years[1]}%20genre%3A${genre}&type=track`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        }
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
  static async getGenres(token) {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/recommendations/available-genre-seeds`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        }
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      return error.message;
    }
  }
}
