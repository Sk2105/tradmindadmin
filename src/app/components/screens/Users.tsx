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
        <div className='container mx-auto p-4'>
            <div className="flex justify-between items-center w-full p-2">
                <h1 className='text-2xl w-fit h-fit'>Users</h1>
                <SearchBar onSearch={handleSearch} title='Enter User Email...' />
            </div>
            <div className='flex flex-col space-y-4 justify-center'>
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