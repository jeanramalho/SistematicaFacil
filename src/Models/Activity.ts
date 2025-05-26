export interface Activity {
    id: string;
    studentId?: string;       // opcional
    userId: string;
    typeId: string;
    subject: string;
    dueDate: number;          // timestamp
    reminderDaysBefore: number;
    reminderTime: string;     // HH:mm
    needsPurchase: boolean;
    purchaseList?: string;
  }