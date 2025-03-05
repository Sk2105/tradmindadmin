'use client'

import useUsersStore from "@/lib/store/user"
import UserCard from "../ui/UserCard"
import { useState } from "react";
import SearchBar from "../ui/SearchBar";

export default function Users() {

    const users = useUsersStore((state) => state.users)

    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }
    return (
        <div className='container mx-auto p-2'>
            <div className="grid grid-cols-1 items-center md:grid-cols-2 w-full p-1">
                <h1 className='text-2xl w-fit h-fit'>Users</h1>
                <SearchBar onSearch={handleSearch} title='Enter User Email...' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    users.map((user) =>{
                        if (!user.email.toLowerCase().includes(searchTerm.toLowerCase())) return null;
                        else return (
                            <UserCard key={user.id} user={user} />
                        )
                    })
                }
            </div>
        </div>

    )
}