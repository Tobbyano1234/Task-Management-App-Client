export { }

declare global {
    interface ITask {
        userID?: string;
        title: string;
        description: string;
        dueDate: string;
        status?: string;
        notifications?: { date: Date, time: string, message: string }[];
        createdAt?: Date;
        updatedAt?: Date;
        __v?: number;
        _id?: string;
    }

    interface PasswordDTO {
        email?: string;
        newPassword: string;
        confirmPassword: string;
        otp: string;
    }

    interface IUser {
        _id: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        email: string;
        avatar: string;
    }

    interface IAdmin {
        email: string;
        id: string;
        name: string;
        phoneNumber: string;
    }

    interface SignUpDTO {
        firstName: string,
        lastName: string,
        phoneNumber: string,
        email: string,
        password: string,
        confirmPassword: string
    }

    interface LoginDTO {
        email: string,
        password: string
    }


    // interface IFormValues {
    //     [inputID: string]: string;
    // }
}