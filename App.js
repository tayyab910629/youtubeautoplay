import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import YouTube from 'react-youtube';

const { width } = Dimensions.get('window');

export default function App() {
  const [playing, setPlaying] = useState(true);

  const onReady = (event) => {
    event.target.playVideo();
  };

  const onStateChange = (event) => {
    if (event.data === 0) { // ended
      setPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
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
        onReady={onReady}
        onStateChange={onStateChange}
      />
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
