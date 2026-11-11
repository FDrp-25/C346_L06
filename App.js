import React, { useState } from 'react';
import { View, Text, Button, Alert, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MyApp = () => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const checkAnswers = () => {
    let score = 0;

    if (q1 === 'Metal Gear Solid 2 - sons of liberty') score++;
    if (q2 === 'return of wolfenstein') score++;
    if (q3 === 'GoldenEye 007') score++;

    Alert.alert('Quiz Result', `You got ${score} out of 3 correct!`);
  };

  return (
      <View>
          <Image
              source={{ uri: 'http://s01.riotpixels.net/data/9f/5d/9f5d3276-c892-4e28-9e83-b549b37275c6.jpg.240p.jpg/screenshot.metal-gear-solid-2-sons-of-liberty.424x240.2002-03-08.146.jpg'}}
              style={{ width: 200, height: 150 }}/>
        <Text>Question 1: What Game is this?</Text>
        <Picker
            selectedValue={q1}
            onValueChange={(value) => setQ1(value)}
        >
          <Picker.Item label="rayman" value="rayman" />
          <Picker.Item label="splinter cell" value="splinter cell" />
          <Picker.Item label="Metal Gear Solid 2 - sons of liberty" value="Metal Gear Solid 2 - sons of liberty" />
        </Picker>

          <Image
              source={{
                  uri: 'https://images.launchbox-app.com/d9c7f929-8307-4985-9f75-fb9897bfa6b4.png'
              }}
              style={{ width: 200, height: 150 }}
          />

          <Text>Question 2: What Game is this?</Text>
          <Picker
              selectedValue={q2}
              onValueChange={(value) => setQ2(value)}
          >
              <Picker.Item label="return of wolfenstein" value="return of wolfenstein" />
              <Picker.Item label="Call of Duty: Finest Hour" value="Call of Duty: Finest Hour" />
              <Picker.Item label="Medal of Honor: Frontline" value="Medal of Honor: Frontline" />
          </Picker>
          <Image
              source={{
                  uri: 'https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2023/01/goldeneye-007-gameplay-screenshot.jpg'
              }}
              style={{ width: 200, height: 150 }}
          />
          <Text>Question 3: What Game is this?</Text>
          <Picker
              selectedValue={q3}
              onValueChange={(value) => setQ3(value)}
          >
              <Picker.Item label="Perfect Dark" value="Perfect Dark" />
              <Picker.Item label="Nightfire" value="Nightfire" />
              <Picker.Item label="GoldenEye 007" value="GoldenEye 007" />
          </Picker>
          <Button
              title="Submit Answers"
              onPress={checkAnswers}
          />

      </View>
  );
};

export default MyApp;
