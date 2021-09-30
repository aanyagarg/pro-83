import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PostCard extends Component {

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
              <View style={styles.authorImageContainer}>

                <Image
                  source={require('..assets/profile_img.png')}
                  style={styles.profileImage}
                />
              </View>
              <Text style={styles.authorNameContainer}>
                {this.props.posts.author}
              </Text>

            </View>

            <Image source = {require('..assets/post.jpeg')} style = {styles.postImage}/>
            <View style = {styles.captionContainer}>
              <Text style = {styles.captionText}>
                {this.props.posts.title}
              </Text>
            </View>

            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} size={RFValue(30)} color={'white'} />
                <Text style={styles.likeText}>1M</Text>
              </View>
            </View>

          </View>
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(26),
    backgroundColor: 'white',
    borderRadius: RFValue(20),
  },
  authorContainer:{
    flex: 1,
  },
  profileImage: {
    resizeMode: 'contain',
    width: '100%',
    alignSelf: 'center',
    height: RFValue(100),
  },
  authorNameContainer: {
    fontSize: RFValue(25),
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 60,
    paddingTop: RFValue(5),
    fontFamily: 'BubbleGum-Sans',
    color: 'red',
  },
  postImage: {
    resizeMode: 'contain',
    width: '97%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  captionContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 70,
  },
  captionText: {
    fontSize: RFValue(30),
    fontFamily: 'BubbleGum-Sans',
    color: 'blue',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    justifyContent: 'center',
    width: RFValue(200),
    height: RFValue(50),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#EB3948',
    borderRadius: RFValue(30),
    borderColor: 'blue',
    borderWidth: 3,
  },
  likeText: {
    color: 'white',
    fontSize: RFValue(25),
    fontFamily: 'Algerian',
  },
});
