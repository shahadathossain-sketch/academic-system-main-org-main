import { connectMongoose } from "@/src/utils/mongoose-client"
import { GroupStudent } from "@/src/models/group-student-model"
import { CertType } from "@/src/models/cert-type-model"
import { NextResponse } from "next/server"

export async function GET() {
    await connectMongoose()

    await GroupStudent.deleteMany({})
    await CertType.deleteMany({})

    await GroupStudent.insertMany([
        { firstName: "Alice", lastName: "Johnson", groupId: "A" },
        { firstName: "Bob", lastName: "Smith", groupId: "A" },
        { firstName: "Carol", lastName: "Williams", groupId: "A" },
        { firstName: "David", lastName: "Brown", groupId: "A" },
        { firstName: "Emma", lastName: "Jones", groupId: "B" },
        { firstName: "Frank", lastName: "Davis", groupId: "B" },
        { firstName: "Grace", lastName: "Miller", groupId: "B" },
        { firstName: "Henry", lastName: "Wilson", groupId: "C" },
        { firstName: "Isla", lastName: "Moore", groupId: "C" },
        { firstName: "Jack", lastName: "Taylor", groupId: "C" },
    ])

    await CertType.insertMany([
        { title: "Study Certificate" },
        { title: "Academic Leave" },
    ])

    return NextResponse.json({
        message: "Seeded: 10 students and 2 cert types",
    })
}
