import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image ,TouchableOpacity,navigation} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const FirstNavigation = ({navigation}) => {
  return (
    <SafeAreaView>
      <View className="p-6">
        {/*First view */}
        <View className="flex-row justify-between pb-7 p-3 pt-5">
          <View>
            <Text className="text-gray-500">Hello,</Text>
            <Text className="text-black text-lg">Hi James</Text>
          </View>

          <View>
            <Image
              height={50}
              width={50}
              source={{
                uri: "https://media.istockphoto.com/id/1368368220/vector/clip-art-of-simple-smiley-face.jpg?s=612x612&w=0&k=20&c=Rv3AEmirKF7p9hdf0qeLOeordW7RsRsjHaP-lkysoPo=",
              }}
            />
          </View>
        </View>
        {/*ends here */}

        {/*the confusing  view starts */}

        <View className="pb-6">
          <View className=" rounded-lg bg-blue-500 p-4  ">
            <View className="flex-row justify-between ">
              <View className="flex-row pb-3">
                <View className="">
                  <Image
                    height={50}
                    width={50}
                    borderRadius={70}
                    source={{
                      uri: "https://i.pinimg.com/736x/f4/c9/ef/f4c9ef33d04a22050038e9e53eeb7d85.jpg",
                    }}
                  />
                </View>
                <View className="pl-3">
                  <Text className="text-lg text-white">Dr. Imran Syahir</Text>
                  <Text className="text-gray-200">General Doctor</Text>
                </View>
              </View>

              <View>
                <View className="">
                  <MaterialCommunityIcons
                    name="greater-than"
                    size={24}
                    color="white"
                  />
                </View>
              </View>
            </View>

            <View className="flex-row border-t border-gray-400 border-solid pt-3 justify-between">
              <View className="flex-row">
                <EvilIcons name="calendar" size={24} color="white" />
                <Text className="text-white pl-1">Sunday,12 June</Text>
              </View>

              <View className="flex-row">
                <MaterialIcons name="access-alarm" size={24} color="white" />
                <Text className="text-white pl-1">11:00-12:00 AM</Text>
              </View>
            </View>
          </View>
        </View>
        {/*second view ends here */}

        {/*third view */}
        <View className="pb-8">
          <View className="flex-row bg-gray-200 rounded-xl p-4 ">
            <AntDesign name="search1" size={24} color="gray" />

            <Text className="text-md text-gray-800 pl-3">
              Search doctor or health issue
            </Text>
          </View>
        </View>
        {/*ends here */}

        {/*fourth view starts */}

        <View className="pb-8">
          <View className="flex-row justify-between">
            <View>
              <View className="bg-gray-200 rounded-full p-4">
                <FontAwesome6 name="virus-covid" size={20} color="blue" />
              </View>
              <View>
                <Text className="text-gray-800">Covid 19</Text>
              </View>
            </View>

            <View>
              <View className="bg-gray-200 rounded-full p-4 ">
                <Fontisto name="doctor" size={20} color="blue" />
              </View>
              <View>
                <Text className="text-gray-800">Doctor</Text>
              </View>
            </View>

            <View>
              <View className="bg-gray-200 rounded-full p-4">
                <MaterialCommunityIcons name="pill" size={24} color="blue" />
              </View>
              <View>
                <Text className="text-gray-800">Medicine</Text>
              </View>
            </View>

            <View>
              <View className="bg-gray-200 rounded-full p-4">
                <FontAwesome5 name="hospital" size={20} color="blue" />
              </View>
              <View>
                <Text className="text-gray-800">Hospital</Text>
              </View>
            </View>
          </View>
        </View>
        {/*fourth view ends */}

        {/*random view */}
        <View className="pb-4">
          <Text className="text-lg">Near Doctor</Text>
        </View>
        {/*ends here */}

        {/*another confusing view starts here */}
        <View className="pb-2">
          <View className=" rounded-lg p-4 bg-white">
            <View className="flex-row justify-between pb-4">
              <View className="flex-row">
                <View className="">
                  <Image
                    height={50}
                    width={50}
                    borderRadius={70}
                    source={{
                      uri: "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
                    }}
                  />
                </View>
                <View>
                  <Text className="text-lg">Dr. Joseph Brostito</Text>
                  <Text className="text-gray-800">Dental Specialist</Text>
                </View>
              </View>

              <View>
                <View className="flex-row">
                  <EvilIcons name="location" size={24} color="black" />
                  <Text className="text-gray-800">1.2 KM</Text>
                </View>
              </View>
            </View>

            <View className="flex-row border-t border-gray-200 border-solid pt-4 justify-between pb-2">
              <View className="flex-row">
                <MaterialIcons name="access-alarm" size={24} color="orange" />
                <Text className="pl-2 text-orange-400">4,8(120 Reviews)</Text>
              </View>

              <View className="flex-row">
                <MaterialIcons name="access-alarm" size={24} color="blue" />
                <Text className="pl-2 text-blue-500">open at 17.00</Text>
              </View>
            </View>
          </View>
        </View>
        {/*and it ends here */}
      </View>

      

      <View className="flex-row justify-between border-t border-gray-200 pt-3">
        <View className="flex-row bg-gray-200 rounded-lg p-4">
          <Fontisto name="home" size={20} color="blue" />
          <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
         <Text className="text-blue-500 pl-2">Home</Text>
         </TouchableOpacity>
        </View>
        <View className="p-4">
          <EvilIcons name="calendar" size={34} color="black" />
        </View>
        <View className="p-4">
          <MaterialCommunityIcons
            name="message-processing-outline"
            size={24}
            color="black"
          />
        </View>
        <View className="p-4">
          <AntDesign name="contacts" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FirstNavigation;
