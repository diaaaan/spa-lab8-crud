enum Status{onLine, offLine, Repair};

export class Train {
    id: number;
    creator: string;
    number: number;
    status: Status;
    editing: boolean;
    traintype: any;
}