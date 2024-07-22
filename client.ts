import net from "net";
const client = net.createConnection({ port: 7777 });

client.on("connect", () => {
    // User request

    const message = { action: "/user/id", body: { userId: "223092" } }
    // const message = { action: "/user/id", body: { userId: null } }
    // const message = { action: "/user/id", body: { } }
    // const message = { action: "/user/all" }

    // Post request

    // const message = { action:"/post/all", body: { from: "2024-07-01", to: "2024-07-15" } }
    // const message = { action:"/post/all" }
    // const message = { action:"/post/all", body: { from: "", to: "2024-07-15" } }
    // const message = { action:"/post/all", body: { from: "2024-07-01", to: null } }
    // const message = { action:"/post/all", body: {  } }
    // const message = { action:"/post/all", body: { from: "2024-00-01", to: "0000-07-15" } }
    // const message = { action:"/post/all", body: { from: "2024-07-01", to: "2024-12-15" } }
    // const message = { action : "/post/comments", body: { postId: "78752899", from: "2024-07-01", to: "1721174400" }}
    // const message = { action : "/post/comments", body: { postId: "78752899", from: "2024-07-01", to: "2024-07-21" }}
    // const message = { action : "/post/comments", body: { postId: null, from: null, to: null }}
    // const message = { action : "/post/comments", body: { }}
    // const message = { action: "/post/user/comments", body: { userId: "9393102" } }
    // const message = { action: "/post/user/comments", body: { userId: "error" } }
    // const message = { action: "/post/user/comments", body: { userId: "" } }
    // const message = { action: "/post/user/comments", body: {  } }

    // Log requests

    // const message = { action: "/log/all" }
  
    // Incorrect requests

    // const message = {  }
    // const message = { action: "" }
    // const message = { action: "/request" }

    const request = JSON.stringify(message);
    client.write(request);
});

client.on("data", (serverMessage: string) => {
    const mensaje = serverMessage.toString();
    console.log(mensaje);
});