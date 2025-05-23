export declare const authService: {
    login({ email, password }: {
        email: string;
        password: string;
    }): Promise<{
        token: string;
        user: {
            id: string;
            name: string;
            email: string;
            phone: string;
            role: import(".prisma/client").$Enums.UserRole;
            parent: {
                id: string;
            } | null;
        };
    }>;
};
