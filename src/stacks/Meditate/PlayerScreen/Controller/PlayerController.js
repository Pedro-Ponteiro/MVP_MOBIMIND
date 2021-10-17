import React, { useState, useRef } from "react";
import PlayerView from "../View/PlayerView";
import { Audio } from "expo-av";
import PlayerModel from "../Model/PlayerModel";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PlayerController = ({ navigation, route }) => {
  const [count, setCount] = useState(0);
  const interval = useRef(null);
  const sound = React.useRef(null);
  const playbackObj = React.useRef(null);
  const [playPauseText, setplayPauseText] = useState("Play");
  const playerModel = new PlayerModel(route.params);

  const button_pause_pressed = async () => {
    // carregar audio
    if (sound.current == null) {
      setplayPauseText("Loading");

      const playback = new Audio.Sound();
      const status = await playback.loadAsync(playerModel.sound_required, {
        shouldPlay: true,
      });
      playback.setOnPlaybackStatusUpdate(_onPlaybackStatusUpdate);

      sound.current = status;
      playbackObj.current = playback;
      setplayPauseText("Pause");

      iniciar_cronometro();
      return;
    }

    // pausar audio
    if (sound.current.isLoaded && sound.current.isPlaying) {
      const status = await playbackObj.current.setStatusAsync({
        shouldPlay: false,
      });
      sound.current = status;
      clearInterval(interval.current);
      setplayPauseText("Play");
      return;
    }

    // resumir audio
    if (sound.current.isLoaded && !sound.current.isPlaying) {
      const status = await playbackObj.current.playAsync();
      sound.current = status;
      setplayPauseText("Pause");
      iniciar_cronometro();
      return;
    }
  };

  const _onPlaybackStatusUpdate = (auxstatus) => {
    if (auxstatus.didJustFinish) {
      if (playerModel.current_loop == playerModel.number_repeats) {
        clearInterval(interval.current);
        playbackObj.current.unloadAsync();

        // saving data to local storage
        saveData();

        navigation.navigate("InitialMeditateScreen");
        return;
      } else {
        playerModel.current_loop += 1;
        playbackObj.current.replayAsync();
      }
      return;
    }
  };

  const iniciar_cronometro = () => {
    interval.current = setInterval(() => {
      setCount((auxCount) => auxCount + 1);
    }, 1000);
  };

  const cancel_meditation = () => {
    if (playbackObj.current != null) {
      playbackObj.current.unloadAsync();
    }
    clearInterval(interval.current);
    navigation.goBack();
  };

  const seconds_to_minutes = (secs) => {
    const mins = (secs / 60) | 0;
    const sec = secs % 60;
    return mins.toString() + ":" + sec.toString();
  };

  const saveData = async () => {
    const var_name_times = "@" + route.params.check + "_times";
    const var_name_time = "@" + route.params.check + "_time";

    let times_meditated = await AsyncStorage.getItem(var_name_times);
    if (times_meditated == null) {
      times_meditated = "1";
    } else {
      times_meditated = parseInt(times_meditated) + 1;
      times_meditated = times_meditated.toString();
    }
    await AsyncStorage.setItem(var_name_times, times_meditated);

    let time_meditated = await AsyncStorage.getItem(var_name_time);
    if (time_meditated == null) {
      time_meditated = "1";
    } else {
      time_meditated = parseInt(time_meditated) + route.params.time;
      time_meditated = time_meditated.toString();
    }
    await AsyncStorage.setItem(var_name_time, time_meditated);
  };

  React.useEffect(() => {
    Audio.setAudioModeAsync({
      allowRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      shouldDuckAndroid: true,
      staysActiveInBackground: true,
    });
  }, []);

  return (
    <PlayerView
      count={seconds_to_minutes(count)}
      pause_func={button_pause_pressed}
      action_text={playPauseText}
      navigation={navigation}
      tipo_meditacao={route.params.check}
      tempo_meditacao={route.params.time}
      cancel_meditation={cancel_meditation}
    />
  );
};

export default PlayerController;
