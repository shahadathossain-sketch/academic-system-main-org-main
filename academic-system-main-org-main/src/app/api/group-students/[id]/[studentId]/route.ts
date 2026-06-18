import { LocalGroupStudentService } from "@/src/services/local-group-student-service"
import { NextRequest, NextResponse } from "next/server"

type Params = { params: Promise<{ id: string; studentId: string }> }

export async function DELETE(_request: NextRequest, { params }: Params) {
    const { studentId } = await params
    const service = new LocalGroupStudentService()
    await service.delete(studentId)
    return NextResponse.json({ success: true })
}
