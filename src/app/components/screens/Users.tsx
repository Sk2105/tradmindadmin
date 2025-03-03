import useUsersStore from "@/lib/store/user"
import UserCard from "../ui/UserCard"

export default function Users() {

    const users = useUsersStore((state) => state.users)
    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-2xl font-semibold my-4'>Users</h1>
            <div className='flex flex-col space-y-4 justify-center'>
                {
                    users.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))
                }
            </div>
        </div>

    )
}