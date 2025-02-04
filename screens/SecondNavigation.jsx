import {
  View,
  Text,
  Button,
  navigation,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SecondNavigation = ({ navigation }) => {
  return (
    <SafeAreaView>
      {/*first view starts */}
      <View className="pb-4 pt-3">
        <View className="flex-row justify-between">
          <View className="bg-gray-200 pr-7 rounded-r-full pt-3">
            <Text>dule</Text>
          </View>
          <View className="bg-blue-50 p-3 rounded-full">
            <Text className="text-blue-600">Upcoming schedule</Text>
          </View>
          <View className="bg-gray-200 pl-7 pt-2 rounded-l-full ">
            <Text>Comp</Text>
          </View>
        </View>
      </View>
      {/*first view ends */}

      <View className="p-3">
        {/*second view starts */}
        <View className="pb-3">
          <View className=" rounded-lg p-3 bg-white">
            <View className="flex-row pb-3">
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
              <View className="pl-2">
                <Text className="text-lg">Dr. Joseph Brostito</Text>
                <Text className="text-gray-600">Dental Specialist</Text>
              </View>
            </View>

            <View className="flex-row border-t border-gray-200 border-solid pt-3 justify-between pb-3">
              <View className="flex-row">
                <EvilIcons name="calendar" size={24} color="gray" />
                <Text className=" pl-1 text-gray-600">Sunday,12 June</Text>
              </View>

              <View className="flex-row">
                <MaterialIcons name="access-alarm" size={24} color="gray" />
                <Text className=" pl-1 text-gray-600">11:00-12:00 AM</Text>
              </View>
            </View>

            <View className="bg-blue-50 rounded-full p-3">
              <Text className="text-blue-500 text-center">Detail</Text>
            </View>
          </View>
        </View>
        {/*second view ends */}

        {/*third view starts here */}
        <View className="pb-4">
          <View className=" rounded-lg p-4 bg-white">
            <View className="flex-row pb-3">
              <View className="">
                <Image
                  height={50}
                  width={50}
                  borderRadius={70}
                  source={{
                    uri: "https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg",
                  }}
                />
              </View>
              <View className="pl-2">
                <Text className="text-lg">Dr.Bessie Coleman</Text>
                <Text className="text-gray-600">Dental Specialist</Text>
              </View>
            </View>

            <View className="flex-row border-t border-gray-200 border-solid pt-4 justify-between pb-4">
              <View className="flex-row">
                <EvilIcons name="calendar" size={24} color="gray" />
                <Text className=" pl-1 text-gray-600">Sunday,12 June</Text>
              </View>

              <View className="flex-row">
                <MaterialIcons name="access-alarm" size={24} color="gray" />
                <Text className=" pl-1 text-gray-600">11:00-12:00 AM</Text>
              </View>
            </View>

            <View className="bg-blue-50 rounded-full p-3">
              <Text className="text-blue-500 text-center">Detail</Text>
            </View>
          </View>
        </View>
        {/*third view ends here */}

        {/*fourth view starts here */}
        <View className="pb-3">
          <View className=" rounded-lg p-3 bg-white">
            <View className="flex-row pb-3">
              <View className="">
                <Image
                  height={50}
                  width={50}
                  borderRadius={70}
                  source={{
                    uri: "https://img.freepik.com/premium-photo/young-asian-female-doctor-grey_296537-1123.jpg",
                  }}
                />
              </View>
              <View className="pl-2">
                <Text className="text-lg">Dr.Babe Didrikson</Text>
                <Text className="text-gray-600">Dental Specialist</Text>
              </View>
            </View>

            <View className="flex-row border-t border-gray-200 border-solid pt-3 justify-between pb-3">
              <View className="flex-row">
                <EvilIcons name="calendar" size={24} color="gray" />
                <Text className=" pl-1 text-gray-600">Sunday,12 June</Text>
              </View>

              <View className="flex-row">
                <MaterialIcons name="access-alarm" size={24} color="gray" />
                <Text className=" pl-1 text-gray-600">11:00-12:00 AM</Text>
              </View>
            </View>

            <View className="bg-blue-50 rounded-full p-3">
              <Text className="text-blue-500 text-center">Detail</Text>
            </View>
          </View>
        </View>
        {/*fourth view ends here */}
      </View>

      <View className="flex-row justify-between border-t-2 border-blue-50 bg-white p-4">
        <View>
          <Feather name="home" size={24} color="black" />
        </View>

        <View className="flex-row bg-blue-50 rounded-full p-2">
          <EvilIcons name="calendar" size={30} color="blue" />
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text className="text-blue-500 pl-2">Schedule</Text>
          </TouchableOpacity>
        </View>

        <View >
          <MaterialCommunityIcons
            name="message-processing-outline"
            size={24}
            color="black"
          />
        </View>
        <View>
          <AntDesign name="contacts" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondNavigation;
