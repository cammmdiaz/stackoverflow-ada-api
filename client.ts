import net from "net";
const client = net.createConnection({ port: 7777 });

client.on("connect", () => {

  // User request

  const mensaje = { action: "/user/id", body: { userId: "223092" } }
  // const mensaje = { action: "/user/id", body: { userId: null } }
  // const mensaje = { action: "/user/id", body: { } }
  // const mensaje = { action: "/user/all" }


  // Post request

  // const mensaje = { action:"/post/all" }
  // const mensaje = { action:"/post/all", body: { from: "2024-07-01", to: "2024-07-15" } }
  // const mensaje = { action:"/post/all", body: { from: "", to: "2024-07-15" } }
  // const mensaje = { action:"/post/all", body: { from: "2024-07-01", to: null } }
  // const mensaje = { action:"/post/all", body: {  } }
  // const mensaje = { action:"/post/all", body: { from: "2024-00-01", to: "0000-07-15" } }
  // const mensaje = { action : "/post/comments", body: { postId: "78752899", from: "2024-07-01", to: "1721174400" }}
  // const mensaje = { action : "/post/comments", body: { postId: "78752899", from: "2024-07-01", to: "2024-07-21" }}
  // const mensaje = { action : "/post/comments", body: { postId: null, from: null, to: null }}
  // const mensaje = { action : "/post/comments", body: { }}
  // const mensaje = { action: "/post/user/comments", body: { userId: "9393102" } }
  // const mensaje = { action: "/post/user/comments", body: { userId: "error" } }
  // const mensaje = { action: "/post/user/comments", body: { userId: "" } }
  // const mensaje = { action: "/post/user/comments", body: {  } }

  
  // Log requests

  // const mensaje = { action: "/log/all" }

  
  // Incorrect requests

  // const mensaje = {  }
  // const mensaje = { action: "" }
  // const mensaje = { action: "/request" }

  const message = JSON.stringify(mensaje);
  client.write(message);
});

client.on("data", (serverMessage: string) => {
  const mensaje = serverMessage.toString();
  console.log(mensaje);
});