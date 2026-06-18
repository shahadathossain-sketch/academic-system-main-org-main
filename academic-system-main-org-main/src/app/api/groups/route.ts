import { LocalGroupStudentService } from "@/src/services/local-group-student-service"
import { NextResponse } from "next/server"

export async function GET() {
    const service = new LocalGroupStudentService()
    const groups = await service.getGroups()
    return NextResponse.json(groups)
}
