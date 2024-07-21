import { appendLog, readLogs } from "../database/log_db";
import { Log } from "./log";

class LogModel {
    async save(request: Log, response: Log) {
        await appendLog(request)
        await appendLog(response)
    }

    async getAll(): Promise<Log[]> {
        return readLogs()
    }
}

export const logModel = new LogModel()