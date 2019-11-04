enum Status{onLine, offLine, Repair};

export class Train {
    creator: string;
    number: number;
    status: Status;
}