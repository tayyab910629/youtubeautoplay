import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions, Platform } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import YouTube from 'react-youtube';

const { width } = Dimensions.get('window');

export default function App() {
  const [playing, setPlaying] = useState(true);

  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  };

  const onWebReady = (event) => {
    event.target.playVideo();
  };

  const onWebStateChange = (event) => {
    if (event.data === 0) { // ended
      setPlaying(false);
    }
  };

  const renderYouTubePlayer = () => {
    if (Platform.OS === 'web') {
      return (
        <YouTube
          videoId="h51ZMOJMw-E"
          opts={{
            height: width * 0.5625,
            width: width,
            playerVars: {
              autoplay: 1,
              controls: 1,
              rel: 0,
              showinfo: 0,
              modestbranding: 1,
            },
          }}
          onReady={onWebReady}
          onStateChange={onWebStateChange}
        />
      );
    }

    return (
      <YoutubePlayer
        height={width * 0.5625}
        width={width}
        play={playing}
        videoId="h51ZMOJMw-E"
        onChangeState={onStateChange}
        forceAndroidAutoplay={true}
        initialPlayerParams={{
          autoplay: 1,
          controls: 1,
          rel: 0,
          showinfo: 0,
          modestbranding: 1,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      {renderYouTubePlayer()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
