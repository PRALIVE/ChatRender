import { isSameSenderMargin, isSameUser } from "../../config/ChatLogic";
import { ChatState } from "../Context/GlobalHooks";
import "../miscellaneous/styles.css";
import ScrollableFeed from "react-scrollable-feed";
function SingleChats({messages}){

    const {user} = ChatState();

    return (
      <>
        {messages &&
          messages.map((m, i) => (
            <div style={{ display: "flex" }} key={m._id}>
              <span
                style={{
                  backgroundColor: `${
                    m.sender._id === user._id ? "white" : "#D9FDD3"
                  }`,
                  marginLeft: user._id == m.sender._id ? "auto" : 50,
                  marginRight: user._id == m.sender._id ? 50 : "auto",
                  marginTop: isSameUser(messages, m, i, user._id) ? 3 : 10,
                  //marginTop: "8px",
                  borderRadius: "10px",
                  borderTopLeftRadius: `${
                    m.sender._id === user._id ? "10px" : 0
                  }`,
                  borderBottomRightRadius: `${
                    m.sender._id === user._id ? 0 : "10px"
                  }`,
                  padding: "5px 15px",
                  maxWidth: "75%",
                }}
              >
                {m.content}
              </span>
            </div>
          ))}
      </>
    );
}

export default SingleChats;