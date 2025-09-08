import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const { width } = Dimensions.get('window');

export default function App() {
  const [playing, setPlaying] = useState(true);

  const onStateChange = (state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
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
