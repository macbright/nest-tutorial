

export interface Data {
    report: {
        id: string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[]
}

export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"

}


export const data: Data = {
    report: [
        {
            id: "uuid",
            source: "salary",
            amount: 8500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid2",
            source: "youtube",
            amount: 1500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
        {
            id: "uuid3",
            source: "freelense",
            amount: 88900,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: "uuid4",
            source: "flex",
            amount: 8500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
    ]
}

data.report.push({
    id: "uuid5",
    source: "salary",
    amount: 8500,
    created_at: new Date(),
    updated_at: new Date(),
    type: ReportType.INCOME
})