import net from "net";
import { router } from "./src/routers/app";
import { Response } from "./src/utils/type";

const port: number = 3000

const server = net.createServer();

server.on("connection", (socket) => {
    socket.on("data", async (message) => {
        const data: string = JSON.stringify(message)
        const response: Response = await router(data);
        socket.write(JSON.stringify(response))
    })
});

server.listen(port, () =>
    console.log("Listening in port: " + port)
);