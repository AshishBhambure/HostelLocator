import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const HostelPictures = ({ user }) => {
  const [exteriorImage, setExteriorImage] = useState(null);
  const [roomImage, setRoomImage] = useState(null);
  const [bedImage, setBedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageSelection = (setImageCallback, fileType, fromCamera = false) => {
    let options = {
      mediaType: 'photo',
      saveToPhotos: fromCamera,
    };

    const callback = (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('Error with image picker:', response.errorMessage);
      } else {
        const uri = response.assets[0]?.uri;
        const file = response.assets[0];
        setImageCallback({ uri, file });
      }
    };

    if (fromCamera) {
      launchCamera(options, callback);
    } else {
      launchImageLibrary(options, callback);
    }
  };

  const uploadImages = async () => {
    const formData = new FormData();

    // Add any other fields (e.g., email)
    formData.append('email', user.email);

    // Add images if they are selected
    if (exteriorImage?.file) {
      formData.append('exteriorImage', {
        uri: exteriorImage.file.uri,
        type: exteriorImage.file.type,
        name: exteriorImage.file.fileName,
      });
    }

    if (roomImage?.file) {
      formData.append('roomImage', {
        uri: roomImage.file.uri,
        type: roomImage.file.type,
        name: roomImage.file.fileName,
      });
    }

    if (bedImage?.file) {
      formData.append('bedImage', {
        uri: bedImage.file.uri,
        type: bedImage.file.type,
        name: bedImage.file.fileName,
      });
    }

    // Here you can send the `formData` to your API endpoint
    // Example: await fetch('YOUR_API_ENDPOINT', { method: 'POST', body: formData });

    console.log('Images uploaded');
  };

  const placeholderImage = 'https://via.placeholder.com/150'; // URL for placeholder image

  return (
   <View>
     <Text
      className=' text-black '
     >
       Profile
     </Text>
   </View>
  );
};

export default HostelPictures;
