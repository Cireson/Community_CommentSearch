export class AnalystComment {
    WorkItemId: string;
    Comment: string;
    EnteredBy: string;
    IsPrivate: boolean;
    EnteredDate: Date;

    constructor(workItemId: string, comment: string, enteredBy: string, enteredDate: Date, isPrivate?: boolean) {
        this.WorkItemId = workItemId;
        this.Comment = comment;
        this.EnteredBy = enteredBy;
        this.EnteredDate = enteredDate;
        this.IsPrivate = isPrivate || false;
    }
}

export class EndUserComment {
    WorkItemId: string;
    Comment: string;
    EnteredBy: string;
    EnteredDate: Date;

    constructor(workItemId: string, comment: string, enteredBy: string, enteredDate: Date) {
        this.WorkItemId = workItemId;
        this.Comment = comment;
        this.EnteredBy = enteredBy;
        this.EnteredDate = enteredDate;
    }
}
