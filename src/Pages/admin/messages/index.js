import React, { useEffect, useState } from "react";
import {
  AdminNav,
  HomePageToggle,
  MessageCard,
  Sidebar,
  SidebarToggle,
} from "../../../Components";

export const Messages = () => {
  const [Messages, setMessages] = useState([]);
  const [EmptyState, setEmptyState] = React.useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(
        `https://just-original.herokuapp.com/api/v1/messages`
      );
      const data = await response.json();
      const item = data.data;
      if (item) {
        const lists = Object.values(item);
        setMessages(lists);
      }
      if (!item) {
        setEmptyState("No Messages Found.");
      }
    };
    fetchMessages();
  }, []);

  return (
    <>
      <Sidebar />
      <AdminNav />
      
      <div className="px-4 page-container">
        <h4 className="mt-5">
          <b>Messages</b>
        </h4>
        <div className={"my-5 table-responsive"}>
          <table className={"table text-center table-hover"}>
            <thead>
              <tr
                className={"grey200"}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                }}
              >
                <th>
                  <input type="checkbox" />
                </th>
                <th></th>
                <th className={"text-left"}></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <MessageCard Messages={Messages} setMessages={setMessages} />
              <div className="pt-5">{EmptyState}</div>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
