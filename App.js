import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function App() {
  const [fileCreationMessage, setFileCreationMessage] = useState('');
  const [fileContent, setFileContent] = useState(null);

  useEffect(() => {
    saveDataToJson();
  }, []);

  // Function to save data as JSON
  const saveDataToJson = async () => {
    // Sample data to be saved
    const data = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 28 },
    ];

    // Convert data to JSON string
    const jsonData = JSON.stringify(data);

    // Define the file path where JSON data will be stored
    const path = FileSystem.documentDirectory + 'data.json';

    try {
      // Write the JSON data to a file
      await FileSystem.writeAsStringAsync(path, jsonData, { encoding: FileSystem.EncodingType.UTF8 });
      setFileCreationMessage('JSON file created at: ' + path);

      // Read the content of the file
      const fileContent = await FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
      setFileContent(fileContent); // Set the file content state
    } catch (error) {
      // Update the state with a success or error message
      setFileCreationMessage('Error creating JSON file: ' + error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{fileCreationMessage}</Text>
      {fileContent && (
        <View>
          <Text>Content of the JSON file:</Text>
          <Text>{fileContent}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
