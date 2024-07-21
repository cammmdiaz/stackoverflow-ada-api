import net from "net";
import { router } from "./src/routers/app";
import { Response } from "./src/utils/type";

const port: number = 7777

const server = net.createServer();

server.on("connection", (socket) => {
    socket.on("data", async (message) => {
        const response: Response = await router(message.toString());
        socket.write(JSON.stringify(response))
    })
});

server.listen(port, () =>
    console.log("Listening in port: " + port)
);