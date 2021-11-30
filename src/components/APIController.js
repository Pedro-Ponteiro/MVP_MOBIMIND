import base64 from "react-native-base64";

class APIController {
  static endpoint = "http://46.101.219.34:8000/api/";

  get_meditations() {
    console.log("funfa");
  }

  async get_activities() {
    try {
      response = await fetch(APIController.endpoint + "audios/", {
        method: "GET",
      });
      json = await response.json();

      let activities = [];
      for (let obj_idx in json) {
        activities.push(json[obj_idx]["activity"]);
      }

      return activities;
    } catch (error) {
      console.log("ERRO", error);
    }
  }

  get_meditation_detail() {
    console.log("funfa");
  }

  async post_meditation(activity) {
    let headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " + base64.encode("pedromcsp:pedromcsp")
    );
    headers.append("Content-Type", "application/json");

    const send_data = JSON.stringify({
      audio_file: activity,
      parameters: [],
      rating: null,
    });

    const res_data = await fetch(APIController.endpoint + "meditations/", {
      method: "POST",
      headers: headers,
      body: send_data,
    });

    let json = await res_data.json();

    const med_url = json["url"];

    let base64_audio = await fetch(med_url, { method: "GET" });
    json = await base64_audio.json();

    base64_audio = json["audio_base64"];

    return base64_audio;
  }
}

export default APIController;
