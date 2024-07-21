import { appendLog, readLogs } from "../database/log_db";
import { Log } from "./log";

class LogModel {
    async save(request: Log, response: Log) {
        appendLog(request)
        appendLog(response)
    }

    async getAll(): Promise<Log[]> {
        return readLogs()
    }
}

export const logModel = new LogModel()