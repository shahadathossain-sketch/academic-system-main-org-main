import { readFile, writeFile } from "fs/promises"
import path from "path"
import { IGroupStudent } from "@/src/models/group-student-model"
import { IGroup } from "@/src/models/group-model"

const dataFilePath = path.join(process.cwd(), "src/data/group-students.json")

async function readStudents(): Promise<IGroupStudent[]> {
    const raw = await readFile(dataFilePath, "utf-8")
    return JSON.parse(raw) as IGroupStudent[]
}

async function writeStudents(students: IGroupStudent[]): Promise<void> {
    await writeFile(dataFilePath, `${JSON.stringify(students, null, 2)}\n`, "utf-8")
}

export class LocalGroupStudentService {
    async getGroups(): Promise<IGroup[]> {
        const students = await readStudents()
        return Array.from(new Set(students.map((student) => student.groupId.trim())))
            .filter(Boolean)
            .sort()
            .map((groupId) => ({
                id: groupId,
                name: `Group ${groupId}`,
            }))
    }

    async getByGroup(groupId: string): Promise<IGroupStudent[]> {
        const students = await readStudents()
        return students.filter((student) => student.groupId.trim() === groupId.trim())
    }

    async delete(studentId: string): Promise<void> {
        const students = await readStudents()
        const nextStudents = students.filter((student) => student.id !== studentId)
        await writeStudents(nextStudents)
    }
}
