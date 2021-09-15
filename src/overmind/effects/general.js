import axios from "axios";
import { baseUrl, mapsKey } from "../../Utils/Globals";
import firestore from "@react-native-firebase/firestore";
import auth from "@react-native-firebase/auth";

export default {
  getHotels: async (latitude, longitude, type, radius = 1500) => {
    const ret = await axios({
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude}%2C${longitude}&radius=${radius}&type=${type}&keyword=hotel&key=${mapsKey}`,

      method: "get",
    });

    return ret.data?.results?.map((item) => {
      return {
        id: `${item.place_id}`,
        name: `${item.name}`,
        description: `${item.name} is high rated hotels, we are always maintaning the quality for better rating and high attitude service for you.\n\n\n${item.name} located in a strategic location. The hotel located in the middle of the city so you can enjoy the city and see something nearby.\n\n\nYou will be welcomed amongst olive trees, citron trees and magnolias, in gardens that hide exotic plants and in a wonderful outdoor pool with deck chairs.`,
        location: `${item.vicinity}`,
        rating: `${item.rating}`,
        reviews: `${item.user_ratings_total}`,
        image:
          item.photos?.length > 0 &&
          `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1500&photo_reference=${item.photos[0].photo_reference}&key=${mapsKey}`,
      };
    });
  },
  submitBooking: async (email, data) => {
    return firestore().collection(email).add(data);
  },
  getBookings: async (email, data) => {
    return firestore().collection(email).get();
  },

  login: async (email, password) => {
    return auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        return "";
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          //return "auth/invalid-email";
          return "That email address is invalid!";
        }

        if (error.code === "auth/user-not-found") {
          console.log("User was not found!");
          //return "auth/user-not-found";
          return "User was not found!";
        }

        if (error.code === "auth/user-disabled") {
          console.log("User account is disabled!");
          //return "auth/user-disabled";
          return "User account is disabled!";
        }

        if (error.code === "auth/wrong-password") {
          console.log("Wrong password!");
          //return "auth/wrong-password";
          return "Wrong password!";
        }

        console.error(error);
        return error;
      });
  },

  signup: async (email, password) => {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        return "";
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
          return "That email address is already in use!";
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
          return "That email address is invalid!";
        }

        console.error(error);
        return error;
      });
  },
};
