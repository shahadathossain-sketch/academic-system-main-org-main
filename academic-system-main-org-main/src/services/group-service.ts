import { IGroup } from "@/src/models/group-model"

export class GroupService {
    async getAll(): Promise<IGroup[]> {
        return ["A", "B", "C"].map((value) => ({
            id: value,
            name: `Group ${value}`,
        }))
    }
}
