import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import RNFS from 'react-native-fs';


const Archive = () => {
    useEffect(() => {
      saveDataToJson();
    }, []);
  
    // Function to save data as JSON
    const saveDataToJson = async () => {
      // Sample data to be saved
      const data = [
        { name: 'John', age: 30 },
        { name: 'Alice', age: 28 },
        // Additional data
      ];
  
      // Convert data to JSON string
      const jsonData = JSON.stringify(data);
  
      // Define the file path where JSON data will be stored
      const path = RNFS.DocumentDirectoryPath + '/data.json';
  
      try {
        // Write the JSON data to a file
        await RNFS.writeFile(path, jsonData, 'utf8');
        console.log('JSON file created at:', path);
      } catch (error) {
        console.error('Error creating JSON file:', error);
      }
    };
  
    return (
      <View>
        <Text>Check console for file creation message</Text>
      </View>
    );
  };
  
  export default Archive;
  