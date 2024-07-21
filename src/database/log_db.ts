import { promises as fs } from "fs"
import { Log } from "../models/log"

const ENCODING = "utf8"

const path = "./log.json"

async function fileExists(): Promise<boolean> {
    return fs.access(path)
        .then(() => true)
        .catch(() => false)
}

export async function appendLog(log: Log) {
    let logs: Log[] = []

    const exists = await fileExists()
    if (exists) {
        const existingData = await fs.readFile(path, ENCODING)
        logs = JSON.parse(existingData)
    }

    logs.push(log)

    await fs.writeFile(path, JSON.stringify(logs), ENCODING)
}

export async function readLogs(): Promise<Log[]> {
    const exists = await fileExists()
    if (!exists) {
        return []
    }

    const logsJson = await fs.readFile(path, ENCODING)
    return JSON.parse(logsJson) as Log[]
}
