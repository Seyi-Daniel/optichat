import React, { useEffect, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import chatApi from "../api/chat";
import ChatTools from "../components/ChatTools";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

function ChatScreen({ route }) {
  const listings = [
    { id: 1, title: "my message", group: "me" },
    { id: 28, title: "your message", group: "you" },
    { id: 3, title: "my message", group: "me" },
    { id: 4, title: "your message", group: "you" },
    { id: 5, title: "my message", group: "me" },
    {
      id: "6:15",
      title:
        "your message llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
      group: "you",
    },
    { id: "7:00", title: "your message", group: "you" },
    { id: "8:30", title: "Does this look good?", group: "you" },
    { id: "9:45", title: "What do you think?", group: "you" },
  ];

  const [refreshApp, setRefreshApp] = useState(true);

  const { data: chats, request: loadChats } = useApi(chatApi.getChat);

  console.log(route.params.beneficiaryNumber);

  useEffect(() => {
    loadChats(route.params.beneficiaryNumber);
  }, [refreshApp]);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <FlatList
          data={chats.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.chat}>
              <View
                style={{
                  ...styles.alignment[item.interaction],
                  ...styles.bubble[item.interaction],
                }}
              >
                <Text style={{ color: colors.white, fontSize: 18 }}>
                  {item.payload}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.alignment[item.interaction],
                  color: colors.light2,
                }}
              >
                {item.modified}
              </Text>
            </View>
          )}
        />
        <View>
          <ChatTools
            accountNo={route.params.beneficiaryNumber}
            refresh={() => setRefreshApp(!refreshApp)}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bubble: {
    Sent: {
      backgroundColor: colors.middle,
      padding: 10,
      borderTopStartRadius: 10,
      borderTopEndRadius: 10,
      borderBottomStartRadius: 10,
    },
    Received: {
      backgroundColor: colors.blue,
      padding: 10,
      borderTopStartRadius: 10,
      borderTopEndRadius: 10,
      borderBottomEndRadius: 10,
    },
  },
  chat: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  alignment: {
    Sent: {
      alignSelf: "flex-end",
    },
    Received: {
      alignSelf: "flex-start",
    },
  },
});

export default ChatScreen;

////////////////////////////////////////////

// import React from "react";
// import { FlatList, StyleSheet, Text, View } from "react-native";

// import ChatTools from "../components/ChatTools";
// import colors from "../config/colors";

// function ChatScreen(props) {
//   const listings = [
//     { id: 1, title: "my message", group: "me" },
//     { id: 28, title: "your message", group: "you" },
//     { id: 3, title: "my message", group: "me" },
//     { id: 4, title: "your message", group: "you" },
//     { id: 5, title: "my message", group: "me" },
//     {
//       id: "6:15",
//       title:
//         "your message llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll",
//       group: "you",
//     },
//     { id: "7:00", title: "your message", group: "you" },
//     { id: "8:30", title: "Does this look good?", group: "you" },
//     { id: "9:45", title: "What do you think?", group: "you" },
//   ];

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={listings}
//         keyExtractor={(listing) => listing.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.chat}>
//             <View
//               style={{
//                 ...styles.alignment[item.group],
//                 ...styles.bubble[item.group],
//               }}
//             >
//               <Text style={{ color: colors.white }}>{item.title}</Text>

//               <Text
//                 style={{
//                   ...styles.alignment[item.group],
//                   color: colors.light,
//                 }}
//               >
//                 {item.id}
//               </Text>
//             </View>
//           </View>
//         )}
//       />
//       <ChatTools />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   bubble: {
//     me: {
//       backgroundColor: colors.middle,
//       padding: 10,
//       borderTopStartRadius: 10,
//       borderTopEndRadius: 10,
//       borderBottomStartRadius: 10,
//     },
//     you: {
//       backgroundColor: colors.blue,
//       padding: 10,
//       borderTopStartRadius: 10,
//       borderTopEndRadius: 10,
//       borderBottomEndRadius: 10,
//     },
//   },
//   chat: {
//     marginTop: 10,
//     marginHorizontal: 10,
//   },
//   alignment: {
//     me: {
//       alignSelf: "flex-end",
//     },
//     you: {
//       alignSelf: "flex-start",
//     },
//   },
// });

// export default ChatScreen;
