export interface UserType {
    id: number;
    name: string;
    email: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    umur: number;
    phone: string;
    alamat: string;
    jk: string;
    role: string;
    bio: string;
    status: number;
    image: string;
    created_at: string;
    updated_at: string;
}

// Define the type for form data
export type ProfileFormData = {
    name: string;
    email: string;
    image: File | null;
    password: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    jk: string;
    phone: string;
    alamat: string;
};
